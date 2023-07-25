import { Link } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';

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
      <Link to="/planning/another-page">Another page</Link>
    </div>
  );
};

export default Main;
