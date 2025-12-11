import React from 'react';
import { MENU_ITEMS } from '../constants';
import { MenuItem } from './MenuItem';
import { SectionId } from '../types';

export const Menu: React.FC = () => {
  return (
    <section id={SectionId.MENU} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-orange-500 font-bold tracking-wider uppercase text-sm">Our Menu</span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">精选美味</h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            每一份都是用心制作。无论是想吃软糯的土豆泥，还是刺激的火鸡面，这里都能满足你。
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {MENU_ITEMS.map((item) => (
            <MenuItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};