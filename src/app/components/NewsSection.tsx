import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface NewsCardProps {
  title: string;
  author: string;
  category: string;
  date: string;
  description: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ title, author, category, date, description }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 h-80 flex flex-col justify-between">
      <div>
        <h3 className="text-lg text-black font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-500 mb-4">
          by {author} <span className="mx-2">|</span> {category} <span className="mx-2">|</span> {date}
        </p>
        <p className="text-gray-600">{description}</p>
      </div>
      <a href="#" className="text-yellow-500 font-medium flex items-center hover:underline mt-4">
        Read More <span className="ml-2">&rarr;</span>
      </a>
    </div>
  );
};

const NewsSection: React.FC = () => {
  const news = [
    {
      title: "Choosing the best",
      author: "Jane Doe",
      category: "Competition",
      date: "Feb 29, 2016",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean feugiat dictum lacus, ut hendrerit mi pulvinar vel.",
    },
    {
      title: "Choosing the best",
      author: "Jane Doe",
      category: "Competition",
      date: "Feb 29, 2016",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean feugiat dictum lacus, ut hendrerit mi pulvinar vel.",
    },
    {
      title: "Choosing the best",
      author: "Jane Doe",
      category: "Competition",
      date: "Feb 29, 2016",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean feugiat dictum lacus, ut hendrerit mi pulvinar vel.",
    },
    {
      title: "Choosing the best",
      author: "Jane Doe",
      category: "Competition",
      date: "Feb 29, 2016",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean feugiat dictum lacus, ut hendrerit mi pulvinar vel.",
    },
    {
      title: "Choosing the best",
      author: "Jane Doe",
      category: "Competition",
      date: "Feb 29, 2016",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean feugiat dictum lacus, ut hendrerit mi pulvinar vel.",
    },
    {
      title: "Choosing the best",
      author: "Jane Doe",
      category: "Competition",
      date: "Feb 29, 2016",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean feugiat dictum lacus, ut hendrerit mi pulvinar vel.",
    },
   
  ];

  return (
    <section className="py-12 px-10 bg-gray-50">
      <style>
        {`
        .swiper-pagination {
          display: flex;
          justify-content: center;
          gap: 8px;
          bottom: 10px !important; 
        }

        .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background-color: #ddd;
          border-radius: 50%;
          transition: background-color 0.3s ease, transform 0.3s ease;
          border: none;
        }

        .swiper-pagination-bullet-active {
          background-color: #fbbf24; /* Match the yellow color */
          transform: scale(1.3); /* Slightly enlarge the active bullet */
        }

        .swiper-button-next,
        .swiper-button-prev {
          color: #000; /* Black arrows for navigation */
          background: rgba(255, 255, 255, 0.8);
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }

        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          background: #fbbf24; /* Yellow hover for navigation */
          color: white;
        }
        `}
      </style>
      <div className="text-center mb-10">
        <h2 className="text-3xl text-black font-bold mb-4">Read Our Latest News</h2>
        <p className="text-gray-600">Stay updated with the latest in tech, science, health, and more.</p>
      </div>
      <div className="container mx-auto">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Navigation, Pagination, Autoplay]}
        >
          {news.map((item, index) => (
            <SwiperSlide key={index}>
              <NewsCard
                title={item.title}
                author={item.author}
                category={item.category}
                date={item.date}
                description={item.description}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default NewsSection;
