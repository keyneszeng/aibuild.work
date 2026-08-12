# Lesson 12 · Coding with Codex — Build Small Tools Without Writing Code

## I. Learning Goals

- **Knowledge**: Know what Codex is and its four usage modes (App / CLI / IDE extension / Web); understand the difference between a "coding agent" and a "chatbot."
- **Skill**: Give Codex instructions in plain language to build a working small tool (e.g., turn a pile of chat logs into a table, auto-summarize expense receipts).
- **Output**: Ship one real mini-project and produce *My First AI Tool* plus one reusable requirement description.

## II. Warm-up Question

> At work, do you have tasks where you repeatedly process the same kind of file — organizing 50 customer messages into a table, merging monthly receipts into one Excel, pulling text out of a bunch of screenshots?
> Writing a program is the easiest fix, but you don't code.
> In this lesson, you'll use Codex to get it done — **you talk, it builds.**

## III. Core Concepts

### 1. What is Codex (in one sentence)

Codex is OpenAI's **coding agent**: you describe in natural language what you want, and it writes the code, creates files, runs it, and even fixes bugs for you. It isn't a chatbot — it's a **"programming colleague" that operates on the files on your computer.**

The Orange Book lays out four forms:

| Form | Entry point | Right for you? |
|---|---|---|
| **Codex App (desktop)** | Install an app, pick a folder, use it | ⭐ Most recommended — easiest for beginners, most complete |
| **Codex CLI** | Terminal command line | For the adventurous / tinkerers |
| **Codex IDE extension** | Inside VS Code / Cursor | For people who already code |
| **Codex Web (cloud)** | Web at chatgpt.com/codex | No install, occasional use |

### 2. How it differs from a normal chatbot

- Chatbot (ChatGPT dialog): **gives you answer text** — you still copy-paste to get work done.
- Codex: **directly edits the real files in your folder**, producing runnable programs/web pages, not just text advising you what to do.

### 3. Three ways to use it (from the Orange Book)

- **Conversational**: open the App, talk like chatting, it asks and builds as you go.
- **One-shot task**: one instruction gets it done, e.g. "split this CSV into 12 tables by customer name."
- **Folder work mode**: pick a project directory and Codex can read all its files and rewrite them together — this is the main battlefield for real work.

### 4. The key rule: describe the result clearly

Don't say "help me build a tool." Say:
> "Read `customer_messages.txt`, each line is one message; extract four columns 【customer name, issue, sentiment, urgency】; output `result.csv`, with a summary row counting the total at the top."

**The more specific the result, the more usable what it builds.**

## IV. Worked Examples (Real Work Scenarios)

### Case 1: Sales rep's "messages → spreadsheet" nightmare
**Scenario**: dozens of daily WeChat customer messages to organize into a follow-up sheet — 1 hour by hand.
**Codex approach**: paste all messages into a `txt`, tell Codex "extract name / need / urgency, output Excel." A table in 1 minute; the rep only verifies names.
**Red line**: customer names and phones are PII — **don't feed real data to practice**; test with fake data first, then run the real data on a local copy once the tool is proven.

### Case 2: Admin's "receipt merge"
**Scenario**: 30 reimbursement receipts scattered across files each month, to be combined into one sheet.
**Codex approach**: put receipt images/PDFs in a folder, tell it "recognize amount, date, category from each, merge into `summary.xlsx`."
**Red line**: receipts contain company financial info — **run only locally on your own machine, never use cloud mode that uploads files to the internet.**

### Case 3: Operations' "poster generator"
**Scenario**: 5 campaign posters a week with repetitive layouts.
**Codex approach**: have it write a small web tool where you fill in text and it auto-generates the image — this is the "build website / video" idea from Part Five of the Orange Book.

## V. Standard Workflow (follow it)

Part Four of the Orange Book gives a "requirement → delivery" chain. The workplace version boils down to 5 steps:

1. **Define the result**: first be clear on "what file/web page do I want out."
2. **Prepare inputs**: put the files to process into a **dedicated folder** (don't mix with important projects).
3. **Give the instruction**: use the "read X, do Y, output Z" pattern.
4. **Check output + human review**: after AI generates, **you open it and glance to see if it's right** — verify numbers/names yourself.
5. **Iterate**: if wrong, say "sort column 3 by amount," and it keeps editing.

## VI. Red Lines (must follow)

- Never feed Codex or any AI **company confidential source code, customer PII, unpublished data, or keys/tokens.**
- AI-written code **can be wrong**: human judges, AI assists; verify critical results yourself.
- Run first on a **copy / dedicated test folder**; touch real data only after it's confirmed safe.
- Codex evolves fast (install method, model name, entry point may all change) — follow OpenAI's official docs and what your account actually shows.

## VII. After-class Task

Pick **one repetitive file-processing task** from your work, build a small tool with Codex App to get it running. Write down "the instruction you gave" — that's your first reusable Prompt.

---

*This lesson is a localized reorganization of the *Codex Orange Book* (bozhouDev/codex-orange-book, unofficial open-source), taking only the parts useful to workplace users — not a verbatim translation.*
