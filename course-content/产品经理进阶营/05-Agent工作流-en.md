# Lesson 5 — Agent Workflow

## I. Learning Goals

- **Knowledge**: Understand the essence of an AI Agent — an autonomous task executor that can "plan → call tools → observe → act again"; master the design elements of an Agent workflow (task decomposition, tools, human-in-the-loop points).
- **Ability**: Draw a flowchart for an Agent product (including branches, tool calls, and human-approval nodes).
- **Artifact**: An *Agent Flowchart + Design Notes* (can connect to the Lesson 12 Agent template).

> This lesson references deanpeters' Multi-Agent framework, minicoohei/ai-agent-camp (Agent training for non-engineers), Generative-AI-For-Beginners' Agent chapter, and DataTalksClub/llm-zoomcamp's Agentic RAG.

## II. Warm-up Question

> A normal AI does one-question-one-answer, but an Agent can "finish a whole task by itself"?
> Let the AI auto-send emails and check systems — if it errs, who's responsible?
> At which steps must a human click "confirm" to let it through?

An Agent is "AI that can act." The core of designing it is drawing clearly "where it walks alone, and where the human stands guard."

## III. Core Concepts

### 1. The Agent Loop
Plan (break down the task) → call tools (search / compute / API) → observe results → decide next step or end. More than a single generation, it adds an "action–feedback" loop.

### 2. Tools & Permissions
What tools the Agent can call and what systems it can touch is exactly what the product should lock down. The bigger the permission, the bigger the danger.

### 3. Human-in-the-Loop Points
Involving sending messages, spending money, deleting data, or making external commitments — must be human-approved. This is the lifeline of Agent design.

### 4. Failure Recovery
What if a tool errors out or gets stuck? There must be a fallback path (retry / escalate to human / inform the user).

## IV. Worked Example (Real Product Scenario)

### Case: AI Sales-Assistant Agent
- Flow: read new lead → check CRM → generate follow-up script → [human confirmation] → send.
- Tools: CRM read, email send (sending needs approval).
- Intervention points: human must click confirm before sending; CRM write needs authorization.
**Value**: automated but not out of control.

## V. Hands-on Task

- **Background**: Design an Agent product.
- **Input**: the task it must complete.
- **Steps**:
  1. Break the task into 3–5 steps.
  2. Mark the tools and permissions used at each step.
  3. Draw the flowchart, marking human-in-the-loop points.
- **Expected output**: *Agent Flowchart + Design Notes*.

## VI. Prompt / Design Template

```
Task: [what the Agent must complete]
Please output: ① task-decomposition steps ② tools and permissions needed at each step ③ nodes requiring human approval ④ failure-fallback plan.
Describe in flowchart prose (step → condition → branch).
```

## VII. Human Review Checklist

- [ ] Task decomposition is reasonable and executable
- [ ] Tool permissions are minimized
- [ ] High-risk nodes have approval
- [ ] Has failure fallback

## VIII. Common Mistakes

1. Giving the Agent excessive permissions with no approval.
2. Flowchart doesn't mark human-in-the-loop points.
3. No failure recovery — stuck means crash.

## IX. Homework (Deliverables)

Submit one *Agent Flowchart + Design Notes*.

## X. Grading Rubric

- Completion: chart + notes complete (40%)
- Quality: decomposition clear, permissions reasonable (35%)
- Safety: intervention points and fallback are clear (25%)
