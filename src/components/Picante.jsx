import React from 'react'

export default function Picante({ n }){
  if (!n) return <span className="no">Sin picante</span>;
  return <span className="pic">{"🌶️".repeat(n)}</span>;
}
