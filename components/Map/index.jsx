import dynamic from "next/dynamic";

const Map = ({items , item ,zoom , center}) => {
  const MapWithSsr = dynamic(() => import("./Map"), {
    ssr: false,
    loading: () => <p>Loading map...</p>,
  });
  return (
       <MapWithSsr items={items} center={center} item={item} zoom={zoom} /> 
  );
};

export default Map;
