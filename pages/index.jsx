import SearchFilter from "../components/SearchFilter";
import EstateList from "../components/Estate/EstateList";
import Map from "../components/Map";
import Container from "../components/UI/Container";
import { useSelector } from "react-redux";
import Head from "next/head";
import estateData from '../data/estate.json'
import { useState ,useEffect } from "react";

export default function Home({ estates }) {
   
  const [filterdEstates , setFilterdEstates] = useState(estates)
  const search = useSelector((state) => state.filter.search);
  const forWhat = useSelector((state) => state.filter.for); //for sale or for rent
  const type = useSelector((state) => state.filter.type);
  const minPrice = useSelector((state) => state.filter.minPrice);
  const maxPrice = useSelector((state) => state.filter.maxPrice);
  const area = useSelector((state) => state.filter.area);
  
  useEffect(()=>{
    
    setFilterdEstates(estates.filter((data) => {
      if (search !== "") {
        const filterData =
          data.city.toLowerCase().includes(search.toLowerCase()) ||
          data.region.toLowerCase().includes(search.toLowerCase());
        return filterData;
      }
      return data;
    })
    .filter((data) => {
      if (forWhat !== "") {
        if (forWhat == "sale") return data.forWhat === "For Sale";
        if (forWhat == "rent") return data.forWhat === "For Rent";
      }

      return data;
    })
    .filter((data) => {
      if (type !== "") {
        return data.type.toLowerCase() === type.toLowerCase();
      }
      return data;
    })
    .filter((data) => {
      if (minPrice !== "") {
        return data.price > minPrice;
      }
      return data;
    })
    .filter((data) => {
      if (maxPrice !== "") {
        return data.price < maxPrice;
      }
      return data;
    })
    .filter((data) => {
      if (area !== "") {
        return data.area >= area;
      }
      return data;
    }) )
  },[search,forWhat,type,minPrice,maxPrice,area])

  return (
    <main>
      <Head>
        <title>Home page</title>
        <meta name="description" content="Free Real Estate platform"/>

      </Head>
      <Container>
        <SearchFilter />
        <div className="flex flex-col md:flex-row-reverse gap-7 justify-center items-center md:items-start">
          { filterdEstates.length > 0 &&  (<Map zoom={4} center={[37.09024, -95.712891]} items={filterdEstates} />)}
          <EstateList items={filterdEstates} />
        </div>
      </Container>
    </main>
  );
}

export const getStaticProps = async () => {
  
  return {
    props: {
      estates : estateData,
    },
    revalidate : 60
  };
};
