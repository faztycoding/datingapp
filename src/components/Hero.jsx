import React from 'react';
import { ArrowRight, Star, Shield, Truck } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="cannabis-gradient text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              กัญชาคุณภาพ
              <span className="block text-cannabis-accent">Premium Grade</span>
            </h1>
            <p className="text-xl mb-8 text-gray-100">
              สัมผัสประสบการณ์กัญชาที่ดีที่สุดกับผลิตภัณฑ์คุณภาพสูง 
              คัดสรรมาอย่างพิถีพิถัน เพื่อสุขภาพและความเพลิดเพลินของคุณ
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="bg-white text-cannabis-green px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
                ดูสินค้าทั้งหมด
                <ArrowRight className="ml-2" size={20} />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-cannabis-green transition-colors">
                ปรึกษาผู้เชี่ยวชาญ
              </button>
            </div>
            
            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3">
                <div className="bg-white/20 p-3 rounded-full">
                  <Shield size={24} />
                </div>
                <div>
                  <h3 className="font-semibold">100% ถูกกฎหมาย</h3>
                  <p className="text-sm text-gray-200">มีใบอนุญาตครบถ้วน</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-white/20 p-3 rounded-full">
                  <Star size={24} />
                </div>
                <div>
                  <h3 className="font-semibold">คุณภาพพรีเมียม</h3>
                  <p className="text-sm text-gray-200">ผ่านการคัดสรรอย่างดี</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-white/20 p-3 rounded-full">
                  <Truck size={24} />
                </div>
                <div>
                  <h3 className="font-semibold">จัดส่งด่วน</h3>
                  <p className="text-sm text-gray-200">ส่งถึงหน้าบ้าน</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-cannabis-accent/20 to-transparent rounded-3xl transform rotate-3"></div>
            
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1576086213361-9a2ce5c82db5?w=600&h=600&fit=crop&auto=format"
                alt="Premium Cannabis"
                className="rounded-3xl shadow-2xl w-full h-auto transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            {/* Rating card - improved positioning and styling */}
            <div className="absolute -bottom-8 -right-8 bg-white text-cannabis-green p-6 rounded-2xl shadow-2xl border border-cannabis-accent/20 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center space-x-4">
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-cannabis-green to-cannabis-accent bg-clip-text text-transparent">4.8</div>
                  <div className="text-xs text-gray-500 font-medium">RATING</div>
                </div>
                <div className="w-px h-12 bg-gray-200"></div>
                <div>
                  <div className="flex text-yellow-400 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" className={i < 4 ? '' : 'text-gray-300'} />
                    ))}
                  </div>
                  <p className="text-sm font-semibold text-gray-700">1,200+ รีวิว</p>
                  <p className="text-xs text-gray-500">ลูกค้าพึงพอใจ</p>
                </div>
              </div>
            </div>
            
            {/* Floating badges */}
            <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg animate-pulse">
              สินค้าใหม่
            </div>
            <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
              100% Organic
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
