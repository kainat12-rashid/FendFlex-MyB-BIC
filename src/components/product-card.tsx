import {Link} from '@tanstack/react-router';
import {ArrowUpRight} from 'lucide-react';
import {products} from '@/lib/products';
export function ProductCard({product}:{product:(typeof products)[number]}){return <Link to="/products/$slug" params={{slug:product.slug}} className="product-card"><img src={product.image} alt={`FendFlex ${product.name} concept render`} className="product-image" loading="lazy"/><div className="product-copy"><div className="product-tag">{product.tag}</div><h3 className="mt-2">{product.name}</h3><p>Discreet protection. Designed for you.</p><div className="product-link">Explore device <ArrowUpRight/></div></div></Link>}
