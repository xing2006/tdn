import React from 'react';
import { MenuItemType } from '../types';
import { Flame } from 'lucide-react';

interface MenuItemProps {
  item: MenuItemType;
}

export const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-orange-50 h-full flex flex-col">
      <div className="relative h-48 overflow-hidden group">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {item.tag && (
          <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
            {item.tag}
          </div>
        )}
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-900 line-clamp-1">{item.name}</h3>
          <span className="text-xl font-bold text-orange-600 whitespace-nowrap">¥{item.price}</span>
        </div>
        
        {item.spicyLevel !== undefined && item.spicyLevel > 0 && (
          <div className="flex gap-1 mb-2">
            {[...Array(item.spicyLevel)].map((_, i) => (
              <Flame key={i} size={14} className="text-red-500 fill-red-500" />
            ))}
          </div>
        )}
        
        <p className="text-gray-500 text-sm mb-4 line-clamp-2 flex-grow">{item.description}</p>
        
        <button 
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="w-full py-2 bg-orange-50 text-orange-600 font-semibold rounded-lg hover:bg-orange-500 hover:text-white transition-colors"
        >
          想吃这个
        </button>
      </div>
    </div>
  );
};