# domain-glossary-postcode

![test](https://github.com/ehmpathy/domain-glossary-postcode/workflows/test/badge.svg)
![publish](https://github.com/ehmpathy/domain-glossary-postcode/workflows/publish/badge.svg)

A glossary of intuitive, universally unambiguous postcode definitions and procedures.

# purpose

enable static-type checks for postcodes
- `Postcode` = `AsOfGlossary<string, 'Postcode'>`
- `isPostcode`

declare useful procedures to operate on postcodes
- e.g., `getGeocodeOfPostcode`


# install

```sh
npm install domain-glossary-postcode
```

# use

## Postcode

### declare that a given variable is a postcode

```ts
const postcode: Postcode;
```


### assure that a given string is a postcode

```ts
const postcode: Postcode = isPostcode.assure('33127');
```


### get the geocode of a postcode

```ts
const centroid: Geocode = getGeocodeOfPostcode('33127')
```

