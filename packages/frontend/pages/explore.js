import { useEffect, useState } from "react";
import Navbar from '../components/Navbar';
import SearchBar from '../components/explore/SearchBar';
import CardPaper from '../components/explore/CardPaper';
import Link from "next/link";

import { useAllMetadata } from '../hooks/nft'

const processSearch = (searchField, searchFrase, allMetadata) => {
  if (!allMetadata) {
    return allMetadata
  }
  const search = allMetadata.filter(e => {
    if (searchField === '' || searchFrase === '') {
      return true
    }
    if (!e.metadata.properties[searchField]) {
      return false
    }
    const match = e.metadata.properties[searchField].toLowerCase().match(searchFrase.toLowerCase())
    return match !== null
  })
  return search
}

export default function ExploreComponent() {
  const [searchField, setSearchField] = useState('')
  const [searchFrase, setSearchFrase] = useState('')
  const allMetadata = useAllMetadata()
  const searchList = processSearch(searchField, searchFrase, allMetadata)
  return (
    <div>
      <Navbar/>
      <div className="flex flex-col w-full place-items-center p-6">
        <SearchBar setSearchField={setSearchField} setSearchFrase={setSearchFrase}/>
      </div>      
      <div className="flex flex-col w-full">
        <div className="p-4 place-items-center">  
          {/** width 96 is the same as CardPaper component */}
          <div className="flex flex-wrap flex-none flex-row justify-between gap-6 p-4">
            {
              searchList.map(e => {
                return (
                  <CardPaper tokenId={e.tokenId} metadata={e.metadata}/>
                )
              })
            }
            {/** Important: do not remove the next 3 rows! */}
            <div className="w-96 h-0" />
            <div className="w-96 h-0" />
            <div className="w-96 h-0" />
          </div> 
        </div>
      </div>
    </div>
  )
}