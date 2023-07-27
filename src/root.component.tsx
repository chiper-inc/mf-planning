import { ApolloProvider } from '@apollo/client';
import { apolloClient } from './config/graphql';
import Navigation from './navigation';

export default function Root(props) {
  return (
    <ApolloProvider client={apolloClient}>
      <section>
        {props.name} is mounted!
        <Navigation />
      </section>
    </ApolloProvider>
  );
}
