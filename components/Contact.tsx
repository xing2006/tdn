import React, { useState } from 'react';
import { Copy, CheckCircle, MessageCircle, Users } from 'lucide-react';
import { WECHAT_ID } from '../constants';
import { SectionId } from '../types';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(WECHAT_ID);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <section id={SectionId.CONTACT} className="py-20 bg-gradient-to-br from-orange-50 to-orange-100">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="bg-orange-500 p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-2">加入吃货群</h2>
            <p className="opacity-90">进群第一时间获取出摊信息，提前预定更方便！</p>
          </div>
          
          <div className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              
              {/* Info Column */}
              <div className="flex-1 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-full text-green-600 mt-1">
                    <MessageCircle size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-900">加微信好友</h3>
                    <p className="text-gray-500">添加店主微信，申请加入福利群。</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full text-blue-600 mt-1">
                    <Users size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-900">群内福利</h3>
                    <p className="text-gray-500">不定时红包、新品试吃、专属折扣。</p>
                  </div>
                </div>
              </div>

              {/* Action Column */}
              <div className="flex-1 w-full md:w-auto bg-gray-50 rounded-2xl p-6 border border-gray-100 flex flex-col items-center justify-center text-center">
                <p className="text-sm text-gray-500 mb-2 uppercase tracking-wide font-bold">微信号 (WeChat ID)</p>
                <div className="text-3xl font-mono font-bold text-gray-800 mb-6 bg-white px-6 py-2 rounded-lg shadow-inner border border-gray-200">
                  {WECHAT_ID}
                </div>
                
                <button
                  onClick={handleCopy}
                  className={`w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all duration-300 transform active:scale-95 ${
                    copied 
                      ? 'bg-green-500 text-white shadow-green-500/30 shadow-lg' 
                      : 'bg-gray-900 text-white hover:bg-black shadow-xl shadow-gray-900/20'
                  }`}
                >
                  {copied ? (
                    <>
                      <CheckCircle size={20} />
                      已复制成功
                    </>
                  ) : (
                    <>
                      <Copy size={20} />
                      复制微信号
                    </>
                  )}
                </button>
                <p className="mt-3 text-xs text-gray-400">点击按钮复制，打开微信添加好友</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};