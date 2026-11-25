import {createFileRoute} from '@tanstack/react-router';
import {products,pageHead} from '@/lib/products';
import {ProductCard} from '@/components/product-card';
export const Route=createFileRoute('/products/')({head:()=>pageHead('The collection','Explore six distinctive FendFlex personal safety wearable concepts.'),component:Products});
function Products(){return <main className="site-width pb-20"><div className="page-intro"><div className="eyebrow">The FendFlex collection</div><h1>Safety looks good on you.</h1><p>Six ways to carry a little more confidence. Each concept pairs discreet SOS activation with your personal circle of trusted contacts.</p></div><div className="product-grid">{products.map(p=><ProductCard key={p.slug} product={p}/>)}</div><p className="text-xs text-muted-foreground mt-7">Concept product renders. Hardware, battery and connectivity are simulated in this MVP. Devices are not available for purchase.</p></main>}
