
import Card from '../../../components/base/Card';
import Button from '../../../components/base/Button';

interface Property {
  id: number;
  title: string;
  location: string;
  price: string;
  type: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  images: string[];
  description: string;
  amenities: string[];
  status: string;
}

interface PropertyGridProps {
  properties: Property[];
}

export default function PropertyGrid({ properties }: PropertyGridProps) {
  if (properties.length === 0) {
    return (
      <div className="text-center py-12">
        <i className="ri-building-line text-4xl text-gray-400 mb-4"></i>
        <h3 className="text-lg font-medium text-gray-900 mb-2">
          Nenhum empreendimento encontrado
        </h3>
        <p className="text-gray-500">
          Tente ajustar os filtros ou termos de busca
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {properties.map((property) => (
        <Card key={property.id} hover className="overflow-hidden">
          <div className="relative">
            <img
              src={property.images[0]}
              alt={property.title}
              className="w-full h-48 object-cover object-top"
            />
            <div className="absolute top-3 left-3">
              <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                property.status === 'Lançamento' ? 'bg-green-100 text-green-800' :
                property.status === 'Em construção' ? 'bg-yellow-100 text-yellow-800' :
                'bg-blue-100 text-blue-800'
              }`}>
                {property.status}
              </span>
            </div>
            <div className="absolute top-3 right-3">
              <button className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors">
                <i className="ri-heart-line text-gray-600"></i>
              </button>
            </div>
          </div>
          
          <div className="p-4">
            <div className="mb-2">
              <h3 className="font-semibold text-gray-900 mb-1">{property.title}</h3>
              <div className="flex items-center text-sm text-gray-500">
                <i className="ri-map-pin-line mr-1"></i>
                {property.location}
              </div>
            </div>
            
            <div className="mb-3">
              <div className="text-2xl font-bold text-blue-600 mb-1">
                {property.price}
              </div>
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <span className="flex items-center">
                  <i className="ri-hotel-bed-line mr-1"></i>
                  {property.bedrooms} quartos
                </span>
                <span className="flex items-center">
                  <i className="ri-drop-line mr-1"></i>
                  {property.bathrooms} banheiros
                </span>
                <span className="flex items-center">
                  <i className="ri-ruler-line mr-1"></i>
                  {property.area}m²
                </span>
              </div>
            </div>
            
            <p className="text-sm text-gray-600 mb-4 line-clamp-2">
              {property.description}
            </p>
            
            <div className="flex space-x-2">
              <Button size="sm" className="flex-1">
                Ver Detalhes
              </Button>
              <Button variant="outline" size="sm">
                <i className="ri-add-line w-4 h-4 flex items-center justify-center"></i>
              </Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
