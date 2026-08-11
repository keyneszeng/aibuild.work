# Lesson 07 · AI Application Prototype

## 1. Learning Goals

- **Knowledge**: Understand that "prototype" turns a plan into something demonstrable, not necessarily requiring code; master no-code/low-code paths (Coze / Dify / Feishu Multi-dimensional Tables / Streamlit templates); know the prototype's purpose is "validate the idea" not "build the product".
- **Capability**: Build a simple AI-assistant idea into a runnable demo (chatbot or automated table); clearly state "what I used, how I used it".
- **Artifact**: A demonstrable "No-code/Low-code AI Demo" + a usage note.

> This lesson references LLM Universe's "Hands-on LLM Application Development (no-code thinking)", DataTalksClub/llm-zoomcamp's "from prototype to usable", Generative-AI-For-Beginners' "low-code AI applications" section.

## 2. Warm-up Question

> You have the plan, but others say "show me a demo", you can only pull out PPT?
> No Python, so barred from "doing AI projects"?
> Want to validate if an idea is worth building, but stuck at "how to get it out"?

A prototype doesn't necessarily need code. Today you can use drag-and-drop tools to build a conversational AI assistant in half an hour.

## 3. Core Concepts

### 1. Prototype = minimal demonstrable
The goal is not perfection, but "let people instantly get what you're solving". A conversational bot beats ten pages of architecture diagrams.

### 2. No-code paths
- **Coze / Dify**: drag to build a chatbot with knowledge base and plugins, zero code.
- **Feishu Multi-dimensional Tables + AI fields**: turn a table into a "smart assistant", good for material organization.
- **Streamlit templates**: a bit of Python lets you modify ready templates, fast deployment.

### 3. Which to choose
Q&A over materials → Coze/Dify knowledge base; table-intelligence → Feishu Multi-dimensional Tables; embed in webpage → Streamlit.

### 4. Red line: don't train/upload real private data
Use desensitized samples at prototype stage; for school/company real data, get authorization first.

## 4. Real-scenario Case Demonstration

### Case: course-material Q&A bot (Coze)
- Steps: create bot → upload course notes as knowledge base → set "answer only from knowledge base" → publish and test chat.
- Demo: ask "chapter 3 key points", bot answers based on notes.
- Value: built in half an hour, validates whether the "material organization" need holds.

## 5. Hands-on Task

- **Background**: Based on Lesson 06's project plan.
- **Input**: plan's MVP scope.
- **Steps**:
  1. Choose a no-code path.
  2. Build the minimal demonstrable version (with knowledge base or automation).
  3. Record screen/screenshot + write usage note.
- **Expected output**: "AI Demo" + usage note.

## 6. Prompt / Build Template

```
My MVP is: [one sentence]
Target user trial scenario: [ ]
Tool I choose: [Coze/Dify/Feishu Multi-dimensional Tables/Streamlit]
Please give me: ① this tool's build step list ② how to prepare knowledge base/data ③ the 3 key actions to show in demo
Constraint: use desensitized samples, no real private data.
```

## 7. Human Review Checklist

- [ ] Demo truly runs the core path
- [ ] No unauthorized/private data uploaded
- [ ] Usage note reproducible by others
- [ ] Scope matches MVP, no over-inflated

## 8. Common Mistakes

1. Want to build a "complete product" at the start, never gets built.
2. Train prototype with real private data.
3. Chose a tool mismatched to needs.
4. Only screenshots no explanation, others can't understand.

## 9. Homework

Submit a runnable Demo (link/screen recording) + a usage note (≥200 chars).

## 10. Grading Rubric

- Completion: Demo runnable + note complete (40%)
- Quality: right path chosen, core path runs (35%)
- Safety: data desensitized and compliant (25%)
