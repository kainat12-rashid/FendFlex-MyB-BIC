import {describe,it,expect} from 'vitest';
import {COUNTDOWN_SECONDS,canTrack,canActivate,matchesVoice,emergencyMessage} from '@/lib/safety';
describe('Safety simulation rules',()=>{
 it('uses the requested five-second cancellation window',()=>expect(COUNTDOWN_SECONDS).toBe(5));
 it('does not track without explicit sharing permission',()=>expect(canTrack(false,true)).toBe(false));
 it('does not track while the device is off',()=>expect(canTrack(true,false)).toBe(false));
 it('allows tracking only with sharing on and an active demo',()=>expect(canTrack(true,true)).toBe(true));
 it('does not activate an offline device',()=>expect(canActivate(false,'idle')).toBe(false));
 it('prevents repeated activation during the countdown',()=>expect(canActivate(true,'countdown')).toBe(false));
 it('requires the selected secret code rather than arbitrary input',()=>{expect(matchesVoice('FendFlex help me','FendFlex help me')).toBe(true);expect(matchesVoice('help','FendFlex help me')).toBe(false)});
 it('includes the name, alert time and location with a simulation disclaimer',()=>{const message=emergencyMessage('Musfira','08:15 UTC','24.86070, 67.00110');expect(message).toContain('Musfira');expect(message).toContain('08:15 UTC');expect(message).toContain('24.86070, 67.00110');expect(message).toContain('No emergency services have been contacted')});
});