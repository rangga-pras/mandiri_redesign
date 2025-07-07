# Bank Mandiri Web Enhancement – Individual & Help Page

This project is a redesign and functional enhancement of the **Bank Mandiri** website, focusing on two critical areas: the **Individual page** and the **Help page**. The improvements include **UI/UX consistency**, **component optimization**, and the addition of two new features: **Smart Comparison (Mandiri Product Advisor)** and **Live Chat with Virtual Queue**.

## 🧩 Project Structure

- **Tech Stack**: Vite + React + TypeScript + Tailwind CSS
- **Folder Layout**:
src/
├── components/
│ └── sections/
│ ├── SmartComparison.tsx
│ └── LiveChat.tsx
├── pages/
│ ├── IndividualPage.tsx
│ └── HelpPage.tsx
└── assets/


- **Libraries**:
- `lucide-react` for iconography
- `tailwindcss` for utility-first styling

---

## 🔍 Project Objectives

1. Improve **usability** and **user decision-making** on financial products.
2. Enable **direct customer interaction** without third-party apps.
3. Maintain design coherence with the original Bank Mandiri branding.

---

## ✨ New Features

### 1. Mandiri Product Advisor (Smart Comparison)

**Purpose**:  
To allow users to compare key information from up to three Bank Mandiri products side-by-side.

**User Flow**:
- Users select 2–3 products (e.g., Tabungan Now, Kartu Kredit Visa).
- A comparison table dynamically appears.
- Each row compares essential details: interest rate, fees, min balance, etc.

**Benefits**:
- Faster decision-making  
- Clear product overview  
- Better UX experience

**Tech Highlights**:
- Uses local React state for dynamic rendering
- Mobile responsive
- Minimalist and branded interface

---

### 2. Live Chat with Virtual Queue

**Purpose**:  
To enable real-time support via chat embedded within the Help page.

**User Flow**:
- User clicks the floating Live Chat button.
- System displays an initial view with CTA.
- After starting the chat, user enters a **virtual queue**.
- Queue shows **position** and **estimated wait time**.
- When connected, user can chat with simulated customer service.

**Benefits**:
- Predictable wait times reduce user frustration  
- Increased user engagement  
- Real-time customer service feel with elegant design

**Bug Fixes**:
- Fixed header disappearing during chat
- Solved message duplication issue
- Resolved one-letter input bug in chat field
- Improved spacing and alignment across chat components

---


## 📈 Outcome

- Improved user engagement and retention
- Professional-grade interface adhering to enterprise standards
- Components ready for real-world deployment in banking industry

---

## 📁 Contribution Guide

If you wish to contribute:
1. Clone the repo.
2. Run `npm install`
3. Use `npm run dev` to launch dev server
4. Make changes only in `/src/components/sections/` for UI
5. Commit with descriptive messages

---

## 📄 License

This project is for academic and educational purposes. All product names, logos, and brands are property of their respective owners.

---