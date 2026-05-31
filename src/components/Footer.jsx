import React from 'react'
import { RESTAURANTE } from '../data/menu.js'
import { Ico } from '../icons/Ico.jsx'
import './Footer.css'

export default function Footer(){
  return (
    <footer className="foot">
      <div className="fb">Bra<b>sa</b></div>
      <div className="fe">{RESTAURANTE.eslogan}</div>
      <div className="foot-grid">
        <div className="foot-item"><span className="ic">{Ico.pin}</span><div><div className="lbl">Ubicación</div><div className="val">{RESTAURANTE.ubicacion}</div></div></div>
        <div className="foot-item"><span className="ic">{Ico.clock}</span><div><div className="lbl">Horario</div><div className="val">{RESTAURANTE.horario}</div></div></div>
        <div className="foot-item"><span className="ic">{Ico.phone}</span><div><div className="lbl">Reservas</div><div className="val">WhatsApp · {RESTAURANTE.whatsapp}</div></div></div>
      </div>
      <div className="foot-upd"><span aria-hidden="true">🍔</span> Menú actualizado el <b>{RESTAURANTE.actualizado}</b></div>
    </footer>
  );
}
