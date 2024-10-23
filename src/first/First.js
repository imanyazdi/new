import React from 'react';
import "./first.css";

export default function First() {
  return (
    <div className='first'>
      <div className='background'></div>
      <div className='d-flex justify-content-center align-items-center text'>  
        <div className='text-center'>
          <h1 className='display-4'>This is a test project</h1>
          <div className='exprient'>
            <p className='text-light'>You can select the position of your <span className='font-weight-bold'>React project</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}
