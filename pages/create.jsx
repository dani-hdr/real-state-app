import Container from "./../components/UI/Container";
import Map from "../components/Map";
import EstateForm from "../components/Estate/EstateForm";
const create = () => {
  return (
    <Container>
      <div className="flex gap-4 justify-between">
        <div className="w-1/2">
        <EstateForm/>
        </div>
        <Map />
      </div>
    </Container>
  );
};

export default create;
