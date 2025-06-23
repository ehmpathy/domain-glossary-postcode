import { UnexpectedCodePathError } from '@ehmpathy/error-fns';
import { PickOne } from 'type-fns';
import zipcodes from 'zipcodes';

import { Postcode } from '../domain/Postcode';

const isZipcode = (value: any): value is zipcodes.ZipCode =>
  typeof value.zip === 'string';

export const getPostcodesByProximity = (input: {
  to: PickOne<{
    postcode: Postcode;
    coords: {
      latitude: number;
      longitude: number;
    };
  }>;
  radius: {
    miles: number;
  };
}): string[] => {
  // define the centroid via postcode
  const centroidAsPostcode =
    input.to.postcode ??
    zipcodes.lookupByCoords(input.to.coords.latitude, input.to.coords.longitude)
      ?.zip ??
    null;
  if (!centroidAsPostcode)
    throw new UnexpectedCodePathError('could not find centroid as postcode', {
      to: input.to,
    });

  // lookup the postcodes within that proxmity
  const postcodesAsEither = zipcodes.radius(
    centroidAsPostcode,
    input.radius.miles,
  );
  const postcodesAsStrings = postcodesAsEither.map((postcode) =>
    isZipcode(postcode) ? postcode.zip : postcode,
  );
  return postcodesAsStrings;
};
