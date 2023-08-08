import { useMemo } from 'react';
import {
  GoogleMap,
  GoogleMapProps,
  Marker,
  MarkerClusterer,
  useLoadScript,
} from '@react-google-maps/api';
import { ILocation } from './interfaces';

const containerStyle = {
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const OPTIONS = {
  streetViewControl: false,
  mapTypeControl: false,
  fullscreenControl: false,
};

interface IProps extends GoogleMapProps {
  markers?: ILocation[];
  clusterer?: boolean;
}

export default function Map({
  markers,
  center,
  clusterer,
  zoom = 10,
  options = OPTIONS,
  children,
  ...rest
}: IProps) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_FIREBASE_KEY,
  });

  const _center = useMemo(() => center, [center]);

  if (!isLoaded) return <div>Loading map...</div>;

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={_center}
      zoom={zoom}
      options={options}
      {...rest}
    >
      {clusterer ? (
        <MarkerClusterer>
          {(clusterer) => (
            <>
              {markers.map((marker: ILocation, index) => (
                <Marker
                  key={`marker-${index}`}
                  position={marker}
                  clusterer={clusterer}
                />
              ))}
            </>
          )}
        </MarkerClusterer>
      ) : (
        markers.map((marker: ILocation, index) => (
          <Marker key={`marker-${index}`} position={marker} />
        ))
      )}
      {children}
    </GoogleMap>
  );
}
