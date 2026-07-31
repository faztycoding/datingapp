import React, { useState } from 'react';
import { Star, Eye, X, Users, MapPin, Calendar } from 'lucide-react';

const ActivityCard = ({ activity }) => {
  const [showDetails, setShowDetails] = useState(false);
  const getCategoryColor = (category) => {
    switch (category) {
      case 'food':
        return 'bg-orange-100 text-orange-800';
      case 'travel':
        return 'bg-blue-100 text-blue-800';
      case 'movies':
        return 'bg-purple-100 text-purple-800';
      case 'sports':
        return 'bg-green-100 text-green-800';
      case 'gaming':
        return 'bg-red-100 text-red-800';
      case 'photography':
        return 'bg-pink-100 text-pink-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryName = (category) => {
    switch (category) {
      case 'food':
        return 'อาหาร';
      case 'travel':
        return 'ท่องเที่ยว';
      case 'movies':
        return 'หนัง/บันเทิง';
      case 'sports':
        return 'กีฬา/ออกกำลังกาย';
      case 'gaming':
        return 'เกม';
      case 'photography':
        return 'ถ่ายรูป';
      default:
        return category;
    }
  };

  return (
    <>
      <div 
        className="bg-white rounded-xl shadow-lg overflow-hidden card-hover cursor-pointer"
        onClick={() => setShowDetails(true)}
      >
        <div className="relative">
          <img
            src={activity.image}
            alt={activity.title}
            className="w-full h-64 object-cover"
          />
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold flex items-center shadow-md">
            <Calendar size={14} className="mr-1 text-primary" />
            {activity.date}
          </div>
          {activity.currentParticipants >= activity.maxParticipants && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <span className="bg-gray-500 text-white px-4 py-2 rounded-lg font-semibold">
                เต็มแล้ว
              </span>
            </div>
          )}
          <div className="absolute top-4 right-4">
            <button 
              className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setShowDetails(true);
              }}
            >
              <Eye size={18} className="text-gray-700" />
            </button>
          </div>
        </div>
        
        <div className="p-6">
          <div className="flex justify-between items-start mb-3">
            <div>
              <h3 className="text-xl font-bold text-gray-800">{activity.title}</h3>
              <p className="text-sm text-gray-500">{activity.titleEn}</p>
            </div>
            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(activity.category)}`}>
              {getCategoryName(activity.category)}
            </span>
          </div>
          
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {activity.description}
          </p>
          
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-1">
              <Star size={16} className="text-yellow-400 fill-current" />
              <span className="text-sm font-semibold">{activity.rating}</span>
              <span className="text-sm text-gray-500">({activity.reviews})</span>
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <Users size={16} className="mr-1" />
              <span>{activity.currentParticipants}/{activity.maxParticipants}</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center text-sm text-gray-500">
              <MapPin size={16} className="mr-1" />
              <span className="truncate max-w-[150px]">{activity.location}</span>
            </div>
            <button 
              className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                activity.currentParticipants < activity.maxParticipants 
                  ? 'bg-primary text-white hover:bg-primary-dark' 
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
              disabled={activity.currentParticipants >= activity.maxParticipants}
              onClick={(e) => e.stopPropagation()}
            >
              {activity.currentParticipants < activity.maxParticipants ? 'เข้าร่วม' : 'เต็มแล้ว'}
            </button>
          </div>
        </div>
      </div>

      {/* Activity Details Modal - Rendered outside the card */}
      {showDetails && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[9999] p-4" onClick={() => setShowDetails(false)}>
          <div className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl" onClick={(e) => e.stopPropagation()}>
            {/* Header with close button */}
            <div className="relative">
              <img
                src={activity.image}
                alt={activity.title}
                className="w-full h-48 object-cover rounded-t-2xl"
              />
              <button
                className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-md hover:bg-white transition-all"
                onClick={() => setShowDetails(false)}
              >
                <X size={20} className="text-gray-700" />
              </button>
            </div>
            
            {/* Content */}
            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-1">{activity.title}</h2>
                  <p className="text-base text-gray-500">{activity.titleEn}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(activity.category)}`}>
                  {getCategoryName(activity.category)}
                </span>
              </div>
              
              <div className="flex items-center space-x-4 mb-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <Calendar size={16} className="mr-1 text-primary" />
                  <span>{activity.date}</span>
                </div>
                <div className="flex items-center">
                  <MapPin size={16} className="mr-1 text-primary" />
                  <span>{activity.location}</span>
                </div>
                <div className="flex items-center">
                  <Users size={16} className="mr-1 text-primary" />
                  <span>{activity.currentParticipants}/{activity.maxParticipants}</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-2 mb-4">
                <Star size={16} className="text-yellow-400 fill-current" />
                <span className="font-semibold">{activity.rating}</span>
                <span className="text-gray-500 text-sm">({activity.reviews} รีวิว)</span>
              </div>
              
              <p className="text-gray-600 text-sm mb-4">{activity.description}</p>
              
              {/* Creator info */}
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <div className="flex items-center">
                  <img
                    src={activity.creatorImage}
                    alt={activity.creator}
                    className="w-10 h-10 rounded-full object-cover mr-3"
                  />
                  <div>
                    <p className="font-medium text-gray-800">{activity.creator}</p>
                    <p className="text-xs text-gray-500">ผู้จัดกิจกรรม</p>
                  </div>
                </div>
              </div>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {activity.tags.map((tag, index) => (
                  <span key={index} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center justify-between pt-4 border-t">
                <button 
                  className={`px-5 py-2 rounded-lg font-semibold transition-colors ${
                    activity.currentParticipants < activity.maxParticipants 
                      ? 'bg-primary text-white hover:bg-primary-dark' 
                      : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  }`}
                  disabled={activity.currentParticipants >= activity.maxParticipants}
                >
                  {activity.currentParticipants < activity.maxParticipants ? 'เข้าร่วมกิจกรรม' : 'เต็มแล้ว'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ActivityCard;
