"use client";
import { useState } from "react";
import SearchManufacturer from "./SearchManufacturer";

const SearBar = () => {
   const [manufacturer,setManufacturer]= useState('')
    const handleSearch=()=>{

    }
  return (
    <form className="searchbar" onSubmit={handleSearch}>
        <div className="searchbar__items">
            <SearchManufacturer manufacturer={manufacturer} setManufacturer={setManufacturer}/>
        </div>
    </form>
  )
}

export default SearBar