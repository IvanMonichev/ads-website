interface sellerType {
    fullname: string,
    rating: number
}

export interface addressType {
    city: string,
    street: string,
    building: string
}

interface realEstateFiltersType {
    type: string,
    area: number,
    'rooms-count': number
}

interface carFiltersType {
    'production-year': number,
    transmission: string,
    'body-type': string
}

interface notebooksFiltersType {
    type: string,
    'ram-value': number | '-',
    'screen-size': number | '-',
    'cpu-type': string
}

interface cameraFiltersType {
    type: string,
    'matrix-resolution': number | '-',
    supporting: string
}

type filterType = realEstateFiltersType | carFiltersType | notebooksFiltersType | cameraFiltersType;

interface productType {
    name: string,
    price: number,
    coordinates: Array<number>,
    seller: sellerType,
    description: string,
    address: addressType,
    'publish-date': string,
    category: string,
    photos: Array<string>,
    filters: filterType
}

export default productType