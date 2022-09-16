import Container from "../../components/UI/Container";
import Map from "../../components/Map";
import EstateForm from "../../components/Estate/EstateForm";
const create = () => {
  return (
    <Container>
      <div className="flex flex-col lg:flex-row gap-4 items-center lg:items-start justify-center lg:justify-between">
        <div className="w-full lg:w-1/2">
        <EstateForm/>
        </div>
        <Map zoom={4} center={[37.09024, -95.712891]} />
      </div>
    </Container>
  );
};

export default create;
