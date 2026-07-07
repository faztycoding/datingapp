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
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1541240771906-789c1a1a6b4b?w=600&h=600&fit=crop"
                alt="Premium Cannabis"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white text-cannabis-green p-6 rounded-xl shadow-xl">
              <div className="flex items-center space-x-4">
                <div className="text-3xl font-bold">4.8</div>
                <div>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-600">1,200+ รีวิว</p>
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
