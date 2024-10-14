import React from 'react'
import './TitleData.css'

const TitleData = ({Title}) => {
  return (
    <>
      <div className="w-100">
        <div className="powerImg">
        </div>
        <div className="p-3 PRmaintext">
          <h3>{Title}</h3>
        </div>
      </div>
    </>
  );
}

export default TitleData;