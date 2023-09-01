
import Image from 'next/image'
import { CarCard, CustomFilter, Hero, SearBar } from '.'
import { fetchCars } from '@/utils';
export default async function Home() {
  const allCars=await fetchCars();
  
const isDataEmpty=!Array.isArray(allCars)||allCars.length<1 ||!allCars;
if(!isDataEmpty){
  console.log('checking...',allCars)
}
  return (
    <main className="overflow-hidden">
<Hero/>
<div className="mt-12 padding-x padding-y max-width" id='discover'>
<div className="home__text-container">
  <h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
  <p>Explore cars you might need</p>
</div>
<div className="home__filters">
  <SearBar/>
  <div className="home__filter-container">
<CustomFilter/>
  </div>
</div>
{!isDataEmpty ?(
  <section>
<div className="home__cars-wrapper">
  {allCars?.map((car)=>(
<CarCard/>
  ))}
</div>
  </section>
):(
  <div className='home__error-container'>
    <h2 className='text-black text-xl'>Oops no results</h2>
    <p>{allCars?.message}</p>
  </div>
)}
</div>
    </main>
  )
}
