import API from "Lib/api";

export const NFTservice = {
    getNFTById,
    searchNFT
}

const NFT_Url = `https://test-api.solsea.io/fetch-nft/`;
const NFT_Search_Url = `https://test-api.solsea.io/nft-listed/`;

const apiInstance = new API();

function searchNFT(query: string) {
    return apiInstance.Get(NFT_Search_Url + `?Title=${query}`).then((resp: any) => {
        if(resp){
            const data = resp.data;
            return Promise.resolve(data);
        }else{
            return Promise.reject("Error in fetching data")
        }
    }).catch((err: any) => {
        console.error(err);
    })
}

function getNFTById(id: string): Promise<any> {
  return apiInstance.Get(NFT_Url + id).then((resp: any) => {
      if(resp){
          const data = resp.data;
          return Promise.resolve(data);
      }else{
          return Promise.reject("Error in fetching data")
      }
  }).catch((err: any) => {
      console.error(err);
  })
}
