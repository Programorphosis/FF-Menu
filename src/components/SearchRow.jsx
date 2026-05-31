import React from 'react'
import { Ico } from '../icons/Ico.jsx'
import './SearchRow.css'

export default function SearchRow({ query, setQuery }){
  return (
    <div className="search-row">
      <div className={"search" + (query ? " has" : "")}>
        {Ico.search}
        <input type="text" inputMode="search" placeholder="Buscar"
          value={query} onChange={e => setQuery(e.target.value)} aria-label="Buscar platos" />
        <button className="clear" onClick={() => setQuery("")} aria-label="Borrar">✕</button>
      </div>
      <span className="menu-btn" aria-hidden="true">{Ico.menu}</span>
    </div>
  );
}
