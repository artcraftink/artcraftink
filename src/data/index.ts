/**
 * Site metadata configured in gatsby-config.js.
 */
export interface SiteMetadata {
  title: string;
  description: string;
  addressLine1: string;
  addressLine2: string;
  map: {
    apiKey: string;
    center: {
      lat: number;
      lng: number;
    };
    zoom: number;
  };
  phone: string;
  email: string;
  instagram: string;
  facebook: string;
  artistName: string;
  artistBio: string;
}
