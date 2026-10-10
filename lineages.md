# Lineages — product clusters with evidence
(All dates, commits, URLs verified against the GitHub API on 2026-10-10; live URLs fetched and content-confirmed the same day.)

## L1 · MediGen → Clinical Journal & AI Studio  ★ FLAGSHIP
Canonical repo: Content-explainer- (29 commits, pushed 2026-10-09) · Live: https://content-explainer.vercel.app (verified, title "Clinical Journal & AI Studio — Cases, slides and study maps, on one clean sheet")

Version chain (created date, commits, live URL checked):
1. Medical-Case-PPT- (2025-07-01) + PPT-Generator_Medical (2025-07-01, 26 commits) — first cut: medical presentations
2. Medical-Case-Analysis (2025-07-04, 22 commits) → best-medical-analysis (2025-07-06, live) → Medical-Case-Diagnosis-v1 (2025-07-06)
3. Medical-Case-V2 (2025-07-06, live) → medical-case-v3 (2025-07-08, live) → medical-case-v4 (2025-07-10 → pushed 2026-08-13, 36 commits, live, branded "MediGen")
4. 2026 re-explosion: Unified-Medical (08-19) · medical-document-v2 (08-21, live) · medical-diagnosis-v3 (08-21→08-28, 22 commits, live) · DiagnosisDesigner (08-20) · MedicalSynthesis (08-28, live) · medigen-clinical-studio (08-30, live) · FullknowledgeBase (08-30→09-02, 26 commits, live — adds "Tree Dissector" knowledge map)
5. Content-explainer- (2026-09-02 → 2026-10-09) — canonical; same file tree as FullknowledgeBase (verified identical file listing, both "Generated from google-gemini/aistudio-repository-template")

Evidence in repo: PROJECT_DESCRIPTION.md, FULL_PROJECT_OVERVIEW.md, FEATURE_IMPLEMENTATION_PLAN.md, 8 Genkit AI flows (ai-diagnosis, answer-clinical-question, generate-slide-content, modify-slides, suggest-new-topics…), Dexie local archive, PPTX/PDF/Word export.

Problem & user (from docs + live copy): medical students/trainees (site copy: "USMLE · NEET-PG · Next Exam Ready") need ranked differentials for cases, teaching decks from topics, and ordered study maps from past questions.

Key decision (documented): evolved from "AI diagnosis" to an integrated studio — diagnosis → slide studio → knowledge map — with client-side export (jsPDF/docx) and a local-first archive so cases work offline (live site copy: "saved on this device", "local Dexie database storage").

Numbers (verifiable): 14 months of iteration · 13+ repos in chain · 6 concurrently live deployments · 29 commits on canonical · 8 AI flows.

## L2 · Document scan & clean
Canonical: adobe-scan-web (2026-08-27→09-02, 7 commits) · Live: https://adobe-scan-web.vercel.app (verified)
Chain: Pdfscanner (2026-08-25; its URL pdfcleaner-smoky.vercel.app is live but shows default title "My Google AI Studio App") → adobe-scan-web → document-cleaner (2026-10-04, live: "DocClean Inverse Optimizer & Batch Restorer") → docclean (2026-10-04, no URL).
Evidence: README — 8-point crop with magnetic handles + 2.5x loupe, Web Worker CV pipeline ("60 FPS"), 5 filters incl. Sauvola local-adaptive thresholding, retouch eraser.
Problem: turn badly photographed/scan­ned documents into clean PDFs.

## L3 · Face Particles 3D
Canonical: faceshare (2026-09-26→10-09, 13 commits) · Live: https://faceshare-one.vercel.app (verified; same app also on faceparticle.vercel.app and threedface.vercel.app)
Chain: particlefacegrok (09-21) → face-particles-3d (09-22, 11 commits, 25 MB) → threedface (09-22→09-26, 14 commits) → facedepth (09-25) → faceshare (canonical, MIT license) → picthreed (09-26).
Evidence: README — MediaPipe FaceLandmarker + Segmenter fully on-device ("100% private, no images leave your device"), 25,000–100,000+ particles, WebGL2 Transform Feedback physics with custom GLSL, assemble/break/wind/vortex/ripple effects, PNG/MP4/WebM export.
Key decision: privacy-first on-device inference + GPU transform feedback instead of CPU simulation.

## L4 · Signature & photo cleaner for exam forms
Signature-and-Photo-resizer-and-cleaner (2026-06-10→11, 15 commits, single index.html) · Live: https://signaturecleaner.vercel.app (verified — mask eraser, invert for dark paper, stroke weight, PNG/JPG/SVG, preset sizes, KB limits). Sister repo with AI generation variant same day (4 commits, no URL).
Problem: online exam forms demand clean, correctly-sized signature/photo files.

## L5 · Cloud Print Kiosk
Canonical: ippPrint (2026-08-24→09-02, 28 commits, 17 MB) · Live: https://web-app-pink-nine.vercel.app (verified, "Cloud Print Kiosk — N-in-1 & Ink-Saver Remote Printing")
Chain: whatsappPdfDownloader (2024-10) → whatsapp-document-downloader (2025-06, Chrome ext) → printing-whatsapp-automation (2026-01) → working_photocopy_automation (2026-01) → ippPrint.
Evidence: README architecture diagram — upload → N-in-1 imposition (1/2/3/4/6/9-in-1) → dark-slide inversion to save toner → Razorpay (UPI/cards) → Cloudflare Worker relay → WebSocket tunnel → Windows agent → Canon imageRUNNER 7105 / Brother / Epson.

## L6 · PDF Answer Hider
AnswerHiding (2026-01-12, 1 commit, live: answer-hiding.vercel.app, verified) → Answer-Hiding (2026-01-12→13, 16 commits — its URL answer-hiding-ijaj.vercel.app returns 404).
Problem: practice competitive-exam PYQ PDFs (Testbook, GaganPratap) without answers visible; click to reveal.

## L7 · Screen Capture Solver
screen-capture-solver (2025-08-05→08, 75 commits — deepest single repo) · Chrome extension, no web URL.
Evidence: README — Alt+S captures any question screenshot, Alt+X selected text → Gemini answer; history persisted in Firebase Firestore with anonymous auth ("survives uninstall").

## L8 · Jev Studio (side, product-thinking showcase)
JevStudio (2026-09-19) · Live: https://explorejev.vercel.app (verified). Designer LLM compiles material into 3–8 frozen calibrated questions; runtime answers in 70–500 ms; "the hard creative step is deciding which questions are worth asking."

## Side projects
Bubble-clock / bubble-pomo (2026-07-15, paired GitHub Pages — Pages URLs unverified, fetcher error) · Moon-earth-eclipse- · Music-visualiser · 3dfloordesign (URL failed verification) · passportphoto · walktalk / Walkitalkie + Study / Study-tracker- (Kotlin) · imageuploadexp · Uploadfolder · PortRadar · studio · Botskipper / automaio / agent-browser (Oct-2026 agent experiments) · scoreboard · youtube-playlist-downloader · Book-reader · Alp-pdf-cbt2-english-to-hindi · Backend-book-ml.

## Excluded
Forks: Breast-Cancer-Analyzer, educative.io_courses, mysterium. Empty/practice: AutomationFramework, eclipse-visualiser, examDocumentJules, portfolio-v2, branchingPractice, gitIgnorePractice, gittutorial, testing, Studytrack, UnitConverter, firstSoloProject.

## Broken / unverified URLs
- answer-hiding-ijaj.vercel.app → 404 (use v1 domain instead)
- 3dfloordesign.vercel.app → fetch error (needs a browser re-check)
- histo.test.woza.work → dead (2021 fork, excluded anyway)
- abhiraj444.github.io/Bubble-clock/ and /bubble-pomo/ → fetcher error (Pages enabled; verify in browser)
- pdfcleaner-smoky.vercel.app → live but default "My Google AI Studio App" title

## READMEs most worth improving
1. Content-explainer- — README is still the Firebase Studio placeholder despite rich internal docs (PROJECT_DESCRIPTION.md etc.). A hiring manager sees the placeholder first.
2. medical-case-v4 — same placeholder README.
3. Signature-and-Photo-resizer-and-cleaner — no README at all (one index.html).
4. Answer-Hiding — no README.
