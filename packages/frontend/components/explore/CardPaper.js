

import Link from "next/link"

import {
  ipfsToHTTP,
  stringTrim
} from '../../utils'

const CardPaper = ({tokenId, metadata}) => {
  
  let imageUrl = metadata ? ipfsToHTTP(metadata.image) : null
  const href = `/nfts/${tokenId}`

  const CoverImage = () => 
    <figure className="max-h-sm h-full overflow-hidden">
      <img className="overflow-hidden" width="384px" height="100px" src={imageUrl}/>
    </figure>

  const Author = () => 
    <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
      <span className="text-gray-900">
        {metadata ? metadata.properties.author : ""}
      </span>
    </p>

  const Title = () => 
    <span className="inline-block mb-3 text-2xl font-bold leading-7">
      {metadata ? stringTrim(metadata.name, 50) : ""}
    </span>

  const Keywords = () => 
    <p className="mb-2 text-gray-700">
      {metadata ? metadata.properties.keywords : ""}
    </p>

  return ( 
    <Link href={href}>
      <div className="card w-96 h-[480px]  bg-base-100 border border-black-100 shadow-md mb-5 transform transition duration-500 hover:scale-105">
        <CoverImage />
        <div className="card-body">
          <Author />
          <Title />
          <Keywords />
        </div>
      </div>
    </Link>
  )
}

export default CardPaper;