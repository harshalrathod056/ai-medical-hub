* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --bg: #071521;
  --panel: #0f1d2b;
  --panel-strong: #122638;
  --panel-soft: #152e40;
  --card: rgba(19, 36, 52, 0.82);
  --line: rgba(255, 255, 255, 0.06);
  --text: #eaf5ff;
  --muted: #9fb3c7;
  --primary: #59d5ff;
  --primary-strong: #1ec7ff;
  --green: #39d39c;
  --yellow: #ffc857;
  --red: #ff6f7d;
  --purple: #7d8fff;
  --shadow: 0 28px 80px rgba(6, 19, 30, 0.45);
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: "Inter", sans-serif;
  background:
    radial-gradient(circle at top left, rgba(89, 213, 255, 0.18), transparent 28%),
    radial-gradient(circle at bottom right, rgba(57, 211, 156, 0.12), transparent 24%),
    var(--bg);
  color: var(--text);
}

img {
  max-width: 100%;
  display: block;
}

button,
input {
  font: inherit;
}

button {
  border: none;
  cursor: pointer;
}

.page-shell {
  min-height: 100vh;
}

.container {
  width: min(1180px, calc(100% - 32px));
  margin: 0 auto;
}

.section-space {
  padding-top: 110px;
}

.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 0 18px;
}

.logo-wrap {
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 700;
  letter-spacing: 0.02em;
}

.logo-mark {
  width: 28px;
  height: 28px;
  display: grid;
  place-items: center;
  border-radius: 10px;
  background: linear-gradient(135deg, var(--primary), var(--green));
  color: #03161f;
  font-weight: 800;
  box-shadow: 0 12px 30px rgba(89, 213, 255, 0.45);
}

.main-nav {
  display: flex;
  align-items: center;
  gap: 28px;
}

.main-nav a {
  color: var(--muted);
  text-decoration: none;
  font-size: 0.96rem;
  transition: color 0.2s ease;
}

.main-nav a:hover {
  color: var(--text);
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 0 22px;
  border-radius: 14px;
  font-weight: 600;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.btn:hover {
  transform: translateY(-1px);
}

.btn-primary {
  background: linear-gradient(135deg, var(--primary), var(--primary-strong));
  color: #03161f;
  box-shadow: 0 20px 40px rgba(89, 213, 255, 0.28);
}

.btn-secondary,
.btn-light {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--line);
  color: var(--text);
}

.hero {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  align-items: center;
  gap: 48px;
  padding-top: 52px;
}

.eyebrow {
  display: inline-block;
  margin-bottom: 18px;
  font-size: 0.75rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--primary);
  font-weight: 700;
}

.hero-copy h1 {
  font-size: clamp(2.6rem, 5vw, 5rem);
  line-height: 1.02;
  letter-spacing: -0.06em;
  max-width: 620px;
}

.hero-copy p {
  margin-top: 18px;
  color: var(--muted);
  font-size: 1.08rem;
  line-height: 1.7;
  max-width: 610px;
}

.cta-row {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 30px;
}

.trust-row {
  display: flex;
  align-items: center;
  gap: 30px;
  margin-top: 38px;
}

.trust-row div {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.trust-row strong {
  font-size: 1.7rem;
}

.trust-row span {
  color: var(--muted);
  font-size: 0.85rem;
}

.glass {
  background: rgba(17, 34, 47, 0.8);
  border: 1px solid var(--line);
  box-shadow: var(--shadow);
  border-radius: 28px;
  backdrop-filter: blur(14px);
}

.hero-panel {
  display: flex;
  justify-content: center;
}

.report-card {
  width: min(100%, 460px);
  padding: 24px;
}

.card-header,
.patient-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.muted {
  color: var(--muted);
  font-size: 0.76rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 6px;
}

.card-header h3,
.patient-header h3 {
  font-size: 1.35rem;
}

.status {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 32px;
  padding: 0 10px;
  border-radius: 999px;
  font-size: 0.8rem;
  font-weight: 700;
}

.status-good {
  background: rgba(57, 211, 156, 0.14);
  color: var(--green);
}

.status-warning {
  background: rgba(255, 200, 87, 0.15);
  color: var(--yellow);
}

.report-metrics,
.patient-stats {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
  margin-top: 22px;
}

.report-metrics div,
.patient-stats div {
  padding: 14px 12px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--line);
}

.report-metrics label,
.patient-stats label {
  display: block;
  color: var(--muted);
  font-size: 0.7rem;
  margin-bottom: 8px;
}

.report-metrics strong,
.patient-stats strong {
  font-size: 1rem;
}

.mini-chart {
  margin-top: 28px;
  height: 150px;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  align-items: end;
  gap: 10px;
  padding: 18px 8px 6px;
  border-radius: 18px;
  background: linear-gradient(180deg, rgba(89, 213, 255, 0.1), rgba(255, 255, 255, 0.02));
}

.mini-chart span {
  display: block;
  border-radius: 999px 999px 0 0;
  background: linear-gradient(180deg, var(--primary), var(--green));
}

.stats-bar {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
  margin-top: 20px;
}

.stat-box {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px 22px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--line);
}

.stat-icon {
  width: 48px;
  height: 48px;
  display: grid;
  place-items: center;
  border-radius: 14px;
  background: rgba(89, 213, 255, 0.12);
  font-size: 1.4rem;
}

.stat-box strong {
  display: block;
  margin-bottom: 4px;
}

.stat-box small {
  color: var(--muted);
}

.section-heading {
  text-align: center;
  margin-bottom: 26px;
}

.section-heading.left {
  text-align: left;
}

.section-heading h2 {
  font-size: clamp(2rem, 3vw, 3rem);
  letter-spacing: -0.05em;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 22px;
}

.feature-card {
  padding: 26px 20px;
}

.icon-box {
  width: 56px;
  height: 56px;
  border-radius: 16px;
  display: grid;
  place-items: center;
  font-size: 1.5rem;
  margin-bottom: 18px;
}

.icon-box.cyan {
  background: rgba(89, 213, 255, 0.12);
}

.icon-box.green {
  background: rgba(57, 211, 156, 0.12);
}

.icon-box.purple {
  background: rgba(125, 143, 255, 0.12);
}

.icon-box.orange {
  background: rgba(255, 200, 87, 0.12);
}

.feature-card h3 {
  margin-bottom: 10px;
}

.feature-card p {
  color: var(--muted);
  line-height: 1.7;
}

.dashboard-grid {
  display: grid;
  grid-template-columns: 1.4fr 0.6fr;
  gap: 22px;
}

.dashboard-main,
.sidebar {
  padding: 22px;
}

.patient-stats {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.chart-panel {
  margin-top: 22px;
  background: rgba(15, 29, 43, 0.9);
  border: 1px solid var(--line);
  border-radius: 20px;
  padding: 18px 12px 8px;
}

.chart-lines {
  height: 160px;
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  align-items: end;
  gap: 14px;
}

.chart-lines span {
  display: block;
  height: var(--h);
  border-radius: 12px 12px 0 0;
  background: linear-gradient(180deg, var(--green), var(--primary));
}

.summary-card {
  padding: 20px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--line);
}

.summary-card + .summary-card {
  margin-top: 18px;
}

.summary-card ul {
  list-style: none;
  margin-top: 12px;
  display: grid;
  gap: 10px;
  color: var(--muted);
}

.summary-card ul li::before {
  content: "•";
  color: var(--primary);
  margin-right: 8px;
}

.summary-card.alt strong {
  display: block;
  font-size: 1.1rem;
  margin-bottom: 8px;
}

.summary-card.alt small {
  color: var(--muted);
  line-height: 1.7;
}

.upload-box {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  padding: 28px;
}

.upload-copy h2 {
  font-size: clamp(2rem, 3vw, 3rem);
  letter-spacing: -0.05em;
}

.upload-copy p {
  margin-top: 18px;
  color: var(--muted);
  line-height: 1.8;
}

.upload-panel {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.dropzone {
  display: block;
  width: 100%;
  border: 1px dashed rgba(89, 213, 255, 0.6);
  border-radius: 24px;
  background: rgba(89, 213, 255, 0.04);
  padding: 26px 20px;
  cursor: pointer;
}

.dropzone input {
  display: none;
}

.drop-inner {
  display: grid;
  place-items: center;
  text-align: center;
  gap: 8px;
  min-height: 190px;
}

.big-icon {
  font-size: 2.5rem;
}

.drop-inner small {
  color: var(--muted);
}

.file-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 12px 14px;
  border-radius: 16px;
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.02);
}

#file-name {
  color: var(--muted);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.result-grid {
  display: grid;
  grid-template-columns: 1.4fr 0.5fr 1fr;
  gap: 20px;
  padding: 20px;
}

.result-block,
.risk-box {
  padding: 18px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--line);
}

.result-block h3 {
  font-size: 1.08rem;
  line-height: 1.8;
  color: var(--text);
  font-weight: 500;
}

.result-block ul {
  display: grid;
  gap: 10px;
  color: var(--muted);
  margin-top: 12px;
  padding-left: 18px;
  line-height: 1.6;
}

.risk-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: rgba(255, 200, 87, 0.08);
  border-color: rgba(255, 200, 87, 0.25);
}

#riskLevel {
  margin-top: 6px;
  font-size: 2rem;
  color: var(--yellow);
}

#riskNote {
  margin-top: 10px;
  color: var(--muted);
  line-height: 1.6;
}

.timeline-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 22px;
}

.timeline-item {
  padding: 24px 20px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--line);
}

.step-number {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: 12px;
  background: rgba(89, 213, 255, 0.12);
  color: var(--primary);
  font-weight: 700;
  margin-bottom: 18px;
}

.timeline-item h3 {
  margin-bottom: 10px;
}

.timeline-item p {
  color: var(--muted);
  line-height: 1.7;
}

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
}

.price-card {
  position: relative;
  padding: 28px 22px;
}

.price-card.featured {
  border-color: rgba(89, 213, 255, 0.42);
  transform: translateY(-6px);
}

.featured-badge {
  position: absolute;
  top: 14px;
  right: 16px;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #02141b;
  background: linear-gradient(135deg, var(--primary), var(--green));
  padding: 7px 10px;
  border-radius: 999px;
}

.price-card h3 {
  margin-bottom: 18px;
}

.price {
  font-size: 2.3rem;
  letter-spacing: -0.06em;
  margin-bottom: 18px;
  font-weight: 700;
}

.price span {
  font-size: 1rem;
  color: var(--muted);
}

.price-card ul {
  list-style: none;
  display: grid;
  gap: 12px;
  color: var(--muted);
  margin-bottom: 20px;
}

.price-card li::before {
  content: "✓";
  color: var(--green);
  margin-right: 8px;
}

.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 18px;
  padding: 40px 0 60px;
  color: var(--muted);
  border-top: 1px solid var(--line);
  margin-top: 60px;
}

@media (max-width: 980px) {
  .hero,
  .upload-box,
  .dashboard-grid,
  .result-grid,
  .pricing-grid,
  .feature-grid,
  .timeline-grid {
    grid-template-columns: 1fr;
  }

  .main-nav {
    display: none;
  }

  .stats-bar,
  .report-metrics,
  .patient-stats {
    grid-template-columns: 1fr;
  }

  .trust-row {
    flex-wrap: wrap;
  }

  .footer {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (max-width: 560px) {
  .topbar {
    flex-wrap: wrap;
    gap: 18px;
  }

  .nav-actions {
    width: 100%;
  }

  .nav-actions .btn {
    flex: 1;
  }

  .cta-row {
    flex-direction: column;
    align-items: stretch;
  }

  .btn {
    width: 100%;
  }

  .hero-copy h1 {
    font-size: 2.6rem;
  }
}























































































































































































 "},{