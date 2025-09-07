import { useState } from 'react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const [activeMenu, setActiveMenu] = useState('dashboard');

  const menuItems = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: 'ri-dashboard-line',
      href: '/'
    },
    {
      id: 'properties',
      label: 'Empreendimentos',
      icon: 'ri-building-line',
      href: '/properties'
    },
    {
      id: 'landing-pages',
      label: 'Landing Pages',
      icon: 'ri-pages-line',
      href: '/landing-pages',
      badge: '3'
    },
    {
      id: 'leads',
      label: 'Leads',
      icon: 'ri-user-heart-line',
      href: '/leads'
    },
    {
      id: 'analytics',
      label: 'Relatórios',
      icon: 'ri-bar-chart-line',
      href: '/analytics'
    },
    {
      id: 'settings',
      label: 'Configurações',
      icon: 'ri-settings-line',
      href: '/settings'
    }
  ];

  return (
    <>
      {/* Overlay para mobile e tablet */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <aside className={`fixed top-0 left-0 h-full w-64 bg-white border-r border-gray-200 z-50 lg:z-40 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-between p-4 lg:p-6 border-b border-gray-200">
            <div className="flex items-center">
              <div className="w-7 h-7 lg:w-8 lg:h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-2 lg:mr-3">
                <i className="ri-building-2-line text-white text-base lg:text-lg"></i>
              </div>
              <span className="text-lg lg:text-xl font-bold text-gray-900" style={{ fontFamily: '"Inter", sans-serif' }}>
                ImobiliSaaS
              </span>
            </div>
            <button 
              onClick={onClose}
              className="lg:hidden p-1 rounded-lg hover:bg-gray-100"
            >
              <i className="ri-close-line text-gray-500 text-lg"></i>
            </button>
          </div>
          
          {/* Menu Items */}
          <nav className="flex-1 px-3 lg:px-4 py-4 lg:py-6">
            <ul className="space-y-1 lg:space-y-2">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveMenu(item.id);
                      // Fechar sidebar no mobile após clicar
                      if (window.innerWidth < 1024) {
                        onClose();
                      }
                    }}
                    className={`flex items-center px-3 lg:px-4 py-2.5 lg:py-3 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                      activeMenu === item.id
                        ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                  >
                    <div className="w-5 h-5 flex items-center justify-center mr-2 lg:mr-3">
                      <i className={`${item.icon} text-base lg:text-lg`}></i>
                    </div>
                    <span className="flex-1 text-sm lg:text-base">{item.label}</span>
                    {item.badge && (
                      <span className="bg-blue-100 text-blue-600 text-xs font-medium px-1.5 lg:px-2 py-0.5 lg:py-1 rounded-full">
                        {item.badge}
                      </span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          
          {/* User Profile */}
          <div className="p-3 lg:p-4 border-t border-gray-200">
            <div className="flex items-center">
              <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full overflow-hidden mr-2 lg:mr-3 border-2 border-blue-200">
                <img 
                  src="https://readdy.ai/api/search-image?query=Professional%20real%20estate%20agent%20headshot%2C%20middle-aged%20Brazilian%20man%20with%20friendly%20smile%2C%20business%20attire%2C%20clean%20background%2C%20professional%20portrait%20photography%20style&width=50&height=50&seq=joao-profile-sidebar&orientation=squarish"
                  alt="João Silva" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">João Silva</p>
                <p className="text-xs text-gray-500 truncate">Corretor Premium</p>
              </div>
              <button className="p-1.5 lg:p-2 hover:bg-gray-100 rounded-lg flex-shrink-0">
                <i className="ri-more-2-line text-gray-400 text-sm lg:text-base"></i>
              </button>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
