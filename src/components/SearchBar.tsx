import { Search } from 'lucide-react';
import React from 'react'

export const SearchBar = () => {
  return (
    <div className='hidden md:flex items-center gap-2 rounded-md ring-1 ring-gray-200 px-2 py-1 shadow-md'>
      <Search size={16} className='text-gray-500'/>
      <input type="text" id='search' placeholder='Search...' className='text-sm outline-0'/>

    </div>
  )
}

export default SearchBar;