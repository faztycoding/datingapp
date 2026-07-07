import React from 'react';
import { Facebook, Instagram, MessageCircle, Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-cannabis-green text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-cannabis-green font-bold text-xl">🌿</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Premium Cannabis</h3>
                <p className="text-sm text-cannabis-accent">ร้านกัญชาคุณภาพ</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              ผู้นำด้านจัดจำหน่ายกัญชาคุณภาพสูง 
              ถูกกฎหมาย ปลอดภัย และเชื่อถือได้
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
              <li><a href="#products" className="text-gray-300 hover:text-white transition-colors">สินค้าทั้งหมด</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">สายพันธุ์อินดิก้า</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">สายพันธุ์ซาติวา</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">สายพันธุ์ไฮบริด</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">โปรโมชั่น</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-semibold mb-4">บริการลูกค้า</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">วิธีการสั่งซื้อ</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">การจัดส่ง</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">การคืนสินค้า</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">เงื่อนไขการใช้บริการ</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">คำถามที่พบบ่อย</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">ติดต่อเรา</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">ติดต่อเรา</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-cannabis-accent" />
                <div>
                  <p className="text-gray-300">โทรศัพท์</p>
                  <p className="font-semibold">099-123-4567</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-cannabis-accent" />
                <div>
                  <p className="text-gray-300">อีเมล</p>
                  <p className="font-semibold">info@premiumcannabis.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={18} className="text-cannabis-accent" />
                <div>
                  <p className="text-gray-300">ที่อยู่</p>
                  <p className="font-semibold">กรุงเทพมหานคร</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock size={18} className="text-cannabis-accent" />
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
              © 2024 Premium Cannabis. สงวนลิขสิทธิ์. ผลิตภัณฑ์กัญชาทางการแพทย์เท่านั้น
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

        {/* Legal Notice */}
        <div className="mt-6 p-4 bg-white/10 rounded-lg">
          <p className="text-sm text-center text-gray-300">
            <strong>คำเตือน:</strong> ผลิตภัณฑ์กัญชาทางการแพทย์สำหรับผู้ที่มีอายุ 20 ปีขึ้นไปเท่านั้น 
            ห้ามขับรถหรือทำงานที่ต้องใช้ความระมัดระวังหลังการใช้ 
            ผลิตภัณฑ์นี้ไม่ใช่ยาแก้โรค ควรใช้ตามคำแนะนำของแพทย์หรือผู้เชี่ยวชาญ
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
