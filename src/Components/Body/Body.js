import Bg1 from "../../Images/Bg1.png";
import Bg2 from "../../Images/secure-shield.png";
import Bg3 from "../../Images/wallet.png";
import Bg4 from "../../Images/img1.png"
import Bg5 from "../../Images/img2.png"
import Bg6 from "../../Images/img3.png"
import Bg7 from "../../Images/img4.png"
import Bg8 from "../../Images/img5.png"
import Bg9 from "../../Images/img6.png"
import Bg10 from "../../Images/img7.png"
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "../Main.css";
import Footer from "../Footer/Footer";


function Body() {
  const [transactions, setTransactions] = useState(0);
  const [assets, setAssets] = useState(0);
  const [newUsers, setNewUsers] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTransactions((prevTransactions) => Math.min(prevTransactions + 1, 50));
      setAssets((prevAssets) => Math.min(prevAssets + 1, 100));
      setNewUsers((prevNewUsers) => Math.min(prevNewUsers + 1, 10000));
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ marginTop: "120px", overflow: "hidden" }}>
      <div className="container mx-auto p-8 ">
        <div className="flex flex-col-reverse lg:flex-row items-center lg:ml-10 border-b border-gray-400 dark:border-gray-400 ">
          <div className="lg:mr-8 lg:w-1/2">
            <h1 className="text-5xl font-bold mb-4">
              Secure and Easy way to <span className="lg:pr-96">Trade</span>
            </h1>
            <p className="text-gray-700 text-1xl">
              You cannot discover new oceans unless you have the courage to lose
              sight <span className="lg:pr-80"> of the shore…and move on!</span>
            </p>
            <Link to="/wallet" className="nav-item">
            <button className="bg-[#407bff] lg:mr-96 w-32 text-white font-medium mt-5 px-4 py-2 ml-5 rounded">
              Read More
            </button>
            </Link>
            {/* COUNTER */}

            <div className="mt-8 bg-gray-100 p-6 rounded lg:mr-24 lg:w-auto w-screen h-44 text-center">
              <div className="flex space-x-4 lg:pt-7">
                <div className="flex flex-col items-center">
                  <div className="text-lg font-bold">
                    <span className="counter1 text-2xl">${transactions}M</span>
                  </div>
                  <div className="text-sm font-normal">
                    Transactions every 24 hours
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="stat-number counter text-lg font-bold">
                    <span className="counter2 text-2xl">{assets}+</span>
                  </div>
                  <div className="text-sm font-normal">
                    Assets under holding
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="stat-number counter text-lg font-bold">
                    <span className="counter3 text-2xl">{newUsers}</span>
                  </div>
                  <div className="text-sm font-normal">New users annually</div>
                </div>
              </div>
            </div>
            {/* ENDS */}
          </div>
          <img
            src={Bg1}
            alt=""
            className="w-full lg:w-1/2 lg:ml-8 mt-8 lg:mt-0 Image hidden lg:block"
          />
        </div>
      </div>

      <div>
        <h1 className="lg:text-4xl text-2xl font-bold lg:p-3 p-1">
          The most trusted cryptocurrency platform
        </h1>
        <p className="pt-3 p-2">
          Here are a few reasons why you should choose WalletBse
        </p>
        <section
          className="container mx-auto my-8 flex flex-wrap justify-around mb-10"
          data-aos="fade-up"
        >
          <div
            className="w-full  sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4 lg:mr-20"
            data-aos="fade-up"
          >
            <div className="bg-white  lg:w-96 p-6 rounded-lg shadow-md">
              <img
                src={Bg2}
                alt=""
                className="rounded-md pl-28  lg:pl-36 img3"
                style={{ marginBottom: "-80px" }}
              />

              <h5 className="lg:text-xl text-xl font-bold lg:font-bold rw md:text-lg txt1 mb-5   lg:pb-1">
                Secure storage
              </h5>
              <p className="text-gray-700 text-center lg:relative lg:bottom-4">
                We store the vast majority of the digital assets in secure
                offline storageies
              </p>
            </div>
          </div>

          <div
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4 lg:mr-20"
            data-aos="fade-up"
          >
            <div className="bg-white lg:w-96 p-6 rounded-lg shadow-md">
              <img
                src={Bg3}
                alt=""
                className=" mb-3 rounded-md pl-28 lg:pl-36 img3"
              />
              <h5 className="lg:text-xl text-xl font-bold lg:ml-8 lg:font-bold md:text-lg  txt2 mb-2 lg:pr-9">
                Add coins to your Wallet
              </h5>
              <p className="text-gray-700 text-center">
                Add bitcoins you’ve created or exchanged via credit card.
              </p>
            </div>
          </div>

          <div
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4 lg:mr-20"
            data-aos="fade-up"
          >
            <div className="bg-white lg:w-96 p-6 rounded-lg shadow-md">
              <img
                src={Bg3}
                alt=""
                className=" mb-3 rounded-md pl-28 lg:pl-36 img3"
              />
              <h5 className="lg:text-1xl text-xl font-bold md:text-lg  mb-2 pl-5 txt3 lg:font-bold">
                Buy/Sell with Wallet
              </h5>
              <p className="text-gray-700 text-center">
                WalletBase supports a variety of the most popular digital
                currencies.
              </p>
            </div>
          </div>
        </section>
      </div>

      <div className="container mx-auto my-10 relative top-10 lg:p-3 p-4">
        <h1 className="lg:text-4xl text-2xl font-bold">
        Boost your earnings with WalletBase
        </h1>
        <p className="pt-3">
        Upgrade your account by owning BTL in your DeFi protfolio to earn better yield.
        </p>

        <div className="flex flex-wrap -mx-4">
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 p-4">
          <Link to="/wallet" className="nav-item"> 
            <div className="bg-white border  p-6 rounded-lg shadow-md">
              <img src={Bg4} alt="" className="mb-4 rounded-md  h-12   lg:pl-20 pl-[7.5em] img2" />
              <h5 className="text-xl font-bold mb-2">Authentication</h5>
              <p className="text-gray-700 font-normal">
                Click For Assistance On Authentication Issues.
              </p>
            </div>
            </Link>
          </div>

         
     
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 p-4">
          <Link to="/wallet" className="nav-item"> 
          <div className="bg-white border    p-6 rounded-lg shadow-md">
              <img src={Bg5} alt=""  className="mb-4  rounded-md  h-12 lg:pl-24 pl-36 img2" />
              <h5 className="text-xl font-bold mb-2">Transaction Delay</h5>
              <p className="text-gray-700">
                Click to submit related issues on transactions
              </p>
            </div>
            </Link>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 p-4">
          <Link to="/wallet" className="nav-item"> 
          <div className="bg-white border     p-6 rounded-lg shadow-md">
              <img src={Bg6} alt=""  className="mb-4  rounded-md  h-12 lg:pl-24 pl-36 img2" />
              <h5 className="text-xl font-bold mb-2">Claim Rewards</h5>
              <p className="text-gray-700">
                Click here to Claim your Reward related issues{" "}
              </p>
            </div>
            </Link>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 p-4">
          <Link to="/wallet" className="nav-item"> 
          <div className="bg-white border p-6 rounded-lg shadow-md">
              <img src={Bg7} alt=""  className="mb-4  rounded-md  h-12 lg:pl-24  pl-36 img2" />
              <h5 className="text-xl font-bold mb-2">Migration</h5>
              <p className="text-gray-700">
                Click here to migrate with no hustle
              </p>
            </div>
            </Link>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 p-4">
          <Link to="/wallet" className="nav-item"> 
          <div className="bg-white border  p-6 rounded-lg shadow-md">
              <img src={Bg6} alt="" className="mb-4 rounded-md  h-12 lg:pl-24 pl-36 img2" />
              <h5 className="text-xl font-bold mb-2">Claim Airdrops</h5>
              <p className="text-gray-700">
                Click to claim Airdrops or Related Issues{" "}
              </p>
            </div>
            </Link>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 p-4">
          <Link to="/wallet" className="nav-item"> 
          <div className="bg-white border  p-6 rounded-lg shadow-md">
              <img src={Bg8} alt="" className="mb-4 rounded-md  h-12 lg:pl-24 pl-36 img2" />
              <h5 className="text-xl font-bold mb-2">Validation</h5>
              <p className="text-gray-700">
                D24hrs support on any issues relating to the validation of
                accounts. Click here
              </p>
            </div>
            </Link>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 p-4">
          <Link to="/wallet" className="nav-item"> 
          <div className="bg-white border  p-6 rounded-lg shadow-md">
              <img src={Bg9} alt="" className="mb-4 rounded-md  h-12 lg:pl-24 pl-36 img2" />
              <h5 className="text-xl font-bold mb-2">Swap/Exchnage</h5>
              <p className="text-gray-700">
                24hrs support to issues relating to swap or exchage of coin.
              </p>
            </div>
            </Link>
          </div>
        
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 p-4">
              
          <Link to="/wallet" className="nav-item"> 
          <div className="bg-white border    p-6 rounded-lg shadow-md">
              <img src={Bg10} alt="" className="mb-4 rounded-md  h-12 lg:pl-24 pl-[8.8em] img2" />
              <h5 className="text-xl font-bold mb-2">NFTs</h5>
              <p className="text-gray-700">
                Click here to mint/transfer NFTs or if you need support on how
                to recieve NFT
              </p>
            </div>
            </Link>
          </div>
    
        </div>
      </div>

      <Footer/>
    </div>
  );
}

export default Body;
