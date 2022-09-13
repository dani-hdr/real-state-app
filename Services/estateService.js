
import axios from "./axios";

const getAll = async () => {
  return await axios.get("/estate");
};

const getById = async (id)=>{
  return await axios.get(`/estate/${id}`)
}




export const estateService = {getAll , getById };
