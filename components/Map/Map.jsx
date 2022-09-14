
import "leaflet/dist/leaflet.css";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";

import * as L from "leaflet";
import { formatter } from '../../utils/formatter';
import { useSelector } from "react-redux";



const Map = ({items , item, zoom , center}) => {
  const isMarkerHoverd = useSelector(state=>state.map.isMarkerHoverd)
  const markerId = useSelector(state=>state.map.markerId)
  const LeafIcon = L.Icon.extend({
    options: {}
  });

  const whiteIcon = new LeafIcon({
    iconUrl:
      "/icons/marker-white.png"
  })
  const blueIcon = new LeafIcon({
    iconUrl:
    "/icons/marker-blue.png"
  });

  return (
    <>
      <div className="w-full flex-grow lg:w-1/2 h-60 md:h-[69vh] z-30 sticky top-0 md:top-5  ">
        <MapContainer
          className="w-full h-full rounded-2xl"
          center={item ? item.position : center}
          zoom={zoom}
          scrollWheelZoom={true}
        >
          { item && 
            <Marker   icon={(isMarkerHoverd && item.id === markerId) ? blueIcon : whiteIcon} key={item.id} position={item.position}>
            <Popup>
              {formatter.format(item.price)} <br /> {item.address}
            </Popup>
          </Marker>
          }
          {items &&  items.map((item) => (
            <Marker    icon={(isMarkerHoverd && item.id === markerId) ? blueIcon : whiteIcon} key={item.id} position={item.position}>
              <Popup>
                {formatter.format(item.price)} <br /> {item.address}
              </Popup>
            </Marker>
          ))}

          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          
        </MapContainer>
      </div>
    </>
  );
};




export default Map;
