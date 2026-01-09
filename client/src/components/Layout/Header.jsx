const AlgorithmVisualizer = () => {
  const [isDark, setIsDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [activeView, setActiveView] = useState('home');
  const { user, logout } = useAuth();

  const navigation = [
    { name: 'Home', icon: Home, view: 'home' },
    { name: 'Sorting', icon: PlayCircle, view: 'sorting' },
    { name: 'Searching', icon: Search, view: 'searching' },
    { name: 'About', icon: Info, view: 'about' },
  ];

  const handleNavClick = (view) => {
    if (view === 'about') {
      setShowAbout(true);
    } else {
      setActiveView(view);
    }
    setMenuOpen(false);
  };

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gray-900' : 'bg-gray-100'} transition-colors`}>
      <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-lg bg-opacity-90 bg-gray-900 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2 cursor-pointer" onClick={() => setActiveView('home')}>
              <div className="text-cyan-500 font-bold text-lg sm:text-xl">
                Algorithm Visualizer
              </div>
            </div>

            <nav className="hidden md:flex items-center space-x-2 lg:space-x-4">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.view)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                    activeView === item.view
                      ? 'bg-cyan-500 text-white'
                      : 'text-gray-300 hover:bg-gray-800'
                  }`}
                >
                  <item.icon size={18} />
                  <span>{item.name}</span>
                </button>
              ))}
            </nav>

            <div className="flex items-center space-x-2">
              {user ? (
                <div className="flex items-center space-x-2">
                  <div className="hidden sm:flex items-center space-x-2 bg-gray-800 px-3 py-2 rounded-lg">
                    <User size={18} className="text-cyan-500" />
                    <span className="text-white text-sm max-w-[100px] truncate">{user.name}</span>
                  </div>
                  <button
                    onClick={logout}
                    className="flex items-center space-x-1 px-3 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors"
                  >
                    <LogOut size={18} />
                    <span className="hidden sm:inline text-sm">Logout</span>
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setShowAuth(true)}
                  className="px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition-colors text-sm font-semibold"
                >
                  Sign In
                </button>
              )}

              <button
                onClick={() => setIsDark(!isDark)}
                className="p-2 rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition-colors"
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden p-2 rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition-colors"
              >
                {menuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden border-t border-gray-800 bg-gray-900">
            <nav className="px-4 py-4 space-y-2">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.view)}
                  className={`flex items-center space-x-2 w-full px-4 py-3 rounded-lg transition-colors ${
                    activeView === item.view
                      ? 'bg-cyan-500 text-white'
                      : 'text-gray-300 hover:bg-gray-800'
                  }`}
                >
                  <item.icon size={18} />
                  <span>{item.name}</span>
                </button>
              ))}
            </nav>
          </div>
        )}
      </header>

      <main className="pt-16 min-h-screen">
        {activeView === 'home' && <HomePage setActiveView={setActiveView} />}

        {activeView === 'sorting' && <SortingVisualizer />}
        {activeView === 'searching' && <SearchingVisualizer />}
      </main>

      {showAuth && <AuthPage onClose={() => setShowAuth(false)} />}
      {showAbout && <AboutSection onClose={() => setShowAbout(false)} />}
    </div>
  );
};

export default AlgorithmVisualizer;