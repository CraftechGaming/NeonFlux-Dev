# NeonFlux Cinema 🍿

A premium, Netflix-inspired streaming catalog web application featuring a modern glassmorphism aesthetic, profile selection, search, advanced filtering, a custom theater mode, watchlists, watch history, user reviews, and an administration panel to manage the catalog.

Developed by **Hridhan**.

---

## 🌟 Key Features

* **Netflix "Ta-Dum" Profile Splash**: Selecting a user profile plays a custom-synthesized deep cello chime (compiled dynamically using the browser's **Web Audio API**) while animating and glowing the logo.
* **Autoplay Video Backdrop**: The featured hero banner streams a muted, looping YouTube trailer of the movie in the background, masked with gradient fades.
* **Curated Horizontal Rows**: Homepage divides titles into Netflix-style categories:
  * *Continue Watching* (tracks recent profile views)
  * *My List* (profile bookmarks)
  * *Trending Now* (sorted by audience rating)
  * *Marathi Cinema Hits*, *Hindi Blockbusters*, *English Sci-Fi*, and *TV Shows*
* **Dynamic Search Grid**: Real-time search by title, genre, or language that automatically swaps the rows for a search results layout.
* **Cinematic Theater Mode**: Dimmed overlay player playing native streams with quality selectors and a built-in audience review submission section.
* **Admin Catalog Dashboard**: Add, edit, or delete movies/shows from the app. All modifications persist instantly to your browser's `localStorage` under the cache key `neonflux_v7_data`.
* **Zero Dependencies**: Runs on standard HTML5, CSS3, and React 18 / Babel via CDN. No Node.js/npm configuration required!

---

## 🚀 How to Run Locally

Since the application fetches component scripts, it needs to be served using a local HTTP server.

1. Open your terminal in the project directory.
2. Start Python's built-in HTTP server:
   ```bash
   python3 -m http.server 8000
   ```
3. Open your browser and navigate to:
   * **Local Access**: [http://localhost:8000](http://localhost:8000)
   * **Wi-Fi / Mobile Access**: Look up your local IP address and load `http://<your-local-ip>:8000` (e.g. `http://192.168.1.12:8000`).

---

## 🌐 How to Release / Deploy Online

Because this is a completely client-side application, you can publish it online for free:

### Option A: Netlify Drop (Easiest)
1. Go to [Netlify Drop](https://app.netlify.com/drop).
2. Drag and drop this project folder (`neonflux-cinema`) directly into the window.
3. Netlify will deploy it and give you a public `https://...` link instantly.

### Option B: GitHub Pages
1. Push this folder to a new public GitHub repository.
2. In the repository, go to **Settings** > **Pages**.
3. Under **Build and deployment**, set the Source to **Deploy from a branch** and select your main branch.
4. Your site will be live at `https://<your-username>.github.io/<repository-name>/`.
