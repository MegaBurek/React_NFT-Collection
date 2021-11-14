export interface NFT {
    _id: string;
    listed: boolean;
    liked: number;
    reported: number;
    isPrivateSale: false;
    Items: any[];
    Creators: ICreator[];
    verified: boolean;
    tags: string[];
    nsfw: boolean;
    escrowKey: string;
    sellerKey: string;
    Mint: string;
    status: string;
    price: number;
    currency: string;
    Description: string;
    Preview_URL: string;
    Title: string;
    Properties: INFTProperties;
    jsonUrl: string;
    Pubkey: string;
    __v: number;
    listedAt: string;
    createdAt: string;
    updatedAt: string;
    views: number;
    LicenseTitle: string;
    License_URL: string;
    nft_collection: NFT;
}

export interface ICreator {
    address: string;
    verified?: 1 | 0;
    share: number;
}

export interface INFTProperties {
    files: INFTPropertyFile[]
    category: string;
    creators: ICreator[];
    symbol: string;
    seller_fee_basis_points: number;
    attributes: INFTPropertyAttributes[];
}

export interface INFTPropertyAttributes {
    trait_type: string;
    value: string;
}

export interface INFTPropertyFile {
    uri: string;
    type: string;
}
