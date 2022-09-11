
import EstateInfo from "../../components/Estate/EstateInfo";
import Container from "../../components/UI/Container";
import Map from "../../components/Map";
import { estateService } from "../../Services/estateService";
const detail = ({estate}) => {
  return (
    <Container>
      <div className="flex items-start justify-between gap-6 pt-10">
        <EstateInfo item={estate} />
        <Map item={estate} zoom={40} />
      </div>
    </Container>
  );
};

export const getStaticProps = async(context) =>{
  const id = context.params.id;
  const res = await estateService.getById(id)
  const estate = await res.data;
  return {
    props : {
      estate
    }
  }
}

export const getStaticPaths = async ()=>{
   const res = await estateService.getAll();
   const estates = await res.data;
   const paths = estates.map(estate=> ({ params : { id : estate.id.toString()}}))
    return {
      paths ,
      fallback : false
    }
}

export default detail;
