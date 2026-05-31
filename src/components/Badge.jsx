import React from 'react'
import { BADGE } from '../data/menu.js'
import './Badge.css'

export default function Badge({ kind }){
  const b = BADGE[kind]; if (!b) return null;
  return <span className={"badge " + b.cls}>{b.txt}</span>;
}
