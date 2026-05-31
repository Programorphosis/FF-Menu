import React, { useState, useEffect } from 'react'
import { fmt } from '../lib/utils.js'
import { Ico } from '../icons/Ico.jsx'
import FoodImg from './FoodImg.jsx'
import './Promo.css'

const INTERVALO = 4500; // ms entre cambios automáticos

export default function Promo({ items, onOpen }){
  const list = items && items.length ? items : [];
  const n = list.length;
  const [i, setI] = useState(0);

  // auto-rota; el efecto depende de [i] => al cambiar manual se reinicia el tiempo
  useEffect(() => {
    if (n <= 1) return;
    const t = setTimeout(() => setI(p => (p + 1) % n), INTERVALO);
    return () => clearTimeout(t);
  }, [i, n]);

  if (n === 0) return null;
  const cur = list[Math.min(i, n - 1)];

  return (
    <div className="promo">
      <button className="promo-open" onClick={() => onOpen(cur)} aria-label={`Ver ${cur.nombre}`}>
        <div className="promo-track">
          {list.map((it, k) => (
            <div className={"promo-slide" + (k === i ? " active" : "")} key={it.id} aria-hidden={k !== i}>
              <div className="ptext">
                <div className="pk">Lo más pedido</div>
                <div className="pt">{it.nombre}</div>
                <div className="pp">{fmt(it.precio)}</div>
                <span className="pcta">Ver detalle {Ico.arrow}</span>
              </div>
              <div className="pphoto"><FoodImg src={it.imgDetail || it.img} emoji={it.emoji} alt={it.nombre} /></div>
            </div>
          ))}
        </div>
      </button>

      {n > 1 && (
        <div className="promo-dots" role="tablist" aria-label="Destacados">
          {list.map((it, k) => (
            <button key={it.id} type="button"
              className={"promo-dot" + (k === i ? " active" : "")}
              onClick={() => setI(k)}
              aria-label={`Mostrar ${it.nombre}`} aria-selected={k === i} role="tab" />
          ))}
        </div>
      )}
    </div>
  );
}
