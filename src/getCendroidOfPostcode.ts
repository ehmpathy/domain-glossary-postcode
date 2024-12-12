import { UnexpectedCodePathError } from '@ehmpathy/error-fns';
import zipcodes from 'zipcodes';

import { Geocode } from './domain/Geocode';
import { Postcode } from './domain/Postcode';

export const getCentroidOfPostcode = (input: Postcode): Geocode => {
  // assume its a us postcode // todo: support others
  const found =
    zipcodes.lookup(input) ??
    UnexpectedCodePathError.throw('could not find info about this postcode', {
      input,
    });
  return new Geocode({
    latitude: found.latitude,
    longitude: found.longitude,
  });
};
