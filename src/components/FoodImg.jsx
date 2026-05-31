import React, { useState } from 'react'
import './FoodImg.css'

/* Resuelve rutas locales (ej. "/uploads/...") contra la base del sitio
   (import.meta.env.BASE_URL), para que funcionen en GitHub Pages bajo
   usuario.github.io/<repo>/. Las URLs externas (http, data:) se dejan igual. */
function resolveSrc(src){
  if (!src) return src;
  if (/^(https?:)?\/\//.test(src) || src.startsWith('data:')) return src;
  const base = import.meta.env.BASE_URL || '/';
  return base.replace(/\/$/, '') + '/' + src.replace(/^\//, '');
}

export default function FoodImg({ src, emoji, alt }){
  const [err, setErr] = useState(false);
  if (err || !src) return <div className="img-fallback" role="img" aria-label={alt}>{emoji}</div>;
  return <img src={resolveSrc(src)} alt={alt} loading="lazy" onError={() => setErr(true)} />;
}
