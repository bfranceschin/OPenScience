import React, { useState } from 'react'
import AccordionLayout from './AccordionLayout'

export default function Accordion() {
  const [activeIndices, setActiveIndices] = useState([false, false])
  console.log('activeIndices', activeIndices)

  return (
    <div 
      id="accordion-flush" 
      data-accordion="collapse" 
    >
        <AccordionLayout 
          title="Keywords" 
          body="Keyword1 Keyword2 Keyword3" 
          index={0}
          activeIndices={activeIndices}
          setActiveIndices={setActiveIndices} 
        />
        <AccordionLayout 
          title="Authors" 
          body="Author1 Author2 Author3"
          index={1}
          activeIndices={activeIndices}
          setActiveIndices={setActiveIndices} 
        />
    </div>
  )
}
