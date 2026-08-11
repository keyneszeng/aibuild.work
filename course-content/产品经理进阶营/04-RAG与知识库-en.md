# Lesson 4 — RAG & Knowledge Base

## I. Learning Goals

- **Knowledge**: Understand the principle and applicable scenarios of Retrieval-Augmented Generation (RAG) — making the model "answer based on the materials you give it" rather than making things up from memory; master the design points of a knowledge-base product (chunking, retrieval, fallback).
- **Ability**: Design a PRD for an "enterprise knowledge-base Q&A" type of need (including knowledge source, retrieval strategy, and fallback logic).
- **Artifact**: A *Knowledge-Base Product PRD* (structured with reference to deanpeters' prd skill).

> This lesson references DataTalksClub/llm-zoomcamp (RAG / vector-retrieval practice), datawhalechina/llm-universe (building a knowledge base), and Generative-AI-For-Beginners' RAG chapter.

## II. Warm-up Question

> Have employees ask the AI "company reimbursement policy," and it makes up a fake one?
> The model's training data doesn't include your company's materials — how could it possibly answer right?
> How do you make the AI "answer only based on our internal documents"?

RAG is the answer: first retrieve your materials, then have the model generate based on them. The model becomes "evidence-based."

## III. Core Concepts

### 1. The Three Stages of RAG
Retrieve (find relevant passages from the knowledge base) → Augment (stuff the passages into the prompt) → Generate (model answers based on the passages). The core is "give evidence, then answer."

### 2. Knowledge-Base Design Points
- Chunking: how to split documents (by section / fixed length) affects retrieval quality.
- Retrieval: use vector similarity to find the most relevant passages.
- Fallback: "if the materials don't have it, say so truthfully, don't make it up" (red line).

### 3. Applicable Scenarios
Enterprise internal Q&A, customer-service knowledge base, regulations/policy lookup — anything where "the answer must be within the specified materials" suits RAG.

### 4. Evaluation
Whether retrieval is accurate and whether the answer is based on the materials needs a test set (see Lesson 7).

## IV. Worked Example (Real Product Scenario)

### Case: HR Policy Q&A Bot
- Knowledge source: employee handbook PDF.
- Flow: ask "how is annual leave calculated" → retrieve the relevant section of the handbook → model answers based on that section.
- Fallback: handbook has no such item → "suggest contacting HR to confirm."
**Value**: zero fabrication, trustworthy.

## V. Hands-on Task

- **Background**: Design an enterprise knowledge-base Q&A product.
- **Input**: knowledge-source type (document / FAQ).
- **Steps**:
  1. Use the "PRD template" to write the problem / metrics / scope.
  2. Design retrieval and fallback logic.
  3. List evaluation dimensions.
- **Expected output**: *Knowledge-Base Product PRD*.

## VI. Prompt / Design Template

```
You are an AI product PM. Write a knowledge-base Q&A PRD containing:
[Problem / target users / core scenarios / knowledge source / retrieval strategy / fallback logic / success metrics / scope boundary].
Follow the RAG idea: the model answers only based on retrieved materials; if none, escalate to a human.
```

## VII. Human Review Checklist

- [ ] Knowledge source and chunking strategy are clear
- [ ] Fallback (no fabrication) logic is in place
- [ ] Has a retrieval-quality evaluation plan
- [ ] Scope boundary is clear

## VIII. Common Mistakes

1. No fallback — the model freely makes up policies.
2. Coarse chunking causes retrieval to miss.
3. No evaluation — don't know if the answer is right.

## IX. Homework (Deliverables)

Submit one *Knowledge-Base Product PRD*.

## X. Grading Rubric

- Completion: PRD elements complete (40%)
- Quality: RAG logic correct, fallback clear (35%)
- Testability: evaluation plan is reasonable (25%)
