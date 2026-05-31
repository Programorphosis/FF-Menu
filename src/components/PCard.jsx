import React, { useRef, useEffect } from 'react'
import { fmt } from '../lib/utils.js'
import { Ico } from '../icons/Ico.jsx'
import FoodImg from './FoodImg.jsx'
import Badge from './Badge.jsx'
import './PCard.css'

/* ── Tarjeta de producto ─────────────────────────────────────── */
export default function PCard({ item, idx, onOpen }){
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const go = () => setTimeout(() => el.classList.add("in"), (idx % 6) * 60);
    if (el.getBoundingClientRect().top < window.innerHeight){ go(); return; }
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting){ go(); io.unobserve(el); } }),
      { threshold:0.1, rootMargin:"0px 0px -30px 0px" });
    io.observe(el);
    const safety = setTimeout(() => { el.classList.add("in"); io.disconnect(); }, 1500);
    return () => { io.disconnect(); clearTimeout(safety); };
  }, [idx]);

  const sold = !item.disponible;
  return (
    <button ref={ref} className={"pcard" + (sold ? " sold" : "")} onClick={() => onOpen(item)}>
      <div className="photo">
        {sold ? <span className="sold-tag">Agotado</span>
              : item.badges[0] && <span className="badge-float"><Badge kind={item.badges[0]} /></span>}
        <FoodImg src={item.img} emoji={item.emoji} alt={item.nombre} />
      </div>
      <div className="nm">{item.nombre}</div>
      <div className="pr">{fmt(item.precio)}</div>
      {!sold && <span className="go" aria-hidden="true">{Ico.chev}</span>}
    </button>
  );
}
