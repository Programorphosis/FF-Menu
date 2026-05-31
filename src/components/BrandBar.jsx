import React from 'react'
import { RESTAURANTE } from '../data/menu.js'
import './BrandBar.css'

export default function BrandBar(){
  return (
    <div className="brandbar">
      <span className="glyph" aria-hidden="true">{RESTAURANTE.logoEmoji}</span>
      <span className="nm">Ri<b>go's</b></span>
      <span className="status"><i></i>Abierto ahora</span>
    </div>
  );
}
