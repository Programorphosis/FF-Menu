import React, { useRef, useEffect } from 'react'
import { fmt, ITEM_BY_ID } from '../lib/utils.js'
import { Ico } from '../icons/Ico.jsx'
import FoodImg from './FoodImg.jsx'
import Badge from './Badge.jsx'
import Picante from './Picante.jsx'
import './Detail.css'

/* ── Vista de detalle ────────────────────────────────────────── */
export default function Detail({ item, closing, onClose, onOpen }){
  const sheetRef = useRef(null);
  const drag = useRef({ y:0, dy:0, active:false });

  const onStart = (e) => {
    drag.current = { y:e.touches[0].clientY, dy:0, active:true };
  };
  const onMove = (e) => {
    if (!drag.current.active) return;
    const sc = sheetRef.current.querySelector(".sheet-scroll");
    if (sc && sc.scrollTop > 0){ drag.current.active = false; return; }
    const dy = e.touches[0].clientY - drag.current.y;
    if (dy > 0){ drag.current.dy = dy; sheetRef.current.style.transform = `translateY(${dy}px)`; }
  };
  const onEnd = () => {
    if (!drag.current.active) return;
    const dy = drag.current.dy;
    sheetRef.current.style.transform = "";
    drag.current.active = false;
    if (dy > 90) onClose();
  };

  /* reset scroll al cambiar de plato */
  const scrollRef = useRef(null);
  useEffect(() => { if (scrollRef.current) scrollRef.current.scrollTop = 0; }, [item && item.id]);

  const sold = item ? !item.disponible : false;

  /* La hoja se monta solo cuando hay plato; la animación @keyframes
     (sheetIn / sheetOut) se reproduce sola al montar / al cerrar. */
  return (
    <div className={"overlay" + (closing ? " closing" : "")} onClick={onClose}>
      <div className="sheet" ref={sheetRef} onClick={e => e.stopPropagation()}>
        <div className="handle" onTouchStart={onStart} onTouchMove={onMove} onTouchEnd={onEnd}></div>
        <div className="sheet-scroll" ref={scrollRef}>
        {item && (
          <React.Fragment>
          <div className="dhero" onTouchStart={onStart} onTouchMove={onMove} onTouchEnd={onEnd}>
            <div className="dband" aria-hidden="true"></div>
            <button className="closeb" onClick={onClose} aria-label="Cerrar">{Ico.back}</button>
            <span className="infob" aria-hidden="true">{Ico.info}</span>
            <div className="dphoto"><FoodImg src={item.imgDetail || item.img} emoji={item.emoji} alt={item.nombre} /></div>
          </div>

          <div className="dbody">
            <div className="ddiv" aria-hidden="true"></div>
            <div className="drow1">
              <div className="badges">
                {sold && <span className="badge hot">Agotado</span>}
                {item.badges.map(b => <Badge key={b} kind={b} />)}
                {item.picante > 0 && <span className="badge picante">🌶️ Picante</span>}
              </div>
              <span className="porc">Porción {item.gramaje}</span>
            </div>

            <h2 className="dtitle">{item.nombre}</h2>
            <p className="ddesc">{item.desc}</p>
            <div className="dprice">
              <span className="plabel">Por solo</span>
              <span className="pval">{fmt(item.precio)} <span> COP</span></span>
            </div>

            {item.incluye && item.incluye.length > 0 && (
              <React.Fragment>
                <div className="dlabel">Incluye</div>
                <div className="incl">
                  {item.incluye.map(id => {
                    const inc = ITEM_BY_ID[id];
                    if (!inc) return null;
                    return (
                      <button key={id} className="incl-item" onClick={() => onOpen && onOpen(inc)}>
                        <span className="incl-ic">{inc.emoji}</span>
                        <span className="incl-nm">{inc.nombre}</span>
                        <span className="incl-go" aria-hidden="true">{Ico.chev}</span>
                      </button>
                    );
                  })}
                </div>
              </React.Fragment>
            )}

            <div className="dlabel">Ingredientes</div>
            <div className="chips">
              {item.ingredientes.map((g, i) => <span key={i} className="chip-ing">{g}</span>)}
            </div>

            <div className="dlabel">Información</div>
            <div className="stats">
              <div className="stat">
                <div className="sl">{Ico.scale} Porción</div>
                <div className="sv">{item.gramaje}</div>
              </div>
              {item.calorias && (
                <div className="stat">
                  <div className="sl">{Ico.flame} Calorías</div>
                  <div className="sv">{item.calorias}</div>
                </div>
              )}
              <div className="stat">
                <div className="sl">🌶️ Picante</div>
                <div className="sv pic"><Picante n={item.picante} /></div>
              </div>
            </div>

            {item.alergenos && item.alergenos.length > 0 && (
              <React.Fragment>
                <div className="dlabel">Alérgenos</div>
                <div className="allerg">{item.alergenos.map((a, i) => <span key={i}>{a}</span>)}</div>
              </React.Fragment>
            )}

            {item.adiciones && item.adiciones.length > 0 && (
              <React.Fragment>
                <div className="dlabel">Adiciones disponibles</div>
                <div className="adds">
                  {item.adiciones.map((a, i) => (
                    <div className="add-row" key={i}>
                      <span className="an">{a.nombre}</span>
                      <span className="ap">+ {fmt(a.precio)}</span>
                    </div>
                  ))}
                </div>
                <p className="add-note">{Ico.info} Pide tus adiciones con el mesero.</p>
              </React.Fragment>
            )}

            {sold && <div className="sold-banner">😔 Agotado por hoy — vuelve a preguntarnos mañana.</div>}

            <div className="dfoot">Carta solo informativa · Pide en tu mesa</div>
          </div>
          </React.Fragment>
        )}
        </div>
      </div>
    </div>
  );
}
