import React from 'react';
import { ArrowRight, Star, Shield, Truck } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-emerald-950 via-green-900 to-emerald-800 text-white relative overflow-hidden">
      {/* Radial gradient overlay for depth */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-emerald-950/50 via-green-900/30 to-emerald-800/50"></div>
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent"></div>
      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in-up">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 tracking-wide">
              กัญชาคุณภาพ
              <span className="block text-amber-400 font-extrabold text-2xl md:text-4xl">Premium Grade</span>
            </h1>
            <p className="text-xl mb-8 text-gray-100 leading-relaxed">
              สัมผัสประสบการณ์กัญชาที่ดีที่สุดกับผลิตภัณฑ์คุณภาพสูง 
              คัดสรรมาอย่างพิถีพิถัน เพื่อสุขภาพและความเพลิดเพลินของคุณ
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="bg-gradient-to-r from-amber-500 to-amber-600 text-emerald-950 px-8 py-4 rounded-lg font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center">
                ดูสินค้าทั้งหมด
                <ArrowRight className="ml-2" size={20} />
              </button>
              <button className="border-2 border-amber-400 text-amber-400 px-8 py-4 rounded-lg font-semibold hover:bg-amber-400 hover:text-emerald-950 transition-all duration-300">
                ปรึกษาผู้เชี่ยวชาญ
              </button>
            </div>
            
            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3">
                <div className="bg-white/10 backdrop-blur-md p-3 rounded-full border border-white/20">
                  <Shield size={24} className="text-amber-400" />
                </div>
                <div>
                  <h3 className="font-semibold">100% ถูกกฎหมาย</h3>
                  <p className="text-sm text-gray-200">มีใบอนุญาตครบถ้วน</p>
                  <p className="text-xs text-amber-400 mt-1">Premium Cannabis</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-white/10 backdrop-blur-md p-3 rounded-full border border-white/20">
                  <Star size={24} className="text-amber-400" />
                </div>
                <div>
                  <h3 className="font-semibold">คุณภาพพรีเมียม</h3>
                  <p className="text-sm text-gray-200">ผ่านการคัดสรรอย่างดี</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-white/10 backdrop-blur-md p-3 rounded-full border border-white/20">
                  <Truck size={24} className="text-amber-400" />
                </div>
                <div>
                  <h3 className="font-semibold">จัดส่งด่วน</h3>
                  <p className="text-sm text-gray-200">ส่งถึงหน้าบ้าน</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-transparent rounded-3xl transform rotate-3"></div>
            
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1576086213361-9a2ce5c82db5?w=600&h=600&fit=crop&auto=format"
                alt="Premium Cannabis"
                className="rounded-3xl shadow-2xl w-full h-auto transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            {/* Rating card - glassmorphism style */}
            <div className="absolute -bottom-8 -right-8 bg-white/10 backdrop-blur-md text-white p-6 rounded-2xl shadow-2xl border border-white/20 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center space-x-4">
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">4.8</div>
                  <div className="text-xs text-gray-300 font-medium">RATING</div>
                </div>
                <div className="w-px h-12 bg-white/30"></div>
                <div>
                  <div className="flex text-amber-400 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" className={i < 4 ? '' : 'text-gray-500'} />
                    ))}
                  </div>
                  <p className="text-sm font-semibold text-white">1,200+ รีวิว</p>
                  <p className="text-xs text-gray-300">ลูกค้าพึงพอใจ</p>
                </div>
              </div>
            </div>
            
            {/* Floating badges - glassmorphism */}
            <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg border border-white/20">
              100% Organic
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
