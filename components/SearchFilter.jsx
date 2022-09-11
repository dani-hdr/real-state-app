

import React from "react";
import SearchInput from "./UI/SearchInput";
import SelectInput from "./UI/SelectInput";
import Button from './UI/Button';
import { useDispatch , useSelector } from "react-redux";

import { setSearch, setFor, setType , setMinPrice,setMaxPrice,setArea } from "../redux/filterSlice";


const SearchFilter = () => {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.filter.search);
  const forWhat = useSelector((state) => state.filter.for); //for sale or for rent
  const type = useSelector((state) => state.filter.type);
  const minPrice = useSelector((state) => state.filter.minPrice);
  const maxPrice = useSelector((state) => state.filter.maxPrice);
  const area = useSelector((state) => state.filter.area);

  const clearSearch = ()=>{
    dispatch(setSearch(''))
    dispatch(setFor(''))
    dispatch(setType(''))
    dispatch(setMinPrice(''))
    dispatch(setMaxPrice(''))
    dispatch(setArea(''))
  }
  return (
      <div className="flex justify-start gap-2 mb-10">
        <SearchInput
          placeholder="search by city"
          value={search}
          onChange={(e) => dispatch(setSearch(e.target.value))}
        />
        <SelectInput value={forWhat}  onChange={(e) => dispatch(setFor(e.target.value))}>
          <option selected value="">
            For Sale/Rent
          </option>
          <option value="sale">For Sale</option>
          <option value="rent">For Rent</option>
        </SelectInput>
        <SelectInput value={type} onChange={(e) => dispatch(setType(e.target.value))}>
          <option selected value="">Type</option>
          <option value="house">House</option>
          <option value="apartment">Apartment</option>
        </SelectInput>
        <SelectInput value={minPrice} onChange={(e) => dispatch(setMinPrice(e.target.value))}>
          <option value="">
              Min Price
          </option>
          <option value="10000">
            $10k
          </option>
          <option value="20000">$20k</option>
          <option value="50000">$50k</option>
          <option value="100000">$100k</option>
          <option value="300000">$300k</option>
          <option value="600000">$600k</option>
          <option value="900000">$900k</option>
          <option value="1000000">$1m</option>
        </SelectInput>
        <SelectInput value={maxPrice}  onChange={(e) => dispatch(setMaxPrice(e.target.value))}>
          <option selected value=''>
              Max Price
          </option>
          <option value="10000">
            $10k
          </option>
          <option value="20000">$20k</option>
          <option value="50000">$50k</option>
          <option value="100000">$100k</option>
          <option value="300000">$300k</option>
          <option value="600000">$600k</option>
          <option value="900000">$900k</option>
          <option value="1000000">$1m</option>
        </SelectInput>
        <SelectInput value={area} onChange={e=> dispatch(setArea(e.target.value))}>
          <option selected value="">
            Min Area
          </option>
          <option value="50">50m</option>
          <option value="70">70m</option>
          <option value="100">80m</option>
          <option value="150">150m</option>
          <option value="200">200m</option>
          <option value="300">300m</option>
          <option value="400">400m</option>
          <option value="500">500m</option>
          <option value="700">700m</option>
          <option value="900">900m</option>
        </SelectInput>
        <Button onclick={clearSearch} color='yellow' >Clear Search</Button>
      </div>
  );
};

export default SearchFilter;
