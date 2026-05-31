import React from 'react'
import { MENU } from '../data/menu.js'
import './Tabs.css'

export default function Tabs({ active, onSelect, tabRefs }){
  return (
    <nav className="tabs-bar" aria-label="Categorías">
      <div className="tabs wrap" style={{maxWidth:"var(--max)"}}>
        {MENU.map(c => (
          <button key={c.id} ref={el => tabRefs.current[c.id] = el}
            className={"tab" + (active === c.id ? " active" : "")} onClick={() => onSelect(c.id)}>
            <span className="dot"></span>{c.nombre}
          </button>
        ))}
      </div>
    </nav>
  );
}
