
# 🎉 Giphy Search App

A responsive GIF search engine powered by the Giphy API, built with React. It provides trending GIFs by default and allows searching with autocomplete suggestions.

---

## 📌 About

This app allows users to:
- Search for any GIF using a keyword.
- See trending GIFs by default.
- Get real-time suggestions while typing.
- Load more GIFs on demand.

---

## 🛠️ Tech Stack

- **ReactJS** – UI Library
- **JavaScript (ES6+)** – Core scripting
- **HTML & CSS** – Markup & styling
- **Vite** – Development server and build tool
- **Giphy API** – GIF search and trending data

---

## 🚀 Features

- 🔍 **Search GIFs** – Type in the search bar to find GIFs.
- 💡 **Autocomplete Suggestions** – Fetches top 5 related keywords as suggestions while typing.
- 🔥 **Trending GIFs** – Loads trending GIFs on initial load.
- ➕ **Load More** – Fetches next set of GIFs (25 at a time).
- ⏳ **Debounced Search Input** – Delays API calls while typing to avoid spamming the API.
- 🚫 **Input Handling** – Ignores empty search input.
- ⚠️ **Error Handling** – Displays a fallback message if API fails.

---

## 💡 Potential Optimizations

- ⌨️ Keyboard navigation for autocomplete.
- 💾 Caching or memoize results to reduce duplicate API calls.
- 🔁 Infinite scrolling to replace "Load More" button.
- Store API key in .env file

---

## 📦 Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/your-username/giphy-search.git
cd giphy-search
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🗂️ Folder Structure

```
src/
├── components/
│   ├── Header.jsx
│   ├── Image.jsx
│   └── ImageList.jsx
│
├── hooks/
│   └── useFetchGiphy.js
│
├── utilities/
│   └── constants.js
│
├── App.jsx
├── main.css
└── main.jsx
```

## 🙌 Acknowledgements

- [Giphy Developers](https://developers.giphy.com/) for their free API
- [Font Awesome](https://fontawesome.com/) for icons
