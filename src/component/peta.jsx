import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function Peta() {
  return (
    <div className="z-10 w-full h-full">
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        className="h-full w-full"
        // scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Peta;
