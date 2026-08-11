# Lesson 03 · AI Paper & Material Reading → A Paper Reading Note

## Learning Goals
After this lesson, you will be able to:
1. Use AI to turn an English/professional paper from "can't get into it" to "understand it and can explain it";
2. Master the "three-pass reading + AI assistance" paper close-reading workflow;
3. Produce your third artifact: **a structured "Paper Reading Note"**, usable as course assignment, lab-meeting report, or research-capability proof in grad-school/study-abroad materials.

---

## Warm-up Question
> Your advisor throws an arXiv paper: "Take a look this week." You open it; the abstract is full of transformer, token, benchmark — you close it after three lines.
> A paper is not for "finishing reading" but for "extracting value". AI is your simultaneous translator + Socratic sparring partner.

---

## Core Concepts

**1. Three-pass reading (AI-era enhanced version)**
- First pass: look at title/abstract/figures/conclusion, judge whether worth reading (ask AI for one-sentence translation of core contribution).
- Second pass: read the method body, ask AI to translate formulas and terms into analogies you understand.
- Third pass: reproduce the thinking — ask AI to suggest "if I were to use this idea in my field, what could I do".

**2. Let AI be the "Feynman teacher"**
Following dair-ai's Chain-of-Thought and Few-Shot ideas: ask AI to explain in the tone of "explaining clearly to a freshman", which exposes what you don't understand better than directly asking for a summary. Don't just ask "what does this paper say" — ask "using my known 【XX knowledge】 as analogy, what is this paper's innovation".

**3. Critical reading: identify limitations and questionable points**
Good notes record not only "what it did" but also "what it didn't do, whether the data is suspicious, whether it overclaims". This is exactly the Responsible AI awareness emphasized by microsoft/AI-For-Beginners — maintaining scrutiny of model conclusions.

**4. Connect the paper back to your scenario (localized restructuring)**
datawhalechina/llm-universe's core idea is "start from practice". The endpoint of reading a paper is not writing notes, but figuring out: can this method solve a specific problem in my field? This lesson's notes must include an "inspiration for me" section.

---

## Real-scenario Case
> Xiaoman, first-year stats grad, advisor's direction is time-series forecasting. She used AI to break an LLM-for-forecasting paper into "problem-method-experiment-limitation" four blocks; AI analogized attention mechanism as "giving different weights to different positions of historical data". Based on this she reported in lab meeting and wrote the idea "can this method improve our school's meteorological data missing-value imputation", which the advisor adopted as a small project.

---

## Hands-on Task

**Tool list**: arXiv / Google Scholar / Semantic Scholar, conversational model, note tool (Obsidian/Notion), translation aid (optional immersive-translation plugin).

**Task description**:
1. Pick a paper relevant to your direction, within 2 years, whose abstract you can barely understand (3–8 pages best; don't touch 50-page tomes yet).
2. First pass: ask AI for one-sentence + three-keyword summary; judge relevance.
3. Second pass: paste the method section to AI, require "explain with analogy + mark the 3 prerequisite concepts I must understand".
4. Third pass: ask AI for 5 comprehension questions, answer yourself, re-read where wrong.
5. Output notes, structure below.

**Sample Prompt (student version · Feynman-style explanation)**:
```
I am reading the paper "Title", my background is [your major / known knowledge].
Please explain this paper in the tone of "explaining clearly to a freshman":
1) What problem does it solve (with a life analogy);
2) Core method in one sentence + one analogy;
3) Which 3 concepts must I understand first to read it;
4) What effect does it claim, and what experiment proves it.
【Sources】Please base only on the paper body I paste, do not fabricate content outside the body.
【Analysis Process】Please show how you derived the "problem-method-evidence" structure from the abstract.
【Reusable Structure】Please organize your explanation into a four-piece template I can reuse for the next paper.
```

**Evaluation criteria**:
- Records of three-pass reading traces (20%)
- Notes contain "problem-method-evidence-limitation" four blocks (30%)
- Author's own "inspiration for me" (25%)
- AI explanation based on pasted original text, not fabricated (15%)
- Readable, shareable format (10%)

---

## Prompt Template (student version · three-question structure)

> 【Sources】Force AI to base only on the original text you paste, preventing it from "improvising" with training memory.
> 【Analysis Process】Require AI to explicitly derive structure from the abstract, so you can check whether its understanding is accurate.
> 【Reusable Structure】The "problem-method-evidence-limitation-inspiration" five-section form is the universal skeleton of all paper notes.

---

## Human Review Checklist
- [ ] I pasted paper original-text snippets, AI did not fabricate content from nothing
- [ ] Term explanations are truly understandable, not replaced by another unknown word
- [ ] Notes have "limitations / questionable points", not one-sided praise
- [ ] Has "inspiration for me", connected back to my major
- [ ] I recorded what I didn't understand and marked it red, ready to ask
- [ ] Kept the conversation with AI as evidence of reading process

---

## Common Mistakes
1. **Asking AI to "summarize this paper" without giving the original text**: it will make things up from the title, producing seemingly professional but actually fake notes.
2. **Only recording method, not limitations**: looks thoughtless, easily broken by follow-up questions in lab/interview.
3. **No "inspiration for me"**: notes become an information island, unable to convert into capability or project.
4. **Choosing too-hard papers**: tackling a 50-page SOTA paper at once causes frustration. Easy first, then hard.

---

## Homework (Demonstrable Artifact)
Submit **"A Paper Reading Note"**, structure:
- Basic info (title/author/year/source/one-sentence contribution)
- Problem / Method / Evidence / Limitation
- My inspiration (≥200 chars, tied to major)
- AI usage statement + where original-text snippets are archived

**Showcase requirement**: able to give a 5-minute lab-meeting-style report on this paper and answer "where might it be unreliable".

---

## Grading Rubric (100 points)

| Item | Points | Description |
| --- | --- | --- |
| Reading-trace | 20 | Process records of three-pass reading |
| Four blocks complete | 30 | Problem/Method/Evidence/Limitation |
| Inspiration quality | 25 | Tied to major, actionable |
| Source authenticity | 15 | Based on original text, not fabricated |
| Readability | 10 | Shareable, clean format |

> See `示例作品/论文阅读笔记样例.md`. Next lesson, we extend "understandable" to "see through data": AI Data Analysis Primer.
