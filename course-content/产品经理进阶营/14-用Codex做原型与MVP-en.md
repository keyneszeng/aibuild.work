# Lesson 14 — Prototyping & MVP with Codex: Ship the Idea Without Writing Code

## I. Learning Goals

- **Knowledge**: Understand Codex's value as a "coding agent" for PMs — it compresses "idea to clickable prototype" to hours; distinguish the four forms App / CLI / IDE / Web.
- **Skill**: Give Codex requirements in product language, independently produce a demoable web prototype / small-tool MVP, and evaluate it with a red/blue checklist.
- **Output**: a usable *My Product Prototype v0.1* (web or mini-program form) + a *Codex Output Evaluation Checklist.*

## II. Warm-up Question

> Have you had this moment: an idea in your head, a prototype drawn, but no dev slot — so the idea sits in Figma forever?
> In this lesson, you'll run it yourself with Codex — **no waiting on engineering, demo to your boss by this afternoon.**

## III. Core Concepts

### 1. What is Codex (PM's-eye view)

Codex is OpenAI's **coding agent**: you say "I want a web page/tool that does XX," and it writes the front end, back end, creates files, and runs it. For a PM, its meaning is — **it's your "shadow engineer,"** compressing validation cost from "two-week sprint" to "afternoon done."

The Orange Book's four forms:

| Form | Entry point | PM usage |
|---|---|---|
| **Codex App (desktop)** | Install app, pick folder | ⭐ Most recommended — most complete, easiest |
| **Codex CLI** | Terminal | Advanced / tinkerers |
| **Codex IDE extension** | VS Code / Cursor | When collaborating with engineering |
| **Codex Web (cloud)** | chatgpt.com/codex | No install |

### 2. PM vs Engineer using Codex

- Engineer: uses Codex to write production code, fix bugs, wire APIs.
- PM: uses Codex to **validate ideas, build clickable prototypes, generate competitor demos, automate repetitive analysis** — the goal isn't "code quality" but "see something fast."

### 3. Three immediately useful modes (Orange Book essence)

- **Conversational**: build the prototype while chatting — good for exploration.
- **One-shot task**: one instruction, one result, e.g. "make a login page HTML."
- **Folder work mode**: hand a project directory to it, rewrite styles/add pages together — the main battlefield for multi-page prototypes.

### 4. PM rule of thumb: instruct with "user story + UI requirements"

Don't say "build a CRM." Say:
> "Build a single-page web app: title 'Customer Follow-up' at top, a form in the middle (customer name / need / priority dropdown), submitted entries show live in a list below, data stored in browser local storage. Clean style, mobile-friendly."

**Spell out "who uses it, what fields, what it looks like, how data is stored" at once**, and what it builds is close to demoable.

## IV. Worked Examples (from the Orange Book's real cases)

### Case 1: Pet-snack storefront (Orange Book case one prototype)
**Approach**: tell Codex "build a pet-snack storefront front end with product cards, add-to-cart button, checkout area."
**PM takeaway**: a clickable page in 1 hour, take it straight to users — feedback is 10x more real than a static mock.

### Case 2: Admin backend (case three)
**Approach**: on top of the previous page, "add an admin backend that can add/remove products and view orders."
**PM takeaway**: validate whether "backend complexity is in MVP scope" — the pitfalls Codex hits are exactly the requirement boundaries you need to align with engineering.

### Case 3: Pitch deck PPT + promo video (cases four & five)
**Approach**: have Codex, with multimodal tools, produce PPT and video assets.
**PM takeaway**: funding/approval materials drafted the same day.

## V. Standard Workflow (PM MVP version, 5 steps)

1. **Write the user story**: who, in what scenario, solving what.
2. **Define MVP boundary**: only the single most core path; cut everything "later."
3. **Generate via instruction**: use the "user story + UI requirements" pattern above, generate in one shot.
4. **Human review + red/blue evaluation** (see Section VII): click through it yourself, list "usable / not usable / hand to engineering."
5. **Iterate / hand off**: small fixes, let Codex continue; anything involving production code or data security goes to engineering.

## VI. Codex Output Evaluation Checklist (for PMs)

| Dimension | Ask yourself |
|---|---|
| Functional | Does the main path run? Does it crash on edge cases? |
| Data security | Did it send user data off the network? Should it move local / to engineering? |
| Handoff-able | Can engineering take and modify what was generated? (Ask it to leave comments / clear structure) |
| Cost | How much quota per run? Worth it? |
| Compliance | Touches privacy / finance / medical — does it cross a red line? |

## VII. Red Lines (must follow)

- Never feed Codex or any AI **company confidential source code, customer PII, unpublished data, or keys/tokens.**
- AI-generated code **can be wrong and may have security holes**: human judges, AI assists; anything touching production or real user data must go through engineering review.
- Run first on a **copy / test project**; touch real data only after confirmed safe.
- Codex evolves fast (install, model name, entry, quota may all change) — follow OpenAI's official docs and what your account actually shows.
- Prototypes from Codex are **for internal validation only**; before external release, go through normal engineering + security process.

## VIII. After-class Task

Pick a **feature idea with a far-off sprint** from your backlog, build a clickable v0.1 prototype with Codex App, and fill in the *Evaluation Checklist* above — that's the hardest evidence at your next review.

---

*This lesson is a localized reorganization of the *Codex Orange Book* (bozhouDev/codex-orange-book, unofficial open-source), extracting "prototype / MVP validation" content from a PM perspective — not a verbatim translation.*
