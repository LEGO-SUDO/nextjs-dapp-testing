"use client"
import Image from 'next/image'
import { useTriaConnector } from "@tria-sdk/connect";
import Application, {TriaConnectProvider} from '@tria-sdk/authenticate'


export default function Home() {
   const { globalData } = useTriaConnector({ walletUrl: "https://auth-7rin.vercel.app" });
  return (
    <div>
       <TriaConnectProvider/>
       <Application/>
      
    </div>
  )
}
