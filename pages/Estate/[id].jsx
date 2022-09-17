import EstateInfo from "../../components/Estate/EstateInfo";
import Container from "../../components/UI/Container";
import Map from "../../components/Map";
import estateData from '../../data/estate.json'
import Head from "next/head";

const detailPage = ({estate}) => {
  return (
    <Container>
      <Head>
        <title> estate {estate.forWhat} in {estate.city}</title>
        <meta name="description" content={estate.description} />
      </Head>
      <div className="flex flex-col lg:flex-row items-center md:items-start justify-between gap-6 pt-10">
        <EstateInfo item={estate} />
        <Map item={estate} zoom={40} />
      </div>
    </Container>
  );
 
  
};

export const getStaticProps = async (context) => {
  const estateId = context.params.id;
  const estate = estateData.find(x=> x.id === +estateId);
  return {
    props: {
    estate,
    },
    revalidate: 60,
    notFound : !estate
  };
};

export const getStaticPaths = async () => {
 
  const paths = estateData.map((estate) => ({
    params: { id: estate.id.toString() },
  }));
  return {
    paths,
    fallback: 'blocking',
   
  
  };
};

export default detailPage;


