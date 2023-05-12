import React from 'react';
import PartList from './PartList';

export default function RecyclerListings(){
    return (
    <div className="recycler-listings-main" style={heading_style}>
      <h1>Available Parts</h1>
      <PartList />
    </div>
  );

}

const heading_style = {
    margin: "15px",
}
