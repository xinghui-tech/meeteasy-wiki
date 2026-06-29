# VisuSpace AI Low-Code Editor

VisuSpace is MeetEasy's core **AI-assisted visual page builder**. It allows conference organizers (B-side) to build mobile-friendly landing pages, agenda lists, speaker walls, registration forms, and check-in pages using drag-and-drop or natural language descriptions (AI prompts).

---

## 1. Core Concepts

1. **AI-Driven Generation & Codebase**:
   The entire VisuSpace rendering engine is developed and maintained by AI, ensuring rapid iterations. Users can describe their requirements in plain text, and the AI generates validated JSON DSL to render the canvas.
2. **Native Data Binding**:
   Low-code components (agenda, speakers, seating, check-in) directly bind to MeetEasy FastAPI databases, removing the need for manual API integrations.
3. **Cross-Platform Delivery**:
   Microsites automatically render inside MeetApp (H5) and WeChat mini program WebViews.
4. **Theme & CSS Variables**:
   Supports custom primary colors, margins, borders, and gradients, adjusting dynamically between light and dark modes.

---

## 2. Editor Layout

The VisuSpace editor is organized into four main sections:

| Panel | Description |
| :--- | :--- |
| **Left Page Tree** | Manage multiple pages (e.g., Home, Agenda, Speaker, Location). Supports adding, deleting, routing slugs, setting Vant tabbar icons, and dragging to reorder. |
| **Center Canvas** | **WYSIWYG** preview based on a 375px mobile baseline width, simulating native mobile app layouts. |
| **Right Properties** | Modify props (text, images, click actions) and styling (padding, margins, borders) for the selected component or page background. |
| **Top Toolbar** | Quick buttons for "Save Draft," "Preview" (opens in a sandbox container), "Publish," and **"AI Generate."** |

---

## 3. AI Integrations & MCP Support

* **Natural Language Generation**: Click **AI Generate** and type prompts like *"Create a dark-themed homepage with a countdown timer and agenda list"*. The AI scaffolds the DSL structure instantly.
* **RAG Content Retrieval**: During page generation, **RAG (Retrieval-Augmented Generation)** fetches conference FAQs, profiles, and schedules to populate page text accurately.
* **MCP (Model Context Protocol)**: Natively supports Model Context Protocol. AI Agents can interact with VisuSpace microsites via unified APIs to query, deploy, or update layout templates.
