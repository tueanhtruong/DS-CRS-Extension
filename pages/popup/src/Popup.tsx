import '@src/Popup.css';
import { withErrorBoundary, withSuspense } from '@extension/shared';

const Popup = () => {
  return (
    <div className="font-black">
      <p className="text-primary-500">Initial Source</p>
      <p className="text-primary">Initial Source</p>
    </div>
  );
};

export default withErrorBoundary(withSuspense(Popup, <div> Loading ... </div>), <div> Error Occur </div>);
