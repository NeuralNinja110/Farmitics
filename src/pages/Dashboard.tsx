import React from 'react';
import { useTranslation } from 'react-i18next';
import { Cloud, Droplet, Thermometer, Wind, Waves, FlaskRound as Flask, Gauge, Mountain } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icon in react-leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const waterBuoys = [
  {
    id: 1,
    name: 'Lake Sensor',
    location: [12.9716, 77.5946], // Bangalore coordinates
    distance: '500m North',
    status: 'active',
    readings: {
      ph: 7.2,
      temperature: 18,
      tds: 245,
      turbidity: 2.8,
    },
  },
  {
    id: 2,
    name: 'River Sensor',
    location: [12.9796, 77.5906], // Slightly offset for visibility
    distance: '1.2km East',
    status: 'active',
    readings: {
      ph: 6.8,
      temperature: 16,
      tds: 312,
      turbidity: 4.2,
    },
  },
];

const soilProfiles = [
  {
    id: 1,
    name: 'Field Section A',
    type: 'Clay Loam',
    status: 'Main Field',
    readings: {
      ph: 6.5,
      organicMatter: 3.8,
      nitrogen: 1.2,
      phosphorus: 0.8,
    },
  },
  {
    id: 2,
    name: 'Field Section B',
    type: 'Sandy Loam',
    status: 'New Plot',
    readings: {
      ph: 7.1,
      organicMatter: 2.9,
      nitrogen: 0.9,
      phosphorus: 0.6,
    },
  },
];

export function Dashboard() {
  const { t } = useTranslation();

  return (
    <div className="space-y-6">
      {/* Greeting Section */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          {t('welcome')}, Farmer Sidzan!
        </h2>
        <p className="mt-1 text-gray-500 dark:text-gray-400">
          Here's your farming overview for today
        </p>
      </div>

      {/* Weather Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
          <div className="flex items-center">
            <Cloud className="h-8 w-8 text-blue-500" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Weather</p>
              <p className="text-lg font-semibold text-gray-900 dark:text-white">Partly Cloudy</p>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
          <div className="flex items-center">
            <Thermometer className="h-8 w-8 text-red-500" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{t('temperature')}</p>
              <p className="text-lg font-semibold text-gray-900 dark:text-white">24°C</p>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
          <div className="flex items-center">
            <Droplet className="h-8 w-8 text-blue-500" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Humidity</p>
              <p className="text-lg font-semibold text-gray-900 dark:text-white">65%</p>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
          <div className="flex items-center">
            <Wind className="h-8 w-8 text-gray-500" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Wind Speed</p>
              <p className="text-lg font-semibold text-gray-900 dark:text-white">12 km/h</p>
            </div>
          </div>
        </div>
      </div>

      {/* Water Quality Data */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
        <div className="flex items-center mb-4">
          <Waves className="h-6 w-6 text-blue-500" />
          <h3 className="ml-2 text-lg font-semibold text-gray-900 dark:text-white">
            {t('waterQuality')}
          </h3>
        </div>

        {/* Map */}
        <div className="mb-6 h-[400px] rounded-lg overflow-hidden">
          <MapContainer
            center={[12.9716, 77.5946]}
            zoom={14}
            style={{ height: '100%', width: '100%' }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {waterBuoys.map((buoy) => (
              <Marker key={buoy.id} position={buoy.location as [number, number]}>
                <Popup>
                  <div className="p-2">
                    <h4 className="font-semibold">{buoy.name}</h4>
                    <p className="text-sm text-gray-600">{buoy.distance}</p>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {waterBuoys.map((buoy) => (
            <div key={buoy.id} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
              <div className="flex justify-between items-center mb-4">
                <h4 className="font-medium text-gray-900 dark:text-white">
                  {buoy.name} ({buoy.distance})
                </h4>
                <span className="px-2 py-1 text-xs font-medium text-green-700 bg-green-100 rounded-full dark:bg-green-800 dark:text-green-100">
                  Active
                </span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="flex items-center">
                    <Flask className="h-5 w-5 text-blue-500" />
                    <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">{t('pH')}</span>
                  </div>
                  <p className="mt-1 text-lg font-semibold text-gray-900 dark:text-white">
                    {buoy.readings.ph}
                  </p>
                </div>
                <div>
                  <div className="flex items-center">
                    <Thermometer className="h-5 w-5 text-red-500" />
                    <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">{t('temperature')}</span>
                  </div>
                  <p className="mt-1 text-lg font-semibold text-gray-900 dark:text-white">
                    {buoy.readings.temperature}°C
                  </p>
                </div>
                <div>
                  <div className="flex items-center">
                    <Gauge className="h-5 w-5 text-purple-500" />
                    <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">{t('tds')}</span>
                  </div>
                  <p className="mt-1 text-lg font-semibold text-gray-900 dark:text-white">
                    {buoy.readings.tds} ppm
                  </p>
                </div>
                <div>
                  <div className="flex items-center">
                    <Droplet className="h-5 w-5 text-gray-500" />
                    <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">{t('turbidity')}</span>
                  </div>
                  <p className="mt-1 text-lg font-semibold text-gray-900 dark:text-white">
                    {buoy.readings.turbidity} NTU
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Soil Profile */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
        <div className="flex items-center mb-4">
          <Mountain className="h-6 w-6 text-amber-700" />
          <h3 className="ml-2 text-lg font-semibold text-gray-900 dark:text-white">
            Area Soil Profile
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {soilProfiles.map((profile) => (
            <div key={profile.id} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
              <div className="flex justify-between items-center mb-4">
                <h4 className="font-medium text-gray-900 dark:text-white">{profile.name}</h4>
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                  profile.status === 'Main Field'
                    ? 'text-blue-700 bg-blue-100 dark:bg-blue-800 dark:text-blue-100'
                    : 'text-yellow-700 bg-yellow-100 dark:bg-yellow-800 dark:text-yellow-100'
                }`}>
                  {profile.status}
                </span>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Soil Type</p>
                  <p className="text-lg font-semibold text-gray-900 dark:text-white">{profile.type}</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{t('pH')}</p>
                    <p className="text-lg font-semibold text-gray-900 dark:text-white">
                      {profile.readings.ph}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Organic Matter</p>
                    <p className="text-lg font-semibold text-gray-900 dark:text-white">
                      {profile.readings.organicMatter}%
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Nitrogen (N)</p>
                    <p className="text-lg font-semibold text-gray-900 dark:text-white">
                      {profile.readings.nitrogen}%
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Phosphorus (P)</p>
                    <p className="text-lg font-semibold text-gray-900 dark:text-white">
                      {profile.readings.phosphorus}%
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* AI Recommendations */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          AI Recommendations
        </h3>
        <div className="space-y-4">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-green-100 dark:bg-green-800">
                <span className="text-sm font-medium leading-none text-green-600 dark:text-green-200">1</span>
              </span>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                Optimal time for wheat irrigation
              </p>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                Based on soil moisture levels and weather forecast
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-800">
                <span className="text-sm font-medium leading-none text-blue-600 dark:text-blue-200">2</span>
              </span>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                Market price alert
              </p>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                Wheat prices expected to rise by 5% next week
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}