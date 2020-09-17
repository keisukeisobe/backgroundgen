import React from "react"
import './feature.css';
import backgrounds from '../../data/backgrounds.json';

function Feature() {

  const generateFeatureList = () => {
    return (
      <div className="feature-list">
        {backgrounds.background.map((background, index) => {
          return (
            <div className="background-pill" key={index}>
              {background.name}: {typeof(background.entries) !== 'undefined' ? background.entries[1].name: ""}
            </div>
          );
        })}
      </div>
    );
  }


  return (
    <>
      <h2 className="secondary-header">Select A Feature</h2>
      {generateFeatureList()}
    </>
  );
}

export default Feature;