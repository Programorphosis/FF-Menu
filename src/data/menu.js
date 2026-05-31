// ════════════════════════════════════════════════════════════════
//  DATOS DEL MENÚ  ·  editá todo aquí (separado del diseño)
//  Campos por producto:
//    id, nombre, desc, precio, img (foto card), imgDetail? (foto Detail; si falta usa img), emoji, badges[], disponible,
//    ingredientes[], gramaje, calorias?, picante (0-3)?, alergenos[]?,
//    incluye?[ids de otros productos que vienen con el plato],
//    adiciones[]{nombre,precio}
// ════════════════════════════════════════════════════════════════
const U = "https://images.unsplash.com/";
export const img = id => U + id + "?auto=format&fit=crop&w=640&q=72";

export const RESTAURANTE = {
  nombre: "Brasa",
  logoEmoji: "🍔",
  eslogan: "Hamburguesas a la brasa, hechas a mano.",
  ubicacion: "Vereda La Esperanza · vía Acacías – Guamal, Meta",
  horario: "Miércoles a domingo · 4:00 p. m. – 11:00 p. m.",
  whatsapp: "320 000 0000",
  actualizado: "30 de mayo de 2026",
};

export const DESTACADO_ID = "doble-tocineta";

// Productos que rotan en la promo "El más pedido" (en este orden).
// Son ids de items de MENU; editá la lista a gusto.
export const DESTACADOS = ["clasica", "doble-tocineta", "super-perro", "salchipapa-especial"];

export const MENU = [
  {
    id:"hamburguesas", nombre:"Hamburguesas", emoji:"🍔",
    items:[
      { id:"clasica", nombre:"Clásica de la Casa", precio:24000, emoji:"🍔",
        img:"/uploads/burgers/de_la_casa/card.jpg", imgDetail:"/uploads/burgers/de_la_casa/detail.png", badges:["pedido"], disponible:true,
        incluye:["papas-francesa"],
        desc:"Nuestra hamburguesa insignia: carne de res jugosa a la brasa, queso fundido y vegetales frescos con la salsa secreta de la casa.",
        ingredientes:["Pan brioche","Carne de res 150 g","Queso cheddar","Lechuga","Tomate","Cebolla","Salsa de la casa"],
        gramaje:"~280 g", calorias:"~650 kcal", picante:0,
        alergenos:["Gluten","Lácteos","Huevo"],
        adiciones:[{nombre:"Queso extra",precio:2000},{nombre:"Tocineta",precio:4000},{nombre:"Carne adicional",precio:7000}] },

      { id:"doble-tocineta", nombre:"Doble Tocineta", precio:32000, emoji:"🥓",
        img:"/uploads/burgers/doble_tocineta/card.png", imgDetail:"/uploads/burgers/doble_tocineta/detail.png", badges:[], disponible:true,
        incluye:["papas-francesa","gaseosa"],
        desc:"Para los de buen diente: doble carne, doble queso y tocineta bien crocante. Contundente y llena de sabor ahumado.",
        ingredientes:["Pan brioche","Doble carne de res 150 g","Doble queso cheddar","Tocineta crocante","Salsa de la casa"],
        gramaje:"~420 g", calorias:"~980 kcal", picante:0,
        alergenos:["Gluten","Lácteos","Huevo"],
        adiciones:[{nombre:"Huevo frito",precio:3000},{nombre:"Aros de cebolla",precio:4000},{nombre:"Queso extra",precio:2000}] },

      { id:"bbq-bacon", nombre:"BBQ Bacon", precio:29000, emoji:"🍔",
        img:"/uploads/burgers/bbq_bacon/card.png", imgDetail:"/uploads/burgers/bbq_bacon/detail.png", badges:[], disponible:true,
        desc:"Carne a la brasa bañada en salsa BBQ ahumada, cebolla caramelizada y tocineta. Dulce, ahumada y adictiva.",
        ingredientes:["Pan brioche","Carne de res 150 g","Queso cheddar","Tocineta","Cebolla caramelizada","Salsa BBQ"],
        gramaje:"~320 g", calorias:"~780 kcal", picante:1,
        alergenos:["Gluten","Lácteos"],
        adiciones:[{nombre:"Tocineta",precio:4000},{nombre:"Cebolla caramelizada",precio:2500},{nombre:"Carne adicional",precio:7000}] },

      { id:"pollo-crispy", nombre:"Pollo Crispy", precio:26000, emoji:"🍗",
        img:img("photo-1606755962773-d324e0a13086"), badges:[], disponible:true,
        desc:"Pechuga de pollo apanada y crocante, queso fundido y salsa ranch cremosa. Liviana sin perder lo jugoso.",
        ingredientes:["Pan brioche","Pechuga de pollo apanada","Queso cheddar","Lechuga","Salsa ranch"],
        gramaje:"~300 g", calorias:"~720 kcal", picante:0,
        alergenos:["Gluten","Lácteos","Huevo"],
        adiciones:[{nombre:"Queso extra",precio:2000},{nombre:"Tocineta",precio:4000},{nombre:"Salsa picante",precio:1500}] },

      { id:"vegetariana", nombre:"Vegetariana", precio:25000, emoji:"🥑",
        img:img("photo-1520072959219-c595dc870360"), badges:["veggie"], disponible:true,
        desc:"Torta de garbanzo dorada, aguacate cremoso y pico de gallo fresco. Una opción de planta llena de carácter.",
        ingredientes:["Pan brioche","Torta de garbanzo","Aguacate","Pico de gallo","Lechuga","Salsa de la casa"],
        gramaje:"~270 g", calorias:"~520 kcal", picante:1,
        alergenos:["Gluten"],
        adiciones:[{nombre:"Aguacate extra",precio:3000},{nombre:"Queso",precio:2000},{nombre:"Champiñones",precio:3000}] },
    ],
  },
  {
    id:"perros", nombre:"Perros Calientes", emoji:"🌭",
    items:[
      { id:"perro-clasico", nombre:"Perro Clásico", precio:11000, emoji:"🌭",
        img:"/uploads/perro_caliente/perro-clasico/card.png", imgDetail:"/uploads/perro_caliente/perro-clasico/detail.png", badges:[], disponible:true,
        desc:"Salchicha americana a la brasa en pan suave, con queso, salsas de la casa y papitas trituradas por encima.",
        ingredientes:["Pan de perro","Salchicha americana","Queso","Papitas","Salsas de la casa"],
        gramaje:"~180 g", calorias:"~420 kcal", picante:0,
        alergenos:["Gluten","Lácteos"],
        adiciones:[{nombre:"Tocineta",precio:4000},{nombre:"Queso extra",precio:2000},{nombre:"Salchicha adicional",precio:4000}] },

      { id:"super-perro", nombre:"Súper Perro", precio:17000, emoji:"🌭",
        img:"/uploads/perro_caliente/super-perro/card.png", imgDetail:"/uploads/perro_caliente/super-perro/detail.png", badges:["pedido"], disponible:true,
        desc:"El grande: doble salchicha, queso fundido, tocineta, maíz tierno y todas las salsas. Para no quedar con hambre.",
        ingredientes:["Pan de perro","Doble salchicha","Queso fundido","Tocineta","Maíz tierno","Salsas de la casa"],
        gramaje:"~320 g", calorias:"~760 kcal", picante:0,
        alergenos:["Gluten","Lácteos"],
        adiciones:[{nombre:"Huevos de codorniz",precio:3000},{nombre:"Queso extra",precio:2000},{nombre:"Tocineta",precio:4000}] },
    ],
  },
  {
    id:"salchipapas", nombre:"Salchipapas", emoji:"🍟",
    items:[
      { id:"salchipapa-clasica", nombre:"Salchipapa Clásica", precio:13000, emoji:"🌭",
        img:"/uploads/salchipapas/salchipapa-clasica/card.png", imgDetail:"/uploads/salchipapas/salchipapa-clasica/detail.png", badges:[], disponible:true,
        desc:"Papa fresca crocante con salchicha en rodajas y salsas de la casa. El antojo de siempre.",
        ingredientes:["Papa fresca","Salchicha","Salsas de la casa"],
        gramaje:"~280 g", calorias:"~620 kcal", picante:0,
        alergenos:["Gluten"],
        adiciones:[{nombre:"Queso fundido",precio:3000},{nombre:"Tocineta",precio:4000},{nombre:"Maíz",precio:2000}] },

      { id:"salchipapa-especial", nombre:"Salchipapa Especial", precio:19000, emoji:"🍟",
        img:"/uploads/salchipapas/salchipapa-especial/card.png", imgDetail:"/uploads/salchipapas/salchipapa-especial/detail.png", badges:[], disponible:true,
        desc:"Papa, salchicha, pollo desmechado, queso fundido, maíz y tocineta. Una montaña para compartir.",
        ingredientes:["Papa fresca","Salchicha","Pollo desmechado","Queso fundido","Maíz tierno","Tocineta","Salsas de la casa"],
        gramaje:"~450 g", calorias:"~980 kcal", picante:0,
        alergenos:["Gluten","Lácteos"],
        adiciones:[{nombre:"Carne desmechada",precio:5000},{nombre:"Queso extra",precio:2000},{nombre:"Huevos de codorniz",precio:3000}] },
    ],
  },
  {
    id:"mazorcadas", nombre:"Mazorcadas", emoji:"🌽",
    items:[
      { id:"mazorcada-clasica", nombre:"Mazorcada Clásica", precio:14000, emoji:"🌽",
        img:"", badges:[], disponible:true,
        desc:"Maíz tierno desgranado con queso rallado, salsas y papitas. Cremosa y reconfortante.",
        ingredientes:["Maíz tierno","Queso rallado","Papitas","Salsas de la casa"],
        gramaje:"~300 g", calorias:"~560 kcal", picante:0,
        alergenos:["Lácteos"],
        adiciones:[{nombre:"Queso extra",precio:2000},{nombre:"Tocineta",precio:4000}] },

      { id:"mazorcada-especial", nombre:"Mazorcada Especial", precio:21000, emoji:"🌽",
        img:"", badges:[], disponible:true,
        desc:"Maíz tierno bien cargado: carne o pollo, doble queso, tocineta y maduro al horno. Plato fuerte completo.",
        ingredientes:["Maíz tierno","Carne o pollo","Doble queso","Tocineta","Maduro","Salsas de la casa"],
        gramaje:"~480 g", calorias:"~920 kcal", picante:0,
        alergenos:["Lácteos"],
        adiciones:[{nombre:"Carne adicional",precio:6000},{nombre:"Queso extra",precio:2000},{nombre:"Maduro",precio:2500}] },
    ],
  },
  {
    id:"chorizos", nombre:"Chorizos", emoji:"🌭",
    items:[
      { id:"choripapa", nombre:"Choripapa", precio:16000, emoji:"🌭",
        img:"", badges:[], disponible:true,
        desc:"Chorizo santarrosano en trozos sobre papa fresca crocante, con arepita y ají de la casa.",
        ingredientes:["Chorizo santarrosano","Papa fresca","Arepa","Ají de la casa"],
        gramaje:"~300 g", calorias:"~700 kcal", picante:1,
        alergenos:[],
        adiciones:[{nombre:"Chorizo adicional",precio:5000},{nombre:"Queso fundido",precio:3000},{nombre:"Guacamole",precio:3000}] },

      { id:"chorizo-arepa", nombre:"Chorizo con Arepa", precio:9000, emoji:"🌭",
        img:"", badges:[], disponible:true,
        desc:"El clásico: chorizo a la brasa con arepa asada y limón. Simple y bien hecho.",
        ingredientes:["Chorizo santarrosano","Arepa asada","Limón"],
        gramaje:"~160 g", calorias:"~380 kcal", picante:1,
        alergenos:[],
        adiciones:[{nombre:"Arepa extra",precio:2000},{nombre:"Ají de la casa",precio:1000}] },
    ],
  },
  {
    id:"acompanar", nombre:"Para acompañar", emoji:"🍟",
    items:[
      { id:"papas-francesa", nombre:"Papas a la Francesa", precio:9000, emoji:"🍟",
        img:"/uploads/acompanar/papas-francesa/card.png", imgDetail:"/uploads/acompanar/papas-francesa/detail.png", badges:[], disponible:true,
        desc:"Papa fresca cortada a mano, doradita por fuera y suave por dentro, con sal de mar.",
        ingredientes:["Papa fresca","Sal de mar","Aceite vegetal"],
        gramaje:"~150 g", calorias:"~380 kcal", picante:0,
        alergenos:[],
        adiciones:[{nombre:"Queso fundido",precio:3000},{nombre:"Tocineta",precio:4000},{nombre:"Salsa BBQ",precio:1500}] },

      { id:"papas-queso", nombre:"Papas con Queso y Tocineta", precio:14000, emoji:"🧀",
        img:"/uploads/acompanar/papas-queso/card.png", imgDetail:"/uploads/acompanar/papas-queso/detail.png", badges:[], disponible:true,
        desc:"Nuestras papas bañadas en queso cheddar fundido, tocineta crocante y un toque de cebollín.",
        ingredientes:["Papa fresca","Queso cheddar fundido","Tocineta crocante","Cebollín"],
        gramaje:"~250 g", calorias:"~620 kcal", picante:0,
        alergenos:["Lácteos"],
        adiciones:[{nombre:"Queso extra",precio:2000},{nombre:"Jalapeños",precio:2000}] },

      { id:"aros-cebolla", nombre:"Aros de Cebolla", precio:11000, emoji:"🧅",
        img:img("photo-1639024471283-03518883512d"), badges:[], disponible:false,
        desc:"Aros de cebolla en apanado crocante y especiado. Crujientes por fuera, dulces por dentro.",
        ingredientes:["Cebolla","Apanado crocante","Especias de la casa"],
        gramaje:"~180 g", calorias:"~450 kcal", picante:0,
        alergenos:["Gluten"],
        adiciones:[{nombre:"Salsa ranch",precio:1500},{nombre:"Salsa BBQ",precio:1500}] },

      { id:"nuggets", nombre:"Nuggets x6", precio:13000, emoji:"🍗",
        img:img("photo-1562967914-608f82629710"), badges:[], disponible:true,
        desc:"Seis bocados de pollo apanado, crocantes y jugosos, con la salsa que elijas.",
        ingredientes:["Pollo apanado (6 und.)","Salsa a elección"],
        gramaje:"~200 g", calorias:"~410 kcal", picante:0,
        alergenos:["Gluten"],
        adiciones:[{nombre:"6 unidades más",precio:6000},{nombre:"Salsa extra",precio:1500}] },
    ],
  },
  {
    id:"bebidas", nombre:"Bebidas", emoji:"🥤",
    items:[
      { id:"limonada-natural", nombre:"Limonada Natural", precio:7000, emoji:"🍋",
        img:"/uploads/bebidas/limonada-natural/card.png", imgDetail:"/uploads/bebidas/limonada-natural/detail.png", badges:[], disponible:true,
        desc:"Limón recién exprimido, bien frío. El clásico que nunca falla para acompañar.",
        ingredientes:["Limón fresco","Agua","Azúcar","Hielo"],
        gramaje:"~400 ml", calorias:"~120 kcal", picante:0,
        alergenos:[],
        adiciones:[{nombre:"Hierbabuena",precio:1000},{nombre:"Doble limón",precio:1500}] },

      { id:"limonada-coco", nombre:"Limonada de Coco", precio:10000, emoji:"🥥",
        img:img("photo-1499638673689-79a0b5115d87"), badges:["nuevo"], disponible:true,
        desc:"Cremosa y refrescante: limón con leche y crema de coco natural. La novedad de la casa.",
        ingredientes:["Limón","Leche de coco","Crema de coco","Hielo"],
        gramaje:"~400 ml", calorias:"~220 kcal", picante:0,
        alergenos:["Lácteos"],
        adiciones:[{nombre:"Topping de coco",precio:1500}] },

      { id:"malteada-vainilla", nombre:"Malteada de Vainilla", precio:12000, emoji:"🥤",
        img:"/uploads/bebidas/malteada-vainilla/card.png", imgDetail:"/uploads/bebidas/malteada-vainilla/detail.png", badges:[], disponible:true,
        desc:"Helado de vainilla batido hasta quedar espeso y cremoso, coronado con crema.",
        ingredientes:["Helado de vainilla","Leche","Crema batida"],
        gramaje:"~450 ml", calorias:"~480 kcal", picante:0,
        alergenos:["Lácteos"],
        adiciones:[{nombre:"Topping de chocolate",precio:2000},{nombre:"Crema extra",precio:1500}] },

      { id:"gaseosa", nombre:"Gaseosa Personal", precio:5000, emoji:"🥤",
        img:img("photo-1581636625402-29b2a704ef13"), badges:[], disponible:true,
        desc:"Botella personal bien helada. Pedila a tu gusto.",
        ingredientes:["Gaseosa en botella personal"],
        gramaje:"~400 ml", calorias:"~180 kcal", picante:0,
        alergenos:[],
        adiciones:[] },

      { id:"cerveza", nombre:"Cerveza Nacional", precio:8000, emoji:"🍺",
        img:img("photo-1608270586620-248524c67de9"), badges:[], disponible:true,
        desc:"Cerveza nacional servida a la temperatura perfecta. Solo mayores de edad.",
        ingredientes:["Cerveza nacional 330 ml"],
        gramaje:"~330 ml", calorias:"~150 kcal", picante:0,
        alergenos:["Gluten"],
        adiciones:[] },
    ],
  },
  {
    id:"postres", nombre:"Postres", emoji:"🍰",
    items:[
      { id:"brownie", nombre:"Brownie con Helado", precio:12000, emoji:"🍫",
        img:img("photo-1606313564200-e75d5e30476c"), badges:[], disponible:true,
        desc:"Brownie de chocolate tibio con una bola de helado de vainilla y salsa de chocolate.",
        ingredientes:["Brownie de chocolate","Helado de vainilla","Salsa de chocolate"],
        gramaje:"~180 g", calorias:"~520 kcal", picante:0,
        alergenos:["Gluten","Lácteos","Huevo","Frutos secos (trazas)"],
        adiciones:[{nombre:"Bola de helado",precio:4000},{nombre:"Salsa de arequipe",precio:2000}] },

      { id:"oblea", nombre:"Oblea Tradicional", precio:6000, emoji:"🍪",
        img:img("photo-1551024601-bec78aea704b"), badges:[], disponible:true,
        desc:"La oblea de siempre: arequipe, queso rallado y mermelada de mora entre obleas crocantes.",
        ingredientes:["Obleas","Arequipe","Queso rallado","Mermelada de mora"],
        gramaje:"~120 g", calorias:"~300 kcal", picante:0,
        alergenos:["Gluten","Lácteos"],
        adiciones:[{nombre:"Crema de leche",precio:1500},{nombre:"Chips de colores",precio:1000}] },
    ],
  },
];

export const BADGE = {
  pedido:  { txt:"Más pedida", cls:"hot" },
  nuevo:   { txt:"Nuevo",      cls:"nuevo" },
  veggie:  { txt:"Veggie",     cls:"veggie" },
  picante: { txt:"Picante",    cls:"picante" },
};
