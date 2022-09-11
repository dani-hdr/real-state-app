const jsonData = require("../../../data/estate.json");
const fs = require('fs')
const path = require('path')
const { v4: uuidv4 } = require('uuid');

export default async function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(jsonData);
}

  if (req.method === "POST") {
    const body = req.body;
    const {  price,image,address, region, city,type,  rooms,area, bathrooms,forWhat , description } =
      body;
    if( !price || !image ||  !region || !city ||  !type ||  !rooms || !area || !forWhat ||  !address  || !bathrooms|| !description){
        res.status(400).json({message : "bad request"})
        return
    }
    const filepath = path.join(process.cwd(),'data', 'estate.json')

    const dataToAdd = {
      id : uuidv4(),
      price,
      image,
      region,
      city,
    
      type,
      rooms,
      area,
      forWhat,
      address,
      bathrooms,
      description,
      isLiked : false,
      isNew : true
    }
    try {
      
      jsonData.push(dataToAdd) 
      fs.writeFileSync(filepath, JSON.stringify(jsonData))
      res.status(201).json(dataToAdd);

    }catch(err){
        res.status(400).json({message : err.message})
    }
    
  }
}


