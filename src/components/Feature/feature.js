import React, {useState} from "react"
import './feature.css';
import backgrounds from '../../data/backgrounds.json';

function Feature() {
  const [selectedFeature, setSelectedFeature] = useState(backgrounds.background[0]);

  console.log(selectedFeature);
  const generateFeatureList = () => {
    return (
      <div className="feature-list">
        {backgrounds.background.map((background, index) => {
          return (
            <div className="background-pill" key={index} onClick={() => setSelectedFeature(background)}>
              {background.name}: {typeof(background.entries) !== 'undefined' ? background.entries[1].name: ""}
            </div>
          );
        })}
      </div>
    );
  }

  const generateFeatureDetails = () => {
    return (
      <div className="feature-details" >
        <div className="feature-banner">
          <h3 className="background-title">{selectedFeature.name}</h3>
            <span className="feature-sourcebook" title={selectedFeature.source}>{selectedFeature.source} pg. {selectedFeature.page}</span>
        </div>
        <hr className="hr-banner"></hr>
        <div className="feature-name">{selectedFeature.entries[1].name}</div>
        <div className="feature-text">{selectedFeature.entries[1].entries}</div>
      </div>
    )
  }

  return (
    <>
      <h2 className="secondary-header">Select A Feature</h2>
      <div className="feature-container">
        {generateFeatureList()}
        {generateFeatureDetails()}
      </div>
    </>
  );
}

export default Feature;