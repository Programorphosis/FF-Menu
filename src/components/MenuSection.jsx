import React from 'react'
import PCard from './PCard.jsx'
import './MenuSection.css'

export default function MenuSection({ cat, onOpen, sectionRefs }){
  return (
    <section id={cat.id} className="section" ref={el => sectionRefs.current[cat.id] = el}>
      <div className="section-head">
        <h3>{cat.nombre}</h3><span className="count">{cat.items.length}</span>
      </div>
      <div className="grid">
        {cat.items.map((it, i) => <PCard key={it.id} item={it} idx={i} onOpen={onOpen} />)}
      </div>
    </section>
  );
}
