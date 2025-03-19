import React from 'react';

interface CategoryProps {
  title: string;
  items: string[];
}

const Sidebar = ({ categories }: { categories: CategoryProps[] }) => {
  return (
    <div className="bg-white p-4 shadow-md rounded-md">
      <h2 className="text-lg font-bold mb-4">Shop by Category</h2>
      <div className="space-y-4">
        {categories.map((category, index) => (
          <div key={index}>
            <h3 className="font-medium text-sm mb-2">{category.title}</h3>
            <ul className="space-y-1">
              {category.items.map((item, idx) => (
                <li key={idx} className="text-sm text-gray-600 hover:text-[#F3A847] cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
      <div className="mt-6 pt-4 border-t">
        <h3 className="font-medium text-sm mb-2">Avg. Customer Review</h3>
        <div className="space-y-2">
          {[4, 3, 2, 1].map((rating) => (
            <div key={rating} className="flex items-center">
              <div className="flex">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill={i < rating ? "currentColor" : "none"}
                      stroke={i >= rating ? "currentColor" : "none"}
                      className="h-4 text-yellow-500"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ))}
              </div>
              <span className="text-xs text-gray-600 ml-1">& Up</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-6 pt-4 border-t">
        <h3 className="font-medium text-sm mb-2">Price</h3>
        <ul className="space-y-1">
          <li className="text-sm text-gray-600 hover:text-[#F3A847] cursor-pointer">
            Under $25
          </li>
          <li className="text-sm text-gray-600 hover:text-[#F3A847] cursor-pointer">
            $25 to $50
          </li>
          <li className="text-sm text-gray-600 hover:text-[#F3A847] cursor-pointer">
            $50 to $100
          </li>
          <li className="text-sm text-gray-600 hover:text-[#F3A847] cursor-pointer">
            $100 to $200
          </li>
          <li className="text-sm text-gray-600 hover:text-[#F3A847] cursor-pointer">
            $200 & Above
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
