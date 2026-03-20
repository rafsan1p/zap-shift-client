import React, { useRef } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useLoaderData } from 'react-router';

const Coverage = () => {
    const position = [23.6850, 90.3563];
    const serviceCenters = useLoaderData();
    const mapRef = useRef(null);

    const handleSearch = e => {
        e.preventDefault();
        const location = e.target.location.value;
        const district = serviceCenters.find(c => c.district.toLowerCase().includes(location.toLowerCase()));
        if (district) {
            mapRef.current.flyTo([district.latitude, district.longitude], 14);
        }
    };

    return (
        <div className="bg-[#eef2f2] min-h-screen px-4 sm:px-8 py-8">
            <div className="max-w-5xl mx-auto bg-white rounded-2xl p-6 sm:p-10 shadow-sm">
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#002021] mb-2">
                    We are available in 64 districts
                </h2>

                {/* Search */}
                <form onSubmit={handleSearch} className="flex items-center gap-3 mt-6 mb-8">
                    <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2 flex-1 max-w-sm">
                        <svg className="w-4 h-4 text-gray-400 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
                        </svg>
                        <input
                            type="search"
                            name="location"
                            placeholder="Search here"
                            className="bg-transparent outline-none text-sm w-full text-gray-600"
                        />
                    </div>
                    <button type="submit" className="bg-[#CAEB45] text-gray-900 font-semibold text-sm px-6 py-2 rounded-full hover:bg-[#b8d93a] transition">
                        Search
                    </button>
                </form>

                <div className="border-t border-gray-100 pt-6">
                    <h3 className="font-bold text-[#002021] text-lg mb-4">We deliver almost all over Bangladesh</h3>
                    <div className="rounded-xl overflow-hidden w-full h-87.5 sm:h-112.5">
                        <MapContainer
                            center={position}
                            zoom={7}
                            scrollWheelZoom={false}
                            className="h-full w-full"
                            ref={mapRef}
                        >
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            {serviceCenters.map((center, i) => (
                                <Marker key={i} position={[center.latitude, center.longitude]}>
                                    <Popup>
                                        <strong>{center.district}</strong><br />
                                        {center.covered_area.join(', ')}
                                    </Popup>
                                </Marker>
                            ))}
                        </MapContainer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Coverage;
