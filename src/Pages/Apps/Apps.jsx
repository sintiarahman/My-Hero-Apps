import React, { useEffect, useState } from 'react';
import useApps from '../../Hooks/useApps';
import AppCard from '../../Components/AppCards/AppCard';
import AppNotFound from '../../Components/AppCards/AppNotFound';
import Spiner from '../../Components/Spiner';

const Apps = () => {
  const { apps,loading } = useApps()
  const [search, setSearch] = useState('')
  const [searchLoading, setSearchLoading] = useState(false)

  const handleSearch = (value) => {
    setSearch(value)
    setSearchLoading(true)
    setTimeout(() => {
      setSearchLoading(false)
    }, 400)

}

  const term = search.trim().toLowerCase()
  const searchProduct = term ? apps.filter(app => app.title.toLowerCase().trim().includes(term)) : apps
 
  return (
    <div className="bg-[#F5F5F5] p-1">
      <div className="max-w-11/12 mx-auto">
        <div className="text-center mt-10">
          <h2 className="text-[#001931] text-[48px] font-bold">
            Our All Applications
          </h2>
          <p className="text-[#627382] text-xl">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>

        <div className="mt-10 flex justify-between items-center flex-col md:flex-row">
          <h2 className="text-[#001931] text-[24px] font-bold">
            ({searchProduct.length}) Apps Found
          </h2>

          <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input type="search" className="grow"
              value={search}
              onChange={e=>handleSearch(e.target.value)}
              placeholder="Search" />
          </label>
        </div>

      {loading||searchLoading?(<Spiner/>): searchProduct.length>0?( <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 pb-12 pt-6">
          {searchProduct.map(card => (
            <AppCard key={card.id} card={card}></AppCard>
          ))}
        </div>) : (<AppNotFound />)}
      </div>
    </div>
  );
};

export default Apps;