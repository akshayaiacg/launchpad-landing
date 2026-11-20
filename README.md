# J-Anime Residential Career Program (India-to-Japan Pathway)

A polished, responsive, long-form landing page inspired by the reference site: [courses.iacg.co.in/anime-residential-program-d/](https://courses.iacg.co.in/anime-residential-program-d/).

Built with **React 19**, **Vite**, **Tailwind CSS v4**, and **Lucide React**.

---

## 🎨 Visual Rhythm & Design System

- **Anime-Influenced Editorial Look:** Deep navy and obsidian backgrounds (`#070b14`, `#090e1c`), contrasting warm cream paper surfaces (`#faf7f2`), vivid crimson/vermilion accents (`#e63946`, `#ff2a4b`), and gold/amber highlights.
- **Alternating Sections:** Rhythmic alternation between dark cinematic sections and light/cream editorial sections for visual engagement.
- **Japanese Aesthetic Details:** Subtle kanji watermarks (`作画`, `特長`, `選考`, `進路`, `師範`, `機運`, `教育`, `語学`, `比較`, `提携`, `成果`, `学費`, `実績`, `登録`), Japanese studio terminology (*Genga*, *Douga*, *Hou-Ren-So*, *Kantoku*, *Enshutsu*, *Daihon*), and clean typography (`Plus Jakarta Sans`, `Outfit`, `Space Grotesk`, `Noto Serif JP`).
- **Responsive Layout:** Optimized for desktop, tablet, and mobile with compact navigation, collapsible drawer menus, card stacks, and floating quick-action pills.
- **Accessible & Clean:** Form validation with ARIA attributes, semantic HTML tags, keyboard navigation, and reduced-motion media query support.

---

## 📑 15 Program Sections (In Strict Order)

1. **Hero Section (`#hero`):**
   - India-to-Japan anime career pathway badge and Japanese subtitle (*インドから日本のアニメーションスタジオへ*).
   - Studio-ready artist headline: *"Turn Your Raw Drawing Passion Into a Studio-Ready Anime Career in Japan"*.
   - Program name badge: `J-ANIME RESIDENTIAL PRO (2-YEAR DIPLOMA & PATHWAY)`.
   - Primary "Register for Details" CTA and secondary "Watch Studio Showreel" trigger.
   - 4 trust pills + 4 quick metric stats.
   - Large anime art / video showcase area with interactive play modal.

2. **Program Highlights (`#highlights`):**
   - 6 signature strengths: Japan collaboration (Kyoto Seika), JLPT N5–N2 Japanese, Tokyo portfolio development, production-based training (Clip Studio EX, Toon Boom), placement assistance, and 24/7 residential campus in Hyderabad.

3. **Eligibility & Admission Routes (`#eligibility`):**
   - Side-by-side comparison of **Route A** (Direct Portfolio & Interview) and **Route B** (2-Week Pre-Assessment & Foundation Workshop).
   - Candidate-fit checklist with tickmarks and direct CTAs that pre-select the route in the registration form.

4. **Japan Pathway Overview (`#pathways`):**
   - 3 visually distinct pathway cards:
     - **Japan FuturePath (Intermediate)**: 2 years after Class 10.
     - **J-Anime Grad (Bachelors Pathway)**: 3+1 years accredited degree (affiliated with JNAFAU).
     - **J-Anime Pro (Advanced Studio Track)**: 2 years intensive residential.

5. **Mentor Profiles (`#mentors`):**
   - Responsive carousel and card grid featuring Japanese directors, manga creators, and bilingual language instructors (with portrait placeholders, roles, bios, and expertise tags).

6. **Opportunity & Program Rationale (`#opportunity`):**
   - Industry context (global anime demand vs. Tokyo animator shortages).
   - Key statistics presented as editable sample figures: `[Sample Metric - Replaceable]`.
   - 4-step sequence: *Assess & Calibrate* ➔ *Align with Tokyo Standards* ➔ *Build Studio Repertoire* ➔ *Produce & Pitch*.

7. **Five-Stage Milestone Journey (`#milestones`):**
   - Stage 01: Foundations, Anatomical Mastery & Hiragana Immersion (Months 1–3)
   - Stage 02: Manga Mechanics, In-Betweening (Douga) & N5 Certification (Months 4–8)
   - Stage 03: Key Animation (Genga), Layouts & JLPT N4 Attainment (Months 9–14)
   - Stage 04: Bilingual Capstone Production & JLPT N3 Preparation (Months 15–19)
   - Stage 05: Portfolio Pitching, Studio Interviews & Visa Readiness (Months 20–24)

8. **What Students Learn (`#curriculum`):**
   - Interactive category tabs: Manga Fundamentals & Inking, 2D Animation & Action Sakuga, Visual Storytelling & Layouts, Production Discipline, and Japanese Studio Culture (*Hou-Ren-So*).
   - Dedicated 6 Career Tracks grid.

9. **Japanese Language Progression (`#language`):**
   - Progression ladder: Entry Assessment ➔ JLPT N5 ➔ JLPT N4 ➔ JLPT N3 ➔ JLPT N2 with targeted vocabulary, kanji, and studio communication proficiencies.

10. **Comparison Matrix (`#comparison`):**
    - Detailed 7-point comparison matrix between unstructured online self-study and the structured 2-year residential conservatory.

11. **Partner Ecosystem (`#partners`):**
    - Cards featuring academic collaboration (Kyoto Seika University), university degree accreditation (JNAFAU), and generic editable studio, software, and cultural placeholders.

12. **Portfolio Outcomes & Selection Process (`#outcomes`):**
    - Mandatory graduation portfolio deliverables (Sakuga cuts, serialized manga one-shot, character model sheets, background folio, bilingual reel).
    - Career pathways and compensation guidance.
    - 4-step transparent selection timeline: *Online Application* ➔ *Creative Task* ➔ *Portfolio Interview* ➔ *Offer & Seat Allotment*.

13. **Financial Support & Compliance (`#financial`):**
    - Merit scholarships (sample figure up to 30%), semester installments, and educational loan facilitation.
    - Strict regulatory compliance disclaimer clarifying that scholarships, loans, salaries, and visas are subject to bank terms, government immigration, and student performance.

14. **Institutional Trust, Campus Life & FAQ (`#faq`):**
    - Institutional track record metrics (22+ years legacy, 3,800+ graduates sample placeholders).
    - Campus life gallery placeholders (Digital Sakuga Labs, Life Drawing Pod, Manga Library).
    - Student video testimonials.
    - Accessible FAQ accordion with smooth expand/collapse.

15. **Closing CTA & Registration Form (`#register`):**
    - Full accessible application form with real-time field validation (Full Name, Email, Phone, City, Qualification, Route, Track, Portfolio link, Notes, Terms confirmation).
    - Loading spinner and animated success confirmation state (no backend transmission required).

---

## 🚀 Running the Project

```bash
# Start development server
npm run dev

# Build production bundle
npm run build

# Preview production build
npm run preview
```

---

## 📌 Replaceable Placeholders Summary

All assets and metrics needing real media/data replacements are clearly tagged:
1. **Showreel & Videos:** Replace modal video placeholder in `src/components/ShowreelModal.jsx` and `src/components/Hero.jsx` with your official YouTube/Vimeo showreel URL.
2. **Mentor Portraits:** In `src/components/MentorProfiles.jsx` and `src/data/landingData.js`, add photographic headshots for visiting Japanese faculty.
3. **Campus Photos:** In `src/components/PlacementAndFAQ.jsx`, replace the three campus photo placeholder cards with actual high-resolution images of your campus studio pods.
4. **Partner Logos:** In `src/data/landingData.js` (`partnerEcosystemData`), replace the generic partner placeholders with verified studio partner logos and MoUs.
5. **Sample Statistics:** In `src/data/landingData.js` (`opportunityData` and `institutionalStatsData`), update sample market sizes, graduate counts, and fee figures with your latest verified data.
