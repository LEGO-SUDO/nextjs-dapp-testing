 import { useTriaConnector } from "@tria-sdk/connect";
import Application, {TriaConnectProvider} from '@tria-sdk/authenticate'
// import { useTriaConnector } from "@tria-sdk/connect";

 const Home = () => {
  const { globalData } = useTriaConnector({ walletUrl: "https://auth-7rin.vercel.app" });
 return(

  <div>
   <Application/>
  </div>
 )
}
export default Home