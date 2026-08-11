# Lesson 06 · AI Project Design → A Feasible Project Plan

**Suitable for**: university students, graduate students, new graduates who want to build a demonstrable AI project
**Suggested duration**: 120 minutes

## 1. Course Goals
After this lesson, you will be able to:
1. **Knowledge**: Understand "problem definition > technology selection", master the standard decomposition framework for taking an AI project from requirement to execution;
2. **Capability**: Converge a vague idea into a bounded, verifiable plan that produces a minimum version (MVP) in 2–4 weeks;
3. **Artifact**: Produce **"AI Project Plan"**, containing problem definition, solution, milestones, risks and acceptance criteria, directly usable as the opening of a capstone or portfolio.

---

## 2. Warm-up Question
> "I want to build an AI assistant that helps everyone solve all problems." — what's wrong with this sentence?
> It has no specific user, no specific scenario, no acceptance criteria, so it can never be finished or built. The first step of a good project is not writing code, but **cutting the scope small**: for **whom**, solving **which** specific pain point, to **what degree** counts as success.

---

## 3. Core Concepts

**1. Problem definition precedes technology**
First answer "who, what pain point, how painful, how solved now, what's better about my solution", then talk about which model or tool. 90% of student projects fail because the problem is too big or not even a real pain point.

**2. Standard decomposition framework for AI projects (seven elements)**
- User & scenario: who is the target user, in what scenario used.
- Problem & value: what pain point solved, what measurable value brought.
- Solution & technology: core flow + technology selection (does it need RAG, does it need fine-tuning, can no-code platform be used).
- MVP scope: the minimal usable version does only one main flow, cut all "nice-to-haves".
- Milestones & division: 2–4 weeks broken into weekly nodes.
- Acceptance criteria: how to prove "done" (quantifiable metric + demonstrable Demo).
- Risks & boundaries: where data comes from, how hallucination is controlled, how privacy is handled.

**3. Does it need RAG / fine-tuning?**
- Need "answer based on specific materials, traceable" → use RAG (Retrieval-Augmented Generation), low cost, fast effect, suitable for student projects (see llm-zoomcamp's RAG practice route).
- Need "model style/format stably changed" → only then consider fine-tuning, generally unnecessary at student stage.
- Most showcase projects: a good Prompt + RAG + no-code platform is enough.

**4. MVP thinking**: first build a version "that runs one main flow" for people to see, then iterate, rather than holding back a big move.

---

## 4. Case Demonstration (real scenarios)

**Scenario A: from "too big" to "just right"**
- Initial idea: "Build a learning AI for college students."
- Converged: "For **classmates reviewing for finals in my major**, build a tool that **turns course PPT + notes into 20 self-test questions**, with correct questions marked by source page number." Clear user, clear pain point, clear acceptance (can generate 20 questions, each traceable).

**Scenario B: acceptance criteria saved the project**
- A group built an "AI industry-research assistant", the first two weeks got more scattered — wanted charts, then real-time news. After adding acceptance criteria — "input an industry name, produce a report with 5 companies, 3 trends, each conclusion with source link within 10 minutes" — scope instantly clear, Demo ran in week 3, extra ideas moved to "phase 2", no longer dragging phase 1.

**Scenario C: technology selection — first ask "need RAG?"**
- Someone wanted to fine-tune a "campus event-notice assistant", blocked by review: it only needs to summarize notices in fixed format, a good Prompt + Feishu Multi-dimensional Tables automation is enough, fine-tuning only lengthens the cycle and may not be better. The two weeks saved were used to polish output format, actually more popular with classmates.

---

## 5. Hands-on Task

**Tool list**: conversational model (ChatGPT/Kimi/DeepSeek), Feishu Docs/Notion/Markdown for the plan.

1. Write your project in one sentence: "For 【whom】 solve 【what pain point】, to 【what degree】 counts as success."
2. Fill in the seven-element framework from Core Concepts, especially polish "MVP scope" and "acceptance criteria".
3. Use the template below to let AI play "project reviewer", pointing out where your plan is "too big / not verifiable / has ethical risk", you converge accordingly.
4. Draw a 2–4 week milestone Gantt rough table (week × task).

---

## 6. Prompt Template (project design version)

```
You are a pragmatic AI product mentor, good at helping students cut projects to be executable.
My project idea is: [one-sentence description].
Please help me:
1. Examine it with the seven elements "user/scenario, problem/value, solution/technology, MVP scope, milestones, acceptance criteria, risks";
2. Clearly point out where scope is too big, where there is no verifiable success criterion, and give convergence suggestions;
3. Judge whether this project needs RAG or fine-tuning, whether it can be implemented with no-code platform (Coze/Dify), with reasons;
4. Help me break it into a 2-4 week plan with one deliverable node per week.
Requirement: direct answers, specific; rather make the project smaller to ensure it gets finished and built.
```

---

## 7. Human Review Checklist
- [ ] I can state in one sentence "for whom, what solved, what counts as success"
- [ ] MVP keeps only one main flow, cut all "by the way also do"
- [ ] Acceptance criteria are quantifiable and demonstrable, not "effect is good"
- [ ] Milestones land weekly, and week 1 has visible output
- [ ] I assessed data source, hallucination and privacy risks, and wrote them into the plan

---

## 8. Common Mistakes
1. **Scope too big**: want to build a "universal assistant", end up finishing nothing.
2. **Choose technology before thinking about problem**:纠结 which model at the start, but can't state whose pain point it solves.
3. **No acceptance criteria**: can't judge done or not, project drags infinitely.
4. **Ignore data and ethics**: don't think through where data comes from, whether privacy is involved, rework later.
5. **Plan locked after writing**: no iteration allowed, can't adjust when reality bites.

---

## 9. Homework (Explicit Deliverable)
Submit **"AI Project Plan"** (1–2 pages), must contain:
- One-sentence project definition
- Seven elements fully filled (user/scenario, problem/value, solution/technology, MVP scope, milestones, acceptance criteria, risks)
- A 2–4 week milestone table
- A paragraph of self-argument "why I can finish this scope"
> Suggest directly picking one from Lesson 09's "three capstone projects" to write; this lesson's plan is the capstone's opening proposal.

---

## 10. Grading Rubric (100 points)

| Item | Points | Description |
| --- | --- | --- |
| Problem-definition clarity | 25 | User, pain point, success criterion clear |
| MVP convergence reasonable | 20 | Small scope, completable |
| Acceptance criteria quantifiable | 20 | Demonstrable, measurable |
| Milestones executable | 15 | Weekly nodes clear, week 1 has output |
| Risk & ethics | 10 | Covers data/hallucination/privacy |
| Presentable | 10 | Standard structure, logical flow |

> 【Sources】RAG/fine-tuning selection references llm-zoomcamp's RAG practice and mlabonne/llm-course's engineering route; MVP and problem definition are general product methodology.
> Next lesson, we turn the core flow of this plan into a clickable Demo using a no-code platform.
