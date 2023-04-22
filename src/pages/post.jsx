import React, { useState } from 'react';

const images = [
  'https://i.ibb.co/ncrXc2V/1.png',
  'https://i.ibb.co/B3s7v4h/2.png',
  'https://i.ibb.co/XXR8kzF/3.png',
];

export default function Post() {
  const [curr, setCurr] = useState(0);

  const next = () => {
    curr === images.length
      ? setCurr(images.length - 1)
      : setCurr((curr) => curr + 1);
    console.log(curr);
  };

  const prev = () => {
    curr === 0 ? setCurr(0) : setCurr((curr) => curr - 1);
    console.log(curr);
  };

  return (
    <div className='post'>
      <div
        className='post__body'
        style={{
          transform: `translateX(-${curr * 100}%)`,
        }}>
        {images.map((img, index) => (
          <img key={index} src={img} className='img' />
        ))}
      </div>

      {curr !== images.length - 1 && (
        <button onClick={next} className='btn btn__next'>
          Next
        </button>
      )}

      {curr !== 0 && (
        <button onClick={prev} className='btn btn__prev'>
          Prev
        </button>
      )}

      <span className='counter'>
        {curr + 1}/{images.length}
      </span>
    </div>
  );
}
