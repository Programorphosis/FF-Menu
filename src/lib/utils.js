import { MENU } from '../data/menu.js'

export const fmt = n => "$" + n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

/* índice id → item, para resolver referencias (ej. lo que un plato "incluye") */
export const ITEM_BY_ID = Object.fromEntries(MENU.flatMap(c => c.items.map(i => [i.id, i])));
