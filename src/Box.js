import randomColor from 'randomcolor';
import { useState } from 'react';

export default function Box() {
  const [hex, setHex] = useState('#');
  const hexCode = randomColor();

  return (
    <div>
      <div
        style={{
          border: '3px solid black',
          padding: '50px',
          backgroundColor: hexCode,
          margin: '50px',
        }}
      >
        Generated Color: {hexCode}
      </div>
      <div
        style={{
          textAlign: 'center',
          margin: '20px',
          fontFamily: 'Verdana',
        }}
      >
        <button
          onClick={() => {
            setHex(hexCode);
          }}
        >
          Generate
        </button>
      </div>
    </div>
  );
}
