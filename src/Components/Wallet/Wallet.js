import Navbar from "../Navabr/Navbar";
import Footer from "../Footer/Footer";
import MetaMaskImage from "../../Images/metamask.png";
import Trust from "../../Images/trust.png";
import Alpha from "../../Images/alphawallet.png";
import Argent from "../../Images/argent.png";
import Atoken from "../../Images/atoken.png";
import Atomic from "../../Images/atomic.png";
import Atwallet from "../../Images/atwallet.png";
import Authereum from "../../Images/authereum.png";
import Babycake from "../../Images/babycake.png";
import Beltfinance from "../../Images/beltfinance.png";
import Bscpad from "../../Images/bscpad.png";
import Coin98 from "../../Images/coin98.png";
import Coinbase from "../../Images/coinbase.png";
import Coinomi from "../../Images/coinomi.png";
import cake from "../../Images/cake.jpg";
import Coolwallet from "../../Images/coolwallet.png";
import Creamfinance from "../../Images/creamfinance.png";
import Crypto from "../../Images/crypto.png";
import Exodus from "../../Images/exodus.png";
import Eidoo from "../../Images/eidoo.png";
import Ellipal from "../../Images/ellipal.png";
import Fortube from "../../Images/fortube.png";
import Gridplus from "../../Images/gridplus.png";
import Guarda from "../../Images/guarda.png";
import Huobi from "../../Images/Huobi.png";
import Imtoken from "../../Images/imtoken.png";
import Infinito from "../../Images/infinito.png";
import Infinity from "../../Images/infinity.png";
import Kittycake from "../../Images/kittycake.png";
import LaunchPool from "../../Images/launchpool.png";
import Ledger from "../../Images/ledger.png";
import MathWaller from "../../Images/mathwallet.png";
import okx from "../../Images/okx.jpg";
import Midas from "../../Images/midas.png";
import MorixWallet from "../../Images/morixwallet.png";
import Mound from "../../Images/mound.png";
import MyEtherWallet from "../../Images/My-Ether-Wallet.png";
import MyCelium from "../../Images/mycelium.png";
import MyKey from "../../Images/mykey.png";
import Nash from "../../Images/nash.png";
import Onto from "../../Images/onto.png";
import OwnBit from "../../Images/ownbit.png";
import PeakDefi from "../../Images/peakdefi.png";
import Phantom from "../../Images/phantom.jpg";
import Pillar from "../../Images/pillar.png";
import Rainbow from "../../Images/rainbow.png";
import SafeMoon from "../../Images/safemoon.png";
import SafePal from "../../Images/safepal.png";
import Shiba from "../../Images/shiba.png";
import Solflare from "../../Images/solflare.png";
import SparkPoint from "../../Images/sparkpoint.png";
import Spatium from "../../Images/spatium.png";
import SuperFarm from "../../Images/superfarm.png";
import SWFR from "../../Images/swft.png";
import TokenPocket from "../../Images/tokenpocket.png";
import Trezor from "../../Images/trezor.png";
import Tron from "../../Images/tron.png";
import TronLink from "../../Images/tronlink.png";
import Unstoppable from "../../Images/unstoppable.png";
import Vision from "../../Images/vision.png";
import Walleth from "../../Images/walleth.png";
import XDC from "../../Images/xdc.png";
import Zelcore from "../../Images/zelcore.png";
import Ziliqa from "../../Images/ziliqa.png";
import { Link } from "react-router-dom";
// import Background from "../../Images/Background.jpg"
function Wallet() {
  const walletImages = [
    MetaMaskImage,
    Trust,
    Alpha,
    Argent,

    Atoken,

    Atomic,

    Atwallet,

    Authereum,

    Babycake,

    Beltfinance,

    Bscpad,

    Coin98,

    Coinbase,

    Coinomi,

    cake,

    Coolwallet,

    Creamfinance,

    Crypto,

    Exodus,

    Eidoo,

    Ellipal,

    Fortube,

    Gridplus,

    Guarda,

    Huobi,

    Imtoken,

    Infinito,

    Infinity,

    Kittycake,

    LaunchPool,

    Ledger,

    MathWaller,

    okx,

    Midas,

    MorixWallet,

    Mound,

    MyEtherWallet,

    MyCelium,

    MyKey,

    Nash,

    Onto,

    OwnBit,

    PeakDefi,

    Phantom,

    Pillar,

    Rainbow,

    SafeMoon,

    SafePal,

    Shiba,

    Solflare,

    SparkPoint,

    Spatium,

    SuperFarm,

    SWFR,

    TokenPocket,

    Trezor,

    Tron,

    TronLink,

    Unstoppable,

    Vision,

    Walleth,

    XDC,

    Zelcore,

    Ziliqa,
  ];
  return (
    <div>
      <Navbar />

    
    
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto mb-10">
        <div className="grid grid-cols-2 md:grid-cols-3   lg:grid-cols-4 items-center gap-6 md:gap-10">
          {walletImages.map((image, index) => (
            <Link to="/connect" key={index} className="w-auto h-full relative  top-20 shadow-md rounded-lg p-3">
              <div key={index} className="p-2 sm:p-4 md:w-[100%] lg:w-[100%] ">
                <img
                  src={image}
                  alt={`Wallet ${index}`}
                  className="w-96  h-auto lg:h-20 rounded-md shadow-md"
                />
               
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Wallet;
