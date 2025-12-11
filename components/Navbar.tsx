import React, { useState, useEffect } from 'react';
import { UtensilsCrossed, Menu as MenuIcon, X } from 'lucide-react';
import { SectionId } from '../types';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div 
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => scrollToSection(SectionId.HOME)}
        >
          <div className="bg-orange-500 p-2 rounded-full text-white flex-shrink-0">
            <UtensilsCrossed size={20} />
          </div>
          <span className={`font-bold ${scrolled ? 'text-gray-800' : 'text-gray-900 drop-shadow-sm'} text-lg md:text-xl truncate max-w-[200px] md:max-w-none`}>
            小新家土豆泥拌面拌粉
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          <button onClick={() => scrollToSection(SectionId.HOME)} className="font-medium hover:text-orange-500 transition-colors">首页</button>
          <button onClick={() => scrollToSection(SectionId.MENU)} className="font-medium hover:text-orange-500 transition-colors">美味菜单</button>
          <button onClick={() => scrollToSection(SectionId.CONTACT)} className="font-medium px-4 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/30">
            加群点餐
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-800 p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <MenuIcon size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t">
          <div className="flex flex-col py-4">
            <button 
              onClick={() => scrollToSection(SectionId.HOME)} 
              className="py-3 px-6 text-left hover:bg-orange-50 font-medium"
            >
              首页
            </button>
            <button 
              onClick={() => scrollToSection(SectionId.MENU)} 
              className="py-3 px-6 text-left hover:bg-orange-50 font-medium"
            >
              美味菜单
            </button>
            <button 
              onClick={() => scrollToSection(SectionId.CONTACT)} 
              className="py-3 px-6 text-left text-orange-600 font-bold bg-orange-50"
            >
              加群点餐
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};