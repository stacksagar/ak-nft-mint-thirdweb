import React, { useState, useEffect } from "react";
import Landing from "../components/Landing";
import Mint from "../components/Mint";
import Loading from "../components/Loading";
import axios from "axios";

export default function Homepage() {
  const [selected, setSelected] = useState("home");
  const [selectedNFT, setSelectedNft] = useState({});
  const [collections, setCollections] = useState([]);
  const [isFetched, setIsFetched] = useState(false);

  useEffect(() => {
    const fetch_data = async () => {
      const res = await axios.get("https://ak-mint-nft-server.herokuapp.com");
      const data = await res.data;
      setCollections(data.collections);
      setIsFetched(true);
    };

    fetch_data();
  }, []);

  function setSN(id) {
    const nft = collections?.find((c) => c._id === id);
    setSelectedNft(nft);
  }

  if (!isFetched) return <Loading />;

  return (
    <>
      {selected === "home" && (
        <Landing
          collections={collections}
          setSelected={setSelected}
          setSN={setSN}
        />
      )}

      {selected === "mint" && (
        <Mint collection={selectedNFT} setSelected={setSelected} />
      )}
    </>
  );
}
