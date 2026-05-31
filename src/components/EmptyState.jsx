import React from 'react'
import './EmptyState.css'

export default function EmptyState({ query }){
  return (
    <div className="empty">
      <span className="e" aria-hidden="true">🔎</span>
      <b>Sin resultados para “{query}”</b>
      Probá con “tocineta”, “coco” o “queso”.
    </div>
  );
}
