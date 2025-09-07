
interface MobileBottomNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function MobileBottomNav({ activeTab, onTabChange }: MobileBottomNavProps) {
  const tabs = [
    { id: 'search', label: 'Buscar', icon: 'ri-search-line' },
    { id: 'properties', label: 'Imóveis', icon: 'ri-building-line' },
    { id: 'pages', label: 'Páginas', icon: 'ri-pages-line' },
    { id: 'profile', label: 'Perfil', icon: 'ri-user-line' }
  ];

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 safe-area-pb">
      <div className="flex">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`flex-1 py-2 sm:py-3 px-1 sm:px-2 flex flex-col items-center space-y-1 transition-colors ${
              activeTab === tab.id ? 'text-blue-600' : 'text-gray-500'
            }`}
          >
            <div className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center">
              <i className={`${tab.icon} text-base sm:text-lg`}></i>
            </div>
            <span className="text-xs font-medium leading-tight">{tab.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
