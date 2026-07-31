import React from 'react';
import { ArrowRight, Star, Shield, Users, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-white via-primary-light/30 to-secondary/20 text-gray-800 relative overflow-hidden min-h-[600px]">
      {/* Activity graphics overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.08]" style={{backgroundImage: 'radial-gradient(circle at 20% 30%, #FF69B4 2px, transparent 2px), radial-gradient(circle at 80% 70%, #87CEEB 2px, transparent 2px), radial-gradient(circle at 50% 50%, #98FB98 2px, transparent 2px)', backgroundSize: '60px 60px'}}></div>
      
      {/* Decorative shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/10 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="max-w-3xl animate-fade-in-up">
          {/* Premium Collection Label */}
          <div className="flex items-center mb-4">
            <div className="h-px w-12 bg-primary/30"></div>
            <span className="mx-4 text-primary-dark text-xs font-bold tracking-widest">ACTIVITY MATCH</span>
            <div className="h-px w-12 bg-primary/30"></div>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-4 tracking-wide text-gray-900">
            หาเพื่อนร่วมทริป
            <span className="block text-primary-dark font-extrabold text-2xl md:text-3xl">กิจกรรมที่คุณชอบ</span>
          </h1>
          <p className="text-lg mb-8 text-gray-600 leading-relaxed max-w-2xl">
            สร้างกิจกรรม หาเพื่อนไปด้วยกัน ไม่ว่าจะเป็นกินชาบู ดูหนัง หรือเที่ยวทะเล 
            เจอคนที่คิดเหมือนกันและสร้างความทรงจำดีๆ ไปด้วยกัน
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button className="bg-gradient-to-r from-accent to-green-400 text-gray-900 px-8 py-4 rounded-lg font-bold shadow-lg shadow-accent/30 hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center">
              สร้างกิจกรรมใหม่
              <ArrowRight className="ml-2" size={20} />
            </button>
            <button className="border-2 border-primary text-primary-dark px-8 py-4 rounded-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300">
              ดูกิจกรรมทั้งหมด
            </button>
          </div>
          
          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white/60 backdrop-blur-md border border-primary/20 rounded-xl p-4 hover:bg-white/80 transition">
              <div className="flex items-center space-x-3">
                <div className="bg-primary/20 backdrop-blur-md p-3 rounded-full border border-primary/30">
                  <Shield size={24} className="text-primary-dark" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">ปลอดภัย 100%</h3>
                  <p className="text-sm text-gray-600">ตรวจสอบตัวตนครบถ้วน</p>
                </div>
              </div>
            </div>
            <div className="bg-white/60 backdrop-blur-md border border-primary/20 rounded-xl p-4 hover:bg-white/80 transition">
              <div className="flex items-center space-x-3">
                <div className="bg-primary/20 backdrop-blur-md p-3 rounded-full border border-primary/30">
                  <Star size={24} className="text-primary-dark" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">จับคู่แม่นยำ</h3>
                  <p className="text-sm text-gray-600">ตามความสนใจเดียวกัน</p>
                </div>
              </div>
            </div>
            <div className="bg-white/60 backdrop-blur-md border border-primary/20 rounded-xl p-4 hover:bg-white/80 transition">
              <div className="flex items-center space-x-3">
                <div className="bg-primary/20 backdrop-blur-md p-3 rounded-full border border-primary/30">
                  <Users size={24} className="text-primary-dark" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">ตอบรวดเร็ว</h3>
                  <p className="text-sm text-gray-600">คุยและจัดตารางได้ทันที</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Floating badge - glassmorphism */}
        <div className="absolute top-8 right-8 bg-white/80 backdrop-blur-md text-primary-dark px-5 py-2.5 rounded-full text-sm font-semibold shadow-2xl border border-primary/30 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
          Activity Match · 100% Free
        </div>
        
        {/* Rating card - glassmorphism style */}
        <div className="absolute bottom-8 right-8 bg-white/80 backdrop-blur-md text-gray-900 p-6 rounded-2xl shadow-2xl border border-primary/30 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
          <div className="flex items-center space-x-4">
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-primary-dark to-primary bg-clip-text text-transparent">4.8</div>
              <div className="text-xs text-gray-600 font-medium">RATING</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div>
              <div className="flex text-primary-dark mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" className={i < 4 ? '' : 'text-gray-300'} />
                ))}
              </div>
              <p className="text-sm font-semibold text-gray-900">1,200+ กิจกรรม</p>
              <p className="text-xs text-gray-600">จัดสำเร็จแล้ว</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
