import React, { useState } from 'react';
import './tabcontent.css';



const TabContent = (fooditems) => {
  const [showMinus, setShowMinus] = useState(false);


  
  const toggleIcon = () => {
    setShowMinus(!showMinus);
  };

  return (
    <>
        <div className="card">
          <img src={fooditems.Imgurl} alt='404' />
          <div className={`card-icons bottom-right ${showMinus ? 'show-minus' : ''}`}>
            {showMinus ? (
              <svg xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="currentColor"
                class="bi bi-dash-circle"
                viewBox="0 0 16 16"
                onClick={() =>{
                  toggleIcon();
                }}
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="currentColor"
                class="bi bi-plus-circle"
                viewBox="0 0 16 16"
                onClick={() =>{
                  toggleIcon();
                }}
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
              </svg>
            )}
          </div>
          <div className="card-body">
            <h3 className="card-title">{fooditems.Name}</h3>
            <h5 className="card-price">&#x20B9;{fooditems.Price}</h5>
            <h6 className="card-description">{fooditems.Quantity}</h6>
          </div>
        </div>
    </>
  );
};

export default TabContent;
