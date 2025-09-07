
interface InputProps {
  label?: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  type?: 'text' | 'email' | 'number' | 'tel';
  required?: boolean;
  className?: string;
  icon?: string;
}

export default function Input({
  label,
  placeholder,
  value,
  onChange,
  type = 'text',
  required = false,
  className = '',
  icon
}: InputProps) {
  return (
    <div className={`${className}`}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <div className="relative">
        {icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <i className={`${icon} text-gray-400 text-sm`}></i>
          </div>
        )}
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          required={required}
          className={`w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm ${
            icon ? 'pl-10' : ''
          }`}
        />
      </div>
    </div>
  );
}
