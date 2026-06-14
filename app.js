// Destructure React hooks from the global scope (CDN-imported React)
const { useState, useEffect } = React;

console.log(
  "%c⚡ NEONFLUX CINEMA %cCompiled Successfully!",
  "color: #00d2ff; font-weight: bold; font-size: 14px; text-shadow: 0 0 10px rgba(0, 210, 255, 0.4);",
  "color: #00ff66; font-weight: bold; font-size: 14px;"
);


// Isolated Production Catalog Data - Featuring your specific full movie link entry
const premiumCatalog = [
  {
    id: 1, title: "Deool Band", type: "Movie", languages: ["Marathi"],
    category: "Drama / Sci-Fi", rating: "9.2", duration: "2h 38m", quality: "Ultra HD",
    streamUrl: "https://www.youtube.com/embed/p1-QNPl6H5o", // Your verified full movie link
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=500"
  },
  {
    id: 2, title: "Sairat", type: "Movie", languages: ["Marathi"],
    category: "Romance / Drama", rating: "9.0", duration: "2h 54m", quality: "Ultra HD",
    streamUrl: "https://www.youtube.com/embed/wMrMKnoGZec",
    image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=500"
  },
  {
    id: 3, title: "Lai Bhaari", type: "Movie", languages: ["Marathi"],
    category: "Action / Drama", rating: "8.5", duration: "2h 35m", quality: "720p",
    streamUrl: "https://www.youtube.com/embed/4Sfe7_gT_f0",
    image: "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?q=80&w=500"
  },
  {
    id: 4, title: "Duniyadari", type: "Movie", languages: ["Marathi"],
    category: "Drama / Comedy", rating: "8.8", duration: "2h 40m", quality: "720p",
    streamUrl: "https://www.youtube.com/embed/g_0F672g-lI",
    image: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?q=80&w=500"
  },
  {
    id: 5, title: "Jawan", type: "Movie", languages: ["Hindi"],
    category: "Action / Thriller", rating: "8.9", duration: "2h 49m", quality: "Ultra HD",
    streamUrl: "https://www.youtube.com/embed/MWOlnZSnXJo",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=500"
  },
  {
    id: 6, title: "Pathaan", type: "Movie", languages: ["Hindi"],
    category: "Spy Action", rating: "8.4", duration: "2h 26m", quality: "Ultra HD",
    streamUrl: "https://www.youtube.com/embed/vqu4zblHjX0",
    image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=500"
  },
  {
    id: 7, title: "3 Idiots", type: "Movie", languages: ["Hindi"],
    category: "Comedy / Drama", rating: "9.6", duration: "2h 50m", quality: "720p",
    streamUrl: "https://www.youtube.com/embed/K0eDlFX9GMc",
    image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=500"
  },
  {
    id: 8, title: "Dangal", type: "Movie", languages: ["Hindi"],
    category: "Biography / Sports", rating: "9.5", duration: "2h 41m", quality: "Ultra HD",
    streamUrl: "https://www.youtube.com/embed/x_7YlGv9u1g",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=500"
  },
  {
    id: 9, title: "Avatar: Way of Water", type: "Movie", languages: ["English"],
    category: "Sci-Fi / Action", rating: "9.1", duration: "3h 12m", quality: "Ultra HD",
    streamUrl: "https://www.youtube.com/embed/d9MyW72ELq0",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=500"
  },
  {
    id: 10, title: "Top Gun: Maverick", type: "Movie", languages: ["English"],
    category: "Action / Aviation", rating: "9.3", duration: "2h 10m", quality: "Ultra HD",
    streamUrl: "https://www.youtube.com/embed/giXcoYn_g_4",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=500"
  },
  {
    id: 11, title: "Inception", type: "Movie", languages: ["English"],
    category: "Sci-Fi / Thriller", rating: "9.4", duration: "2h 28m", quality: "720p",
    streamUrl: "https://www.youtube.com/embed/YoHD9XEInc0",
    image: "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?q=80&w=500"
  },
  {
    id: 12, title: "Interstellar", type: "Movie", languages: ["English"],
    category: "Sci-Fi / Space", rating: "9.5", duration: "2h 49m", quality: "Ultra HD",
    streamUrl: "https://www.youtube.com/embed/zSWdZVtXT7E",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=500"
  },
  {
    id: 13, title: "Mahabharat", type: "TV Show", languages: ["Hindi"],
    category: "Mythology / History", rating: "9.7", duration: "Ep 45m", quality: "720p",
    streamUrl: "https://www.youtube.com/embed/7X8m-A9pAt0",
    image: "https://images.unsplash.com/photo-1599733589046-10c005739ef9?q=80&w=500"
  },
  {
    id: 14, title: "Taarak Mehta Ka Ooltah Chashmah", type: "TV Show", languages: ["Hindi"],
    category: "Comedy / Family", rating: "8.9", duration: "Ep 22m", quality: "720p",
    streamUrl: "https://www.youtube.com/embed/AonpX6g-hN0",
    image: "https://images.unsplash.com/photo-1586899028174-e7098604235b?q=80&w=500"
  },
  {
    id: 15, title: "Stranger Things", type: "TV Show", languages: ["English"],
    category: "Sci-Fi / Horror", rating: "9.2", duration: "Ep 50m", quality: "Ultra HD",
    streamUrl: "https://www.youtube.com/embed/b9EkMc79ZSU",
    image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=500"
  },
  {
    id: 16, title: "Jai Jai Swami Samarth", type: "TV Show", languages: ["Marathi"],
    category: "Spiritual / Drama", rating: "9.4", duration: "Ep 25m", quality: "720p",
    streamUrl: "https://www.youtube.com/embed/8v_n9Zof_Yg",
    image: "https://images.unsplash.com/photo-1609137144813-7d72111b0e95?q=80&w=500"
  }
];

// Helper to play a premium "Ta-dum" intro synthesizer chime via Web Audio API
const playTaDumSound = () => {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    const now = ctx.currentTime;
    
    // Netflix-style dual-oscillator cello strike sound
    const osc1 = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const gainNode = ctx.createGain();
    const filter = ctx.createBiquadFilter();
    
    osc1.type = 'sawtooth';
    osc1.frequency.setValueAtTime(65.41, now); // C2 frequency
    osc1.frequency.exponentialRampToValueAtTime(32.70, now + 1.2); // Slide pitch downwards
    
    osc2.type = 'triangle';
    osc2.frequency.setValueAtTime(65.41, now);
    osc2.frequency.setValueAtTime(98.00, now + 0.12); // G2 (Harmonic fifth note)
    
    gainNode.gain.setValueAtTime(0.001, now);
    gainNode.gain.linearRampToValueAtTime(0.6, now + 0.15);
    gainNode.gain.exponentialRampToValueAtTime(0.001, now + 1.6);
    
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(140, now);
    filter.Q.setValueAtTime(4, now);
    
    osc1.connect(filter);
    osc2.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(ctx.destination);
    
    osc1.start(now);
    osc2.start(now);
    osc1.stop(now + 1.8);
    osc2.stop(now + 1.8);
  } catch (e) {
    console.warn("Browser prevented Web Audio playback before user gesture interaction.", e);
  }
};

// Extractor for YouTube Video IDs
const getYoutubeId = (url) => {
  if (!url) return '';
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : '';
};

// SVG Icon Helper Components for Premium Visuals
const Icons = {
  Play: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>
  ),
  Plus: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
  ),
  Check: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
  ),
  Star: ({ fill = "currentColor" }) => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill={fill} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
  ),
  Search: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
  ),
  Settings: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
  ),
  User: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
  ),
  Trash: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>
  ),
  Edit: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
  ),
  Close: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
  )
};

function App() {
  const [activeProfile, setActiveProfile] = useState(null);
  const [introActive, setIntroActive] = useState(false);
  const [mediaList, setMediaList] = useState(() => {
    const saved = localStorage.getItem('neonflux_v7_data');
    return saved ? JSON.parse(saved) : premiumCatalog;
  });

  // Filters, Search, and Sort
  const [selectedLanguage, setSelectedLanguage] = useState('All');
  const [selectedType, setSelectedType] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('Default');

  // Video Streaming State
  const [activeVideo, setActiveVideo] = useState(null);
  const [selectedResolution, setSelectedResolution] = useState('Auto');

  // Scroll Detection for Floating Transparent Navbar
  const [isScrolled, setIsScrolled] = useState(false);

  // Lists & Watch history
  const [watchlists, setWatchlists] = useState(() => {
    const saved = localStorage.getItem('neonflux_v7_watchlists');
    return saved ? JSON.parse(saved) : {};
  });
  const [watchHistory, setWatchHistory] = useState(() => {
    const saved = localStorage.getItem('neonflux_v7_history');
    return saved ? JSON.parse(saved) : {};
  });

  // Reviews & Comments State
  const [reviews, setReviews] = useState(() => {
    const saved = localStorage.getItem('neonflux_v7_reviews');
    return saved ? JSON.parse(saved) : {};
  });
  const [newReviewText, setNewReviewText] = useState('');
  const [newReviewRating, setNewReviewRating] = useState('10');

  // Admin Controls
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [editingMedia, setEditingMedia] = useState(null);
  const [adminForm, setAdminForm] = useState({
    title: '', type: 'Movie', languages: 'English',
    category: '', rating: '8.5', duration: '2h', quality: 'Ultra HD',
    streamUrl: '', image: ''
  });

  // Action toasts
  const [toast, setToast] = useState(null);

  useEffect(() => {
    localStorage.setItem('neonflux_v7_data', JSON.stringify(mediaList));
  }, [mediaList]);

  useEffect(() => {
    localStorage.setItem('neonflux_v7_watchlists', JSON.stringify(watchlists));
  }, [watchlists]);

  useEffect(() => {
    localStorage.setItem('neonflux_v7_history', JSON.stringify(watchHistory));
  }, [watchHistory]);

  useEffect(() => {
    localStorage.setItem('neonflux_v7_reviews', JSON.stringify(reviews));
  }, [reviews]);

  // Handle transparent to dark-opaque navbar background change
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const showToast = (message) => {
    setToast(message);
    setTimeout(() => setToast(null), 3000);
  };

  const familyProfiles = [
    { name: "Hridhan", color: "#00d2ff", glow: "rgba(0, 210, 255, 0.4)", avatar: "👨💻" },
    { name: "Hemant", color: "#ffb600", glow: "rgba(255, 182, 0, 0.4)", avatar: "👦" },
    { name: "Priya", color: "#e040fb", glow: "rgba(224, 64, 251, 0.4)", avatar: "👩" },
    { name: "Family", color: "#00ff66", glow: "rgba(0, 255, 102, 0.4)", avatar: "🍿" }
  ];

  const handleProfileSelect = (profile) => {
    setActiveProfile(profile);
    setIntroActive(true);
    playTaDumSound();
    
    // Auto-transition to homepage after intro animations finish
    setTimeout(() => {
      setIntroActive(false);
    }, 2200);
  };

  // Watchlist Toggling
  const isItemInWatchlist = (itemId) => {
    if (!activeProfile) return false;
    return (watchlists[activeProfile.name] || []).includes(itemId);
  };

  const toggleWatchlist = (itemId) => {
    if (!activeProfile) return;
    const profileName = activeProfile.name;
    const currentList = watchlists[profileName] || [];
    let updatedList;
    if (currentList.includes(itemId)) {
      updatedList = currentList.filter(id => id !== itemId);
      showToast("Removed from My List");
    } else {
      updatedList = [...currentList, itemId];
      showToast("Added to My List");
    }
    setWatchlists({ ...watchlists, [profileName]: updatedList });
  };

  // Continue Watching Actions
  const addToHistory = (itemId) => {
    if (!activeProfile) return;
    const profileName = activeProfile.name;
    const currentHistory = watchHistory[profileName] || [];
    const filtered = currentHistory.filter(id => id !== itemId);
    const updatedHistory = [itemId, ...filtered].slice(0, 10);
    setWatchHistory({ ...watchHistory, [profileName]: updatedHistory });
  };

  // Submit Comments
  const handleAddReview = (e) => {
    e.preventDefault();
    if (!activeProfile || !activeVideo) return;
    const mediaId = activeVideo.id;
    const currentMediaReviews = reviews[mediaId] || [];
    
    const newReview = {
      id: Date.now(),
      author: activeProfile.name,
      avatar: activeProfile.avatar,
      color: activeProfile.color,
      rating: newReviewRating,
      comment: newReviewText,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    };

    setReviews({ ...reviews, [mediaId]: [newReview, ...currentMediaReviews] });
    setNewReviewText('');
    setNewReviewRating('10');
    showToast("Review published!");
  };

  // Admin Catalog Modification Functions
  const handleAdminFormSubmit = (e) => {
    e.preventDefault();
    const parsedLanguages = adminForm.languages.split(',').map(lang => lang.trim()).filter(Boolean);
    
    if (editingMedia) {
      const updatedMediaList = mediaList.map(item => {
        if (item.id === editingMedia.id) {
          return {
            ...item,
            title: adminForm.title,
            type: adminForm.type,
            languages: parsedLanguages,
            category: adminForm.category,
            rating: adminForm.rating,
            duration: adminForm.duration,
            quality: adminForm.quality,
            streamUrl: adminForm.streamUrl,
            image: adminForm.image || "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=500"
          };
        }
        return item;
      });
      setMediaList(updatedMediaList);
      showToast(`Updated: ${adminForm.title}`);
    } else {
      const newEntry = {
        id: mediaList.length > 0 ? Math.max(...mediaList.map(item => item.id)) + 1 : 1,
        title: adminForm.title,
        type: adminForm.type,
        languages: parsedLanguages,
        category: adminForm.category,
        rating: adminForm.rating,
        duration: adminForm.duration,
        quality: adminForm.quality,
        streamUrl: adminForm.streamUrl,
        image: adminForm.image || "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=500"
      };
      setMediaList([newEntry, ...mediaList]);
      showToast(`Added: ${adminForm.title}`);
    }

    setAdminForm({
      title: '', type: 'Movie', languages: 'English',
      category: '', rating: '8.5', duration: '2h', quality: 'Ultra HD',
      streamUrl: '', image: ''
    });
    setEditingMedia(null);
  };

  const handleEditClick = (item) => {
    setEditingMedia(item);
    setAdminForm({
      title: item.title,
      type: item.type,
      languages: item.languages.join(', '),
      category: item.category,
      rating: item.rating,
      duration: item.duration,
      quality: item.quality,
      streamUrl: item.streamUrl,
      image: item.image
    });
  };

  const handleDeleteClick = (itemId, title) => {
    if (confirm(`Remove "${title}" from NeonFlux Cinema?`)) {
      setMediaList(mediaList.filter(item => item.id !== itemId));
      showToast(`Deleted ${title}`);
    }
  };

  // Searching, Filtering & Sorting logic
  const isSearchOrFilterActive = searchQuery !== '' || selectedLanguage !== 'All' || selectedType !== 'All';

  const processedCatalogFiltered = mediaList.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLanguage = selectedLanguage === 'All' || item.languages.includes(selectedLanguage);
    const matchesType = selectedType === 'All' || item.type === selectedType;
    return matchesSearch && matchesLanguage && matchesType;
  });

  if (sortBy === 'Rating') {
    processedCatalogFiltered.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
  } else if (sortBy === 'Duration') {
    processedCatalogFiltered.sort((a, b) => b.duration.localeCompare(a.duration));
  } else if (sortBy === 'Title') {
    processedCatalogFiltered.sort((a, b) => a.title.localeCompare(b.title));
  }

  // Fallback defaults if list filters return empty
  const featured = processedCatalogFiltered.find(item => item.id === 1) || processedCatalogFiltered[0] || mediaList[0];

  // User list parsing
  const profileWatchlistIds = activeProfile ? (watchlists[activeProfile.name] || []) : [];
  const profileWatchlist = mediaList.filter(item => profileWatchlistIds.includes(item.id));

  const profileHistoryIds = activeProfile ? (watchHistory[activeProfile.name] || []) : [];
  const profileHistory = profileHistoryIds
    .map(id => mediaList.find(item => item.id === id))
    .filter(Boolean);

  // Netflix-style row grouping data
  const trendingMovies = [...mediaList].sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating)).slice(0, 8);
  const marathiHits = mediaList.filter(item => item.languages.includes("Marathi")).slice(0, 8);
  const hindiHits = mediaList.filter(item => item.languages.includes("Hindi")).slice(0, 8);
  const englishHits = mediaList.filter(item => item.languages.includes("English")).slice(0, 8);
  const tvShowsList = mediaList.filter(item => item.type === "TV Show").slice(0, 8);

  // Netflix "Ta-dum" intro animation screen
  if (activeProfile && introActive) {
    return (
      <div className="netflix-intro-overlay">
        <h1 className="netflix-logo-text">NEONFLUX</h1>
      </div>
    );
  }

  // Profile Selection Screen
  if (!activeProfile) {
    return (
      <div className="profile-container animate-fade-in">
        <h1 style={{ color: '#00d2ff', fontSize: '32px', fontWeight: '900', letterSpacing: '4px', marginBottom: '10px', fontFamily: 'var(--font-heading)' }}>
          NEONFLUX<span style={{ color: '#fff' }}>CINEMA</span>
        </h1>
        <p style={{ color: '#6b7280', fontSize: '13px', marginBottom: '60px', letterSpacing: '1px' }}>Designed for a cinematic Netflix experience</p>
        
        <h2 style={{ fontSize: '36px', fontWeight: '700', marginBottom: '40px', fontFamily: 'var(--font-heading)' }}>Who's watching?</h2>
        
        <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap', justifyContent: 'center', maxWidth: '800px' }}>
          {familyProfiles.map(profile => (
            <div 
              key={profile.name} 
              onClick={() => handleProfileSelect(profile)} 
              className="profile-card"
              style={{ '--profile-color': profile.color, '--profile-glow': profile.glow }}
            >
              <div className="profile-avatar-wrapper">
                {profile.avatar}
              </div>
              <span className="profile-name">{profile.name}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fade-in" style={{ backgroundColor: '#06090e', color: '#fff', minHeight: '100vh', paddingBottom: '80px' }}>
      
      {/* Dynamic Toast Messages */}
      {toast && (
        <div style={{
          position: 'fixed', bottom: '30px', right: '30px',
          backgroundColor: 'rgba(11, 17, 30, 0.95)', border: '1px solid var(--primary-neon)',
          boxShadow: 'var(--shadow-neon)', color: '#fff', padding: '12px 24px',
          borderRadius: '8px', zIndex: 10000, fontWeight: '700', fontSize: '13px'
        }}>
          {toast}
        </div>
      )}

      {/* FIXED TRANSPARENT NAVBAR */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h1 style={{ color: '#00d2ff', margin: 0, fontSize: '24px', fontWeight: '900', letterSpacing: '2px', cursor: 'pointer' }} onClick={() => { setSelectedType('All'); setSelectedLanguage('All'); setSearchQuery(''); }}>
              NEONFLUX<span style={{ color: '#fff' }}>CINEMA</span>
            </h1>
          </div>
        </div>

        <div className="nav-links">
          <span className={`nav-link ${selectedType === 'All' && !isSearchOrFilterActive ? 'active' : ''}`} onClick={() => { setSelectedType('All'); setSelectedLanguage('All'); setSearchQuery(''); }}>Home</span>
          <span className={`nav-link ${selectedType === 'Movie' ? 'active' : ''}`} onClick={() => { setSelectedType('Movie'); setSelectedLanguage('All'); }}>Movies</span>
          <span className={`nav-link ${selectedType === 'TV Show' ? 'active' : ''}`} onClick={() => { setSelectedType('TV Show'); setSelectedLanguage('All'); }}>TV Shows</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
            <span style={{ position: 'absolute', left: '12px', color: '#9ca3af', display: 'flex' }}><Icons.Search /></span>
            <input 
              type="text" 
              placeholder="Titles, genres, languages..." 
              value={searchQuery} 
              onChange={(e) => setSearchQuery(e.target.value)}
              className="nav-search-input"
            />
          </div>

          <button 
            onClick={() => setIsAdminOpen(true)}
            className="btn-secondary" 
            style={{ padding: '8px 14px', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '6px', backgroundColor: 'rgba(255,255,255,0.02)', borderColor: 'rgba(255,255,255,0.1)' }}
          >
            <Icons.Settings />
            <span>Manage Catalog</span>
          </button>

          <div 
            onClick={() => setActiveProfile(null)} 
            style={{ 
              cursor: 'pointer', 
              backgroundColor: '#0b111e', 
              border: `2px solid ${activeProfile.color}`, 
              padding: '5px 12px', 
              borderRadius: '20px', 
              fontSize: '13px', 
              display: 'flex', 
              alignItems: 'center',
              gap: '8px',
              fontWeight: '600',
              boxShadow: `0 0 10px ${activeProfile.glow}`
            }}
          >
            <span>{activeProfile.avatar}</span>
            <span>{activeProfile.name}</span>
          </div>
        </div>
      </nav>

      {/* NETFLIX-STYLE HERO STREAM AUTOPLAYER BANNER */}
      {featured && !isSearchOrFilterActive && (
        <div className="hero-banner animate-fade-in">
          
          {/* Muted background video looping silently */}
          <div className="hero-video-container">
            <iframe 
              className="hero-video-iframe"
              src={`https://www.youtube.com/embed/${getYoutubeId(featured.streamUrl)}?autoplay=1&mute=1&controls=0&loop=1&playlist=${getYoutubeId(featured.streamUrl)}&playsinline=1&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1`}
              allow="autoplay; encrypted-media"
            ></iframe>
          </div>

          <div className="hero-overlay"></div>
          
          <div className="hero-content">
            <div style={{ display: 'flex', gap: '10px', marginBottom: '16px', flexWrap: 'wrap' }}>
              <span style={{ backgroundColor: 'var(--accent-purple)', padding: '4px 12px', fontSize: '11px', fontWeight: '800', borderRadius: '6px', letterSpacing: '0.5px' }}>
                WELCOME, {activeProfile.name.toUpperCase()}!
              </span>
              <span style={{ backgroundColor: 'rgba(0, 210, 255, 0.1)', border: '1px solid var(--primary-neon)', color: '#00d2ff', padding: '3px 8px', fontSize: '11px', borderRadius: '6px', fontWeight: '700' }}>
                {featured.quality}
              </span>
            </div>
            
            <h2 style={{ fontSize: '56px', margin: '0 0 12px 0', fontWeight: '900', lineHeight: '1.05', fontFamily: 'var(--font-heading)', textShadow: '0 2px 10px rgba(0,0,0,0.6)' }}>
              {featured.title}
            </h2>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', color: '#fff', fontSize: '14px', marginBottom: '24px', textShadow: '0 1px 4px rgba(0,0,0,0.8)' }}>
              <span style={{ color: 'var(--rating-gold)', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Icons.Star fill="var(--rating-gold)" /> {featured.rating}
              </span>
              <span style={{ color: '#d1d5db' }}>•</span>
              <span style={{ fontWeight: '600' }}>{featured.category}</span>
              <span style={{ color: '#d1d5db' }}>•</span>
              <span style={{ color: 'var(--primary-neon)', fontWeight: '600' }}>{featured.duration}</span>
            </div>

            <div style={{ display: 'flex', gap: '12px' }}>
              <button 
                onClick={() => { 
                  setSelectedResolution(featured.quality); 
                  setActiveVideo(featured); 
                  addToHistory(featured.id); 
                }} 
                className="hero-btn"
              >
                <Icons.Play />
                <span>Play Stream</span>
              </button>
              
              <button 
                onClick={() => toggleWatchlist(featured.id)} 
                className="hero-btn-secondary"
              >
                {isItemInWatchlist(featured.id) ? <Icons.Check /> : <Icons.Plus />}
                <span>My List</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* DYNAMIC VIEW SELECTOR: SEARCH ACTIVE VS CURATED NETFLIX HOME ROWS */}
      {isSearchOrFilterActive ? (
        
        /* SEARCH GRID VIEW */
        <div style={{ padding: '0 50px' }}>
          
          <div className="filters-wrapper" style={{ paddingLeft: 0, paddingRight: 0 }}>
            <div className="filter-tags">
              {['All Languages', 'English', 'Hindi', 'Marathi'].map(lang => {
                const value = lang === 'All Languages' ? 'All' : lang;
                return (
                  <button 
                    key={lang} 
                    onClick={() => setSelectedLanguage(value)} 
                    className={`filter-tag ${selectedLanguage === value ? 'active' : ''}`}
                  >
                    {lang}
                  </button>
                );
              })}
            </div>

            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <span style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text-muted)' }}>Sort by:</span>
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)} 
                className="theater-select"
                style={{ padding: '6px 14px', borderRadius: '20px', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-panel)' }}
              >
                <option value="Default">Default</option>
                <option value="Title">Title (A-Z)</option>
                <option value="Rating">Rating (Highest)</option>
                <option value="Duration">Duration</option>
              </select>
            </div>
          </div>

          <h2 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '22px' }}>
            Search Results <span style={{ fontSize: '15px', color: '#00d2ff', backgroundColor: 'rgba(0, 210, 255, 0.1)', padding: '3px 10px', borderRadius: '15px', marginLeft: '10px' }}>{processedCatalogFiltered.length} Titles</span>
          </h2>
          
          {processedCatalogFiltered.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 20px', border: '1px dashed var(--border-color)', borderRadius: '12px', backgroundColor: 'var(--bg-panel)' }}>
              <span style={{ fontSize: '40px', display: 'block', marginBottom: '15px' }}>🎬</span>
              <h3 style={{ fontSize: '18px', color: '#fff', marginBottom: '5px' }}>No matches found</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '14px' }}>Try broadening your search query or setting the language back to All.</p>
            </div>
          ) : (
            <div className="catalog-grid">
              {processedCatalogFiltered.map(item => (
                <div 
                  key={item.id} 
                  onClick={() => { setSelectedResolution(item.quality); setActiveVideo(item); addToHistory(item.id); }} 
                  className="media-card animate-fade-in"
                >
                  <div className="media-card-img-wrapper">
                    <img src={item.image} alt={item.title} className="media-card-img" />
                    <span className="tag-badge">{item.quality}</span>
                    <span className="duration-badge">{item.duration}</span>
                  </div>
                  <div className="media-card-info">
                    <h4 className="media-card-title">{item.title}</h4>
                    <div className="media-card-meta">
                      <span className="media-card-lang-cat">{item.languages.join('/')} • {item.category}</span>
                      <span className="media-card-rating">★ {item.rating}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      ) : (

        /* NETFLIX-STYLE HOMEPAGE ROWS (Curated Categories) */
        <div className="row-container shifted-up">
          
          {/* 1. CONTINUE WATCHING (User Specific) */}
          {profileHistory.length > 0 && (
            <div className="row-container" style={{ paddingLeft: 0, paddingRight: 0 }}>
              <h2 className="row-title">
                <Icons.Play />
                <span>Continue Watching for {activeProfile.name}</span>
              </h2>
              <div className="horizontal-scroll">
                {profileHistory.map(item => (
                  <div 
                    key={`history-${item.id}`} 
                    onClick={() => { setSelectedResolution(item.quality); setActiveVideo(item); addToHistory(item.id); }} 
                    className="media-card"
                  >
                    <div className="media-card-img-wrapper">
                      <img src={item.image} alt={item.title} className="media-card-img" />
                      <span className="tag-badge">{item.quality}</span>
                      <span className="duration-badge">{item.duration}</span>
                    </div>
                    <div className="media-card-info">
                      <h4 className="media-card-title">{item.title}</h4>
                      <div className="media-card-meta">
                        <span className="media-card-lang-cat">{item.languages[0]} • {item.category}</span>
                        <span className="media-card-rating">★ {item.rating}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 2. MY LIST / WATCHLIST (User Specific) */}
          {profileWatchlist.length > 0 && (
            <div className="row-container" style={{ paddingLeft: 0, paddingRight: 0 }}>
              <h2 className="row-title">
                <Icons.Plus />
                <span>My List</span>
              </h2>
              <div className="horizontal-scroll">
                {profileWatchlist.map(item => (
                  <div 
                    key={`watchlist-${item.id}`} 
                    onClick={() => { setSelectedResolution(item.quality); setActiveVideo(item); addToHistory(item.id); }} 
                    className="media-card"
                  >
                    <div className="media-card-img-wrapper">
                      <img src={item.image} alt={item.title} className="media-card-img" />
                      <span className="tag-badge">{item.quality}</span>
                      <span className="duration-badge">{item.duration}</span>
                    </div>
                    <div className="media-card-info">
                      <h4 className="media-card-title">{item.title}</h4>
                      <div className="media-card-meta">
                        <span className="media-card-lang-cat">{item.languages[0]} • {item.category}</span>
                        <span className="media-card-rating">★ {item.rating}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 3. TRENDING NOW */}
          <div className="row-container" style={{ paddingLeft: 0, paddingRight: 0 }}>
            <h2 className="row-title">
              <Icons.Star fill="var(--rating-gold)" />
              <span>Trending Now</span>
            </h2>
            <div className="horizontal-scroll">
              {trendingMovies.map(item => (
                <div 
                  key={`trending-${item.id}`} 
                  onClick={() => { setSelectedResolution(item.quality); setActiveVideo(item); addToHistory(item.id); }} 
                  className="media-card animate-fade-in"
                >
                  <div className="media-card-img-wrapper">
                    <img src={item.image} alt={item.title} className="media-card-img" />
                    <span className="tag-badge">{item.quality}</span>
                    <span className="duration-badge">{item.duration}</span>
                  </div>
                  <div className="media-card-info">
                    <h4 className="media-card-title">{item.title}</h4>
                    <div className="media-card-meta">
                      <span className="media-card-lang-cat">{item.languages[0]} • {item.category}</span>
                      <span className="media-card-rating">★ {item.rating}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 4. MARATHI CINEMA HITLIST */}
          {marathiHits.length > 0 && (
            <div className="row-container" style={{ paddingLeft: 0, paddingRight: 0 }}>
              <h2 className="row-title">
                <span>🎬 Marathi Cinema Hits</span>
              </h2>
              <div className="horizontal-scroll">
                {marathiHits.map(item => (
                  <div 
                    key={`marathi-${item.id}`} 
                    onClick={() => { setSelectedResolution(item.quality); setActiveVideo(item); addToHistory(item.id); }} 
                    className="media-card"
                  >
                    <div className="media-card-img-wrapper">
                      <img src={item.image} alt={item.title} className="media-card-img" />
                      <span className="tag-badge">{item.quality}</span>
                      <span className="duration-badge">{item.duration}</span>
                    </div>
                    <div className="media-card-info">
                      <h4 className="media-card-title">{item.title}</h4>
                      <div className="media-card-meta">
                        <span className="media-card-lang-cat">{item.languages[0]} • {item.category}</span>
                        <span className="media-card-rating">★ {item.rating}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 5. HINDI BLOCKBUSTERS */}
          {hindiHits.length > 0 && (
            <div className="row-container" style={{ paddingLeft: 0, paddingRight: 0 }}>
              <h2 className="row-title">
                <span>🔥 Hindi Blockbusters</span>
              </h2>
              <div className="horizontal-scroll">
                {hindiHits.map(item => (
                  <div 
                    key={`hindi-${item.id}`} 
                    onClick={() => { setSelectedResolution(item.quality); setActiveVideo(item); addToHistory(item.id); }} 
                    className="media-card"
                  >
                    <div className="media-card-img-wrapper">
                      <img src={item.image} alt={item.title} className="media-card-img" />
                      <span className="tag-badge">{item.quality}</span>
                      <span className="duration-badge">{item.duration}</span>
                    </div>
                    <div className="media-card-info">
                      <h4 className="media-card-title">{item.title}</h4>
                      <div className="media-card-meta">
                        <span className="media-card-lang-cat">{item.languages[0]} • {item.category}</span>
                        <span className="media-card-rating">★ {item.rating}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 6. ENGLISH SCI-FI & BLOCKBUSTERS */}
          {englishHits.length > 0 && (
            <div className="row-container" style={{ paddingLeft: 0, paddingRight: 0 }}>
              <h2 className="row-title">
                <span>🚀 English Sci-Fi & Action</span>
              </h2>
              <div className="horizontal-scroll">
                {englishHits.map(item => (
                  <div 
                    key={`english-${item.id}`} 
                    onClick={() => { setSelectedResolution(item.quality); setActiveVideo(item); addToHistory(item.id); }} 
                    className="media-card"
                  >
                    <div className="media-card-img-wrapper">
                      <img src={item.image} alt={item.title} className="media-card-img" />
                      <span className="tag-badge">{item.quality}</span>
                      <span className="duration-badge">{item.duration}</span>
                    </div>
                    <div className="media-card-info">
                      <h4 className="media-card-title">{item.title}</h4>
                      <div className="media-card-meta">
                        <span className="media-card-lang-cat">{item.languages[0]} • {item.category}</span>
                        <span className="media-card-rating">★ {item.rating}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 7. TV SHOWS */}
          {tvShowsList.length > 0 && (
            <div className="row-container" style={{ paddingLeft: 0, paddingRight: 0 }}>
              <h2 className="row-title">
                <span>📺 TV Shows & series</span>
              </h2>
              <div className="horizontal-scroll">
                {tvShowsList.map(item => (
                  <div 
                    key={`tv-${item.id}`} 
                    onClick={() => { setSelectedResolution(item.quality); setActiveVideo(item); addToHistory(item.id); }} 
                    className="media-card"
                  >
                    <div className="media-card-img-wrapper">
                      <img src={item.image} alt={item.title} className="media-card-img" />
                      <span className="tag-badge">{item.quality}</span>
                      <span className="duration-badge">{item.duration}</span>
                    </div>
                    <div className="media-card-info">
                      <h4 className="media-card-title">{item.title}</h4>
                      <div className="media-card-meta">
                        <span className="media-card-lang-cat">{item.languages[0]} • {item.category}</span>
                        <span className="media-card-rating">★ {item.rating}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      )}

      {/* THEATER PLAYBACK SCREEN (CINEMATIC BACKDROP MODAL) */}
      {activeVideo && (
        <div className="modal-overlay" onClick={() => setActiveVideo(null)}>
          <div className="theater-modal animate-scale-up" onClick={(e) => e.stopPropagation()}>
            
            {/* Embedded Native Player */}
            <div className="player-wrapper">
              <iframe 
                src={activeVideo.streamUrl} 
                title={activeVideo.title} 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
            
            {/* Movie details & review boards */}
            <div className="theater-details">
              <div className="theater-header">
                <div>
                  <h3 style={{ fontSize: '26px', fontWeight: '800', margin: '0 0 6px 0' }}>{activeVideo.title}</h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '13px', color: 'var(--text-muted)' }}>
                    <span style={{ color: '#00d2ff', fontWeight: '600' }}>{activeVideo.languages.join(', ')}</span>
                    <span>•</span>
                    <span>{activeVideo.category}</span>
                    <span>•</span>
                    <span>{activeVideo.duration}</span>
                    <span>•</span>
                    <span style={{ color: 'var(--rating-gold)', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '3px' }}>
                      ★ {activeVideo.rating}
                    </span>
                  </div>
                </div>
                
                <div className="theater-actions">
                  <button 
                    onClick={() => toggleWatchlist(activeVideo.id)}
                    className="btn-secondary"
                    style={{ padding: '8px 16px', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '6px' }}
                  >
                    {isItemInWatchlist(activeVideo.id) ? <Icons.Check /> : <Icons.Plus />}
                    <span>My List</span>
                  </button>

                  <select 
                    value={selectedResolution} 
                    onChange={(e) => setSelectedResolution(e.target.value)} 
                    className="theater-select"
                  >
                    <option value="Auto">Auto (Auto-Res)</option>
                    <option value="720p">720p (HD)</option>
                    <option value="1080p">1080p (FHD)</option>
                    <option value="Ultra HD">Ultra HD (4K)</option>
                  </select>
                  
                  <button 
                    onClick={() => setActiveVideo(null)} 
                    className="theater-btn-close"
                  >
                    Close Theater
                  </button>
                </div>
              </div>

              {/* Reviews boards */}
              <div className="reviews-section">
                <h4 className="reviews-title">
                  <Icons.Star fill="var(--rating-gold)" />
                  <span>Audience Reviews & Ratings</span>
                </h4>
                
                {/* Submit review forms */}
                <form onSubmit={handleAddReview} className="review-form">
                  <div className="review-form-row">
                    <select 
                      value={newReviewRating} 
                      onChange={(e) => setNewReviewRating(e.target.value)}
                      className="star-rating-select"
                    >
                      <option value="10">⭐⭐⭐⭐⭐ (10/10)</option>
                      <option value="9">⭐⭐⭐⭐½ (9/10)</option>
                      <option value="8">⭐⭐⭐⭐ (8/10)</option>
                      <option value="7">⭐⭐⭐½ (7/10)</option>
                      <option value="6">⭐⭐⭐ (6/10)</option>
                      <option value="5">⭐⭐ (5/10)</option>
                      <option value="4">⭐ (4/10)</option>
                    </select>
                    
                    <input 
                      type="text" 
                      placeholder="Share your thoughts on this title..." 
                      value={newReviewText}
                      onChange={(e) => setNewReviewText(e.target.value)}
                      className="form-control"
                      style={{ flex: 1, backgroundColor: 'rgba(255,255,255,0.03)' }}
                      required
                    />
                    
                    <button type="submit" className="review-submit-btn">Publish Review</button>
                  </div>
                </form>

                {/* List reviews */}
                <div className="reviews-list">
                  {(reviews[activeVideo.id] || []).length === 0 ? (
                    <p style={{ color: 'var(--text-dim)', fontSize: '13px', fontStyle: 'italic', textAlign: 'center', padding: '15px' }}>
                      No reviews yet. Write the first review for this title!
                    </p>
                  ) : (
                    (reviews[activeVideo.id] || []).map(review => (
                      <div key={review.id} className="review-item">
                        <div className="review-item-header">
                          <div className="review-author">
                            <span style={{ fontSize: '20px' }}>{review.avatar}</span>
                            <span style={{ color: review.color }}>{review.author}</span>
                            <span style={{ fontSize: '11px', color: 'var(--text-dim)', marginLeft: '6px' }}>{review.date}</span>
                          </div>
                          <span className="review-item-rating">★ {review.rating}/10</span>
                        </div>
                        <p className="review-comment">{review.comment}</p>
                      </div>
                    ))
                  )}
                </div>

              </div>

            </div>
          </div>
        </div>
      )}

      {/* CATALOG MANAGEMENT ADMIN SCREEN (OVERLAY MODAL) */}
      {isAdminOpen && (
        <div className="modal-overlay" onClick={() => { setIsAdminOpen(false); setEditingMedia(null); }}>
          <div 
            className="theater-modal admin-modal animate-scale-up" 
            onClick={(e) => e.stopPropagation()}
            style={{ padding: '24px', overflowY: 'auto' }}
          >
            <div style={{ display: 'flex', justifyContext: 'space-between', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h3 style={{ fontSize: '22px', fontWeight: '800', color: '#00d2ff', fontFamily: 'var(--font-heading)' }}>
                {editingMedia ? 'Edit Catalog Entry' : 'Admin Dashboard: Add Title'}
              </h3>
              <button 
                onClick={() => { setIsAdminOpen(false); setEditingMedia(null); }}
                style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}
              >
                <Icons.Close />
              </button>
            </div>

            <form onSubmit={handleAdminFormSubmit} style={{ marginBottom: '30px' }}>
              <div className="admin-grid">
                <div className="form-group">
                  <label className="form-label">Title Name</label>
                  <input 
                    type="text" 
                    value={adminForm.title} 
                    onChange={(e) => setAdminForm({ ...adminForm, title: e.target.value })}
                    className="form-control" 
                    placeholder="e.g. Stranger Things"
                    required 
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Type</label>
                  <select 
                    value={adminForm.type} 
                    onChange={(e) => setAdminForm({ ...adminForm, type: e.target.value })}
                    className="form-control"
                  >
                    <option value="Movie">Movie</option>
                    <option value="TV Show">TV Show</option>
                  </select>
                </div>
              </div>

              <div className="admin-grid">
                <div className="form-group">
                  <label className="form-label">Category / Genres</label>
                  <input 
                    type="text" 
                    value={adminForm.category} 
                    onChange={(e) => setAdminForm({ ...adminForm, category: e.target.value })}
                    className="form-control" 
                    placeholder="e.g. Romance / Drama"
                    required 
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Languages (comma separated)</label>
                  <input 
                    type="text" 
                    value={adminForm.languages} 
                    onChange={(e) => setAdminForm({ ...adminForm, languages: e.target.value })}
                    className="form-control" 
                    placeholder="e.g. Marathi, English"
                    required 
                  />
                </div>
              </div>

              <div className="admin-grid">
                <div className="form-group">
                  <label className="form-label">Rating (1.0 to 10.0)</label>
                  <input 
                    type="number" 
                    step="0.1" 
                    min="1" 
                    max="10"
                    value={adminForm.rating} 
                    onChange={(e) => setAdminForm({ ...adminForm, rating: e.target.value })}
                    className="form-control" 
                    required 
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Duration / Episodes</label>
                  <input 
                    type="text" 
                    value={adminForm.duration} 
                    onChange={(e) => setAdminForm({ ...adminForm, duration: e.target.value })}
                    className="form-control" 
                    placeholder="e.g. 2h 54m or Ep 50m"
                    required 
                  />
                </div>
              </div>

              <div className="admin-grid">
                <div className="form-group">
                  <label className="form-label">Quality Level</label>
                  <select 
                    value={adminForm.quality} 
                    onChange={(e) => setAdminForm({ ...adminForm, quality: e.target.value })}
                    className="form-control"
                  >
                    <option value="720p">720p (HD)</option>
                    <option value="1080p">1080p (FHD)</option>
                    <option value="Ultra HD">Ultra HD (4K)</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Cover Image URL</label>
                  <input 
                    type="url" 
                    value={adminForm.image} 
                    onChange={(e) => setAdminForm({ ...adminForm, image: e.target.value })}
                    className="form-control" 
                    placeholder="https://images.unsplash.com/photo-..."
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Stream / YouTube Embed URL</label>
                <input 
                  type="url" 
                  value={adminForm.streamUrl} 
                  onChange={(e) => setAdminForm({ ...adminForm, streamUrl: e.target.value })}
                  className="form-control" 
                  placeholder="e.g. https://www.youtube.com/embed/..."
                  required 
                />
              </div>

              <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end', marginTop: '20px' }}>
                {editingMedia && (
                  <button 
                    type="button" 
                    onClick={() => {
                      setEditingMedia(null);
                      setAdminForm({
                        title: '', type: 'Movie', languages: 'English',
                        category: '', rating: '8.5', duration: '2h', quality: 'Ultra HD',
                        streamUrl: '', image: ''
                      });
                    }}
                    className="btn-secondary"
                  >
                    Cancel Edit
                  </button>
                )}
                <button type="submit" className="btn-primary">
                  {editingMedia ? 'Save Changes' : 'Create Entry'}
                </button>
              </div>
            </form>

            {/* List and manage current movies */}
            <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '20px' }}>
              <h4 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '15px', fontFamily: 'var(--font-heading)', color: '#00d2ff' }}>
                Manage Existing Titles ({mediaList.length})
              </h4>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxHeight: '250px', overflowY: 'auto', paddingRight: '5px' }}>
                {mediaList.map(item => (
                  <div 
                    key={`manage-${item.id}`} 
                    style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between', 
                      alignItems: 'center', 
                      backgroundColor: 'rgba(255,255,255,0.02)', 
                      padding: '10px 14px', 
                      borderRadius: '8px', 
                      border: '1px solid rgba(255,255,255,0.04)' 
                    }}
                  >
                    <div>
                      <span style={{ fontWeight: '600', fontSize: '14px' }}>{item.title}</span>
                      <span style={{ fontSize: '11px', color: 'var(--text-dim)', marginLeft: '10px', backgroundColor: 'rgba(255,255,255,0.06)', padding: '2px 6px', borderRadius: '4px' }}>
                        {item.type}
                      </span>
                    </div>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <button 
                        onClick={() => handleEditClick(item)} 
                        style={{ background: 'none', border: 'none', color: '#ffb600', cursor: 'pointer', display: 'flex' }}
                      >
                        <Icons.Edit />
                      </button>
                      <button 
                        onClick={() => handleDeleteClick(item.id, item.title)} 
                        style={{ background: 'none', border: 'none', color: '#ff3b3b', cursor: 'pointer', display: 'flex' }}
                      >
                        <Icons.Trash />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}

// Render the application to the mount point
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
