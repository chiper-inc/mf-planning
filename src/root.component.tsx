import Navigation from './navigation';

export default function Root(props) {
  return (
    <section>
      {props.name} is mounted!
      <Navigation />
    </section>
  );
}
