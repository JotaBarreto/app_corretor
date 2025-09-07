
interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hover?: boolean;
}

export default function Card({ children, className = '', onClick, hover = false }: CardProps) {
  return (
    <div
      onClick={onClick}
      className={`bg-white rounded-lg shadow-sm border border-gray-200 ${
        hover ? 'hover:shadow-md transition-shadow cursor-pointer' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}
