# SEO Analyse – 2git.de (Main + Branch Sites ` /breazee `, ` /senet `)

Stand: Repository-Review auf Basis der aktuellen HTML-, `robots.txt`- und `sitemap.xml`-Struktur.

## 1) Kurzfazit

Die technische Basis ist solide (Title/Description/Canonical sind auf fast allen relevanten Seiten vorhanden), aber das SEO-Niveau ist **uneinheitlich**:

- **`/senet` ist deutlich weiter** (OG/Twitter/JSON-LD vorhanden).
- **`/breazee` ist inhaltlich gut, aber Metadaten schwächer** (kaum Social-Meta/Structured Data).
- **Main-Site (`/`) wirkt wie eine Visitenkarte**, könnte aber als stärkere Hub-Seite für Brand + Product SEO genutzt werden.
- **Crawler-Steuerung ist teils widersprüchlich** (Noindex *und* Robots-Disallow) und die Sitemap enthält potenziell nicht existente oder nicht indexierbare Ziele.

---

## 2) Stärken (bereits gut umgesetzt)

1. **Saubere Canonicals** auf den meisten Seiten.
2. **Klarer Seitenfokus** durch eigene Landingpages je Produkt.
3. **Sprechende URL-Struktur** (z. B. `/breazee/breathing-techniques/...`, `/senet/howtoplay/`).
4. **Indexierbare Content-Seiten** mit sinnvollen H1/H2-Strukturen (insb. Senet und Breazee-Technique-Seiten).

---

## 3) Hauptprobleme & Optimierungspotenziale

## 3.1 Information Architecture / Indexing

### A) `sitemap.xml` enthält fragliche URL(s)

- In der Sitemap steht `https://2git.de/hiitrix/`, im Repo existiert aber kein entsprechender Ordner/Content.
- Risiko: Soft-404/404-Signale in der Search Console, unnötiges Crawl-Budget.

**Empfehlung:**
- Nur tatsächlich live verfügbare, indexierbare URLs in die Sitemap.
- Optional: automatische Sitemap-Generierung aus den existierenden Seiten.

### B) Sitemap und Indexing-Signale nicht vollständig konsistent

- `senet/privacy` ist in der Sitemap enthalten, aber als `noindex` markiert.
- Mehrere Legal-Seiten sind in `robots.txt` disallowed **und** tragen `noindex`.

**Warum kritisch:**
- `Disallow` kann verhindern, dass Crawler die `noindex`-Direktive überhaupt lesen.
- Empfehlung von Google: Für sichere Deindexierung eher **crawlbar + noindex** statt blockieren.

**Empfehlung:**
- Für Legal-Seiten klare Strategie wählen:
  - Entweder indexierbar lassen (bei juristischem Bedarf),
  - oder crawlbar lassen + `noindex,follow` (ohne Disallow),
  - und dann aus Sitemap entfernen.

---

## 3.2 Metadata & SERP CTR

### A) Main-Site (`/`) ohne vollständige Social Preview Meta

- OG ist nur teilweise gesetzt (kein vollständiges `og:title`, `og:description`, `og:image`).
- Keine Twitter-Card-Metadaten.

**Potenzial:**
- Deutlich bessere Link-Previews bei Shares (Slack, X, iMessage, LinkedIn, etc.).

### B) Breazee-Seiten: gute Basis, aber wenig OpenGraph/Twitter

- Startseite hat OG-Basis, aber kein ausgebautes Social-Pack (z. B. `og:image`, Twitter Card).
- Unterseiten besitzen meist keine OG/Twitter-Metas.

**Empfehlung:**
- Pro indexierbare Landingpage ein minimales Social-Meta-Set.

### C) Uneinheitliche Sprachsignale

- Hauptseite `lang="en"`, Inhalte/Title aber teilweise deutsch.
- Gemischte Sprache kann Relevanzsignale für Suchintention verwässern.

**Empfehlung:**
- Entweder klare Primärsprache je Seite (`lang=de` oder `lang=en`),
- oder echte Mehrsprachigkeit mit dedizierten Sprach-URLs + `hreflang`.

---

## 3.3 Structured Data

### A) Senet nutzt bereits JSON-LD (positiv)

- Das ist ein klarer Vorteil gegenüber den anderen Bereichen.

### B) Main + Breazee ohne gleichwertige strukturierte Daten

**Empfehlung:**
- Main: `Organization` + `WebSite`.
- Produktseiten: `SoftwareApplication` mit Plattform, Kategorie, ggf. Preis/OS.
- Support-Seiten: optional `FAQPage` (wenn echte Q&A-Struktur vorhanden).

---

## 3.4 Onpage / Content Quality

### A) Duplicate/mehrfache H1 auf einzelnen Legal-Seiten

- Auf einigen Seiten sind zwei `h1` vorhanden (Hero + Seitentitel im Content).

**Empfehlung:**
- Pro Seite genau eine inhaltliche Haupt-H1, weitere Überschriften als H2/H3.

### B) Dünne oder funktionale Seiten

- `breazee/start/` ist `noindex` und wirkt wie technische/alternative Einstiegsseite.

**Empfehlung:**
- Entweder konsequent als non-indexierte Utility-URL belassen,
- oder klaren Nutzen/Content schaffen und sauber indexieren.

### C) Interne Verlinkung als Topic-Cluster ausbauen

- Breazee-Technique-Seiten könnten stärker untereinander verlinken (Vergleich, Einsatzfall, Zielgruppe).
- Senet könnte von `/howtoplay/` stärker auf Hauptseite/App-Store zurückführen (Conversion + Kontext).

---

## 3.5 Technische SEO / Performance-Signale

### A) Bildattribute (Core Web Vitals)

- Einige `<img>` ohne feste `width`/`height` (potenzielles CLS-Risiko).

**Empfehlung:**
- Dimensionsangaben ergänzen (mind. Above-the-fold Assets).
- Für LCP-relevante Bilder ggf. `fetchpriority="high"` prüfen.

### B) Einheitliche Meta-Richtlinien als Template

- Derzeit variiert die Head-Qualität je Bereich deutlich.

**Empfehlung:**
- Ein gemeinsames SEO-Template definieren (Title-Länge, Description, OG/Twitter, Canonical, Robots, JSON-LD-Bausteine).

---

## 4) Priorisierte Roadmap (Impact × Aufwand)

## Quick Wins (1–2 Tage)

1. `sitemap.xml` bereinigen (nur indexierbare URLs, tote Ziele entfernen).
2. `robots.txt`-Strategie konsistent machen (Noindex vs. Disallow auflösen).
3. Main + Breazee um OG/Twitter-Basis ergänzen.
4. Sprachsignal auf der Main-Site korrigieren (`lang` + Sprachkonsistenz).

## Mid-Term (3–7 Tage)

1. JSON-LD für Main und Breazee ergänzen (`Organization`, `SoftwareApplication`).
2. H1-Hierarchie auf Legal-/Supportseiten vereinheitlichen.
3. Bild-Dimensionen für kritische Assets nachziehen.
4. Interne Verlinkung entlang von Themenclustern stärken.

## Strategic (laufend)

1. Content-Hubs aufbauen:
   - Breazee: wissenschaftlich fundierte Atemtechnik-Guides.
   - Senet: Regeln, Strategietipps, Varianten, FAQ.
2. Keyword-Set je Bereich definieren (Brand + Non-Brand + Problem/Solution).
3. Search Console + Performance-Monitoring als monatlichen Prozess etablieren.

---

## 5) Messbare KPI-Ziele

- +20–40 % Impressions auf Non-Brand-Queries (3–6 Monate).
- Bessere CTR durch optimierte Snippets/Social Cards.
- Reduktion von Crawling-Warnungen (404/Excluded-Konflikte).
- Mehr organische Einstiege über Unterseiten (`/howtoplay/`, Breathing-Techniques-Cluster).

---

## 6) Konkrete nächste Umsetzungsschritte (empfohlen)

1. **Sitemap/Robots Cleanup PR**
   - Sitemap neu aufsetzen
   - Robots-Regeln konsolidieren
2. **Metadata Standardization PR**
   - Einheitliche OG/Twitter-Felder
   - Main + Breazee angleichen auf Senet-Qualitätsniveau
3. **Structured Data PR**
   - JSON-LD auf Main/Breazee ergänzen
4. **Onpage Hygiene PR**
   - H1-Bereinigung, Bild-Dimensionen, interne Links

Diese vier PRs sind klein genug für schnelles Iterieren und groß genug für direkt messbaren SEO-Effekt.
