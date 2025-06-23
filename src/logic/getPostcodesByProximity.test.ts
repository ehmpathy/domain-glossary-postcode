import { given } from 'test-fns';

import { isPostcode } from '../domain/Postcode';
import { getPostcodesByProximity } from './getPostcodesByProximity';

describe('getPostcodesByProximity', () => {
  given('a centroid defined via postal', () => {
    const centroid = { postcode: isPostcode.assure('46032') };
    it('should get all postals within the proximity', () => {
      const postals = getPostcodesByProximity({
        to: centroid,
        radius: { miles: 10 },
      });
      expect(postals.length).toEqual(26);
    });
  });
});
