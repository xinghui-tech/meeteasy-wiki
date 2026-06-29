# Building a Smart Conference Assistant from 0 to 1

MeetEasy supports AI-driven page generation and visual editing to help organizers launch a fully featured conference microsite in minutes. Follow this guide to get started.

---

## Step 1: Input Conference Data
Before designing the microsite, make sure you have entered the core event data in the Console. VisuSpace business components (agenda, speakers, seating) read this data dynamically:
1. **Basic Info**: In Console, create your conference and fill in the Title, dates, and location.
2. **Agendas & Speakers**: Go to the respective menus and log speaker profiles (images, titles) and event sessions.
3. **Check-In Config**: Set check-in parameters (e.g., location fences or ticket validations).

---

## Step 2: Open the VisuSpace Editor
1. In the conference dashboard, click **VisuSpace / Microsite** on the left menu.
2. If this is a new setup, choose "Blank Page" or select a pre-made template from the global gallery.

---

## Step 3: Scaffold with AI (Cold Start)
Use the **AI Generate** feature to scaffold your page using natural language:
1. Click **AI Generate** in the top toolbar.
2. Enter your layout description (Prompt).

### Example Prompts:
* **Example 1 (Comprehensive Homepage)**:
  > "Create a tech-style landing page. Set background gradient from dark blue (#000B29 to #001A54). Add a countdown component at the top (target date: 2026-10-18T09:00:00), followed by an agenda list with detailMode set to modal. Below that, embed an AI Chatbox (height 400px, welcome message: 'Hello! I am your AI concierge, ask me anything.'). Place a Register button and a Check-in button at the bottom."
* **Example 2 (Registration & Seating Page)**:
  > "Generate a clean green-themed service page. Add a header text saying 'Welcome to the Conference Support Portal', followed by a seat lookup component and a check-in component."

3. Click **Generate**. The AI compiles the JSON DSL and renders it instantly on the canvas.

---

## Step 4: Fine-Tune the Layout Visuals
After generating the draft, customize it in the canvas:
1. **Background Style**: In the Page properties tab on the right sidebar, adjust the display mode to `cover`, `contain`, or `tile`.
2. **Padding & Borders**: Select components and adjust properties like `marginTop`, `padding`, and `borderRadius`.
3. **Actions**: Click buttons or tiles and specify their click behavior (Action) in the right panel:
   - Set to `navigate` and input a target Page ID to switch pages.
   - Set to `open-map` and input GPS coordinates (e.g. `116.397,39.908`) to open Tencent Maps.

---

## Step 5: Setup Bottom Tabbar Navigation
For multi-page microsites, you can pin pages to the bottom tab bar:
1. Click **New Page** in the Page Tree, name it (e.g. `page_agenda`), and drag an agenda list component onto it.
2. **Enable Tabbar**: In the Page settings, toggle **Show in Tabbar (is_in_tabbar)**:
   - **Name (slug)**: Lowercase routing name (e.g., `agenda`).
   - **Icon**: Vant icon identifier (e.g., `clock-o`).
   - **Tab label**: Button text (e.g., `Schedule`).
   - **Sort order**: Numerical value (e.g., 1, 2) controlling the left-to-right order.

---

## Step 6: Sandbox Preview & Publish
1. **Sandbox Preview**: Click **Preview** in the toolbar. A sandbox window opens, loading live data from your console. You can test form submissions, seating searches, and talk to the AI Chatbox.
2. **Publish**: Click **Publish** to deploy the pages. The microsite is instantly live in MeetApp and WeChat mini programs.
