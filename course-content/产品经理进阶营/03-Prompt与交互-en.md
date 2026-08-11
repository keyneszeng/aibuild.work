# Lesson 3 — Prompt & Interaction

## I. Learning Goals

- **Knowledge**: Understand that "Prompt design" is essentially the interaction design of an AI product — it decides how users converse with the model; master core techniques such as role setting, multi-turn clarification, constrained output, and few-shot.
- **Ability**: Design an interaction plan for an AI feature (including the system-prompt skeleton, clarification logic, and output constraints).
- **Artifact**: An *AI Interaction Plan* (including role setting + clarification flow + output-format constraints).

> This lesson references dair-ai/Prompt-Engineering-Guide (role-play / structured output / clarification / few-shot) and datawhalechina/easy-vibe's idea that "interaction is the product."

## II. Warm-up Question

> A user says "help me write something" — how does the AI know what to write?
> Why does one AI keep asking while another answers beside the point?
> The output format is a mess — how does the front end display it?

A Prompt is not "a spell for the model" — it's the first layer of product-interaction design.

## III. Core Concepts

### 1. Role Setting (System Prompt)
Give the model a stable identity and boundary: "You are the XX assistant, only do Y, and politely refuse anything outside your scope." This equals the product's "persona + Scope."

### 2. Multi-turn Clarification
When user intent is vague, the model should ask key questions before acting (see the general template in Lesson 10). In product terms, design "clarification scripts" rather than guessing blindly.

### 3. Structured Output
Require the model to output in a fixed format (JSON / table / three-part) so the front end can render it. This is the "specify the output format" emphasized by Prompt-Engineering-Guide.

### 4. few-shot: Set the Style with Examples
Give 1–3 examples and the model imitates the tone and structure. Suitable for scenarios needing a consistent brand voice.

## IV. Worked Example (Real Product Scenario)

### Case: Interaction of an AI Resume-Rewrite Assistant
- System: "You are a career coach, only do resume optimization, never invent experience."
- Clarification: "First give me your original resume and target role."
- Output: strict STAR three-part + [real data] placeholders.
**Value**: interaction is constraint — reduces fluff and fabrication.

## V. Hands-on Task

- **Background**: Write the interaction for an AI feature you designed.
- **Input**: feature positioning.
- **Steps**:
  1. Write the System Prompt (persona + boundary).
  2. Design logic for 2 clarification questions.
  3. Define output-format constraints.
- **Expected output**: *AI Interaction Plan*.

## VI. Prompt / Design Template

```
System: You are [role], responsibilities [ ], do not do [boundary].
When user intent is unclear, first ask: [question1] [question2].
Output format must strictly be: [format].
If out of domain, reply: "I can't help with this, suggest [ ]."
```

## VII. Human Review Checklist

- [ ] Persona and boundary are clear
- [ ] Has a clarification mechanism rather than blind guessing
- [ ] Output format is renderable by the front end
- [ ] Gracefully refuses out-of-scope requests

## VIII. Common Mistakes

1. System Prompt too vague — model answers randomly.
2. Generates without clarifying — lots of fluff.
3. Output has no format — front end can't use it.

## IX. Homework (Deliverables)

Submit the *AI Interaction Plan*, including System + clarification + output constraints.

## X. Grading Rubric

- Completion: plan complete (40%)
- Quality: boundary / clarification / format are reasonable (35%)
- Experience: out-of-scope handling is graceful (25%)
