import React, { useState } from 'react';
import { activities, categories } from '../data/products';
import ActivityCard from './ProductCard';
import { Filter, Search } from 'lucide-react';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');

  const filteredActivities = activities.filter(activity => {
    const matchesCategory = selectedCategory === 'all' || activity.category === selectedCategory;
    const matchesSearch = activity.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         activity.titleEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         activity.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedActivities = [...filteredActivities].sort((a, b) => {
    switch (sortBy) {
      case 'date':
        return new Date(a.date) - new Date(b.date);
      case 'participants':
        return b.currentParticipants - a.currentParticipants;
      case 'rating':
        return b.rating - a.rating;
      case 'title':
      default:
        return a.title.localeCompare(b.title);
    }
  });

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">
            กิจกรรมของเรา
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            กิจกรรมน่าสนใจ คัดสรรมาอย่างพิถีพิถัน 
            เพื่อให้แน่ใจว่าคุณจะได้พบเพื่อนที่เหมาะสมที่สุด
          </p>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="grid md:grid-cols-3 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="ค้นหากิจกรรม..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary appearance-none"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="title">เรียงตามชื่อ</option>
              <option value="date">วันที่ใกล้สุด</option>
              <option value="participants">จำนวนคนมากสุด</option>
              <option value="rating">คะแนนสูงสุด</option>
            </select>
          </div>
        </div>

        {/* Activities Grid */}
        {sortedActivities.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sortedActivities.map(activity => (
              <ActivityCard key={activity.id} activity={activity} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Filter size={48} className="mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              ไม่พบกิจกรรมที่ค้นหา
            </h3>
            <p className="text-gray-500">
              ลองเปลี่ยนเงื่อนไขการค้นหาหรือกรองข้อมูล
            </p>
          </div>
        )}

        {/* Activity Stats */}
        <div className="mt-12 bg-primary rounded-xl p-8 text-white">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">{activities.length}</div>
              <p className="text-white/80">กิจกรรมทั้งหมด</p>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">
                {activities.filter(a => a.currentParticipants < a.maxParticipants).length}
              </div>
              <p className="text-white/80">รับสมัครอยู่</p>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">
                {Math.round(activities.reduce((acc, a) => acc + a.rating, 0) / activities.length * 10) / 10}
              </div>
              <p className="text-white/80">คะแนนเฉลี่ย</p>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">
                {activities.reduce((acc, a) => acc + a.reviews, 0).toLocaleString()}
              </div>
              <p className="text-white/80">รีวิวทั้งหมด</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
