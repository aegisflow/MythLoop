# 🌌 MythLoop

> **Create Your Own Universe. Local. Private. Infinite Loop.**

[![Stars](https://img.shields.io/github/stars/mythloop/mythloop?style=for-the-badge&logo=github)]()
[![License](https://img.shields.io/github/license/mythloop/mythloop?style=for-the-badge)](LICENSE)
[![Telegram](https://img.shields.io/badge/Telegram-Community-24A1DE?style=for-the-badge&logo=telegram)](https://t.me/mythloop)
[![Release](https://img.shields.io/github/v/release/mythloop/mythloop?style=for-the-badge)](https://github.com/mythloop/mythloop/releases)

---

## ✨ What Is This?

**MythLoop is a personal universe engine that runs 100% on your machine.**

Your choices create consequences. Consequences create new choices. **Infinite loop.**

```
🎨 No-Code Creator    → Define rules visually (never touch code)
🎮 Infinite Gameplay  → Your choices matter, world remembers everything
🖼️ Dynamic Visuals    → Images, voice, sound generated on-the-fly
🔒 Local-First        → Your data stays on your PC, never goes to cloud
🍴 Fork-Friendly      → Modify, extend, share (MIT License)
🧬 Dual SKILL System  → Soul (.md) + Body (.json) = Living integrations
```

---

## 🚀 60-Second Start

### Install

**Windows:**
```powershell
winget install mythloop
# OR download from Releases
```

**macOS:**
```bash
brew install mythloop
# OR download from Releases
```

**Linux:**
```bash
curl -sSfL https://mythloop.dev/install | sh
```

### First Universe in 60 Seconds

1. Open MythLoop
2. Click **"Create New Universe"**
3. Choose a template (Fantasy, Cyberpunk, Mystery...)
4. Click **"Play"** — your universe comes alive

---

## 🎮 Templates

| Name | Genre | Complexity |
|------|-------|------------|
| 🔥 [Emotion Magic](templates/emotions-magic.yaml) | Fantasy | Beginner |
| 🤖 [Digital Karma](templates/cyberpunk-karma.yaml) | Cyberpunk | Intermediate |
| 🎲 [AI Dungeon Master](templates/ai-dungeon-master.yaml) | RPG | Advanced |
| 🐱 [Cat Detective](templates/cat-detective.yaml) | Mystery | Beginner |
| 👑 [Realm Architect](templates/realm-architect.yaml) | Strategy | Advanced |

[📦 Browse All Templates](templates/README.md)

---

## 🧬 Dual SKILL System

**MythLoop SKILLs have a SOUL and a BODY:**

| Layer | Format | Purpose |
|-------|--------|---------|
| 🧠 **Soul** | `skill.md` | Narrative, ethics, context, intent |
| 💪 **Body** | `skill.json` | Permissions, triggers, execution, limits |

### Available SKILLs

| SKILL | Description | Type |
|-------|-------------|------|
| 📂 [File Reader](skills/file-reader/) | Read local files for contextual narratives | Free |
| 🌤️ [Weather API](skills/weather-api/) | Real-world weather affects your universe | Free |
| 🔗 [FluxForge Export](skills/fluxforge-export/) | Export to FluxForge for advanced features | Premium |

[📖 Create Your Own SKILL](docs/skills.md)

---

## 🍴 Forks & Extensions

**Forks are welcome!** Modify, extend, experiment. Just credit MythLoop and link back.

### Community Forks

| Fork | Description | Author |
|------|-------------|--------|
| [MythLoop Mobile](https://github.com/mythloop/mythloop-mobile) | Android/iOS version | @user1 |
| [MythLoop Edu](https://github.com/mythloop/mythloop-edu) | Classroom-focused | @user2 |
| [MythLoop VR](https://github.com/mythloop/mythloop-vr) | Virtual reality experience | @user3 |

**Want your fork featured?** [Submit a PR](CONTRIBUTING.md)

---

## 🌍 Contribute

MythLoop is **built by the community, for the community**.

### Quick Start

1. **Fork** this repository
2. **Clone** your fork
3. **Create a branch** (`git checkout -b feature/amazing-feature`)
4. **Make your changes**
5. **Test locally** (`npm run dev`)
6. **Submit a PR** (review within 48h)

### What You Can Contribute

| Type | How | Difficulty |
|------|-----|------------|
| 🎨 Universe Templates | Add to `templates/` folder | Easy |
| 🌍 Translations | Add/edit `src/renderer/src/i18n/locales.ts` | Easy |
| 🐛 Bug Fixes | Fix issues labeled `bug` | Medium |
| 🧬 SKILLs | Create dual SKILL (.md + .json) | Medium |
| ✨ New Features | Implement features from roadmap | Hard |
| 🍴 Forks | Create your own version | Any |

### Good First Issues

Looking to contribute? Start here:

- [ ] Add a new universe template
- [ ] Translate to your language
- [ ] Create a SKILL integration
- [ ] Improve UI components

[🔍 View All Issues](../../issues)

[📖 Full Contributing Guide](CONTRIBUTING.md)

---

## 🏆 Contributors

**Thank you to everyone who makes MythLoop possible.**

| Name | Contribution |
|------|-------------|
| @Rain012 | Vision + Core |
| @contributor1 | Emotion Magic Template |
| @contributor2 | Translation |
| @contributor3 | File Reader SKILL |

**Want your name here?** Contribute and submit a PR!

[👥 View All Contributors](CONTRIBUTORS.md) • [📊 Contribution Graph](../../graphs/contributors)

---

## 🏗️ Architecture

```
┌─────────────────┐
│   Your PC       │
│  (100% Local)   │
├─────────────────┤
│  MythLoop App   │
│  (Tauri+React)  │
├─────────────────┤
│  Ollama (LLM)   │
│  ComfyUI (Img)  │
│  Piper (TTS)    │
├─────────────────┤
│  Your Data      │
│  (SQLite/JSON)  │
└─────────────────┘
```

**No cloud. No subscriptions. No tracking.**

### Tech Stack

| Layer | Technology |
|-------|------------|
| Desktop App | Tauri (Rust + React) |
| Local LLM | Ollama (Llama-3.1/Gemma-2) |
| Images | ComfyUI / Flux.1 |
| Voice | Piper TTS + Whisper |
| i18n | Single-file (en + community additions) |
| Templates | YAML (human-readable) |
| SKILLs | Dual (.md + .json) |

---

## 📊 Roadmap

| Version | Focus | ETA |
|---------|-------|-----|
| v1.0 | Core engine + visual editor | ✅ Released |
| v1.1 | Community templates + SKILL system | Q2 2026 |
| v1.2 | Voice interaction + mobile | Q3 2026 |
| v2.0 | FluxForge bridge + advanced SKILLs | Q4 2026 |

[📖 Full Roadmap](docs/ROADMAP.md)

---

## 🛡️ Privacy & Security

- ✅ All data stored locally
- ✅ No telemetry by default (opt-in only)
- ✅ Open-source core (auditable)
- ✅ Sandboxed SKILL execution
- ✅ Dual SKILL system (ethics + function documented)

[🔒 Security Policy](docs/SECURITY.md)

---

## 💬 Community

**Join the MythLoop community on Telegram:**

| Channel | Purpose |
|---------|---------|
| 💬 [Community](https://t.me/mythloop) | General discussion, help, questions |

*Note: All channels currently point to the same community group. Will separate as we grow.*

---

## 📜 License

**MIT License** — Use freely, contribute back, fork without limits.

[Read Full License](LICENSE)

---

## 🙏 Acknowledgments

Built with love by the MythLoop community.

Special thanks to:
- [Ollama](https://ollama.ai) — Local LLM
- [ComfyUI](https://comfyui.org) — Local image generation
- [Tauri](https://tauri.app) — Desktop framework
- [Piper TTS](https://github.com/rhasspy/piper) — Local voice synthesis
- [All contributors](../../graphs/contributors)

---

**Made with 🌌 by the MythLoop Team**

[GitHub](https://github.com/mythloop/mythloop) • [Telegram](https://t.me/mythloop) • [Releases](https://github.com/mythloop/mythloop/releases)

---

**Your choices create consequences. Consequences create new choices. Infinite loop.**
```

> ⚖️ **Nota Legal:** "Rain012" é válido como detentor de copyright. Seu email/conta GitHub é o vínculo legal real.

---

## 📄 CONTRIBUTORS.md — Template Pronto

```markdown
# 🏆 All Contributors

Thank you to everyone who has contributed to MythLoop!

## How to Add Your Name

1. Make a contribution (template, translation, bug fix, SKILL, etc.)
2. Submit a PR
3. Add yourself to this file in the format below
4. PR gets merged → your name is here forever!

## Format

```
| Name | GitHub | Contribution | Date |
|------|--------|-------------|------|
| @username | [Profile](link) | Description | YYYY-MM |
```

## Contributors

| Name | GitHub | Contribution | Date |
|------|--------|-------------|------|
| @Rain012 | [Profile](https://github.com/aegisflow/MythLoop) | Vision + Core | 2026-02 |

---

**Thank you for making MythLoop better! 🌌**
