
import { useState } from 'react';
import Header from '../../components/feature/Header';
import Sidebar from '../../components/feature/Sidebar';
import MobileBottomNav from '../../components/feature/MobileBottomNav';
import SearchSection from './components/SearchSection';
import PropertyGrid from './components/PropertyGrid';
import { mockProperties } from '../../mocks/properties';

export default function Home() {
  const [activeTab, setActiveTab] = useState('search');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    location: '',
    minPrice: '',
    maxPrice: '',
    type: '',
    bedrooms: ''
  });

  const filteredProperties = mockProperties.filter(property => {
    if (searchTerm && !property.title.toLowerCase().includes(searchTerm.toLowerCase()) && 
        !property.location.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }
    if (filters.location && !property.location.toLowerCase().includes(filters.location.toLowerCase())) {
      return false;
    }
    if (filters.type && property.type !== filters.type) {
      return false;
    }
    if (filters.bedrooms && property.bedrooms.toString() !== filters.bedrooms) {
      return false;
    }
    return true;
  });

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50" style={{ fontFamily: '"Inter", sans-serif' }}>
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <Header onMenuToggle={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      
      <main className="pt-16 transition-all duration-300 ease-in-out lg:ml-0" 
            style={{ 
              marginLeft: window.innerWidth >= 1024 && isSidebarOpen ? '256px' : '0',
              minHeight: 'calc(100vh - 64px)'
            }}>
        <div className="px-3 sm:px-4 lg:px-6 xl:px-8 py-4 lg:py-6 pb-20 lg:pb-6">
          <div className="mb-6 lg:mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              Olá, João Silva
            </h1>
            <p className="text-sm sm:text-base text-gray-600">
              Encontre o empreendimento ideal
            </p>
          </div>

          <SearchSection 
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            filters={filters}
            onFiltersChange={setFilters}
          />

          <div className="mt-6 lg:mt-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 lg:mb-6 space-y-3 sm:space-y-0">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
                {filteredProperties.length} empreendimentos encontrados
              </h2>
              <div className="flex items-center space-x-2">
                <span className="text-xs sm:text-sm text-gray-500">Ordenar por:</span>
                <select className="text-xs sm:text-sm border border-gray-300 rounded-lg px-2 sm:px-3 py-1 pr-6 sm:pr-8">
                  <option>Mais recentes</option>
                  <option>Menor preço</option>
                  <option>Maior preço</option>
                  <option>Área (m²)</option>
                </select>
              </div>
            </div>

            <PropertyGrid properties={filteredProperties} />
          </div>
        </div>
      </main>

      <MobileBottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}
