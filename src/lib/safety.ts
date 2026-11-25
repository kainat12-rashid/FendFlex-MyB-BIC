export const COUNTDOWN_SECONDS = 5;
export const DEMO_LOCATION = {lat:24.8607,lng:67.0011,accuracy:null,source:'Demo coordinates'};
export function canActivate(on:boolean, phase:string) { return on && phase !== 'countdown' && phase !== 'sending'; }
export function canTrack(sharing:boolean,on:boolean) {return sharing && on;}
export function matchesVoice(input:string,code:string) {return input.trim().toLowerCase() === code.trim().toLowerCase() && code.trim().length > 0;}
export function emergencyMessage(name:string,time:string,location:string) {return `FendFlex DEMO SOS: ${name || 'Demo user'} requested help at ${time}. Location: ${location}. This is a simulation. No emergency services have been contacted.`;}
