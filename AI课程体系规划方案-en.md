# AI Skills Upgrade Curriculum System · Planning Scheme

> Purpose: Building on the "Consolidated Draft," turn the curriculum system into a **structured scheme that can directly drive front-end display and follow-up production**, including data model, module definitions, capability mapping, MVP priority, and roadmap.
> The interactive front-end web page (`ai-curriculum.html`) is generated from the JSON data model of this scheme.

---

## I. Product Positioning

- **Product form**: an audience-stratified, scenario-based, outcome-delivered AI-skills course-product matrix (not a single Prompt course).
- **Core value**: reorganize public AI knowledge into "audience-specific learning paths + scenario-based tasks + reusable templates + demonstrable outcomes + deliverable course packages."
- **Business-model priority**: general public (P0) > product managers (P0) > middle + university students (P1) > children (P1).

---

## II. Data Model (shared by front-end + follow-up production)

### 2.1 Persona (audience line) object
```
{
  id, name (course name), audience (audience), ageRange, color,
  goal (core goal), focus (learning focus []), outcome (final outcome),
  modules[ {no, title, task (task output)} ],
  deliverables (production deliverables []), validation (acceptance red lines []),
  capabilityWeights (five-layer capability weights -> 0~5)
}
```

### 2.2 Capability (capability layer) object
```
{ id, name, meaning, personas[] }
```

### 2.3 Course-matching quiz model
- Input: 4 single-choice questions (identity / goal / current level / pain scenario).
- Output: map to 1 Persona main line + recommended MVP package + starting task.
- Rule: score by audience tags, highest score wins.

### 2.4 Roadmap object
```
phases[ { phase, name, items[] } ]  // three phases
```

### 2.5 Resource object
```
resources[ { category, items[ { repo, note, audience } ] } ]
```

---

## III. Five Main Lines (with capability weights)

| Main line | Audience | Capability weights (literacy / usage / collaboration / workflow / product) |
|---|---|---|
| Children · AI Creativity Enlightenment Camp | 6–12 + parents | 5/2/1/0/0 |
| Middle-school · AI Learning-capability Camp | Middle to high school | 5/4/2/0/0 |
| University · AI Project & Career-capability Camp | University / grad / new grad | 4/4/4/3/2 |
| Professionals · AI Work-efficiency Bootcamp | Admin / sales / customer service / operations / sole proprietor etc. | 4/5/4/5/1 |
| PM · AI Product-manager Advancement Camp | Product managers / entrepreneurs | 4/4/4/5/5 |

> Weights are used for the front-end "capability radar" visualization and course recommendation.

---

## IV. Module Count per Main Line (8 / 8 / 8–10 / 8 / 10 lessons)

Detailed modules see section IV of the "Consolidated Draft"; the front end carries them as the `modules[]` array. Only lesson counts and positioning are listed here:

- **Children 8 lessons**: What is AI → questioning → storytelling → drawing characters → knowing the world → true-false → future invention → creation showcase.
- **Middle-school 8 lessons**: assistant intro → good questions → hard-problem breakdown → English writing → review → true-false → speech → assistant design.
- **University 8–10 lessons**: positioning → research → paper → data → résumé interview → project design → prototype → portfolio (+ optional expansion).
- **Professionals 8 lessons + role packages**: tool intro → writing → meeting → sales customer service → content → data → management recruitment → private workflow.
- **PM 10 lessons**: basics → differences → interaction → RAG → Agent → multimodal → evaluation → constraints → risk compliance → commercialization.

---

## V. MVP & Roadmap

### MVP (land first)
- **MVP A | Professionals Work-efficiency Camp**: 8 lesson plans + 8 PPT + 50 scenario Prompts + 6 role packages + 1 workflow template + 1 public class + 1 landing page.
- **MVP B | PM Product-manager Advancement Camp**: 10 lesson plans + 10 PPT + PRD template + Agent template + evaluation table + 5 cases + 1 public class + 1 landing page.

### Three-phase roadmap
1. **MVP**: work-efficiency camp + PM camp + dual landing pages + dual trial lessons + dual template packages.
2. **Expand students & children**: learning-capability camp + creativity camp + parent manual + school / institution partnership version.
3. **Platformize**: capability assessment + path recommendation + task check-in + portfolio showcase + enterprise / school group-training version.

---

## VI. Front-end Interactive Web-page Feature List

| Module | Function | Data source |
|---|---|---|
| Top nav | Overview / Choose course / Capability model / Roadmap / Matching quiz / Resources | Static |
| Identity selector | 5 cards; click to expand that line's detail (goal / modules / deliverables / acceptance / capability radar) | personas[] |
| Capability model | Five-layer capability table + per-line weight comparison bars | capabilities[] + capabilityWeights |
| Roadmap | Three-phase timeline | phases[] |
| Course-matching quiz | 4 questions → hit main line + recommend MVP + starting advice | matching rule |
| Resource library | GitHub resources folded by direction | resources[] |
| Risk boundary | Global red-line reminder | Static |

**Technical constraints**: single-file HTML, inline CSS + native JS, zero external dependencies (open offline, send directly). Dark / light adaptive, mobile-usable.

---

## VII. Follow-up Production Handoff

The front-end JSON data model can directly serve as the production agent's "course-structure skeleton":
- Each `modules[]` = one detailed lesson plan to generate (learning goal / case / Prompt / checklist / homework / grading).
- `deliverables[]` = that line's production task list.
- `capabilityWeights` = parameters for adjusting content depth and case density.

> After the planning scheme is finalized, the next step is to execute MVP A task 2 (professionals' 8-lesson complete course package).
