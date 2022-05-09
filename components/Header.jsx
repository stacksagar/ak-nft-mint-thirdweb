import React, { useEffect } from "react";
import { useAddress } from "@thirdweb-dev/react";
import { useState } from "react";
import ConnectButtons from "./ConnectButtons";
import DisconnectPopup from "./DisconnectPopup";

const Header = ({ setSelected }) => {
  const [showMeneItem, setShowMenuItem] = useState(false);
  const address = useAddress();
  const [showConnects, setSC] = useState(false);
  useEffect(() => {
    if (!address) return;
    setSC(false);
  }, [address]);
  return (
    <header className="header">
      {showConnects && <ConnectButtons setSC={setSC} />}
      {showMeneItem && <DisconnectPopup setShowMenuItem={setShowMenuItem} />}
      <div onClick={() => setSelected("home")} className="header_left">
        <img
          src="https://i.ibb.co/PNDqgXN/head.png"
          alt=""
          width={50}
          height={50}
        />
        <span>
          DAZED SKULLS <br /> CREW
        </span>
      </div>
      <div className="header_right">
        {address ? (
          <div
            onClick={() => setShowMenuItem((p) => !p)}
            style={{
              borderRadius: `50px`,
              background: `${showMeneItem ? "#444" : "#222"}`,
            }}
            className="address_area"
          >
            <img
              src="https://static.cdnlogo.com/logos/e/39/ethereum.svg"
              alt=""
              width={15}
              height={30}
            />
            <div>
              {/* <span>0.0720 ETH</span> */}
              <span>
                {address?.substring(0, 4)}...
                {address?.substring(address.length - 3)}
                {/* (Rinkeby) */}
              </span>
            </div>
            {showMeneItem ? (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={15}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={15}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </div>
        ) : (
          <button onClick={() => setSC((p) => !p)} className="connect_button">
            CONNECT WALLET
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
