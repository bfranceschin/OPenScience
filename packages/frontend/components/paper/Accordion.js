import React, { useState } from 'react'
import AccordionLayout from './AccordionLayout'
import {useTokenId, useTokenUri, useTokenMetaData} from "../../hooks/nft"

export default function Accordion() {
  const [activeIndices, setActiveIndices] = useState([false, false])
  const tokenId = useTokenId();
  const metadata = useTokenMetaData(tokenId)
  // console.log('activeIndices', activeIndices)

  return (
    <div 
      id="accordion-flush" 
      data-accordion="collapse" 
    >
        <AccordionLayout 
          title="Keywords" 
          body={metadata ? metadata.properties.keywords : ""}
          index={0}
          activeIndices={activeIndices}
          setActiveIndices={setActiveIndices} 
        />
        <AccordionLayout 
          title="Authors" 
          body={metadata ? metadata.properties.author : ""}
          index={1}
          activeIndices={activeIndices}
          setActiveIndices={setActiveIndices} 
        />
    </div>
  )
}
