import React, { useState } from 'react';
import { Star, ShoppingCart, Eye, X } from 'lucide-react';

const ProductCard = ({ product }) => {
  const [showDetails, setShowDetails] = useState(false);
  const getCategoryColor = (category) => {
    switch (category) {
      case 'indica':
        return 'bg-purple-100 text-purple-800';
      case 'sativa':
        return 'bg-green-100 text-green-800';
      case 'hybrid':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryName = (category) => {
    switch (category) {
      case 'indica':
        return 'อินดิก้า';
      case 'sativa':
        return 'ซาติวา';
      case 'hybrid':
        return 'ไฮบริด';
      default:
        return category;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden card-hover">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover"
        />
        {!product.inStock && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="bg-red-500 text-white px-4 py-2 rounded-lg font-semibold">
              สินค้าหมด
            </span>
          </div>
        )}
        <div className="absolute top-4 right-4">
          <button 
            className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              setShowDetails(true);
            }}
          >
            <Eye size={18} className="text-gray-700" />
          </button>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="text-xl font-bold text-gray-800">{product.name}</h3>
            <p className="text-sm text-gray-500">{product.nameEn}</p>
          </div>
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(product.category)}`}>
            {getCategoryName(product.category)}
          </span>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-1">
            <Star size={16} className="text-yellow-400 fill-current" />
            <span className="text-sm font-semibold">{product.rating}</span>
            <span className="text-sm text-gray-500">({product.reviews})</span>
          </div>
          <div className="flex space-x-4 text-sm">
            <div className="text-center">
              <span className="text-gray-500">THC</span>
              <p className="font-semibold text-cannabis-green">{product.thc}%</p>
            </div>
            <div className="text-center">
              <span className="text-gray-500">CBD</span>
              <p className="font-semibold text-cannabis-green">{product.cbd}%</p>
            </div>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-cannabis-green">฿{product.price}</span>
            <span className="text-sm text-gray-500">/กรัม</span>
          </div>
          <button 
            className={`px-4 py-2 rounded-lg font-semibold transition-colors flex items-center space-x-2 ${
              product.inStock 
                ? 'bg-cannabis-green text-white hover:bg-cannabis-light' 
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
            disabled={!product.inStock}
          >
            <ShoppingCart size={18} />
            <span>{product.inStock ? 'เพิ่มลงตะกร้า' : 'หมด'}</span>
          </button>
        </div>
      </div>

      {/* Product Details Modal */}
      {showDetails && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={() => setShowDetails(false)}>
          <div className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl" onClick={(e) => e.stopPropagation()}>
            {/* Header with close button */}
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-t-2xl"
              />
              <button
                className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-md hover:bg-white transition-all"
                onClick={() => setShowDetails(false)}
              >
                <X size={20} className="text-gray-700" />
              </button>
            </div>
            
            {/* Content */}
            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-1">{product.name}</h2>
                  <p className="text-base text-gray-500">{product.nameEn}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(product.category)}`}>
                  {getCategoryName(product.category)}
                </span>
              </div>
              
              <div className="flex items-center space-x-2 mb-4">
                <Star size={16} className="text-yellow-400 fill-current" />
                <span className="font-semibold">{product.rating}</span>
                <span className="text-gray-500 text-sm">({product.reviews} รีวิว)</span>
              </div>
              
              <p className="text-gray-600 text-sm mb-4">{product.description}</p>
              
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-gray-50 p-3 rounded-lg text-center">
                  <h3 className="text-xs text-gray-500 mb-1">THC</h3>
                  <p className="text-xl font-bold text-cannabis-green">{product.thc}%</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg text-center">
                  <h3 className="text-xs text-gray-500 mb-1">CBD</h3>
                  <p className="text-xl font-bold text-cannabis-green">{product.cbd}%</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between pt-4 border-t">
                <div>
                  <span className="text-2xl font-bold text-cannabis-green">฿{product.price}</span>
                  <span className="text-sm text-gray-500">/กรัม</span>
                </div>
                <button 
                  className={`px-5 py-2 rounded-lg font-semibold transition-colors flex items-center space-x-2 ${
                    product.inStock 
                      ? 'bg-cannabis-green text-white hover:bg-cannabis-light' 
                      : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  }`}
                  disabled={!product.inStock}
                >
                  <ShoppingCart size={18} />
                  <span>{product.inStock ? 'เพิ่มลงตะกร้า' : 'หมด'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
