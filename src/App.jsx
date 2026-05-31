import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react'
import { MENU, DESTACADO_ID, DESTACADOS } from './data/menu.js'
import { ITEM_BY_ID } from './lib/utils.js'
import BrandBar from './components/BrandBar.jsx'
import SearchRow from './components/SearchRow.jsx'
import Promo from './components/Promo.jsx'
import Lead from './components/Lead.jsx'
import Tabs from './components/Tabs.jsx'
import MenuSection from './components/MenuSection.jsx'
import Footer from './components/Footer.jsx'
import EmptyState from './components/EmptyState.jsx'
import Detail from './components/Detail.jsx'

/* ── App ─────────────────────────────────────────────────────── */
export default function App(){
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(MENU[0].id);
  const [sel, setSel] = useState(null);
  const [closing, setClosing] = useState(false);
  const sectionRefs = useRef({});
  const tabRefs = useRef({});
  const clicking = useRef(false);

  const destacados = useMemo(() => {
    const ids = (DESTACADOS && DESTACADOS.length) ? DESTACADOS : [DESTACADO_ID];
    const list = ids.map(id => ITEM_BY_ID[id]).filter(Boolean);
    return list.length ? list : [MENU[0].items[0]];
  }, []);

  const q = query.trim().toLowerCase();
  const filtered = useMemo(() => {
    if (!q) return MENU;
    return MENU.map(c => ({ ...c, items: c.items.filter(i =>
      i.nombre.toLowerCase().includes(q) || i.desc.toLowerCase().includes(q) ||
      i.ingredientes.some(g => g.toLowerCase().includes(q))) })).filter(c => c.items.length);
  }, [q]);

  /* abrir / cerrar detalle · animación por @keyframes al montar/desmontar */
  const closeTimer = useRef(null);
  const openDetail = useCallback((item) => {
    if (closeTimer.current){ clearTimeout(closeTimer.current); closeTimer.current = null; }
    setClosing(false);
    setSel(item);
  }, []);
  const closeDetail = useCallback(() => {
    setClosing(true);
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => { setSel(null); setClosing(false); closeTimer.current = null; }, 360);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("locked", !!sel);
    return () => document.body.classList.remove("locked");
  }, [sel]);

  useEffect(() => {
    const onKey = e => { if (e.key === "Escape" && sel) closeDetail(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [sel, closeDetail]);

  /* scroll-spy */
  useEffect(() => {
    if (q) return;
    const onScroll = () => {
      if (clicking.current) return;
      const probe = window.scrollY + 120;
      let cur = MENU[0].id;
      for (const c of MENU){ const el = sectionRefs.current[c.id]; if (el && el.offsetTop <= probe) cur = c.id; }
      setActive(cur);
    };
    window.addEventListener("scroll", onScroll, { passive:true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [q]);

  useEffect(() => {
    const t = tabRefs.current[active];
    if (t && t.parentElement){
      const p = t.parentElement;
      p.scrollTo({ left: t.offsetLeft - p.offsetWidth/2 + t.offsetWidth/2, behavior:"smooth" });
    }
  }, [active]);

  const goTo = useCallback((id) => {
    const el = sectionRefs.current[id]; if (!el) return;
    clicking.current = true; setActive(id);
    window.scrollTo({ top: el.offsetTop - 62, behavior:"smooth" });
    setTimeout(() => { clicking.current = false; }, 700);
  }, []);

  return (
    <React.Fragment>
      <div className="wrap">
        <BrandBar />

        <SearchRow query={query} setQuery={setQuery} />

        {!q && <Promo items={destacados} onOpen={openDetail} />}

        {!q && <Lead />}
      </div>

      {!q && <Tabs active={active} onSelect={goTo} tabRefs={tabRefs} />}

      <main className="wrap">
        {filtered.length === 0 && <EmptyState query={query} />}

        {filtered.map(cat => (
          <MenuSection key={cat.id} cat={cat} onOpen={openDetail} sectionRefs={sectionRefs} />
        ))}

        <Footer />
      </main>

      {sel && <Detail key={sel.id} item={sel} closing={closing} onClose={closeDetail} onOpen={openDetail} />}
    </React.Fragment>
  );
}
