import React from "react";
import Draw from "./Draw";

function ColorBook() {
  return (
    <div className="color-book">
      <br />
      <div className='color'>
        <p className='directions'> art can be a great tool to use to release emotions! you can doodle here.</p>
      </div>
      <Draw />
    </div>
  );
}

export default ColorBook;
