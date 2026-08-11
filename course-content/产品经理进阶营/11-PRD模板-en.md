# 11 · AI Product PRD Template

> This template strengthens the "AI-specific fields" on top of a standard PRD. Copy and use directly; the bracketed parts are fill-in guidance.

---

## 0. Document Metadata
- Product / Feature name:
- Version: v0.1 (PRD draft)
- Author / Date:
- Status: 🟡 In Review / 🟢 Approved / 🔴 Returned
- Related materials: requirements source, user-interview notes, competitor-analysis links

## 1. Background & Problem (Why)
- **User pain point**: (who, in what scenario, encountered what problem, and why the current solution is insufficient)
- **Opportunity source**: data / interview / competitor / strategy
- **Initial success criterion**: (describe "what winning looks like" in one sentence)

## 2. Target Users & Persona (Who)
- Core user persona: (role, goal, pain point, current workaround)
- Edge users / opponents: (who will resist or be affected)
- Usage frequency & scenario: high-frequency / occasional / embedded

## 3. Goals & Metrics — AI Must Be Quantified
| Metric | Definition | Target | Data source | Owner |
|---|---|---|---|---|
| Task success rate | proportion of user goals achieved | ≥ 90% | instrumentation | |
| First-response accuracy / hit rate | proportion of answers matching user intent | ≥ 85% | manual labeling | |
| Hallucination rate | proportion of factual errors | ≤ 3% | eval set | |
| Human-intervention rate | proportion needing escalation / human review | ≤ 15% | logs | |
| Avg latency P95 | end-to-end response time (95th percentile) | ≤ 3s | APM | |
| Cost per task | Token / cost per single call | ≤ ¥0.05 | billing | |

## 4. Solution Overview (What)
- **Core interaction flow**: (one sentence + flowchart reference, see 12-Agent Workflow Template)
- **Does it use AI**: ☐ pure rules ☐ RAG ☐ Agent ☐ multimodal ☐ hybrid
- **AI capability boundary** (explicitly what it will NOT do):

## 5. AI Solution Details (AI-Specific)
### 5.1 Model & Pipeline
- Model selection: (large model / small model / self-built, with reason)
- RAG or not: (knowledge source, update frequency, chunking strategy)
- Agent or not: (what tools / sub-tasks, see 12)
- Context engineering: (system prompt, memory mechanism, long-term vs session memory)

### 5.2 Uncertainty & Fault-Tolerance Design (Red Line)
- **Hallucination response**: confidence threshold, citation tracing, low-confidence → human
- **Failure fallback**: handling path for timeout / refusal / wrong format
- **Human-in-the-loop points**: which steps require human review (e.g., high-risk decisions, external commitments)
- **Explainability**: can the user see "what the answer is based on"

### 5.3 Evaluation & Test Set (see 13)
- Offline eval set: scale, construction method, labeling spec
- Online evaluation: shadow mode / A-B / canary ratio
- Red-line metrics: list of unacceptable failure types

## 6. Feature Requirements (Stories)
- As a [user], I want [capability] so that [value]
- Acceptance criteria (Given/When/Then):
- Edge cases: bad input, over-long text, over-permission, empty result

## 7. Non-Functional Constraints (constraint table see 08)
- Latency, cost, concurrency, compliance, data residency, privacy masking

## 8. Risk & Compliance (checklist see 09)
- Legal risk, security risk, brand risk, dependency risk
- Compliance requirements: (PIPL, industry regulation, content moderation)

## 9. Launch & Rollout Plan
- Canary strategy: internal → seed users → full
- Rollback conditions: (red-line metrics that trigger immediate rollback)
- Monitoring dashboard: which metrics to review daily

## 10. Collaboration & Division (Who Builds)
| Role | Responsibility | Handoff | 
|---|---|---|
| Product | requirements / metrics / acceptance | this PRD |
| Algorithm | model / eval set / tuning | eval report |
| Engineering | pipeline / productionization / monitoring | launch |
| Data | knowledge base / labeling | dataset |
| Operations | scripts / user education / feedback collection | ops SOP |

---

> Usage tip: Lessons 04, 05, and 06 each provide a "RAG-version PRD snippet," "Agent-version PRD snippet," and "multimodal-version PRD snippet" that you can copy into the corresponding positions of this section.
