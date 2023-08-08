import { useQuery, gql } from '@apollo/client';
import Map from '../../components/Map';
import { MARKERS } from './data';

export const GET_SERVER_STATUS = gql`
  query StatusServer {
    checkResult
  }
`;

const Main = () => {
  const { loading, error, data } = useQuery(GET_SERVER_STATUS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <div>
      <h3>Status server: {data.checkResult}</h3>
      <div style={{ width: '100%', height: 600 }}>
        <Map
          center={{
            lat: MARKERS[0].lat,
            lng: MARKERS[0].lng,
          }}
          markers={MARKERS}
        />
      </div>
    </div>
  );
};

export default Main;
