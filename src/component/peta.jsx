import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

function Peta() {
    return (
        <div style={{ position: 'relative', height: '100vh' }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', height: '100%' }}>
                <div style={{ width: '1800px', overflow: 'hidden', position: 'absolute', top: '-800px', left: '278px', zIndex: 1 }}>
                    <div style={{ padding: '10px' }}>
                        <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} style={{ height: '700px', width: '100%' }}>
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
                </div>
                <div style={{ position: 'relative', zIndex: 0 }}>
                    {/* Konten lain di sini */}
                </div>
            </div>
        </div>
    );
}

export default Peta;
