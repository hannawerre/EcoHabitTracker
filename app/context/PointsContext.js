// context/PointsContext.js, här lagrar vi poängen globalt 
import React, { createContext, useState } from 'react';

// Skapa Context
export const PointsContext = createContext();

// Skapa Provider (en "inpackning" runt våra screens)
export const PointsProvider = ({ children }) => {
  const [points, setPoints] = useState([0, 0, 0, 0]); // [transport, kläder, mat, generell]

  return (
    <PointsContext.Provider value={{ points, setPoints }}>
      {children}
    </PointsContext.Provider>
  );
};
