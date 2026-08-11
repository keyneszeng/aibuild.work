# Lesson 10 · Prompt Template Library (copy-paste ready)

> A collection of every reusable Prompt from this camp, categorized by task. After copying, replace the 【bracketed】 parts with your real info.
> General principle: role + background + task + output format + constraints + "start directly if info is enough, else ask me 3 questions first."

---

## A. Universal Standard Structure (the base for all scenarios)

```
You are now playing the role of: [role]
My background is: [who I am, what I'm doing]
The task I need to complete is: [one sentence]
The target / reader is: [who]
Existing materials are as follows:
【paste your materials】
Please output: [state exactly what you want]
Output format: [list / table / three-part]
Constraints: [length, tone, no fabricated numbers, etc.]
First ask me 3 key questions; if the information is sufficient, start directly.
```

---

## B. Writing & Documents

**B1 Notice**
```
You are admin; write a formal notice:
time [ ], location [ ], topic [ ], attendees [ ].
Formal tone; include title / time-location / agenda / signature.
```

**B2 Weekly report**
```
You are [my role]; help me write this week's report.
This week I did: [list 3–5 things]
Output in four sections [Completed / In progress / Next-week plan / Needs coordination], each point ≤2 lines.
```

**B3 Work plan**
```
You are [role]; draft a [topic] plan.
Background: [ ] Goal: [ ] Constraints: [ ]
Output by [Background / Goal / Steps / Risks / Resources needed].
```

---

## C. Meetings & Communication

**C1 Meeting minutes**
```
Organize the following meeting notes into a table with columns: [decision / to-do / owner / deadline].
Based only on the original text; do not add anything not in it.
【paste transcript】
```

**C2 Follow-up list**
```
From the meeting/chat records below, extract all items "I need to follow up later,"
listed by [item / related person / suggested next step / priority].
```

---

## D. Sales & Support

**D1 Ice-breaker script (Few-shot)**
```
You are a senior salesperson. Reference this real winning script of mine (masked):
【paste a snippet of your script】
In the same tone and logic, write a new ice-breaker for: target [client type], stage [first add / re-engage].
```

**D2 Objection four-step**
```
The client says "[too expensive / let me think / competitor is cheaper]."
Generate a reply in four steps: ① empathize ② clarify ③ evidence (use my real case [ ]) ④ advance.
For any specific price/policy number, use "[to be confirmed by me]" — do not fabricate.
```

**D3 Support answer based on materials (RAG)**
```
You are our support assistant; answer only based on the 《Materials》 below; if not in them, say "I'll confirm and get back to you."
《Materials》: 【paste FAQ / policy】
Customer question: [ ]
```

---

## E. Content & Operations

**E1 Topic pool**
```
You are [platform] content operator; around "[field]" generate 20 topic angles,
covering five types: tips / pain points / cases / comparisons / trends, one sentence each.
```

**E2 Multi-version copy**
```
Write the following selling points as: ① Xiaohongshu planting copy ② Moments short copy ③ short-video voiceover.
Selling points: [ ] Note: no exaggerated efficacy, no Advertising Law violation.
```

**E3 Data insight**
```
You are a business-analysis assistant; analyze the table below, output by [overall trend / 3 anomalies / 3 recommended actions],
numbers must come from the original table, mark "[needs my check]" where uncertain.
【paste table】
```

---

## F. Management & HR

**F1 JD**
```
You are a senior HR; I'm hiring [role], core duties: [3–5 points], we want someone who: [traits].
Output JD: [Job Duties / Requirements / Plus-points / What We Offer]; no discriminatory language; salary only what I provide.
```

**F2 Retrospective**
```
Organize the retrospective below into a table: [problem / root cause (to be confirmed by me) / improvement action / owner (to be filled by me)].
【paste record】
```

---

> Copy and use immediately. Every template leaves a "human-gate" hook ([to be confirmed by me] / [needs my check] / [to be filled by me]) — this is the camp's red line.
