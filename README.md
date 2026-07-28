# SampleFind

**An AI-powered desktop sample manager built for music producers.**

SampleFind turns large, disorganized sample folders into a searchable production
library. Producers can scan their sample folders, search by using natural language, instrument,
category, sound, key, BPM, or sample type, preview results instantly, and drag
audio directly into their DAW.

## Product demo

[![Watch the SampleFind product demo](https://img.youtube.com/vi/dqzIDlK9UwU?si=9iApeg_87KTGuuSI/maxresdefault.jpg)](https://youtu.be/dqzIDlK9UwU?si=9iApeg_87KTGuuSI)

**[Watch the SampleFind product demo →](https://youtu.be/dqzIDlK9UwU?si=9iApeg_87KTGuuSI)**
v

> [!IMPORTANT]
> **Portfolio beta — not a publicly supported consumer release.**
> SampleFind is a functional cross-platform beta shared for portfolio review and
> controlled evaluation. The current macOS build is not Apple-notarized and the
> Windows installer is unsigned, so operating systems may display security
> prompts. The product is architected and packaged for public deployment, but a
> public launch would additionally require production code signing and
> notarization, final distribution QA, privacy/legal documentation, and a
> supported update channel.

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

- Next.js, React, TypeScript, and Tailwind CSS
- FastAPI and Python
- SQLite and local vector search
- CLAP-based semantic audio analysis
- Electron desktop runtime
- Firebase authentication
- GitHub Actions for native Windows packaging
- macOS DMG and Windows NSIS distribution

## Beta downloads

Downloads are provided for portfolio review and controlled testing. They are not
currently notarized, code-signed production releases.

- [Download SampleFind for macOS — Apple Silicon](https://github.com/krishy0305/SampleFind/releases/download/v0.1.6/SampleFind-0.1.6-arm64.dmg)
- [Download SampleFind for Windows — 64-bit](https://github.com/krishy0305/SampleFind/releases/download/v0.1.6/SampleFind-Setup-0.1.6-x64.exe)

## Engineering focus

SampleFind demonstrates end-to-end product development across:

- responsive product design and complex client-side state;
- background job orchestration and transactional scan publishing;
- applied machine learning and hybrid relevance ranking;
- local data ownership and desktop filesystem integration;
- cross-platform application packaging and release automation.

## Source availability

This public repository is the home of the SampleFind product showcase, public
documentation, and future landing page. The production desktop application
source is maintained in a private repository. Source access can be provided to
technical interviewers when appropriate.

---

Built by [Krishy](https://github.com/krishy0305).
