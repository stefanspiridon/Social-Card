import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './SocialCard.css';

function SocialCard(props) {

const [data, setData] = useState({ quote: "" });

  useEffect(async () => {
    const fetchData = async () => {
        const result = await axios(
        'https://api.kanye.rest/',
        );
    
        setData(result.data);
    };

    fetchData();
  }, []);

  return (
    <div className="socialCard">
        <h3>{props.name}</h3>
        <a>{data.quote}</a>
        <img src={props.img}></img>
        <h4>Like</h4>
        <h4>Dislike</h4>
    </div>
  );
}

export default SocialCard;