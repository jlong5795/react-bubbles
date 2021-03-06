import React, { useState, useEffect } from "react";
import axios from "axios";
import {axiosWithAuth} from '../utils/axiosWithAuth'

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
    useEffect(() => {
      axiosWithAuth()
      .get(`/api/colors`)
      .then(response => {
        setColorList(response.data)
      })
      .catch(error => console.log(error))
    }, []);

    const refreshColors = () => {
      axiosWithAuth()
      .get(`/api/colors`)
      .then(response => {
        setColorList(response.data)
      })
      .catch(error => console.log(error))
    }


  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} refreshColors={refreshColors}/>
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;