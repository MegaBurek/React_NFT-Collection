import { useEffect, useState } from 'react'
import axios from 'axios'

//Custom components
import { NFT } from "Models/NFT";

export default function useNFTLoader(skip: number){
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [NFTs, setNFTs] = useState<NFT[] | []>([])
    const [hasMore, setHasMore] = useState(false)

    useEffect(() => {
        setLoading(true)
        setError(false)
        let cancel: any;
        axios({
            method: 'GET',
            url: 'https://test-api.solsea.io/nft-listed/',
            params: { $limit: 20, $skip: skip },
            cancelToken: new axios.CancelToken(c => cancel = c)
        }).then(res => {
            setNFTs(prevNFTs => {
                return [...prevNFTs, ...res.data.data]
            })
            setHasMore(res.data.data.length > 0)
            setLoading(false)
        }).catch(e => {
            if (axios.isCancel(e)) return
            setError(true)
        })
        return () => cancel()
    }, [skip])

    return { loading, error, NFTs, hasMore }
}
