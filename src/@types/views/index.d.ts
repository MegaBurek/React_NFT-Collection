import { NFT } from "Models/NFT";

export interface INFTCard {
    data: NFT
}

export interface INFTSearch {
    searchValue?: string
    setSearchValue: (query: string) => void
}
