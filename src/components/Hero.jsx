import React from 'react';
import { ArrowRight, Star, Shield, Truck } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-emerald-950 via-green-900 to-emerald-800 text-white relative overflow-hidden">
      {/* Radial gradient overlay for depth */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-emerald-950/50 via-green-900/30 to-emerald-800/50"></div>
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent"></div>
      
      {/* Subtle dot pattern overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.06]" style={{backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
      
      {/* Decorative glow circle */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/20 blur-3xl pointer-events-none"></div>
      
      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="max-w-3xl animate-fade-in-up">
          {/* Premium Collection Label */}
          <div className="flex items-center mb-4">
            <div className="h-px w-12 bg-amber-400/50"></div>
            <span className="mx-4 text-amber-400 text-xs font-bold tracking-widest">PREMIUM COLLECTION</span>
            <div className="h-px w-12 bg-amber-400/50"></div>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold mb-6 tracking-wide">
            กัญชาคุณภาพ
            <span className="block text-amber-400 font-extrabold text-2xl md:text-4xl">Premium Grade</span>
          </h1>
          <p className="text-xl mb-8 text-gray-100 leading-relaxed">
            สัมผัสประสบการณ์กัญชาที่ดีที่สุดกับผลิตภัณฑ์คุณภาพสูง 
            คัดสรรมาอย่างพิถีพิถัน เพื่อสุขภาพและความเพลิดเพลินของคุณ
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button className="bg-gradient-to-r from-amber-400 to-amber-600 text-emerald-950 px-8 py-4 rounded-lg font-bold shadow-lg shadow-amber-500/30 hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center">
              ดูสินค้าทั้งหมด
              <ArrowRight className="ml-2" size={20} />
            </button>
            <button className="border-2 border-amber-400 text-amber-400 px-8 py-4 rounded-lg font-semibold hover:bg-amber-400 hover:text-emerald-950 transition-all duration-300">
              ปรึกษาผู้เชี่ยวชาญ
            </button>
          </div>
          
          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition">
              <div className="flex items-center space-x-3">
                <div className="bg-white/10 backdrop-blur-md p-3 rounded-full border border-white/20">
                  <Shield size={24} className="text-amber-400" />
                </div>
                <div>
                  <h3 className="font-semibold">100% ถูกกฎหมาย</h3>
                  <p className="text-sm text-gray-200">มีใบอนุญาตครบถ้วน</p>
                </div>
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition">
              <div className="flex items-center space-x-3">
                <div className="bg-white/10 backdrop-blur-md p-3 rounded-full border border-white/20">
                  <Star size={24} className="text-amber-400" />
                </div>
                <div>
                  <h3 className="font-semibold">คุณภาพพรีเมียม</h3>
                  <p className="text-sm text-gray-200">ผ่านการคัดสรรอย่างดี</p>
                </div>
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition">
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
        </div>
      </div>
    </section>
  );
};

export default Hero;
