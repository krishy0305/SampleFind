/* eslint-disable @next/next/no-img-element */

import { Sparkles } from "lucide-react";

const MAC_DOWNLOAD =
  "https://github.com/krishy0305/SampleFind/releases/download/v0.1.6/SampleFind-0.1.6-arm64.dmg";
const WINDOWS_DOWNLOAD =
  "https://github.com/krishy0305/SampleFind/releases/download/v0.1.6/SampleFind-Setup-0.1.6-x64.exe";
const GITHUB_URL = "https://github.com/krishy0305/SampleFind";

const features = [
  {
    number: "01",
    eyebrow: "Understand",
    title: "Search how producers think",
    description:
      "Describe a sound, name an instrument, enter a key or BPM, or combine them. SampleFind turns producer language into focused audio results.",
    example: "“dark darbuka loop in A minor”",
  },
  {
    number: "02",
    eyebrow: "Organize",
    title: "Turn folders into a library",
    description:
      "Index the folders you choose while your original audio stays exactly where it is. Sources remain manageable, rescannable, and removable.",
    example: "Local files. Structured metadata.",
  },
  {
    number: "03",
    eyebrow: "Create",
    title: "Move from search to session",
    description:
      "Preview sounds instantly, favorite the best matches, then drag audio directly into supported DAWs without breaking your creative flow.",
    example: "Find → preview → drag into DAW",
  },
  {
    number: "04",
    eyebrow: "Control",
    title: "Filter like a producer",
    description:
      "Layer sample type, category, key, BPM, and favorites to narrow a large library without losing the intent of the search.",
    example: "Drums · one shot · 140 BPM",
  },
] as const;

const aiLayers = [
  {
    index: "A",
    title: "Deterministic signals",
    description:
      "Exact filenames, aliases, sample type, key, BPM, categories, and user corrections establish high-confidence relevance.",
  },
  {
    index: "B",
    title: "Audio–text intelligence",
    description:
      "LAION-CLAP embeddings connect natural-language descriptions to what an audio sample actually sounds like.",
  },
  {
    index: "C",
    title: "Query-aware ranking",
    description:
      "Specific instrument queries stay precise while broad regional or musical searches intentionally widen the result set.",
  },
  {
    index: "D",
    title: "Human-in-the-loop control",
    description:
      "Manual reclassification stays private to the user and improves their library without silently retraining global behavior.",
  },
] as const;

const stack = [
  "LAION-CLAP",
  "Librosa",
  "scikit-learn",
  "ChromaDB",
  "FastAPI",
  "Python",
  "SQLite",
  "Next.js",
  "React",
  "TypeScript",
  "Electron",
  "Firebase Auth",
] as const;

function Brand() {
  return (
    <a className="brand" href="#top" aria-label="SampleFind home">
      <span className="brand-mark">
        <img src="/samplefind-logo.svg" alt="" width="42" height="42" />
      </span>
      <span>SAMPLEFIND</span>
    </a>
  );
}

function ArrowIcon() {
  return <span aria-hidden="true">↗</span>;
}

function PlayIcon() {
  return <span className="play-icon" aria-hidden="true" />;
}

function Waveform({ compact = false }: { compact?: boolean }) {
  const bars = compact
    ? [10, 18, 26, 15, 22, 10, 19, 28, 16, 22, 11, 18, 26, 14, 21, 9]
    : [
        14, 24, 41, 22, 48, 31, 18, 38, 50, 26, 42, 20, 34, 47, 25, 17, 36,
        28, 44, 21, 39, 16, 31, 46, 24, 37, 19, 29, 43, 22, 34, 15,
      ];

  return (
    <span className={`waveform ${compact ? "waveform-compact" : ""}`} aria-hidden="true">
      {bars.map((height, index) => (
        <span
          key={`${height}-${index}`}
          style={
            {
              "--bar-height": `${height}px`,
              "--bar-delay": `${index * -0.07}s`,
            } as React.CSSProperties
          }
        />
      ))}
    </span>
  );
}

function ProductPreview() {
  return (
    <div className="product-stage" aria-label="SampleFind product preview">
      <div className="product-glow" />
      <div className="app-window">
        <div className="window-bar app-preview-nav">
          <div className="window-brand">
            <img src="/samplefind-logo.svg" alt="" width="30" height="30" />
            <span>SAMPLEFIND</span>
          </div>
          <div className="preview-nav-tabs" aria-hidden="true">
            <span>Scan</span>
            <span className="preview-nav-active">Library</span>
          </div>
          <div className="window-avatar">K</div>
        </div>

        <div className="preview-search-row">
          <span className="preview-filter-glyph" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <div className="search-box">
            <span className="search-glyph" aria-hidden="true" />
            <span className="search-query">grand piano melody</span>
          </div>
          <span className="preview-search-button">Search</span>
        </div>

        <div className="app-content">
          <div className="preview-library-card">
            <span className="preview-card-rule" />
            <div className="app-heading">
              <div>
                <span className="app-kicker">YOUR SOUND LIBRARY</span>
                <strong>Your sample library, organized.</strong>
                <p>Search, filter, favorite, and preview every local sound.</p>
              </div>
            </div>
          </div>

          <div className="result-summary preview-result-toolbar">
            <span>
              <strong>42</strong> results matched “grand piano melody”
            </span>
            <div aria-hidden="true">
              <span>Favorites</span>
              <span>Latest to oldest</span>
            </div>
          </div>

          <div className="sample-table">
            <div className="preview-table-header" aria-hidden="true">
              <span>File</span>
              <span>Tags</span>
              <span>Duration</span>
              <span>Key</span>
              <span>BPM</span>
            </div>
            <div className="sample-row featured">
              <button aria-label="Pause grand piano melody">
                <span className="pause-icon" aria-hidden="true" />
              </button>
              <div className="sample-name">
                <strong>Grand_Piano_Melody_Cm_92.wav</strong>
                <span>Concert grand · expressive melody</span>
              </div>
              <div className="preview-tags">
                <span className="tag tag-instrument">Piano</span>
                <span className="tag tag-type">Loop</span>
              </div>
              <span className="meta">0:13</span>
              <span className="meta">Cm</span>
              <span className="meta">92</span>
            </div>
            <div className="sample-row">
              <button aria-label="Play concert grand arpeggio">
                <PlayIcon />
              </button>
              <div className="sample-name">
                <strong>Concert_Grand_Arpeggio_Gm_90.wav</strong>
                <span>Concert grand · flowing arpeggio</span>
              </div>
              <div className="preview-tags">
                <span className="tag tag-instrument">Piano</span>
                <span className="tag tag-type">Loop</span>
              </div>
              <span className="meta">0:16</span>
              <span className="meta">Gm</span>
              <span className="meta">90</span>
            </div>
            <div className="sample-row">
              <button aria-label="Play felt grand piano motif">
                <PlayIcon />
              </button>
              <div className="sample-name">
                <strong>Felt_Grand_Piano_Motif_Gm_94.wav</strong>
                <span>Soft felt piano · melodic motif</span>
              </div>
              <div className="preview-tags">
                <span className="tag tag-instrument">Piano</span>
                <span className="tag tag-type">Loop</span>
              </div>
              <span className="meta">0:11</span>
              <span className="meta">Gm</span>
              <span className="meta">94</span>
            </div>
            <div className="sample-row">
              <button aria-label="Play warm grand piano chords">
                <PlayIcon />
              </button>
              <div className="sample-name">
                <strong>Warm_Grand_Chords_Am_92.wav</strong>
                <span>Warm grand piano · chord phrase</span>
              </div>
              <div className="preview-tags">
                <span className="tag tag-instrument">Piano</span>
                <span className="tag tag-type">Loop</span>
              </div>
              <span className="meta">0:12</span>
              <span className="meta">Am</span>
              <span className="meta">92</span>
            </div>
            <div className="sample-row">
              <button aria-label="Play classical grand piano phrase">
                <PlayIcon />
              </button>
              <div className="sample-name">
                <strong>Classical_Grand_Phrase_Fm_96.wav</strong>
                <span>Classical grand · lyrical phrase</span>
              </div>
              <div className="preview-tags">
                <span className="tag tag-instrument">Piano</span>
                <span className="tag tag-type">Loop</span>
              </div>
              <span className="meta">0:15</span>
              <span className="meta">Fm</span>
              <span className="meta">96</span>
            </div>
          </div>
        </div>

        <div className="player-bar">
          <button aria-label="Pause sample">
            <span className="pause-icon" />
          </button>
          <div className="preview-player-content">
            <span className="preview-player-file">
              <strong>Grand_Piano_Melody_Cm_92.wav</strong>
            </span>
            <div className="preview-progress-row">
              <span>0:07</span>
              <span
                className="preview-progress-track"
                role="progressbar"
                aria-label="Sample playback progress"
                aria-valuemin={0}
                aria-valuemax={13}
                aria-valuenow={7}
              >
                <i />
                <b />
              </span>
              <span>0:13</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main id="top">
      <header className="site-header">
        <div className="nav-shell">
          <Brand />
          <nav aria-label="Primary navigation">
            <a href="#product">Product</a>
            <a href="#demo">Demo</a>
            <a href="#ai">AI system</a>
            <a href={GITHUB_URL} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </nav>
          <a className="nav-github" href="#downloads">
            Download beta <span aria-hidden="true">↓</span>
          </a>
        </div>
      </header>

      <section className="hero">
        <div className="ambient-grid" aria-hidden="true" />
        <div className="hero-layout section-shell">
          <div className="hero-copy">
            <div className="hero-status">
              <span />
              Local sample libraries, finally searchable
            </div>
            <h1>
              Find the right sound before the <span>idea disappears.</span>
            </h1>
            <p>
              Scan local sample folders, classify sounds with AI, extract BPM,
              key, and duration, then search thousands of loops, one-shots,
              drums, vocals, FX, and instruments from one producer-focused
              library.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#downloads">
                Download SampleFind <span aria-hidden="true">→</span>
              </a>
              <a className="button button-secondary" href="#demo">
                <PlayIcon />
                Watch product demo
              </a>
            </div>
            <div className="hero-proof" aria-label="Product capabilities">
              <span>
                <i className="proof-dot" />
                <span>
                  <small>LOCAL INDEXING</small>
                  <strong>Original files stay put</strong>
                </span>
              </span>
              <span>
                <i className="proof-spark" aria-hidden="true">
                  <Sparkles size={21} strokeWidth={1.9} />
                </i>
                <span>
                  <small>AUDIO-AWARE AI</small>
                  <strong>Search by how it sounds</strong>
                </span>
              </span>
              <span>
                <i className="proof-meta" aria-hidden="true">♩</i>
                <span>
                  <small>PRODUCER METADATA</small>
                  <strong>BPM, key, type, and tags</strong>
                </span>
              </span>
            </div>
          </div>
          <ProductPreview />
        </div>
      </section>

      <section className="signal-strip" aria-label="SampleFind capabilities">
        <div className="signal-copy">ONE LIBRARY · ANY SOUND · ZERO FOLDER DIVING</div>
        <Waveform />
        <div className="signal-copy signal-copy-right">SEARCH · PREVIEW · CREATE</div>
      </section>

      <section className="section section-problem" id="product">
        <div className="section-shell">
          <div className="problem-grid">
            <div className="section-heading">
              <span className="eyebrow">THE PROBLEM</span>
              <h2>Your best sounds shouldn’t be buried in folders.</h2>
            </div>
            <div className="problem-copy">
              <p>
                Sample libraries grow fast. Filenames become inconsistent,
                categories overlap, and auditioning folders one by one interrupts
                the moment when an idea is taking shape.
              </p>
              <p>
                SampleFind turns scattered audio into one intelligent, searchable
                production library—without moving or uploading the original files.
              </p>
            </div>
          </div>

          <div className="feature-grid">
            {features.map((feature) => (
              <article className="feature-card" key={feature.number}>
                <div className="card-topline">
                  <span>{feature.number}</span>
                  <span>{feature.eyebrow}</span>
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <div className="feature-example">{feature.example}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-demo" id="demo">
        <div className="section-shell">
          <div className="demo-heading">
            <div className="section-heading">
              <span className="eyebrow">PRODUCT WALKTHROUGH</span>
              <h2>See the complete workflow.</h2>
            </div>
            <p>
              From scanning a folder to finding a focused result and moving it
              into a DAW—this demo shows the working desktop product end to end.
            </p>
          </div>
          <div className="video-frame">
            <div className="video-chrome">
              <span />
              <span>SampleFind product demo</span>
              <a
                href="https://youtu.be/dqzIDlK9UwU"
                target="_blank"
                rel="noreferrer"
              >
                Open on YouTube <ArrowIcon />
              </a>
            </div>
            <div className="video-ratio">
              <iframe
                src="https://www.youtube.com/embed/dqzIDlK9UwU?rel=0"
                title="SampleFind product demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section section-ai" id="ai">
        <div className="section-shell">
          <div className="ai-intro">
            <div className="section-heading">
              <span className="eyebrow">APPLIED MULTIMODAL AI</span>
              <h2>Relevance is a system, not a single model call.</h2>
            </div>
            <p>
              SampleFind combines fast, explainable signals with semantic audio
              understanding. Exact metadata stays precise; broader creative
              language can reach beyond the filename.
            </p>
          </div>

          <div className="ai-layout">
            <div className="pipeline" aria-label="SampleFind retrieval pipeline">
              <div className="pipeline-header">
                <span>QUERY PIPELINE</span>
                <span>LOCAL</span>
              </div>
              <div className="query-chip">“grand piano melody, 92 BPM”</div>
              <div className="pipeline-branches">
                <div>
                  <span className="branch-label">TEXT + METADATA</span>
                  <strong>Exact signals</strong>
                  <small>filename · key · BPM · type</small>
                </div>
                <span className="branch-plus">+</span>
                <div>
                  <span className="branch-label">AUDIO EMBEDDING</span>
                  <strong>Semantic meaning</strong>
                  <small>timbre · instrument · character</small>
                </div>
              </div>
              <div className="pipeline-arrow" aria-hidden="true">↓</div>
              <div className="ranking-box">
                <span>QUERY-AWARE HYBRID RANKING</span>
                <div className="ranking-meter">
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                </div>
              </div>
              <div className="pipeline-arrow" aria-hidden="true">↓</div>
              <div className="focused-result">
                <span className="result-play"><PlayIcon /></span>
                <span>
                  <strong>Grand_Piano_Melody_Cm_92.wav</strong>
                  <small>Focused result · loop · 92 BPM · C minor</small>
                </span>
                <span>01</span>
              </div>
            </div>

            <div className="ai-layers">
              {aiLayers.map((layer) => (
                <article key={layer.index}>
                  <span>{layer.index}</span>
                  <div>
                    <h3>{layer.title}</h3>
                    <p>{layer.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-engineering">
        <div className="section-shell">
          <div className="engineering-grid">
            <div>
              <span className="eyebrow">ENGINEERED END TO END</span>
              <h2>From audio analysis to desktop distribution.</h2>
              <p>
                SampleFind is a full-stack product spanning background processing,
                retrieval quality, responsive interfaces, authentication, local
                filesystem integration, and cross-platform release engineering.
              </p>
            </div>
            <div className="engineering-points">
              <div>
                <strong>Background scan orchestration</strong>
                <span>Queued folders, persistent progress, cancellation, rollback, and publish-on-completion.</span>
              </div>
              <div>
                <strong>Local data architecture</strong>
                <span>SQLite metadata and user state paired with ChromaDB vector retrieval.</span>
              </div>
              <div>
                <strong>Producer-first desktop workflow</strong>
                <span>Instant preview, layered filters, source management, and file drag-and-drop.</span>
              </div>
              <div>
                <strong>Cross-platform packaging</strong>
                <span>Versioned macOS DMG and Windows NSIS installers delivered through GitHub Releases.</span>
              </div>
            </div>
          </div>

          <div className="stack-section">
            <div className="stack-heading">
              <span className="eyebrow">TECHNOLOGY STACK</span>
            </div>
            <h2
              className="stack-marquee"
              aria-label={`Technology stack: ${stack.join(", ")}`}
            >
              <span className="stack-track" aria-hidden="true">
                {[0, 1].map((sequence) => (
                  <span className="stack-sequence" key={sequence}>
                    {stack.map((technology) => (
                      <span className="stack-tech" key={`${sequence}-${technology}`}>
                        <span>{technology}</span>
                        <i />
                      </span>
                    ))}
                  </span>
                ))}
              </span>
            </h2>
          </div>
        </div>
      </section>

      <section className="section section-downloads" id="downloads">
        <div className="download-glow" aria-hidden="true" />
        <div className="section-shell download-shell">
          <span className="eyebrow">PORTFOLIO BETA · V0.1.6</span>
          <h2>Explore the working desktop product.</h2>
          <p>
            Download the current build for portfolio review and controlled
            testing, or visit the public project repository for the complete
            engineering overview.
          </p>

          <div className="download-options">
            <a className="download-card" href={MAC_DOWNLOAD}>
              <span className="os-mark apple-mark" aria-hidden="true"></span>
              <span>
                <small>DOWNLOAD FOR</small>
                <strong>macOS · Apple Silicon</strong>
              </span>
              <span className="download-action">
                <span className="download-label">DOWNLOAD</span>
                <span className="download-icon" aria-hidden="true">↓</span>
              </span>
            </a>
            <a className="download-card" href={WINDOWS_DOWNLOAD}>
              <span className="os-mark windows-mark" aria-hidden="true">
                <span className="windows-glyph">
                  <i />
                  <i />
                  <i />
                  <i />
                </span>
              </span>
              <span>
                <small>DOWNLOAD FOR</small>
                <strong>Windows · 64-bit</strong>
              </span>
              <span className="download-action">
                <span className="download-label">DOWNLOAD</span>
                <span className="download-icon" aria-hidden="true">↓</span>
              </span>
            </a>

          </div>

          <aside className="beta-note">
            <span className="beta-icon">i</span>
            <div>
              <strong>Portfolio beta—not a publicly supported consumer release.</strong>
              <p>
                The macOS build is not Apple-notarized and the Windows installer
                is unsigned, so your operating system may display a security
                prompt. The product is architected and packaged for an eventual
                public launch; production distribution would add code signing,
                notarization, final QA, legal documentation, and a supported
                update channel.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <footer>
        <div className="section-shell footer-shell">
          <Brand />
          <p>AI-powered sample discovery for music producers.</p>
          <div>
            <a href="#top">Back to top ↑</a>
            <a href={GITHUB_URL} target="_blank" rel="noreferrer">
              GitHub <ArrowIcon />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
