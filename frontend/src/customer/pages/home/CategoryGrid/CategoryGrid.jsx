import React from "react";

const CategoryGrid = () => {
  return (
    <div className="px-5 lg:px-20 py-3">
      <div className="grid grid-cols-12 grid-rows-6 gap-4 h-[600px]">
        {/* LEFT BIG */}
        <div className="col-span-3 row-span-6">
          <img
            className="w-full h-full object-cover rounded-md"
            src="https://pos.nvncdn.com/04d215-119681/ps/Vay-nu-thiet-ke-Nara-dress-Text-han-cao-cap-HIU-design.jpg?v=1760209002"
            alt=""
          />
        </div>

        {/* MIDDLE TOP LEFT */}
        <div className="col-span-3 row-span-3">
          <img
            className="w-full h-full object-cover rounded-md"
            src="https://images.unsplash.com/photo-1549298916-b41d501d3772"
            alt=""
          />
        </div>

        {/* MIDDLE TOP RIGHT (wide) */}
        <div className="col-span-3 row-span-3">
          <img
            className="w-full h-full object-cover rounded-md"
            src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519"
            alt=""
          />
        </div>

        {/* RIGHT BIG */}
        <div className="col-span-3 row-span-6">
          <img
            className="w-full h-full object-cover rounded-md"
            src="https://images.unsplash.com/photo-1593032465175-481ac7f401a0"
            alt=""
          />
        </div>

        {/* MIDDLE BOTTOM LEFT (wide) */}
        <div className="col-span-4 row-span-3">
          <img
            className="w-full h-full object-cover rounded-md"
            src="https://images.unsplash.com/photo-1617038220319-276d3cfab638"
            alt=""
          />
        </div>

        {/* MIDDLE BOTTOM RIGHT */}
        <div className="col-span-2 row-span-3">
          <img
            className="w-full h-full object-cover rounded-md"
            src="https://images.unsplash.com/photo-1583394838336-acd977736f90"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default CategoryGrid;
