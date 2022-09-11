import SearchFilter from "../components/SearchFilter";
import EstateList from "../components/Estate/EstateList";
import Map from "../components/Map";
import Container from "../components/UI/Container";
import { estateService } from "./../Services/estateService";
import { useSelector } from "react-redux";


export default function Home({ estates }) {
  
  const search = useSelector((state) => state.filter.search);
  const forWhat = useSelector((state) => state.filter.for); //for sale or for rent
  const type = useSelector((state) => state.filter.type);
  const minPrice = useSelector((state) => state.filter.minPrice);
  const maxPrice = useSelector((state) => state.filter.maxPrice);
  const area = useSelector((state) => state.filter.area);

  const filterEstates = () => {
    return estates
      .filter((data) => {
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
      });
  };
  return (
    <main>
      <Container>
        <SearchFilter />
        <div className="flex justify-between items-start">
          <EstateList items={filterEstates()} />
          <Map zoom={4} center={[37.09024, -95.712891]} items={filterEstates()} />
        </div>
      </Container>
    </main>
  );
}

export const getStaticProps = async () => {
  const res = await estateService.getAll();
  const estates = await res.data;
  return {
    props: {
      estates,
    },
     revalidate : 1000
  };
};
