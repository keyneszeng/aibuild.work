# Lesson 02 · AI Information Research → An Industry Research Report

## Learning Goals
After this lesson, you will be able to:
1. Use AI to push an unfamiliar industry/field from "zero understanding" to "able to explain the whole picture";
2. Master the research workflow "problem decomposition → multi-source retrieval → cross-validation → structured output";
3. Produce your second artifact: **an 8–12 page "Industry/Field Research Report"**, usable for internship applications, course assignments, startup research, or interview talking points.

---

## Warm-up Question
> Your advisor drops one line: "Figure out the 'AI + medical imaging' direction by next week." You open the browser, 20 tabs, getting more confused as you search.
> The problem is not too little information, but **no research framework**. AI can turn you from "finding a needle in a haystack" to "searching with a map".

---

## Core Concepts

**1. Research = answering a set of structured questions, not collecting a bunch of links**
Good research first defines "what to answer": market size, player landscape, technical路线, pain points, trends, risks. Searching with questions in mind multiplies efficiency.

**2. Three roles of AI in research**
- **Decomposer**: breaks a big question into a sublist of sub-questions;
- **Summarizer**: compresses long/multiple texts into key points;
- **Comparator**: places multiple sources' claims side by side to help you spot disagreements.

**3. Cross-validation and "hallucination" defense**
Following dair-ai/Prompt-Engineering-Guide's Factuality section: LLMs fabricate plausible-looking data and sources. **Any number, company name, or paper title must be traced back to the original source for verification**. Method: ask AI for verifiable clues (keywords, institutions, years), and you search to confirm yourself, rather than directly trusting the links AI gives.

**4. The prototype of RAG thinking (from llm-universe / llm-zoomcamp)**
Feed the materials you collected to AI and let it "answer based on the materials I give", which is far more reliable than "answer from memory". This is the core intuition of Retrieval-Augmented Generation (RAG) — retrieve first, then generate. This lesson uses manual RAG ("paste materials + let AI summarize based on materials"); Lesson 07 will do the automated version.

---

## Real-scenario Case
> Azhe, applying for an AI Product Manager role, needed to understand the "AI speaking-practice / oral-practice track" before interviews. He used AI to first generate 12 research sub-questions, then cross-validated each with MetaSo search + official sites + app-store reviews, producing a report with a 5-player comparison table in 2 days. In the interview he pulled up the report directly: "I mapped the 5 players and 3 unmet needs in this track." The interviewer added points on the spot.

---

## Hands-on Task

**Tool list**: conversational model (ChatGPT/Kimi/DeepSeek), AI search (MetaSo/Perplexity/Nanmi), industry data sources (iResearch, 36Kr, company sites, app stores, recruitment JD), Feishu Docs/Notion (organizing).

**Task description**:
1. Choose an industry/track you genuinely care about (tied to job direction).
2. Use AI to generate 10–15 research sub-questions, then trim into your own outline.
3. For each sub-question, check at least 2 independent sources, recording source links and verification results.
4. Use AI to help organize materials into a report. Suggested structure: overview / market size / player landscape (comparison table) / technical route / core pain points / trend judgment / risks / references.
5. The report must end with a 【References】 list and an 【AI Usage Statement】 (what you used AI for, what you manually verified).

**Sample Prompt (student version · generate research outline)**:
```
I want to research [industry/track name], for use in [internship application / course / interview].
Please help me:
1) List 12 research sub-questions covering the industry's full picture, grouped by "market / players / technology / pain points / trends / risks";
2) For each sub-question, mark the suggested source type (e.g., industry report, official site, JD, user reviews);
3) Remind me which questions are most prone to data fabrication or inconsistent caliber, needing cross-validation.
【Sources】Please state which common-sense frameworks you relied on.
【Analysis Process】Please state why you grouped them this way.
【Reusable Structure】Please organize the outline into a template I can reuse next time.
```

**Evaluation criteria**:
- Structured research outline covering 6 major sections (20%)
- Key data/subjects cross-validated by ≥2 sources (30%)
- Structured presentation such as player comparison table (20%)
- References list + AI usage statement (15%)
- Author's own trend judgment, not pure listing (15%)

---

## Prompt Template (student version · three-question structure)

> 【Sources】Must require AI to label whether its claims come from common sense / speculation / or need external verification, and provide searchable keywords.
> 【Analysis Process】Require AI to show how it derives conclusions from sub-questions, so you can judge whether the logic holds.
> 【Reusable Structure】Solidify "overview-market-players-technology-pain points-trends-risks-sources" into a research-report template, reusable for any industry.

---

## Human Review Checklist
- [ ] Every number in the report can be traced to its original source
- [ ] Player names, product names, financing info verified via official sites / authoritative media
- [ ] I deleted AI-fabricated "facts" with no findable origin
- [ ] The report has my own judgment paragraphs, not pure AI recitation
- [ ] References list is clickable and verifiable
- [ ] I kept the research-outline Prompt and retrieval records

---

## Common Mistakes
1. **Directly trusting AI-given links/numbers**: AI often fabricates URLs and statistics.
2. **Using only one source**: a single source = no verification, easily misleading.
3. **Report becomes a pile of materials**: no comparison, no judgment, reader sees no thinking.
4. **Forgetting to label AI usage**: honest labeling is a plus; hiding it is an academic/career risk.

---

## Homework (Demonstrable Artifact)
Submit **"XX Industry Research Report"** (8–12 pages), must include:
- Structured table of contents
- At least one player/solution comparison table
- Your own trend-judgment paragraph
- References list + AI usage statement

**Showcase requirement**: able to explain in 3 minutes "what this industry looks like, who is playing, where the opportunities are".

---

## Grading Rubric (100 points)

| Item | Points | Description |
| --- | --- | --- |
| Outline structure | 20 | Covers 6 major sections |
| Source cross-validation | 30 | Key info from ≥2 sources |
| Structured presentation | 20 | Has comparison table/chart |
| Sources & AI statement | 15 | Verifiable, transparent |
| Independent judgment | 15 | Has author's viewpoint |

> See `示例作品/行业调研报告-AI口语陪练赛道.md`, a sample you can directly rewrite. Next lesson, we focus this research capability on the hardest type of material: papers.
