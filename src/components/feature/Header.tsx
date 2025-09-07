import { useState, useEffect } from 'react';

interface HeaderProps {
  onMenuToggle: () => void;
  isSidebarOpen: boolean;
}

export default function Header({ onMenuToggle, isSidebarOpen }: HeaderProps) {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 fixed top-0 right-0 z-30 w-full lg:w-auto" 
            style={{ 
              left: isDesktop && isSidebarOpen ? '256px' : '0', 
              transition: 'left 0.3s ease-in-out' 
            }}>
      <div className="px-3 sm:px-4 lg:px-6 xl:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          <div className="flex items-center">
            <button 
              onClick={onMenuToggle}
              className="p-2 rounded-lg hover:bg-gray-100 mr-2 sm:mr-3"
            >
              <i className="ri-menu-line text-gray-600 text-lg sm:text-xl"></i>
            </button>
            <h1 className="text-lg sm:text-xl font-bold text-blue-600 hidden sm:block" style={{ fontFamily: '"Inter", sans-serif' }}>
              ImobiliSaaS
            </h1>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-4">
            <button className="p-2 rounded-lg hover:bg-gray-100">
              <i className="ri-notification-line text-gray-600 text-lg sm:text-xl"></i>
            </button>
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full overflow-hidden cursor-pointer border-2 border-blue-200">
              <img 
                src="https://readdy.ai/api/search-image?query=Professional%20real%20estate%20agent%20headshot%2C%20middle-aged%20Brazilian%20man%20with%20friendly%20smile%2C%20business%20attire%2C%20clean%20background%2C%20professional%20portrait%20photography%20style&width=40&height=40&seq=joao-profile&orientation=squarish"
                alt="João Silva" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
