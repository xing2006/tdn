import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 border-t border-gray-800">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center items-center gap-2 mb-4">
          <span className="text-xl md:text-2xl font-bold text-orange-500">小新家土豆泥拌面拌粉</span>
        </div>
        <p className="text-gray-400 text-sm mb-4">
          用心做好每一份小吃，期待您的光临。
        </p>
        <div className="text-xs text-gray-600">
          &copy; {new Date().getFullYear()} 小新家小吃摊. All rights reserved.
        </div>
      </div>
    </footer>
  );
};