import React, { useState } from 'react';
import { products, categories } from '../data/products';
import ProductCard from './ProductCard';
import { Filter, Search } from 'lucide-react';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.nameEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'name':
      default:
        return a.name.localeCompare(b.name);
    }
  });

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-cannabis-green mb-4">
            สินค้าของเรา
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            ผลิตภัณฑ์กัญชาคุณภาพสูง คัดสรรมาอย่างพิถีพิถัน 
            เพื่อให้แน่ใจว่าคุณจะได้รับประสบการณ์ที่ดีที่สุด
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
                placeholder="ค้นหาสินค้า..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cannabis-green"
              />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cannabis-green appearance-none"
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
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cannabis-green"
            >
              <option value="name">เรียงตามชื่อ</option>
              <option value="price-low">ราคา: ต่ำ-สูง</option>
              <option value="price-high">ราคา: สูง-ต่ำ</option>
              <option value="rating">คะแนนสูงสุด</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
        {sortedProducts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sortedProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Filter size={48} className="mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              ไม่พบสินค้าที่ค้นหา
            </h3>
            <p className="text-gray-500">
              ลองเปลี่ยนเงื่อนไขการค้นหาหรือกรองข้อมูล
            </p>
          </div>
        )}

        {/* Product Stats */}
        <div className="mt-12 bg-cannabis-green rounded-xl p-8 text-white">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">{products.length}</div>
              <p className="text-cannabis-accent">สายพันธุ์ทั้งหมด</p>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">
                {products.filter(p => p.inStock).length}
              </div>
              <p className="text-cannabis-accent">สินค้าพร้อมขาย</p>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">
                {Math.round(products.reduce((acc, p) => acc + p.rating, 0) / products.length * 10) / 10}
              </div>
              <p className="text-cannabis-accent">คะแนนเฉลี่ย</p>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">
                {products.reduce((acc, p) => acc + p.reviews, 0).toLocaleString()}
              </div>
              <p className="text-cannabis-accent">รีวิวทั้งหมด</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
