// EXPORTS: IClient, MOCK_CLIENTS
export interface IClient {
  id: string
  name: string
  logoUrl: string
}

export const MOCK_CLIENTS: IClient[] = [
  { id: '1', name: 'AURA AERO', logoUrl: 'https://www.onshape.com/cdn-cgi/image/format=auto,quality=85/global-assets/customer-logos/aura-aero.svg' },
  { id: '2', name: 'GARMIN', logoUrl: 'https://www.onshape.com/cdn-cgi/image/format=auto,quality=85/global-assets/customer-logos/garmin.svg' },
  { id: '3', name: 'TREK', logoUrl: 'https://www.onshape.com/cdn-cgi/image/format=auto,quality=85/global-assets/customer-logos/trek.svg' },
  { id: '4', name: 'ocado', logoUrl: 'https://www.onshape.com/cdn-cgi/image/format=auto,quality=85/global-assets/customer-logos/ocado.svg' },
  { id: '5', name: 'formlabs', logoUrl: 'https://www.onshape.com/cdn-cgi/image/format=auto,quality=85/global-assets/customer-logos/formlabs.svg' },
  { id: '6', name: 'EXOTEC', logoUrl: 'https://www.onshape.com/cdn-cgi/image/format=auto,quality=85/global-assets/customer-logos/exotec.svg' },
  { id: '7', name: 'Garrett', logoUrl: 'https://www.onshape.com/cdn-cgi/image/format=auto,quality=85/global-assets/customer-logos/garrett.svg' },
  { id: '8', name: 'K2', logoUrl: 'https://www.onshape.com/cdn-cgi/image/format=auto,quality=85/global-assets/customer-logos/k2.svg' },
  { id: '9', name: 'BOA', logoUrl: 'https://www.onshape.com/cdn-cgi/image/format=auto,quality=85/global-assets/customer-logos/boa.svg' },
  { id: '10', name: 'dexcom', logoUrl: 'https://www.onshape.com/cdn-cgi/image/format=auto,quality=85/global-assets/customer-logos/dexcom.svg' },
]