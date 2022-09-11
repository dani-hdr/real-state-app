
import axios from "./axios";

const getAll = async () => {
  return await axios.get("/estate");
};

const getById = async (id)=>{
  return await axios.get(`/estate/${id}`)
}

const add = async (item)=>{
  return await axios.post("/estate",item)
}


export const estateService = {getAll , getById , add};
