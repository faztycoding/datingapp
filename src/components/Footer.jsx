import React from 'react';
import { Facebook, Instagram, MessageCircle, Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-primary font-bold text-xl">🎯</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Activity Match</h3>
                <p className="text-sm text-white/80">หาเพื่อนร่วมทริป</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              แพลตฟอร์มหาเพื่อนร่วมทริปและกิจกรรม 
              ปลอดภัย สนุก และสร้างความทรงจำดีๆ ไปด้วยกัน
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">เมนูลัด</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-white transition-colors">หน้าแรก</a></li>
              <li><a href="#products" className="text-gray-300 hover:text-white transition-colors">กิจกรรมทั้งหมด</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">กิจกรรมอาหาร</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">กิจกรรมท่องเที่ยว</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">กิจกรรมกีฬา</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">สร้างกิจกรรม</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-semibold mb-4">บริการ</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">วิธีใช้งาน</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">สร้างกิจกรรม</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">คำถามที่พบบ่อย</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">นโยบายความปลอดภัย</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">เงื่อนไขการใช้บริการ</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">ติดต่อเรา</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">ติดต่อเรา</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-white/80" />
                <div>
                  <p className="text-gray-300">โทรศัพท์</p>
                  <p className="font-semibold">099-123-4567</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-white/80" />
                <div>
                  <p className="text-gray-300">อีเมล</p>
                  <p className="font-semibold">info@activitymatch.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={18} className="text-white/80" />
                <div>
                  <p className="text-gray-300">ที่อยู่</p>
                  <p className="font-semibold">กรุงเทพมหานคร</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock size={18} className="text-white/80" />
                <div>
                  <p className="text-gray-300">เวลาทำการ</p>
                  <p className="font-semibold">จันทร์-อาทิตย์ 10:00-22:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm mb-4 md:mb-0">
              © 2024 Activity Match. สงวนลิขสิทธิ์. แพลตฟอร์มหาเพื่อนร่วมทริปและกิจกรรม
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                นโยบายความเป็นส่วนตัว
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                เงื่อนไขการให้บริการ
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                ข้อกำหนดและเงื่อนไข
              </a>
            </div>
          </div>
        </div>

        {/* Community Notice */}
        <div className="mt-6 p-4 bg-white/10 rounded-lg">
          <p className="text-sm text-center text-gray-300">
            <strong>ข้อแนะนำ:</strong> กรุณาตรวจสอบข้อมูลและความปลอดภัยก่อนเข้าร่วมกิจกรรม 
            แจ้งปัญหาหรือข้อร้องเรียนได้ทางแชทหรืออีเมล
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
