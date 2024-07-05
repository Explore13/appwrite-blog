import { Loader, Placeholder } from 'rsuite';

const LoaderComp = () => (
  <div>
    <Placeholder.Paragraph rows={8} />
    <Loader backdrop content="loading..." vertical />
  </div>
);

export default LoaderComp;