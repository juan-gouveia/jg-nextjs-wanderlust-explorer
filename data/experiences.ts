import type { Experience } from "../types"; // Ajusta la ruta a tus tipos según corresponda

export const MOCK_EXPERIENCES: Experience[] = [
  {
    id: "exp-001",
    name: "Trekking por la ruta Salkantay a Machu Picchu",
    description: "Recorre senderos alpinos y selva alta en un trekking inolvidable hacia las ruinas incas.",
    category: { name: "Adventure" },
    destination: { country: "Perú", city: "Cusco" },
    price: 350,
    rating: 4.9,
    imageUrl: "https://images.unsplash.com/photo-1526392060635-9d6019884377"
  },
  {
    id: "exp-002",
    name: "Tour gastronómico por los huariques del Centro Histórico",
    description: "Prueba el mejor ceviche, anticuchos y pisco sour en la capital gastronómica de América.",
    category: { name: "Food" },
    destination: { country: "Perú", city: "Lima" },
    price: 65,
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1535399831218-d5bd36d1a6b3"
  },
  {
    id: "exp-003",
    name: "Descenso en rafting por el Cañón del Colca",
    description: "Siente la adrenalina en los rápidos de clase III y IV rodeado de volcanes y majestuosos cóndores.",
    category: { name: "Adventure" },
    destination: { country: "Perú", city: "Arequipa" },
    price: 110,
    rating: 4.7,
    imageUrl: "https://images.unsplash.com/photo-1530866495561-507c9faab2ed"
  },
  {
    id: "exp-004",
    name: "Recorrido en teleférico y graffitour por la Comuna 13",
    description: "Descubre la transformación social, el arte urbano y la historia reciente de la ciudad.",
    category: { name: "Culture" },
    destination: { country: "Colombia", city: "Medellín" },
    price: 30,
    rating: 4.9,
    imageUrl: "https://images.unsplash.com/photo-1599582217730-802ef62b9a71"
  },
  {
    id: "exp-005",
    name: "Paseo nocturno en carruaje por la Ciudad Amurallada",
    description: "Disfruta de la brisa del Caribe y la arquitectura colonial iluminada.",
    category: { name: "Culture" },
    destination: { country: "Colombia", city: "Cartagena" },
    price: 85,
    rating: 4.6,
    imageUrl: "https://images.unsplash.com/photo-1583531172005-814191b8b6c0"
  },
  {
    id: "exp-006",
    name: "Ascenso al Cerro de Monserrate y cata de café colombiano",
    description: "Panorámicas increíbles de la sabana acompañadas por los mejores granos de especialidad.",
    category: { name: "Food" },
    destination: { country: "Colombia", city: "Bogotá" },
    price: 45,
    rating: 4.7,
    imageUrl: "https://images.unsplash.com/photo-1509042239860-f550ce710b93"
  },
  {
    id: "exp-007",
    name: "Visita guiada al Museo del Prado y Palacio Real",
    description: "Sumérgete en la historia del arte español con obras de Velázquez, Goya y El Greco.",
    category: { name: "Culture" },
    destination: { country: "España", city: "Madrid" },
    price: 55,
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4"
  },
  {
    id: "exp-008",
    name: "Tour arquitectónico por la Basílica de la Sagrada Familia",
    description: "Admira la obra maestra inacabada de Antoni Gaudí sin hacer filas.",
    category: { name: "Culture" },
    destination: { country: "España", city: "Barcelona" },
    price: 40,
    rating: 4.9,
    imageUrl: "https://images.unsplash.com/photo-1583422409516-2895a77efded"
  },
  {
    id: "exp-009",
    name: "Noche de tablao flamenco y tapas en el barrio de Triana",
    description: "Siente la pasión del cante y baile flamenco maridado con vinos locales y jamón ibérico.",
    category: { name: "Food" },
    destination: { country: "España", city: "Sevilla" },
    price: 70,
    rating: 4.9,
    imageUrl: "https://images.unsplash.com/photo-1509824227185-9c5a01ceba0d"
  },
  {
    id: "exp-010",
    name: "Crucero al atardecer por el río Tamesis",
    description: "Navega desde Westminster hasta Tower Bridge contemplando el skyline londinense.",
    category: { name: "Adventure" },
    destination: { country: "Inglaterra", city: "Londres" },
    price: 35,
    rating: 4.5,
    imageUrl: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad"
  },
  {
    id: "exp-011",
    name: "Ruta de leyendas y música rock en el Northern Quarter",
    description: "Explora la cuna de bandas como The Smiths y Oasis con un guía experto de la escena musical.",
    category: { name: "Culture" },
    destination: { country: "Inglaterra", city: "Manchester" },
    price: 25,
    rating: 4.6,
    imageUrl: "https://images.unsplash.com/photo-1515586838455-8f8f940d6853"
  },
  {
    id: "exp-012",
    name: "Experiencia The Beatles Story y recorrido en The Magical Mystery Tour",
    description: "Visita Penny Lane, Strawberry Field y los rincones que inspiraron al famoso cuarteto.",
    category: { name: "Culture" },
    destination: { country: "Inglaterra", city: "Liverpool" },
    price: 40,
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1569003339405-ea396a5a8a90"
  },
  {
    id: "exp-013",
    name: "Retiro de bienestar y spa de aguas termales en el Valle Sagrado",
    description: "Conecta con la naturaleza andina mediante yoga, masajes holísticos y baños termales.",
    category: { name: "Wellness" },
    destination: { country: "Perú", city: "Cusco" },
    price: 180,
    rating: 4.9,
    imageUrl: "https://images.unsplash.com/photo-1540555700478-4be289fbecef"
  },
  {
    id: "exp-014",
    name: "Clase presencial de cocina peruana y preparación de pisco sour",
    description: "Aprende a preparar ceviche tradicional, lomo saltado y coctelería bandera.",
    category: { name: "Food" },
    destination: { country: "Perú", city: "Lima" },
    price: 75,
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5"
  },
  {
    id: "exp-015",
    name: "Caminata por la Campiña Blanca y los Molinos de Sabandía",
    description: "Disfruta de la naturaleza rural y los antiguos molinos construidos en piedra sillar.",
    category: { name: "Nature" },
    destination: { country: "Perú", city: "Arequipa" },
    price: 35,
    rating: 4.4,
    imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
  },
  {
    id: "exp-016",
    name: "Ruta del café y senderismo en el Parque Arví",
    description: "Camina entre bosques húmedos e imponentes pinos a pocos minutos de la ciudad.",
    category: { name: "Nature" },
    destination: { country: "Colombia", city: "Medellín" },
    price: 40,
    rating: 4.7,
    imageUrl: "https://images.unsplash.com/photo-1448375240586-882707db888b"
  },
  {
    id: "exp-017",
    name: "Día de playa y snorkel en las Islas del Rosario",
    description: "Aguas cristalinas, arrecifes de coral y relajación total en el Parque Nacional Natural.",
    category: { name: "Nature" },
    destination: { country: "Colombia", city: "Cartagena" },
    price: 120,
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
  },
  {
    id: "exp-018",
    name: "Caminata ecológica por el Jardín Botánico de Bogotá",
    description: "Descubre la flora andina y el invernadero con réplicas de los ecosistemas colombianos.",
    category: { name: "Nature" },
    destination: { country: "Colombia", city: "Bogotá" },
    price: 20,
    rating: 4.6,
    imageUrl: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc"
  },
  {
    id: "exp-019",
    name: "Picnic y sesión de meditación en el Parque del Retiro",
    description: "Desconecta del bullicio urbano junto al Estanque Grande y el Palacio de Cristal.",
    category: { name: "Wellness" },
    destination: { country: "España", city: "Madrid" },
    price: 35,
    rating: 4.7,
    imageUrl: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
  },
  {
    id: "exp-020",
    name: "Atardecer en velero por la costa de la Barceloneta",
    description: "Navega por la costa mediterránea disfrutando de música suave y vino blanco.",
    category: { name: "Adventure" },
    destination: { country: "España", city: "Barcelona" },
    price: 90,
    rating: 4.9,
    imageUrl: "https://images.unsplash.com/photo-1500514966906-fe245eea9344"
  },
  {
    id: "exp-021",
    name: "Paseo en kayak por el río Guadalquivir",
    description: "Observa la Torre del Oro y el Puente de Triana desde una perspectiva acuática única.",
    category: { name: "Adventure" },
    destination: { country: "España", city: "Sevilla" },
    price: 30,
    rating: 4.6,
    imageUrl: "https://images.unsplash.com/photo-1544551763-46a013bb70d5"
  },
  {
    id: "exp-022",
    name: "Paseo botánico en los reales Kew Gardens",
    description: "Explora los invernaderos victorianos y la mayor colección botánica del mundo.",
    category: { name: "Nature" },
    destination: { country: "Inglaterra", city: "Londres" },
    price: 28,
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae"
  },
  {
    id: "exp-023",
    name: "Sesión de spa nórdico e hidroterapia urbana",
    description: "Relaja tus músculos en tinas calientes y saunas secas en pleno centro urbano.",
    category: { name: "Wellness" },
    destination: { country: "Inglaterra", city: "Manchester" },
    price: 80,
    rating: 4.5,
    imageUrl: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874"
  },
  {
    id: "exp-024",
    name: "Ruta en bicicleta por Sefton Park y los muelles históricos",
    description: "Disfruta del verde de la ciudad y finaliza recorriendo el famoso Royal Albert Dock.",
    category: { name: "Adventure" },
    destination: { country: "Inglaterra", city: "Liverpool" },
    price: 22,
    rating: 4.4,
    imageUrl: "https://images.unsplash.com/photo-1485965120184-e220f721d03e"
  },
  {
    id: "exp-025",
    name: "Excursión en cuatrimoto por las Salinas de Maras y Moray",
    description: "Aventura a toda velocidad entre los pozos de sal ancestrales y terrazas agrícolas incas.",
    category: { name: "Adventure" },
    destination: { country: "Perú", city: "Cusco" },
    price: 60,
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1533105079780-92b9be482077"
  },
  {
    id: "exp-026",
    name: "Sobrevuelo en parapente sobre los acantilados de Miraflores",
    description: "Contempla el Océano Pacífico y el malecón limeño desde el aire con un piloto certificado.",
    category: { name: "Adventure" },
    destination: { country: "Perú", city: "Lima" },
    price: 90,
    rating: 4.9,
    imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
  },
  {
    id: "exp-027",
    name: "Trek a la Laguna de Salinas y avistamiento de flamencos",
    description: "Explora la altiplanicie andina y sus impresionantes espejos de agua salada.",
    category: { name: "Nature" },
    destination: { country: "Perú", city: "Arequipa" },
    price: 50,
    rating: 4.6,
    imageUrl: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800"
  },
  {
    id: "exp-028",
    name: "Excursión a la Piedra del Peñol y Guatapé",
    description: "Sube los 740 escalones de la roca gigante y recorre las pintorescas calles llenas de zócalos.",
    category: { name: "Adventure" },
    destination: { country: "Colombia", city: "Medellín" },
    price: 50,
    rating: 4.9,
    imageUrl: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7"
  },
  {
    id: "exp-029",
    name: "Taller de mixología caribeña con ron y frutas locales",
    description: "Aprende a preparar cócteles tropicales guiado por un bartender galardonado.",
    category: { name: "Food" },
    destination: { country: "Colombia", city: "Cartagena" },
    price: 55,
    rating: 4.7,
    imageUrl: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b"
  },
  {
    id: "exp-030",
    name: "Ruta de la chicha y el grafiti por el barrio La Candelaria",
    description: "Descubre el arte callejero más impactante de Bogotá y prueba la bebida ancestral andina.",
    category: { name: "Culture" },
    destination: { country: "Colombia", city: "Bogotá" },
    price: 15,
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83"
  },
  {
    id: "exp-031",
    name: "Ruta gastronómica de bocadillos y cerveza artesanal",
    description: "Recorre las tabernas centenarias de La Latina degustando las tapas más tradicionales.",
    category: { name: "Food" },
    destination: { country: "España", city: "Madrid" },
    price: 50,
    rating: 4.7,
    imageUrl: "https://images.unsplash.com/photo-1515443961218-a51367888e4b"
  },
  {
    id: "exp-032",
    name: "Sesión de spa térmico en los Baños Árabes de la ciudad",
    description: "Relájate en salas de agua a distintas temperaturas bajo bóvedas históricas con luz tenue.",
    category: { name: "Wellness" },
    destination: { country: "España", city: "Barcelona" },
    price: 75,
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874"
  },
  {
    id: "exp-033",
    name: "Visita guiada al Real Alcázar y la Catedral de Sevilla",
    description: "Recorre los palacios islámicos y góticos más bellos del sur de Europa.",
    category: { name: "Culture" },
    destination: { country: "España", city: "Sevilla" },
    price: 45,
    rating: 4.9,
    imageUrl: "https://images.unsplash.com/photo-1562883676-8c7efa832e7b"
  },
  {
    id: "exp-034",
    name: "Tea Time tradicional en un hotel de lujo colonial",
    description: "Disfruta del auténtico té de la tarde inglés con scones, mermelada y mini sándwiches.",
    category: { name: "Food" },
    destination: { country: "Inglaterra", city: "Londres" },
    price: 65,
    rating: 4.7,
    imageUrl: "https://images.unsplash.com/photo-1576092768241-dec231879fc3"
  },
  {
    id: "exp-035",
    name: "Tour del estadio Old Trafford y Museo del Manchester United",
    description: "Siente la pasión del fútbol mundial caminando por el túnel de vestuarios.",
    category: { name: "Culture" },
    destination: { country: "Inglaterra", city: "Manchester" },
    price: 38,
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2"
  },
  {
    id: "exp-036",
    name: "Paseo por la catedral anglicana y vistas panorámicas",
    description: "Sube a la torre de la catedral más grande del Reino Unido para una vista de 360 grados.",
    category: { name: "Culture" },
    destination: { country: "Inglaterra", city: "Liverpool" },
    price: 18,
    rating: 4.6,
    imageUrl: "https://images.unsplash.com/photo-1543832923-44667a44c804"
  },
  {
    id: "exp-037",
    name: "Trekking de un día a la Montaña de Siete Colores (Vinicunca)",
    description: "Desafía la altitud para admirar uno de los paisajes geológicos más asombrosos del planeta.",
    category: { name: "Nature" },
    destination: { country: "Perú", city: "Cusco" },
    price: 45,
    rating: 4.6,
    imageUrl: "https://images.unsplash.com/photo-1526392060635-9d6019884377"
  },
  {
    id: "exp-038",
    name: "Recorrido en bicicleta por Barranco y el Malecón",
    description: "Pasea por el barrio bohemio, cruza el Puente de los Suspiros y disfruta de la vista marina.",
    category: { name: "Adventure" },
    destination: { country: "Perú", city: "Lima" },
    price: 25,
    rating: 4.7,
    imageUrl: "https://images.unsplash.com/photo-1485965120184-e220f721d03e"
  },
  {
    id: "exp-039",
    name: "Ruta del Monasterio de Santa Catalina y arquitectura colonial",
    description: "Una auténtica ciudad dentro de la ciudad construida en arcilla roja y piedra volcánica blanca.",
    category: { name: "Culture" },
    destination: { country: "Perú", city: "Arequipa" },
    price: 25,
    rating: 4.9,
    imageUrl: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3"
  },
  {
    id: "exp-040",
    name: "Día de relajación en balneario y aromaterapia tropical",
    description: "Tratamientos corporal con aceites esenciales de cacao y frutas de la región.",
    category: { name: "Wellness" },
    destination: { country: "Colombia", city: "Medellín" },
    price: 95,
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1540555700478-4be289fbecef"
  },
  {
    id: "exp-041",
    name: "Noche de salsa y baile en la Ciénaga costera",
    description: "Aprende los pasos básicos del ritmo caribeño con bailarines profesionales en vivo.",
    category: { name: "Culture" },
    destination: { country: "Colombia", city: "Cartagena" },
    price: 35,
    rating: 4.7,
    imageUrl: "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4"
  },
  {
    id: "exp-042",
    name: "Tour de arquitectura y museos de arte contemporáneo",
    description: "Visita la Galería Santa Fe, el MAMBO y las exposiciones más destacadas del centro.",
    category: { name: "Culture" },
    destination: { country: "Colombia", city: "Bogotá" },
    price: 25,
    rating: 4.5,
    imageUrl: "https://images.unsplash.com/photo-1518998053901-5348d3961a04"
  },
  {
    id: "exp-043",
    name: "Ruta en bicicleta eléctrica por los parques urbanos",
    description: "Desplázate sin esfuerzo desde el Templo de Debod hasta la Casa de Campo.",
    category: { name: "Adventure" },
    destination: { country: "España", city: "Madrid" },
    price: 35,
    rating: 4.6,
    imageUrl: "https://images.unsplash.com/photo-1485965120184-e220f721d03e"
  },
  {
    id: "exp-044",
    name: "Ruta gastronómica por el Mercado de La Boquería",
    description: "Degusta mariscos frescos, embutidos locales y tapas de autor con un chef local.",
    category: { name: "Food" },
    destination: { country: "España", city: "Barcelona" },
    price: 65,
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5"
  },
  {
    id: "exp-045",
    name: "Paseo en barco solar por el Parque de María Luisa",
    description: "Conoce la historia de la Exposición Iberoamericana de 1929 y la famosa Plaza de España.",
    category: { name: "Nature" },
    destination: { country: "España", city: "Sevilla" },
    price: 20,
    rating: 4.7,
    imageUrl: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
  },
  {
    id: "exp-046",
    name: "Entrada VIP y acceso rápido al London Eye",
    description: "Contempla el Big Ben y las Cortes del Parlamento desde la icónica rueda gigante.",
    category: { name: "Culture" },
    destination: { country: "Inglaterra", city: "Londres" },
    price: 45,
    rating: 4.7,
    imageUrl: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad"
  },
  {
    id: "exp-047",
    name: "Taller de cerveza artesanal en una destilería urbana",
    description: "Descubre el proceso de elaboración de las ales británicas y realiza una cata guiada.",
    category: { name: "Food" },
    destination: { country: "Inglaterra", city: "Manchester" },
    price: 40,
    rating: 4.6,
    imageUrl: "https://images.unsplash.com/photo-1515443961218-a51367888e4b"
  },
  {
    id: "exp-048",
    name: "Tour por el Cavern Club y conciertos de indie pop",
    description: "Vive la música en vivo en el legendario subterráneo donde nacieron las grandes estrellas.",
    category: { name: "Culture" },
    destination: { country: "Inglaterra", city: "Liverpool" },
    price: 20,
    rating: 4.9,
    imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4"
  },
  {
    id: "exp-049",
    name: "Sesión de yoga y meditación al amanecer frente a Sacsayhuamán",
    description: "Recibe los primeros rayos de sol con una vista imponente de la fortaleza ceremonial inca.",
    category: { name: "Wellness" },
    destination: { country: "Perú", city: "Cusco" },
    price: 30,
    rating: 4.9,
    imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773"
  },
  {
    id: "exp-050",
    name: "Visita al Museo Larco y cena con vista a los jardines",
    description: "Colección precolombina fascinante seguida de una cena de cocina criolla refinada.",
    category: { name: "Culture" },
    destination: { country: "Perú", city: "Lima" },
    price: 80,
    rating: 4.9,
    imageUrl: "https://images.unsplash.com/photo-1518998053901-5348d3961a04"
  },
  {
    id: "exp-051",
    name: "Cata de chocolates bean-to-bar y cacao peruanos",
    description: "Aprende el proceso de elaboración del chocolate fino de aroma y prueba cosechas galardonadas.",
    category: { name: "Food" },
    destination: { country: "Perú", city: "Arequipa" },
    price: 30,
    rating: 4.7,
    imageUrl: "https://images.unsplash.com/photo-1511381939415-e44015466834"
  },
  {
    id: "exp-052",
    name: "Recorrido nocturno de mitos y sombras en el centro urbano",
    description: "Camina por callejones antiguos escuchando historias de la época colonial y republicana.",
    category: { name: "Culture" },
    destination: { country: "Colombia", city: "Medellín" },
    price: 20,
    rating: 4.5,
    imageUrl: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5"
  },
  {
    id: "exp-053",
    name: "Excursión en paddleboard por la bahía al amanecer",
    description: "Disfruta de la tranquilidad del mar caribeño antes de que la ciudad despierte.",
    category: { name: "Adventure" },
    destination: { country: "Colombia", city: "Cartagena" },
    price: 40,
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1544551763-46a013bb70d5"
  },
  {
    id: "exp-054",
    name: "Cena a ciegas y experiencia sensorial de alta cocina",
    description: "Potencia tus sentidos del gusto y del olfato en una propuesta gastronómica innovadora.",
    category: { name: "Food" },
    destination: { country: "Colombia", city: "Bogotá" },
    price: 70,
    rating: 4.6,
    imageUrl: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5"
  },
  {
    id: "exp-055",
    name: "Taller de pintura al aire libre frente al Palacio Real",
    description: "Expresa tu creatividad guiado por un artista local mientras contemplas la arquitectura.",
    category: { name: "Culture" },
    destination: { country: "España", city: "Madrid" },
    price: 40,
    rating: 4.7,
    imageUrl: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b"
  },
  {
    id: "exp-056",
    name: "Senderismo por el Parque Natural de Collserola",
    description: "Desconecta del ritmo urbano caminando entre frondosos bosques de encinas y pinos.",
    category: { name: "Nature" },
    destination: { country: "España", city: "Barcelona" },
    price: 25,
    rating: 4.5,
    imageUrl: "https://images.unsplash.com/photo-1448375240586-882707db888b"
  },
  {
    id: "exp-057",
    name: "Clase de elaboración de paella andaluza y gazpacho",
    description: "Visita el mercado tradicional para comprar ingredientes y cocina tu propio almuerzo.",
    category: { name: "Food" },
    destination: { country: "España", city: "Sevilla" },
    price: 60,
    rating: 4.9,
    imageUrl: "https://images.unsplash.com/photo-1515443961218-a51367888e4b"
  },
  {
    id: "exp-058",
    name: "Tour nocturno de fantasmas y misterios medievales",
    description: "Explora los callejones oscuros del centro histórico y escucha espeluznantes historias.",
    category: { name: "Culture" },
    destination: { country: "Inglaterra", city: "Londres" },
    price: 25,
    rating: 4.6,
    imageUrl: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5"
  },
  {
    id: "exp-059",
    name: "Recorrido fotográfico por la arquitectura industrial y canales",
    description: "Aprende técnicas fotográficas urbanas en los antiguos almacenes victorianos de ladrillo.",
    category: { name: "Culture" },
    destination: { country: "Inglaterra", city: "Manchester" },
    price: 35,
    rating: 4.7,
    imageUrl: "https://images.unsplash.com/photo-1515586838455-8f8f940d6853"
  },
  {
    id: "exp-060",
    name: "Atardecer en la playa de Crosby y las estatuas de Antony Gormley",
    description: "Admira la instalación artística 'Another Place' de 100 figuras de hierro frente al mar.",
    category: { name: "Nature" },
    destination: { country: "Inglaterra", city: "Liverpool" },
    price: 15,
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
  },
  {
    id: "exp-061",
    name: "Taller textil inca con tejedoras de la comunidad de Chinchero",
    description: "Aprende técnicas de teñido natural con plantas y minerales en los Andes.",
    category: { name: "Culture" },
    destination: { country: "Perú", city: "Cusco" },
    price: 40,
    rating: 4.9,
    imageUrl: "https://images.unsplash.com/photo-1528164344705-47542687990d"
  },
  {
    id: "exp-062",
    name: "Paseo por el Parque de la Reserva y Circuito Mágico del Agua",
    description: "Espectáculo nocturno de fuentes de agua iluminadas con música y proyecciones.",
    category: { name: "Culture" },
    destination: { country: "Perú", city: "Lima" },
    price: 15,
    rating: 4.7,
    imageUrl: "https://images.unsplash.com/photo-1514565131-fce0801e5785"
  },
  {
    id: "exp-063",
    name: "Cata de pisco y maridaje en una cava colonial",
    description: "Descubre las cepas puras e acholadas de la bebida nacional de Perú.",
    category: { name: "Food" },
    destination: { country: "Perú", city: "Arequipa" },
    price: 40,
    rating: 4.6,
    imageUrl: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3"
  },
  {
    id: "exp-064",
    name: "Día de ecoturismo y avistamiento de aves en la reserva natural",
    description: "Observa colibríes, tucanes y especies endémicas en los bosques de niebla.",
    category: { name: "Nature" },
    destination: { country: "Colombia", city: "Medellín" },
    price: 55,
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1448375240586-882707db888b"
  },
  {
    id: "exp-065",
    name: "Atardecer en Café del Mar con música chill out",
    description: "Disfruta de un cóctel mientras el sol se oculta sobre las murallas coloniales.",
    category: { name: "Wellness" },
    destination: { country: "Colombia", city: "Cartagena" },
    price: 50,
    rating: 4.7,
    imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
  },
  {
    id: "exp-066",
    name: "Cata guiada de cafés de origen en el barrio Quinta Camacho",
    description: "Compara perfiles de taza de fincas de Huila, Antioquia y Eje Cafetero.",
    category: { name: "Food" },
    destination: { country: "Colombia", city: "Bogotá" },
    price: 30,
    rating: 4.9,
    imageUrl: "https://images.unsplash.com/photo-1509042239860-f550ce710b93"
  },
  {
    id: "exp-067",
    name: "Cata de vinos de Madrid y visita a bodegas históricas",
    description: "Descubre la tradición vitivinícola de la región con maridaje de quesos artesanales.",
    category: { name: "Food" },
    destination: { country: "España", city: "Madrid" },
    price: 65,
    rating: 4.7,
    imageUrl: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3"
  },
  {
    id: "exp-068",
    name: "Visita nocturna al Parque Güell sin aglomeraciones",
    description: "Disfruta de los viaductos y los mosaicos de Gaudí con las luces de la ciudad de fondo.",
    category: { name: "Culture" },
    destination: { country: "España", city: "Barcelona" },
    price: 35,
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1583422409516-2895a77efded"
  },
  {
    id: "exp-069",
    name: "Sesión de meditación sonora en la orilla del Guadalquivir",
    description: "Cuencos tibetanos y ejercicios respiratorios en un entorno verde y relajante.",
    category: { name: "Wellness" },
    destination: { country: "España", city: "Sevilla" },
    price: 25,
    rating: 4.6,
    imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773"
  },
  {
    id: "exp-070",
    name: "Tours de escenarios de películas en Greenwich",
    description: "Descubre las locaciones de cine de época en el Antiguo Colegio Naval Real.",
    category: { name: "Culture" },
    destination: { country: "Inglaterra", city: "Londres" },
    price: 30,
    rating: 4.5,
    imageUrl: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad"
  },
  {
    id: "exp-071",
    name: "Ruta gastronómica por el famoso Curry Mile",
    description: "Siente los sabores auténticos de la cocina del sur de Asia en Rusholme.",
    category: { name: "Food" },
    destination: { country: "Inglaterra", city: "Manchester" },
    price: 35,
    rating: 4.7,
    imageUrl: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5"
  },
  {
    id: "exp-072",
    name: "Excursión en paddle surf por la zona de los muelles",
    description: "Navega por las calas urbanas de Albert Dock de forma divertida y segura.",
    category: { name: "Adventure" },
    destination: { country: "Inglaterra", city: "Liverpool" },
    price: 30,
    rating: 4.6,
    imageUrl: "https://images.unsplash.com/photo-1544551763-46a013bb70d5"
  },
  {
    id: "exp-073",
    name: "Trek de un día al nevado Ausangate y lagunas de 7 colores",
    description: "Caminata de alta montaña rodeada de glaciares e imponentes alpacas.",
    category: { name: "Adventure" },
    destination: { country: "Perú", city: "Cusco" },
    price: 55,
    rating: 4.9,
    imageUrl: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800"
  },
  {
    id: "exp-074",
    name: "Clase de surf en las olas de la Costa Verde",
    description: "Súbete a las olas del Océano Pacífico con instructores profesionales para todos los niveles.",
    category: { name: "Adventure" },
    destination: { country: "Perú", city: "Lima" },
    price: 35,
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1502680390469-be75c86b636f"
  },
  {
    id: "exp-075",
    name: "Observación astronómica en el desierto de Yura",
    description: "Contempla la Vía Láctea y las constelaciones incas lejos de la contaminación lumínica.",
    category: { name: "Nature" },
    destination: { country: "Perú", city: "Arequipa" },
    price: 45,
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86"
  },
  {
    id: "exp-076",
    name: "Taller de preparación de empanadas y arepas tradicionales",
    description: "Aprende los secretos de la masa de maíz y los rellenos típicos de la región antioqueña.",
    category: { name: "Food" },
    destination: { country: "Colombia", city: "Medellín" },
    price: 30,
    rating: 4.7,
    imageUrl: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5"
  },
  {
    id: "exp-077",
    name: "Paseo fotográfico en las murallas al atardecer",
    description: "Aprende a retratar el contraste entre las cúpulas coloniales y el mar Caribe.",
    category: { name: "Culture" },
    destination: { country: "Colombia", city: "Cartagena" },
    price: 35,
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1583531172005-814191b8b6c0"
  },
  {
    id: "exp-078",
    name: "Sesión de yoga en el Parque Virrey",
    description: "Clase matutina rodeado de árboles y aire fresco en uno de los mejores parques de la ciudad.",
    category: { name: "Wellness" },
    destination: { country: "Colombia", city: "Bogotá" },
    price: 15,
    rating: 4.6,
    imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773"
  },
  {
    id: "exp-079",
    name: "Noche de ópera y ballet en el Teatro Real",
    description: "Una velada cultural de alto nivel en uno de los teatros más prestigiados de Europa.",
    category: { name: "Culture" },
    destination: { country: "España", city: "Madrid" },
    price: 110,
    rating: 4.9,
    imageUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819"
  },
  {
    id: "exp-080",
    name: "Taller de mosaico estilo Gaudí (Trencadís)",
    description: "Crea tu propia pieza de recuerdo utilizando trozos de cerámica de colores.",
    category: { name: "Culture" },
    destination: { country: "España", city: "Barcelona" },
    price: 45,
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5"
  },
  {
    id: "exp-081",
    name: "Ruta fotográfica por los patios floridos del barrio Santa Cruz",
    description: "Descubre rincones escondidos llenos de fuentes, azulejos y flores de azahar.",
    category: { name: "Culture" },
    destination: { country: "España", city: "Sevilla" },
    price: 25,
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1562883676-8c7efa832e7b"
  },
  {
    id: "exp-082",
    name: "Paseo por la naturaleza en Hyde Park y Kensington Gardens",
    description: "Recorre Serpentine Lake y disfruta de un momento de paz en la capital británica.",
    category: { name: "Nature" },
    destination: { country: "Inglaterra", city: "Londres" },
    price: 15,
    rating: 4.7,
    imageUrl: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
  },
  {
    id: "exp-083",
    name: "Visita a la Galería de Arte de Manchester y té inglés",
    description: "Admiración de la colección de pinturas pre-rafaelitas finalizando con repostería fina.",
    category: { name: "Culture" },
    destination: { country: "Inglaterra", city: "Manchester" },
    price: 30,
    rating: 4.6,
    imageUrl: "https://images.unsplash.com/photo-1518998053901-5348d3961a04"
  },
  {
    id: "exp-084",
    name: "Tour por el estadio Anfield y museo del Liverpool FC",
    description: "Siente la mística de 'You'll Never Walk Alone' visitando el legendario campo de fútbol.",
    category: { name: "Culture" },
    destination: { country: "Inglaterra", city: "Liverpool" },
    price: 35,
    rating: 4.9,
    imageUrl: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2"
  },
  {
    id: "exp-085",
    name: "Cena show con danzas folclóricas andinas y criollas",
    description: "Música en vivo, vestimentas típicas coloridas y una muestra de la cultura peruana.",
    category: { name: "Culture" },
    destination: { country: "Perú", city: "Cusco" },
    price: 50,
    rating: 4.7,
    imageUrl: "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4"
  },
  {
    id: "exp-086",
    name: "Día de baño de bosque en los olivos centenarios de San Isidro",
    description: "Caminata consciente y meditación guiada entre árboles plantados en el siglo XVII.",
    category: { name: "Wellness" },
    destination: { country: "Perú", city: "Lima" },
    price: 25,
    rating: 4.6,
    imageUrl: "https://images.unsplash.com/photo-1448375240586-882707db888b"
  },
  {
    id: "exp-087",
    name: "Trek por la ruta de los petroglifos de Toro Muerto",
    description: "Descubre miles de bloques de roca volcánica grabados por culturas prehispánicas.",
    category: { name: "Culture" },
    destination: { country: "Perú", city: "Arequipa" },
    price: 40,
    rating: 4.5,
    imageUrl: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3"
  },
  {
    id: "exp-088",
    name: "Experiencia en parapente sobre el Valle de Aburrá",
    description: "Vuela sobre las montañas que rodean la ciudad desde el mirador de San Félix.",
    category: { name: "Adventure" },
    destination: { country: "Colombia", city: "Medellín" },
    price: 85,
    rating: 4.9,
    imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
  },
  {
    id: "exp-089",
    name: "Excursión en kayak de mar por los manglares de la Boquilla",
    description: "Atraviesa túneles naturales de vegetación mientras observas aves costeras.",
    category: { name: "Nature" },
    destination: { country: "Colombia", city: "Cartagena" },
    price: 35,
    rating: 4.7,
    imageUrl: "https://images.unsplash.com/photo-1544551763-46a013bb70d5"
  },
  {
    id: "exp-090",
    name: "Visita al Mercado de Paloquemao y taller de jugos tropicales",
    description: "Explora la inmensa variedad de frutas exóticas de Colombia y prepara combinaciones únicas.",
    category: { name: "Food" },
    destination: { country: "Colombia", city: "Bogotá" },
    price: 30,
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5"
  },
  {
    id: "exp-091",
    name: "Sesión de spa con chocolatoterapia en centro urbano",
    description: "Exfoliación y masajes hidratantes a base de cacao puro para revitalizar la piel.",
    category: { name: "Wellness" },
    destination: { country: "España", city: "Madrid" },
    price: 85,
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1540555700478-4be289fbecef"
  },
  {
    id: "exp-092",
    name: "Excursión a Montserrat y degustación de licores monásticos",
    description: "Sube en tren cremallera a la montaña sagrada y visita la basílica de la Moreneta.",
    category: { name: "Adventure" },
    destination: { country: "España", city: "Barcelona" },
    price: 70,
    rating: 4.9,
    imageUrl: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800"
  },
  {
    id: "exp-093",
    name: "Ruta de la cerámica tradicional andaluza en Triana",
    description: "Conoce los talleres de alfarería histórica y pinta tu propio azulejo sevillano.",
    category: { name: "Culture" },
    destination: { country: "España", city: "Sevilla" },
    price: 35,
    rating: 4.7,
    imageUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5"
  },
  {
    id: "exp-094",
    name: "Visita a la Torre de Londres y las Joyas de la Corona",
    description: "Descubre la historia de los reyes británicos y los misterios de la antigua fortaleza.",
    category: { name: "Culture" },
    destination: { country: "Inglaterra", city: "Londres" },
    price: 40,
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad"
  },
  {
    id: "exp-095",
    name: "Caminata y picnic verde en Heaton Park",
    description: "Disfruta de uno de los parques municipales más grandes de Europa en un entorno tranquilo.",
    category: { name: "Nature" },
    destination: { country: "Inglaterra", city: "Manchester" },
    price: 20,
    rating: 4.6,
    imageUrl: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
  },
  {
    id: "exp-096",
    name: "Ruta de galerías independientes en el Baltic Triangle",
    description: "Explora la zona alternativa de Liverpool repleta de murales, arte visual y comida callejera.",
    category: { name: "Culture" },
    destination: { country: "Inglaterra", city: "Liverpool" },
    price: 18,
    rating: 4.7,
    imageUrl: "https://images.unsplash.com/photo-1569003339405-ea396a5a8a90"
  },
  {
    id: "exp-097",
    name: "Noche de observación de estrellas en el Valle Sagrado",
    description: "Aprende sobre la astronomía inca e identifica la Vía Láctea desde los Andes.",
    category: { name: "Nature" },
    destination: { country: "Perú", city: "Cusco" },
    price: 40,
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86"
  },
  {
    id: "exp-098",
    name: "Cata de ceviches maridados con cervezas artesanales",
    description: "Degustación de 4 variedades de ceviche con insumos locales de las tres regiones de Perú.",
    category: { name: "Food" },
    destination: { country: "Perú", city: "Lima" },
    price: 55,
    rating: 4.9,
    imageUrl: "https://images.unsplash.com/photo-1535399831218-d5bd36d1a6b3"
  },
  {
    id: "exp-099",
    name: "Paseo por las casonas coloniales y balcones del centro",
    description: "Recorre el Centro Histórico apreciando la arquitectura tallada en madera y sillar.",
    category: { name: "Culture" },
    destination: { country: "Perú", city: "Arequipa" },
    price: 20,
    rating: 4.7,
    imageUrl: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3"
  },
  {
    id: "exp-100",
    name: "Día de spa holístico con baño de vapor y masajes ancestrales",
    description: "Termina tus vacaciones relajando cuerpo y mente con terapias de relajación profunda.",
    category: { name: "Wellness" },
    destination: { country: "Colombia", city: "Medellín" },
    price: 110,
    rating: 4.9,
    imageUrl: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874"
  }
];