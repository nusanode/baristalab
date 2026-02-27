import { useState, useEffect } from 'react';
// 1. UPDATE IMPORT: Ambil coursesData dari database.js
import { coursesData } from '../database';
// 2. IMPORT HOOK BAHASA
import { useLanguage } from '../context/LanguageContext';

export default function Program({ onOpenModal }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterLevel, setFilterLevel] = useState('All');
  
  // 3. AMBIL STATE BAHASA
  const { language } = useLanguage();
  
  // --- STATE FOR SHOW MORE FEATURE ---
  const [isExpanded, setIsExpanded] = useState(false);
  const [initialLimit, setInitialLimit] = useState(3); // Default Desktop: 3

  // 4. DEFINISI TEKS STATIS
  const content = {
    id: {
      header: "Kurikulum",
      subheader: "Standar Profesional",
      searchPlaceholder: "Cari kursus...",
      investment: "Investasi",
      showMore: "Lihat Lebih Banyak",
      showLess: "Lihat Lebih Sedikit",
      emptyTitle: "Kursus Tidak Ditemukan",
      emptyDesc: "Coba sesuaikan kata kunci pencarian atau filter Anda.",
      clearFilter: "Hapus Filter"
    },
    en: {
      header: "Curriculum",
      subheader: "Professional Standard Courses",
      searchPlaceholder: "Find your course...",
      investment: "Investment",
      showMore: "Show More",
      showLess: "Show Less",
      emptyTitle: "No Courses Found",
      emptyDesc: "Try adjusting your search or filter criteria.",
      clearFilter: "Clear Filters"
    }
  };

  const text = content[language];

  // 1. Detect Screen Size to determine initial limit (1 for Mobile, 3 for Desktop)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setInitialLimit(1); // Mobile
      } else {
        setInitialLimit(3); // Desktop
      }
    };

    handleResize(); // Run on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Reset "Show More" button if user changes filter/search for consistency
  useEffect(() => {
    setIsExpanded(false);
  }, [filterLevel, searchTerm]);


  // 2. Helper to determine Level based on course keys
  const getLevel = (key) => {
    if (key === 'basic') return 'Beginner';
    if (key === 'manual' || key === 'latte' || key === 'latte_art_only') return 'Intermediate';
    return 'Advanced'; // pro & business
  };

  // 3. Helper for Badge Styles (Solid & High Contrast)
  const getBadgeStyle = (level) => {
    switch (level) {
      case 'Beginner': 
        return 'bg-emerald-600 text-white border-emerald-500 shadow-lg shadow-emerald-900/50';
      case 'Intermediate': 
        return 'bg-blue-600 text-white border-blue-500 shadow-lg shadow-blue-900/50';
      case 'Advanced': 
        return 'bg-purple-600 text-white border-purple-500 shadow-lg shadow-purple-900/50';
      default: 
        return 'bg-gray-600 text-white';
    }
  };

  // 5. Data Transformation & Filtering
  // UPDATE: Ambil data SESUAI BAHASA (coursesData[language])
  const currentLanguageCourses = coursesData[language];

  const filteredCourses = Object.keys(currentLanguageCourses)
    .map((key) => ({
      ...currentLanguageCourses[key],
      id: key,
      level: getLevel(key)
    }))
    .filter((course) => {
      const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            course.desc.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesFilter = filterLevel === 'All' || course.level === filterLevel;
      
      return matchesSearch && matchesFilter;
    });

  // --- DATA SLICING LOGIC ---
  // If Expanded = true, show all. If false, show according to limit (1 or 3).
  const displayedCourses = isExpanded ? filteredCourses : filteredCourses.slice(0, initialLimit);

  const levels = ['All', 'Beginner', 'Intermediate', 'Advanced'];

  return (
    <section id="program" className="py-3 bg-dark relative min-h-screen">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* --- HEADER SECTION --- */}
        <div className="flex flex-col gap-10 mb-16 border-b border-white/5 pb-10">
          
          {/* Title Area */}
          <div className="animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-display text-white mb-2">{text.header}</h2>
            <p className="text-gold uppercase tracking-[0.2em] text-xs font-medium">{text.subheader}</p>
          </div>

          {/* --- CONTROLS BAR (Filter & Search Aligned) --- */}
          <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-6 animate-fade-up delay-100">
            
            {/* Filter Buttons (Left) */}
            <div className="flex flex-wrap gap-2 w-full md:w-auto bg-dark-charcoal/50 p-1.5 rounded-lg border border-white/5 backdrop-blur-sm">
              {levels.map((level) => (
                <button
                  key={level}
                  onClick={() => setFilterLevel(level)}
                  className={`px-5 py-2 text-xs uppercase tracking-widest rounded-md transition-all duration-300 ease-out ${
                    filterLevel === level 
                      ? 'bg-gold text-black font-bold shadow-lg shadow-gold/20 scale-105' 
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>

            {/* Search Bar (Right) */}
            <div className="relative group w-full md:w-auto">
              <div className={`absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors duration-300 ${searchTerm ? 'text-gold' : 'text-gray-500 group-focus-within:text-gold'}`}>
                <i className="fas fa-search text-xs"></i>
              </div>
              <input 
                type="text" 
                placeholder={text.searchPlaceholder} 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-dark-charcoal border border-white/10 text-white pl-10 pr-10 py-3 w-full md:w-72 focus:w-full md:focus:w-80 focus:outline-none focus:border-gold/50 focus:shadow-[0_0_15px_rgba(212,175,55,0.1)] transition-all duration-500 rounded-lg text-sm placeholder-gray-600"
              />
              {/* Clear Button (Shows if text exists) */}
              {searchTerm && (
                <button 
                  onClick={() => setSearchTerm('')}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-500 hover:text-white transition-colors"
                >
                  <i className="fas fa-times text-xs"></i>
                </button>
              )}
            </div>

          </div>
        </div>

        {/* --- COURSE GRID --- */}
        {filteredCourses.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayedCourses.map((course, idx) => (
                <div 
                  key={course.id} 
                  onClick={() => onOpenModal(course)} 
                  className="group relative bg-dark-charcoal border border-white/5 hover:border-gold/50 transition-all duration-500 overflow-hidden cursor-pointer flex flex-col h-full rounded-xl hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] hover:-translate-y-2"
                  style={{ animationDelay: `${idx * 100}ms` }} // Staggered animation
                >
                  {/* Image Area */}
                  <div className="h-72 overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-charcoal via-transparent to-transparent opacity-80 z-10"></div>
                    <img src={course.image} alt={course.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0" />
                    
                    {/* Level Badge */}
                    <div className={`absolute top-4 left-4 z-20 px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded border backdrop-blur-md ${getBadgeStyle(course.level)}`}>
                      {course.level}
                    </div>

                    {/* Premium Badge */}
                    {course.id === 'business' && (
                      <div className="absolute top-4 right-4 z-20 bg-gold text-black text-xs font-bold px-3 py-1 uppercase tracking-wider shadow-lg shadow-gold/20 rounded">
                        Premium
                      </div>
                    )}
                  </div>

                  {/* Content Area */}
                  <div className="p-8 relative z-20 -mt-20 flex-grow flex flex-col justify-end">
                    <h3 className="text-2xl font-serif italic text-white mb-2 group-hover:text-gold transition-colors duration-300">{course.title}</h3>
                    <p className="text-white/60 text-xs uppercase tracking-widest mb-6 border-l-2 border-gold pl-3">{course.desc.substring(0, 40)}...</p>
                    
                    {/* Price & Action */}
                    <div className="flex justify-between items-end border-t border-white/10 pt-6 mt-auto group-hover:border-white/20 transition-colors">
                      <div>
                          <span className="text-[10px] text-gold/80 uppercase tracking-widest block mb-1 font-bold">{text.investment}</span>
                          <span className="text-white font-display text-2xl lg:text-3xl font-bold tracking-tight group-hover:text-gold transition-colors duration-300">{course.price}</span>
                      </div>
                      
                      <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-gold group-hover:border-gold group-hover:text-black transition-all duration-300">
                        <i className="fas fa-arrow-right transform -rotate-45 group-hover:rotate-0 transition-transform duration-500"></i>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* --- SHOW MORE / SHOW LESS BUTTON --- */}
            {/* Only visible if filtered course count is greater than the initial limit (1 or 3) */}
            {filteredCourses.length > initialLimit && (
              <div className="mt-16 text-center animate-fade-up">
                <button 
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="group relative inline-flex items-center gap-3 px-8 py-3 bg-transparent border border-gold text-gold text-xs font-bold uppercase tracking-widest hover:bg-gold hover:text-black transition-all duration-300"
                >
                  <span>{isExpanded ? text.showLess : text.showMore}</span>
                  <i className={`fas fa-chevron-down transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}></i>
                </button>
              </div>
            )}
          </>
        ) : (
          /* Empty State */
          <div className="text-center py-20 opacity-50 animate-fade-up">
            <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-filter text-3xl text-gray-500"></i>
            </div>
            <h3 className="text-white font-display text-xl mb-2">{text.emptyTitle}</h3>
            <p className="text-gray-400 tracking-widest uppercase text-xs">{text.emptyDesc}</p>
            <button 
              onClick={() => { setSearchTerm(''); setFilterLevel('All'); }}
              className="mt-6 text-gold border-b border-gold pb-1 text-xs uppercase tracking-widest hover:text-white hover:border-white transition-colors"
            >
              {text.clearFilter}
            </button>
          </div>
        )}

      </div>
    </section>
  );
}