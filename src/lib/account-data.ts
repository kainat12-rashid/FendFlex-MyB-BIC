import {queryOptions} from '@tanstack/react-query';
import {supabase} from '@/integrations/supabase/client';
export const accountOptions=(userId:string)=>queryOptions({queryKey:['safety-account',userId],queryFn:async()=>{
 const [profile,contacts,alerts]=await Promise.all([supabase.from('profiles').select('*').eq('id',userId).single(),supabase.from('contacts').select('*').eq('user_id',userId).order('name'),supabase.from('alerts').select('*').eq('user_id',userId).order('created_at',{ascending:false}).limit(100)]);
 if(profile.error)throw profile.error;if(contacts.error)throw contacts.error;if(alerts.error)throw alerts.error;
 return{profile:profile.data,contacts:contacts.data,alerts:alerts.data};
},staleTime:10000});