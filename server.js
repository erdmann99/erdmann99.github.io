const path = require('path');
const express = require('express');
const homePage = require('./data/home');
const newsContent = require('./data/news');

const app = express();
const PORT = process.env.PORT || 3000;

const site = {
  name: 'Teutonia Elsass-Lotgrillen',
  shortName: 'Teutonia',
  founded: 1218,
  anniversary: '808 Jahre Rost, Rebe und Teutonentreue',
  chair: 'Präsidium der Glut',
  phone: 'nicht während der Rostruhe',
  phoneHref: '+490000000000',
  contentContact: {
    name: 'Pressewart für Zange, Wein und Auswärtsspiel',
    email: 'presse@teutonia-lotgrillen.example',
    emailHref: 'mailto:presse@teutonia-lotgrillen.example'
  },
  postalAddress: ['Teutonia Elsass-Lotgrillen', 'c/o Herrenhaus Zur ewigen Zange', 'Eichenlauballee 1218', 'Lotgrillen'],
  venueAddress: ['Roststadion am Rebhang', 'Nebenplatz hinter der großen Kühlbox', 'Lotgrillen'],
  meetingPlace: ['Vereinsheim Zur stillen Glut', 'Sitzungszimmer Oberhitze', 'Lotgrillen']
};

const navItems = [
  { key: 'home', label: 'Startseite', url: '/' },
  { key: 'anthem', label: 'Hymne', url: '/hymne' },
  { key: 'history', label: 'Historie', url: '/#historie' },
  { key: 'members', label: 'Mitglieder', url: '/mitglieder' },
  { key: 'press', label: 'Presse', url: '/#presse' }
];

const slugify = (value) =>
  value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

const formatGermanDate = (value) =>
  new Intl.DateTimeFormat('de-DE', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  }).format(new Date(value));

const normalizeImage = (image, fallbackAlt) => {
  if (typeof image === 'string') {
    return {
      src: image.replace(/^public/, ''),
      alt: fallbackAlt
    };
  }

  return {
    ...image,
    src: image.src ? image.src.replace(/^public/, '') : '',
    alt: image.alt || fallbackAlt
  };
};

const newsEntries = newsContent.map((entry) => ({
  ...entry,
  body: entry.body || [entry.summary],
  images: (entry.images || []).map((image) => normalizeImage(image, entry.title)),
  slug: slugify(entry.title),
  formattedDate: formatGermanDate(entry.date)
})).sort((entryA, entryB) => entryB.date.localeCompare(entryA.date));

const club = {
  mission:
    'Seit Barde Cornelius von Hetgen im Jahre 1218 den Sport- und Trunkverein Teutonia stiftete, pflegen wir die alte Kunst, mit maximaler Würde um einen Grill zu stehen.',
  stats: [
    { value: '1218', label: 'Stiftung durch Cornelius von Hetgen' },
    { value: '11', label: 'Paragraphen der vorläufigen Rostordnung' },
    { value: '7 Min.', label: 'offizielle Rostruhe vor kritischen Wendepunkten' },
    { value: '808', label: 'Jahre glorreiche Vereinsbehauptung' }
  ],
  intro: [
    'Elsass-Lotgrillen ist mehr als ein Spiel. Es ist eine Haltung zwischen Eichenlaub, Rieslingglas und exakt geführter Wurstwende, vererbt von Rat zu Rat und von Kühltasche zu Kühltasche.',
    'Der Verein tritt nach außen mit Ernst, Protokoll und Wappen auf. Nach innen bleibt er das, was er immer war: ein Arbeiterverein der Tradition, der Historie und des glorreichen Bundes.'
  ],
  values: ['Rostdisziplin', 'Teutonentreue', 'Weinsichere Analyse', 'Ehrenhafte Rivalität', 'Nie wieder Teilung'],
  timeline: [
    {
      year: '1218',
      title: 'Barde Cornelius von Hetgen',
      text: 'Cornelius gründet den Sport- und Trunkverein Teutonia. Sein erster Satz ist überliefert: Ich brauche die Tradition.'
    },
    {
      year: '1349',
      title: 'Die Nacht der geteilten Kohlen',
      text: 'Drei Lager streiten um denselben Rost. Am Morgen steht im Lotbuch: Auf mehrere Teams verteilt, aber in der Sache vereint.'
    },
    {
      year: '1493',
      title: 'Der Rebenfrieden',
      text: 'Die Teutonen schwören, den Becher zu heben, aber das Bündnis nie leichtfertig zu teilen.'
    },
    {
      year: '1815',
      title: 'Die Zange von Waterloo',
      text: 'Ein heimkehrender Teutone bringt eine Feldzange mit und erklärt sie zur Mahnung wider die Unordnung.'
    },
    {
      year: '2023',
      title: 'Beginn der Derbyjahre',
      text: 'Mehmets Sperrmüllhandel tritt auf den Plan. Aus sportlicher Reibung entsteht eine Rivalität mit Aktenordner und feierlicher Gegnersichtung.'
    },
    {
      year: '2026',
      title: 'Schwur vor Büx Deluxe',
      text: 'Nach blutendem Teutonen-Herz spricht der Rat: Am Ende des Tages sind wir alle eins. Teutonen.'
    }
  ],
  highlights: [
    'Vor jedem Heimrost wird das Eichenblatt geprüft und der erste Schluck nur nach Freigabe genommen.',
    'Der Derbyausschuss archiviert alle Provokationen von Mehmets Sperrmüllhandel mit Datum, Wetterlage und Kohlezustand.',
    'Neue Mitglieder sprechen den Satz: Ich brauche meinen Arbeiterverein. Erst danach beginnt die Einweisung in Zangenhaltung und Ernstblick.'
  ],
  members: [
    {
      name: 'Cornelius Hetger',
      historicName: 'Cornelius von Hetgen der Erstberufene',
      role: 'Erzstifter und Bannerherr',
      text: 'Trug als Erster das Wort der Teutonia in die Runde und wachte fortan über Schwur, Wappen und rechten Ernst.'
    },
    {
      name: 'Tobias Sesterhenn',
      historicName: 'Tobias Sesterhahn von der Schreibfeder',
      role: 'Hochchronist und Schreiber der Glut',
      text: 'Führt das Lotbuch mit fester Hand, damit kein ruhmreicher Ausspruch im Nebel der Becher verloren gehe.'
    },
    {
      name: 'Oliver Meiner',
      historicName: 'Olivarius Meinher von der stillen Bank',
      role: 'Ratsherr der schweigenden Weisung',
      text: 'Hebt den Blick, wenn die Runde lärmet, und siehe: Aus Unordnung wird Beschluss, aus Beschluss wird Brauch.'
    },
    {
      name: 'Lukas Bergmaier',
      historicName: 'Lucas Berchmeyer, Schildträger der Oberhitze',
      role: 'Schildträger der Oberhitze',
      text: 'Steht am ersten Wendepunkt mit unbeirrter Stirn und trägt die Last, wenn Glut und Geschick einander prüfen.'
    },
    {
      name: 'Jakob Bergmaier',
      historicName: 'Jacobus Berchmeyer, Bruder im Bund',
      role: 'Hüter der zweiten Zange',
      text: 'Bewahret die eiserne Reserve des Bundes und mahnet, dass kein Bündnis geteilt sei, solange Brüder am Roste stehen.'
    },
    {
      name: 'Leonard Müller',
      historicName: 'Leonhardus Molitor vom Mühlrad der Taktik',
      role: 'Mühlmeister der Taktik',
      text: 'Mahlet aus jeder Fügung eine Lehre und aus jeder Lehre einen Spruch, der im Rat noch lange widerhallet.'
    }
  ]
};

const teams = [
  {
    name: 'Erste Grillgarde',
    label: 'Leistungskader',
    description:
      'Die repräsentative Abteilung für hohe Temperaturen, große Gesten und kontrolliertes Wenden unter Beobachtung.',
    items: ['Startelf am Rost', 'präzise Zangendrehung', 'Derby-erfahrene Körpersprache', 'Schwurformel vor Büx Deluxe']
  },
  {
    name: 'Reserve Oberhitze',
    label: 'Banktiefe',
    description:
      'Springt ein, wenn Kohle nachgelegt, Brot gereicht oder eine Diskussion über Gargrade beendet werden muss.',
    items: ['Kohlenachschub', 'Baguette-Management', 'Taktische Senfverteilung']
  },
  {
    name: 'Veteranenrat',
    label: 'Traditionspflege',
    description:
      'Bewahrt die Mythen, prüft die Chronik und entscheidet, welche Erinnerung offiziell stattgefunden hat.',
    items: ['Lotbuchführung seit 1218', 'Eichenlaubkontrolle', 'Ritualaufsicht']
  },
  {
    name: 'Derbyausschuss',
    label: 'Rivalitätswesen',
    description:
      'Analysiert Mehmets Sperrmüllhandel mit ernster Miene und auffällig wenig belastbarem Videomaterial.',
    items: ['Gegnerbeobachtung', 'Pressekonferenz-Simulation', 'Aktenlage vor Anpfiff']
  }
];

const schedulePage = {
  venues: [
    {
      name: 'Roststadion am Rebhang',
      address: 'Heimstätte der Teutonia seit Anno 1218, soweit erinnerlich',
      description:
        'Hier werden Heimspiele, Losziehungen und besonders wichtige Stehkreise abgehalten.',
      details: ['windgeschützte Glutzone', 'Bierzeltgarnitur mit Vorstandsblick', 'inoffizielle Weinkurve']
    },
    {
      name: 'Auswärtsrost neutraler Bauart',
      address: 'wechselnde Spielorte',
      description:
        'Das mobile Setup für Auftritte außerhalb der eigenen Komfortzone.',
      details: ['klappbar', 'argumentationsstark', 'geeignet für Derbyspannung']
    },
    {
      name: 'Vereinsheim Zur stillen Glut',
      address: 'Sitzungszimmer Oberhitze',
      description:
        'Ort für Vorstand, Protokoll, Krisenkommunikation und die feierliche Entstaubung der Loszange.',
      details: ['Lotbucharchiv', 'Pokalregal ohne Erklärpflicht', 'Rostruhe-fähig']
    },
    {
      name: 'Sperrmüll-Arena',
      address: 'Gastspiel bei Mehmets Sperrmüllhandel',
      description:
        'Schwieriges Auswärtsterrain mit unklarer Sitzordnung und hoher emotionaler Restwertquote.',
      details: ['Derbykulisse', 'Materialschlacht möglich', 'nur mit Ehrenrat betreten']
    }
  ],
  recurringEvents: [
    {
      title: 'Rostappell',
      meta: 'jeden ersten Freitag · 12:18 Uhr',
      text: 'Kurze Lage, ernste Mienen, danach regulärer Grillbetrieb und dreimaliges Gedenken an Cornelius.'
    },
    {
      title: 'Derby gegen Mehmets Sperrmüllhandel',
      meta: 'Termin nach Aktenlage',
      text: 'Das Spiel, über das vorher mehr geredet wird als nachher belastbar dokumentiert werden kann.'
    },
    {
      title: 'Büx Deluxe Turnier',
      meta: 'nächste Woche · geeint fürs Ziel',
      text: 'Nie wieder teilen wir dies glorreiche Bündnis. Antreten als eins, heimkehren als Teutonen.'
    },
    {
      title: 'Loszangenweihe',
      meta: 'Saisonauftakt',
      text: 'Die Zange wird präsentiert, geprüft und anschließend so abgelegt, dass niemand versehentlich sinnvoll wirkt.'
    },
    {
      title: 'Rieslinganalyse',
      meta: 'nach Bedarf',
      text: 'Taktische Nachbesprechung mit Schwerpunkt Duftnote, Restwärme und mentaler Stabilität.'
    }
  ],
  notice:
    'Alle Termine sind verbindlich, sobald sie jemand im Gruppenchat mit ausreichender Überzeugung behauptet hat.'
};

const contact = {
  postalAddress: site.postalAddress,
  venueAddress: site.venueAddress,
  meetingPlace: site.meetingPlace,
  phone: site.phone,
  phoneHref: site.phoneHref,
  contactPerson: {
    role: 'Vertreten durch',
    name: site.chair
  },
  contentContact: site.contentContact,
  note:
    'Anfragen zu Probetraining, Derbykarten und offizieller Wurstfolge werden grundsätzlich ernst gelesen.'
};

const legal = {
  email: 'vorstand@teutonia-lotgrillen.example',
  contentContact: site.contentContact,
  registerCourt: 'nicht eingetragen, aber sehr überzeugt',
  registerNumber: 'Rostrolle 1218',
  fontsProvider: {
    name: 'Bunny Fonts',
    url: 'https://fonts.bunny.net',
    privacyUrl: 'https://bunny.net/privacy/'
  }
};

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  res.locals.navItems = navItems;
  res.locals.site = site;
  next();
});

app.get('/', (req, res) => {
  res.render('layout', {
    title: 'Startseite',
    currentPage: 'home',
    template: 'pages/home',
    home: homePage
  });
});

app.get(['/verein', '/mannschaften', '/trainingszeiten', '/news', '/news/:slug', '/kontakt', '/impressum', '/datenschutz'], (req, res) => {
  res.redirect('/');
});

app.get('/mitglieder', (req, res) => {
  res.render('layout', {
    title: 'Gründungsväter',
    currentPage: 'members',
    template: 'pages/members',
    members: club.members
  });
});

app.get('/hymne', (req, res) => {
  res.render('layout', {
    title: 'Vereinshymne',
    currentPage: 'anthem',
    template: 'pages/hymn',
    anthem: homePage.anthem
  });
});

app.get('/verein', (req, res) => {
  res.render('layout', {
    title: 'Tradition',
    currentPage: 'club',
    template: 'pages/club',
    club
  });
});

app.get('/mannschaften', (req, res) => {
  res.render('layout', {
    title: 'Abteilungen',
    currentPage: 'teams',
    template: 'pages/teams',
    teams
  });
});

app.get('/trainingszeiten', (req, res) => {
  res.render('layout', {
    title: 'Termine',
    currentPage: 'schedule',
    template: 'pages/schedule',
    schedule: schedulePage
  });
});

app.get('/news', (req, res) => {
  res.redirect('/#news');
});

app.get('/news/:slug', (req, res) => {
  const article = newsEntries.find((entry) => entry.slug === req.params.slug);

  if (!article) {
    res.status(404).send('Newsartikel nicht gefunden');
    return;
  }

  res.render('layout', {
    title: article.title,
    currentPage: 'news',
    template: 'pages/news-detail',
    article
  });
});

app.get('/kontakt', (req, res) => {
  res.render('layout', {
    title: 'Kontakt',
    currentPage: 'contact',
    template: 'pages/contact',
    contact
  });
});

app.get('/impressum', (req, res) => {
  res.render('layout', {
    title: 'Impressum',
    currentPage: 'legal',
    template: 'pages/impressum',
    legal
  });
});

app.get('/datenschutz', (req, res) => {
  res.render('layout', {
    title: 'Datenschutz',
    currentPage: 'legal',
    template: 'pages/datenschutz',
    legal
  });
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Teutonia Elsass-Lotgrillen läuft auf http://localhost:${PORT}`);
  });
}

module.exports = app;
