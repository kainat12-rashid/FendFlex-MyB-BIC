import bracelet from '@/assets/bracelet.asset.json';
import ring from '@/assets/ring.asset.json';
import necklace from '@/assets/necklace.asset.json';
import keychain from '@/assets/keychain.asset.json';
import hair from '@/assets/hair-accessory.asset.json';
import watch from '@/assets/watch.asset.json';
export const products = [
 {slug:'bracelet',name:'Smart Bracelet',tag:'THE EVERYDAY ESSENTIAL',image:bracelet.url,description:'Quiet confidence, right on your wrist. A refined titanium finish meets discreet, one-touch SOS activation.'},
 {slug:'ring',name:'Smart Ring',tag:'SMALL FORM. BIG PEACE OF MIND.',image:ring.url,description:'Minimal by design. Meaningful by nature. Personal safety in a beautifully understated silver ring.'},
 {slug:'necklace',name:'Smart Necklace',tag:'PROTECTION, CLOSE TO YOUR HEART',image:necklace.url,description:'An elegant pendant with a hidden safety button. Designed to blend into your everyday style.'},
 {slug:'keychain',name:'Smart Keychain',tag:'READY WHEN YOU ARE',image:keychain.url,description:'A compact companion for your bag or keys. Carry a little more confidence wherever you go.'},
 {slug:'hair-accessory',name:'Smart Hair Accessory',tag:'BEAUTIFULLY DISCREET',image:hair.url,description:'A sleek silver barrette with a discreet activation point. Safety that never compromises your style.'},
 {slug:'watch',name:"Children’s Safety Watch",tag:'FOR THEIR LITTLE ADVENTURES',image:watch.url,description:'A playful, comfortable concept designed to help children stay connected to their trusted grown-ups.'},
];
export function pageHead(title:string, description:string, image?:string) {return {meta:[{title:`${title} | FendFlex`},{name:'description',content:description},{property:'og:title',content:`${title} | FendFlex`},{property:'og:description',content:description},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'},...(image?.startsWith('https://')?[{property:'og:image',content:image},{name:'twitter:image',content:image}]:[])]};}
