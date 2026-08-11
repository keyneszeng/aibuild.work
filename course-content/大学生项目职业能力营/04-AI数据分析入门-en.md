# Lesson 04 · AI Data Analysis Primer → A Data Insight Mini-Report

## Learning Goals
After this lesson, you will be able to:
1. Drive a complete data analysis with natural language (no code needed, or only minimal);
2. Distinguish "describing data" from "insighting data" — the latter is where the report's value lies;
3. Produce your fourth artifact: **a "Data Insight Mini-Report"** (with problem, data, findings, recommendations), usable for course projects, internship output, business-analyst interviews.

---

## Warm-up Question
> The club pulled a 2000-person event signup sheet, the president says "analyze it". You stare at Excel: headcount, averages, charts all done, then what? "Then" is the insight.
> Data doesn't speak for itself; AI helps translate "numbers" into "conclusions" and "actions".

---

## Core Concepts

**1. Description ≠ Insight**
- Description: 2000 signed up last year, 60% female.
- Insight: female share is high and concentrated in 3 departments, meaning the event theme attracts too few science/engineering males; next time adjust promotion channels.
Insight = description + comparison/attribution + action recommendation.

**2. Analysis workflow (no-code version)**
Following openai/openai-cookbook's "classification / summarization / extraction" thinking, break analysis into: clarify question → clean data → descriptive stats → find anomalies/group differences → form hypothesis → give recommendations. AI can assist at each step, but "hypothesis" must come from you.

**3. Data cleaning is 80% of the work**
Missing values, duplicate rows, inconsistent formats — AI can help write formulas/scripts for these dirty tasks, but you must state the rules first. Following llm-zoomcamp's Data Ingestion module philosophy: clean the data first, then the model is useful.

**4. Python/Notebook progression path (optional)**
If you have basics, use Python (pandas) + conversational model to write scripts; without basics, Feishu Multi-dimensional Tables / Excel + AI formula assistant can also complete it. Both paths provided.

---

## Real-scenario Case
> Jiayi, senior marketing major, interning in e-commerce. She got a 30,000-row order table, used AI to write a Python script for RFM segmentation (Recency/Frequency/Monetary), found "high-value low-activity" customers were 18% but contributed 45% of revenue, and recommended a win-back campaign. This analysis was adopted by her supervisor, becoming hard proof on her résumé of "data-driven decision making".

---

## Hands-on Task

**Tool list**: Excel / Feishu Multi-dimensional Tables, Python (optional, pandas), conversational model, public datasets (Kaggle / national data / school public data).

**Task description**:
1. Find a real tabular dataset (course grades, survey, sales, event signup all fine), ≥200 rows.
2. Use AI to help list 3 analysis hypotheses (e.g., "conversion differs significantly by channel").
3. Cleaning: let AI write formulas/scripts to handle missing and duplicates, you verify results.
4. Description + insight: give data evidence for each hypothesis, and write "what this means for decisions".
5. Output report: problem → data & method → 3 findings → action recommendations → limitations.

**Sample Prompt (student version · no-code analysis)**:
```
I have [data description, e.g., 2000-row event signup sheet, fields: department/grade/channel/attended or not].
Please help me:
1) Propose 3 valuable analysis hypotheses (guiding follow-up action, not pure description);
2) List cleaning steps I need in the sheet (in natural language, I will use Excel/Multi-dimensional Tables);
3) For each hypothesis, give the metrics and comparison dimensions I should look at;
4) Remind me of possible biases in this data (e.g., uneven sample) that affect conclusions.
【Sources】Please base only on the fields I described and common problem types, do not fabricate columns not in my data.
【Analysis Process】Please state how you derived "hypotheses" from "fields".
【Reusable Structure】Give me a "hypothesis-metric-conclusion-recommendation" four-section analysis template.
```

**Evaluation criteria**:
- Data cleaned and rules stated (20%)
- ≥3 analysis hypotheses not pure description (30%)
- Each finding has data evidence + action recommendation (30%)
- Data limitations/biases labeled (10%)
- Report presentable (10%)

---

## Prompt Template (student version · three-question structure)

> 【Sources】Require AI to base only on fields you actually have, preventing it from assuming non-existent columns.
> 【Analysis Process】Require AI to explicitly derive hypotheses from fields, so you can judge whether hypotheses are reasonable.
> 【Reusable Structure】The "hypothesis-metric-conclusion-recommendation" four-section form applies to all business analysis.

---

## Human Review Checklist
- [ ] I verified the AI-generated formula/script actually ran correctly
- [ ] Conclusions are all data-supported, no "feels like it should be"
- [ ] I distinguished correlation from causation, no reckless conclusions
- [ ] Report has "what this means for decisions"
- [ ] I labeled the sample bias and limitations of the data
- [ ] Kept original data and processing records

---

## Common Mistakes
1. **Only descriptive stats**: pile up charts but no conclusion, reader doesn't know "so what".
2. **AI fabricates fields**: it assumes a "spending amount" column that your data doesn't have.
3. **Correlation as causation**: A and B co-occur so claimed causal, exposed when questioned.
4. **Ignoring sample bias**: 2000 people all from one department, conclusions can't generalize.

---

## Homework (Demonstrable Artifact)
Submit **"Data Insight Mini-Report"**, containing:
- Data source and field description
- Cleaning rules
- 3 findings (evidence + recommendation)
- Limitation statement

**Showcase requirement**: able to clearly state in the form "We found X, recommend doing Y, because data shows Z".

---

## Grading Rubric (100 points)

| Item | Points | Description |
| --- | --- | --- |
| Cleaning standard | 20 | Clear rules, executed |
| Hypothesis quality | 30 | ≥3, actionable |
| Evidence + recommendation | 30 | Has data, has recommendation |
| Limitation statement | 10 | Labeled bias |
| Presentable | 10 | Clear, readable |

> See `示例作品/数据洞察小报告样例.md`. Next lesson, we apply the capability directly to the biggest mid-term hurdle: résumé and interview.
