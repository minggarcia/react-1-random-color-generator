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
          backgroundColor: hex,
          margin: '50px',
        }}
      >
        Generated Color: {hex}
      </div>
      <div
        style={{
          textAlign: 'center',
          margin: '20px',
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
