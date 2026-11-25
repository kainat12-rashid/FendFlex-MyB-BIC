import {createFileRoute,Link} from '@tanstack/react-router';
import {SafetyDemo} from '@/components/safety-demo';
import {pageHead} from '@/lib/products';
export const Route=createFileRoute('/demo')({head:()=>pageHead('Live safety demo','Try a virtual FendFlex device with a cancellable SOS countdown, consent-based GPS and simulated contact alerts.'),component:Demo});
function Demo(){return <main className="site-width"><div className="page-intro"><div className="eyebrow">Experience peace of mind</div><h1>Your virtual safety companion.</h1><p>A safe place to experience FendFlex. <Link to="/auth" className="text-cyan">Sign in</Link> to save your own contacts and alert history.</p></div><SafetyDemo/></main>}
