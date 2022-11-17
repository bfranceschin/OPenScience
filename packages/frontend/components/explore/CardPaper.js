

import {
  useTokenMetaData,
  useTokenImage
} from "../../hooks/nft"

import {
  ipfsToHTTP,
} from '../../utils'

const ImageIPFS = (imgUrl) => {
  return (
    <div></div>
  )
}

const CardPaper = ({tokenId, metadata}) => {
  let imageUrl = metadata ? ipfsToHTTP(metadata.image) : null
  const href = `/nfts/${tokenId}`
  return ( 
    <div className="card w-96 bg-base-100 shadow-xl mb-5">
      <div className="h-64 bg-base-300 place-content-center">
        <figure className="h-full overflow-hidden">
          <img width="384px" height="100px" src={imageUrl}/>
        </figure>
      </div>
      <div className="card-body">
        <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
          <a
            href={href}
            className="transition-colors duration-200 text-gray-900 hover:text-purple-700"
            aria-label="Category"
            title="traveling"
          >
            {metadata ? metadata.properties.author : ""}
          </a>
          {/* <span className="text-gray-600"> {props.date} </span> */}
        </p>
        <a
          href={href}
          aria-label="Category"
          title="Visit the East"
          className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-purple-700"
        >
          {metadata ? metadata.name : ""}
        </a>
        <p className="mb-2 text-gray-700">
          {metadata ? metadata.properties.keywords : ""}
        </p>
      </div>
    </div>
  )
}

export default CardPaper;