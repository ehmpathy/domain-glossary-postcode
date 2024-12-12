import { DomainLiteral } from 'domain-objects';

// todo: spinout into own glossary: domain-glossary-geocode

export interface Geocode {
  latitude: number;
  longitude: number;
}

export class Geocode extends DomainLiteral<Geocode> implements Geocode {}
