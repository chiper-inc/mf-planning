import { Link } from 'react-router-dom';

const AnotherPage = () => {
  return (
    <div>
      <h3>Hello world from another page!</h3>
      <Link to="/another-page">Another page</Link>
      <Link style={{ marginLeft: '2rem' }} to="/about">
        About
      </Link>
    </div>
  );
};

export default AnotherPage;
