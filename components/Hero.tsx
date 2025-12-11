import React from 'react';
import { ArrowRight, Flame } from 'lucide-react';
import { SectionId } from '../types';

export const Hero: React.FC = () => {
  const scrollToMenu = () => {
    const element = document.getElementById(SectionId.MENU);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id={SectionId.HOME} className="relative pt-24 pb-12 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-l from-orange-100 to-transparent opacity-60"></div>
      <div className="absolute top-20 left-10 -z-10 w-64 h-64 bg-yellow-200 rounded-full blur-3xl opacity-30"></div>

      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-600 font-medium text-sm animate-pulse">
            <Flame size={16} />
            <span>小新家今日新鲜出摊！</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            小新家 <br />
            <span className="text-orange-500">土豆泥拌面拌粉</span>
          </h1>
          
          <p className="text-lg text-gray-600 md:max-w-lg">
            专注于土豆泥拌面、拌粉、拌饭，还有超火的火鸡面和夏日清爽凉面。独家秘制酱料，绵密口感，深夜食堂的治愈选择。
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
            <button 
              onClick={scrollToMenu}
              className="group flex items-center justify-center gap-2 px-8 py-4 bg-orange-500 text-white rounded-xl font-bold text-lg hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/30 hover:-translate-y-1"
            >
              查看菜单
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button 
              onClick={() => document.getElementById(SectionId.CONTACT)?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-white text-gray-800 border-2 border-gray-100 rounded-xl font-bold text-lg hover:border-orange-200 hover:bg-orange-50 transition-all"
            >
              加群下单
            </button>
          </div>
        </div>

        <div className="md:w-1/2 relative">
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
            {/* Updated to use the signature Banmian image */}
            <img 
              src="./banmian.jpg" 
              alt="小新家招牌土豆泥拌面" 
              className="w-full h-auto object-cover"
            />
            {/* Floating Badge */}
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow-lg">
              <p className="font-bold text-gray-900">🍜 现点现做</p>
              <p className="text-xs text-gray-500">保证热乎口感</p>
            </div>
          </div>
          
          {/* Decorative Pattern */}
          <div className="absolute -bottom-6 -right-6 w-full h-full border-4 border-orange-200 rounded-3xl -z-10"></div>
        </div>
      </div>
    </section>
  );
};