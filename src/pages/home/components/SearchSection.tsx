
import { useState } from 'react';
import Input from '../../../components/base/Input';
import Button from '../../../components/base/Button';

interface SearchSectionProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  filters: {
    location: string;
    minPrice: string;
    maxPrice: string;
    type: string;
    bedrooms: string;
  };
  onFiltersChange: (filters: any) => void;
}

export default function SearchSection({ 
  searchTerm, 
  onSearchChange, 
  filters, 
  onFiltersChange 
}: SearchSectionProps) {
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);

  const updateFilter = (key: string, value: string) => {
    onFiltersChange({ ...filters, [key]: value });
  };

  const clearFilters = () => {
    onFiltersChange({
      location: '',
      minPrice: '',
      maxPrice: '',
      type: '',
      bedrooms: ''
    });
  };

  const hasActiveFilters = Object.values(filters).some(value => value !== '');

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-3 sm:p-4">
      {/* Linha principal de busca e filtros rápidos */}
      <div className="flex flex-col space-y-3 lg:space-y-0 lg:flex-row lg:gap-3">
        {/* Campo de busca */}
        <div className="flex-1 min-w-0">
          <Input
            placeholder="Buscar por empreendimento ou localização..."
            value={searchTerm}
            onChange={onSearchChange}
            icon="ri-search-line"
            className="w-full"
          />
        </div>

        {/* Filtros rápidos inline */}
        <div className="flex flex-col space-y-2 sm:space-y-0 sm:flex-row sm:gap-2 lg:gap-3 lg:min-w-fit">
          <div className="min-w-0 sm:min-w-[140px]">
            <select 
              value={filters.type}
              onChange={(e) => updateFilter('type', e.target.value)}
              className="w-full px-2 sm:px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-xs sm:text-sm pr-6 sm:pr-8"
            >
              <option value="">Tipo de imóvel</option>
              <option value="Apartamento">Apartamento</option>
              <option value="Cobertura">Cobertura</option>
              <option value="Studio">Studio</option>
              <option value="Casa">Casa</option>
            </select>
          </div>

          <div className="min-w-0 sm:min-w-[120px]">
            <select 
              value={filters.bedrooms}
              onChange={(e) => updateFilter('bedrooms', e.target.value)}
              className="w-full px-2 sm:px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-xs sm:text-sm pr-6 sm:pr-8"
            >
              <option value="">Quartos</option>
              <option value="1">1 quarto</option>
              <option value="2">2 quartos</option>
              <option value="3">3 quartos</option>
              <option value="4">4+ quartos</option>
            </select>
          </div>

          {/* Botão de filtros avançados */}
          <div className="flex gap-2">
            <Button
              variant="outline"
              onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
              className="relative whitespace-nowrap text-xs sm:text-sm px-2 sm:px-3 py-2"
              size="sm"
            >
              <i className="ri-filter-3-line mr-1 sm:mr-2 text-sm"></i>
              <span className="hidden sm:inline">Mais filtros</span>
              <span className="sm:hidden">Filtros</span>
              {hasActiveFilters && (
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-blue-600 rounded-full"></span>
              )}
            </Button>

            {hasActiveFilters && (
              <Button
                variant="outline"
                onClick={clearFilters}
                size="sm"
                className="px-2 py-2"
              >
                <i className="ri-close-line text-sm"></i>
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Filtros avançados (expandível) */}
      {showAdvancedFilters && (
        <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-200">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            <Input
              label="Localização específica"
              placeholder="Ex: Barra da Tijuca"
              value={filters.location}
              onChange={(value) => updateFilter('location', value)}
            />
            
            <Input
              label="Preço mínimo"
              placeholder="Ex: 500.000"
              value={filters.minPrice}
              onChange={(value) => updateFilter('minPrice', value)}
              type="number"
            />
            
            <Input
              label="Preço máximo"
              placeholder="Ex: 1.000.000"
              value={filters.maxPrice}
              onChange={(value) => updateFilter('maxPrice', value)}
              type="number"
            />
          </div>
        </div>
      )}
    </div>
  );
}
