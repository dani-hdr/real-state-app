const data = require('../../../data/estate.json')  
export default function handler (req,res){
    if(req.method ==='GET'){
         const {estateId} = req.query;
       
         const estate = data.find(x=>x.id === +estateId);
         if(!estate)
          res.status(404).json({message : "estate not found"})
        res.status(200).json(estate)
    }
}