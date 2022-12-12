import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMemory } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  return (
    <nav className="bg-red-400 flex justify-center align-middle text-white py-4">
      <h2>
        <FontAwesomeIcon icon={faMemory} className="mr-2" />
        <span className="tracking-tight font-bold">Meme Generator</span>
      </h2>
    </nav>
  );
}
