import {createContext,useContext,useEffect,useState,type ReactNode} from 'react';
import {useRouter} from '@tanstack/react-router';
import type {User} from '@supabase/supabase-js';
import {supabase} from '@/integrations/supabase/client';
const AuthContext=createContext<{user:User|null;ready:boolean}>({user:null,ready:false});
export function AuthProvider({children}:{children:ReactNode}){
 const router=useRouter(); const [user,setUser]=useState<User|null>(null);const [ready,setReady]=useState(false);
 useEffect(()=>{let active=true;void supabase.auth.getUser().then(({data})=>{if(active){setUser(data.user);setReady(true)}});const {data:{subscription}}=supabase.auth.onAuthStateChange((event,session)=>{if(event==='INITIAL_SESSION'){setUser(session?.user??null);setReady(true);return}if(!['SIGNED_IN','SIGNED_OUT','USER_UPDATED'].includes(event))return;setUser(session?.user??null);setReady(true);void router.invalidate();if(event!=='SIGNED_OUT')void router.options.context.queryClient.invalidateQueries();});return()=>{active=false;subscription.unsubscribe()}},[router]);
 return <AuthContext.Provider value={{user,ready}}>{children}</AuthContext.Provider>
}
export const useAccount=()=>useContext(AuthContext);
