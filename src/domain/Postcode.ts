import { AsOfGlossary } from 'domain-glossaries';
import { withAssure } from 'type-fns';
import zipcodes from 'zipcodes';

export type Postcode = AsOfGlossary<string, 'postcode-fns.Postcode'>;

export const isPostcode = withAssure(
  (input: string): input is Postcode => !!zipcodes.lookup(input),
);
