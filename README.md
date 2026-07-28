#[SampleFind](https://samplefind.vercel.app)

**An AI-powered desktop sample manager built for music producers.**

SampleFind turns large, disorganized sample folders into a searchable production
library. Producers can scan their sample folders, search by using natural language, instrument,
category, sound, key, BPM, or sample type, preview results instantly, and drag
audio directly into their DAW.

## Beta downloads

Downloads are provided for portfolio review and controlled testing. They are not
currently notarized, code-signed production releases.

- [Download SampleFind for macOS — Apple Silicon](https://github.com/krishy0305/SampleFind/releases/download/v0.1.6/SampleFind-0.1.6-arm64.dmg)
- [Download SampleFind for Windows — 64-bit](https://github.com/krishy0305/SampleFind/releases/download/v0.1.6/SampleFind-Setup-0.1.6-x64.exe)

## Product demo


[![Watch the SampleFind product demo](https://img.youtube.com/vi/dqzIDlK9UwU/hqdefault.jpg)](https://youtu.be/dqzIDlK9UwU)

**[Watch the complete SampleFind demo →](https://youtu.be/dqzIDlK9UwU)**

## What SampleFind solves

Music producers often accumulate thousands of samples across folders and sample
packs. File names are inconsistent, categories overlap, and manually searching through multiple large folder for the right
sound can be inconvenient and can interrupt the creative process.

SampleFind creates a local-first index and combines filename heuristics, audio
metadata, and semantic audio analysis to deliver focused results for both broad
queries such as `Middle East` and specific searches such as
`darbuka`, `kick one shot`, `high hat loop`, or `A minor melody`.


## Product highlights

- **Local-first indexing** — original audio files remain in the folders selected
  by the user.
- **Hybrid search** — combines filename signals, categories, metadata, and audio
  similarity.
- **Producer-focused filters** — category, one shot, loop, fill, key, BPM, and
  favorites.
- **Background scanning** — persistent progress, queued folders, cancellation,
  rollback, and completion reporting.
- **Audio workflow** — instant previews, global playback controls, and
  drag-and-drop into supported DAWs.
- **Source management** — rescan or remove indexed folders without deleting the
  original files.
- **Cross-platform packaging** — versioned macOS and Windows desktop installers.
- **Account experience** — authentication, profile management, and password
  recovery.

## System overview

```mermaid
flowchart LR
    A["User-selected audio folders"] --> B["Background scanner"]
    B --> C["Metadata + audio analysis"]
    C --> D["Local indexed library"]
    D --> E["Hybrid search and layered filters"]
    E --> F["Preview, favorite, or drag into DAW"]
```

## Technology

- **Audio–text AI:** LAION-CLAP embeddings connect natural-language queries
  with the sound of an audio sample, even when filenames are incomplete.
- **Hybrid retrieval:** semantic similarity is combined with filename
  heuristics, structured metadata, category signals, and ChromaDB vector
  search.
- **Intelligent classification:** model-assisted audio understanding works
  alongside high-confidence rules for instruments, drum parts, loops, one
  shots, and fills.
- **Audio intelligence:** Librosa-based analysis enriches samples with BPM and
  musical-key metadata, with filename metadata taking priority when available.
- **Local data layer:** SQLite manages application metadata, source history,
  classifications, favorites, and user-specific corrections, while ChromaDB
  powers local embedding retrieval.
- **Product stack:** Next.js, React, TypeScript, Tailwind CSS, FastAPI, Python,
  Electron, and Firebase authentication.
- **Release engineering:** GitHub Actions, macOS DMG packaging, and Windows
  NSIS distribution.

## Engineering focus

SampleFind demonstrates end-to-end product development across:

- **Applied multimodal AI** — translating producer language into audio–text
  embeddings that can retrieve samples by what they sound like, not only what
  they are named.
- **Hybrid relevance ranking** — prioritizing exact filename and metadata
  matches while using semantic similarity for broader or unlabeled searches.
- **Query-aware precision** — treating specific instrument searches more
  strictly while allowing wider instrument families and regional categories to
  return appropriately broader results.
- **AI-assisted taxonomy design** — organizing instruments, drum parts,
  effects, regional sounds, and sample types into searchable classifications.
- **Human-in-the-loop correction** — allowing user-specific manual
  reclassification without silently retraining or changing global model
  behavior.
- **Evaluation-driven development** — maintaining representative query sets for
  exact instruments, sound families, genres, BPM, key, aliases, and ambiguous
  producer terminology.
- **Latency-conscious local inference** — keeping search and metadata retrieval
  local while balancing semantic analysis with fast deterministic signals.
- **Reliable background processing** — scan queues, persistent progress,
  cancellation, transactional rollback, and publish-on-completion behavior.
- **Full-stack product engineering** — responsive interfaces, authentication,
  local filesystem integration, cross-platform packaging, and automated
  releases.

## Source availability

This public repository is the home of the SampleFind product showcase, public
documentation, and future landing page. The production desktop application
source is maintained in a private repository. Source access can be provided to
technical interviewers when appropriate.

> [!IMPORTANT]
> **Portfolio beta — not a publicly supported consumer release.**
> SampleFind is a functional cross-platform beta shared for portfolio review and
> controlled evaluation. The current macOS build is not Apple-notarized and the
> Windows installer is unsigned, so operating systems may display security
> prompts. The product is architected and packaged for public deployment, but a
> public launch would additionally require production code signing and
> notarization, final distribution QA, privacy/legal documentation, and a
> supported update channel.

---

Built by [Krishy](https://github.com/krishy0305).
