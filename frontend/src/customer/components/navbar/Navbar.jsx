import React from "react";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Avatar,
  Button,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  AddShoppingCart,
  FavoriteBorder,
  Search,
  Storefront,
} from "@mui/icons-material";

const Navbar = () => {
  const theme = useTheme();
  const isLarge = useMediaQuery(theme.breakpoints.up("lg"));
  return (
    <div className="navbar">
      <Box sx={{ borderBottom: "1px solid #ccc" }}>
        {/* Announcement */}
        <div className="bg-[#1a1a1a] h-8 flex items-center justify-center">
          <span className="text-[11px] tracking-[2px] uppercase text-[#c9a96e]">
            ✦ Miễn phí vận chuyển cho đơn hàng trên 500.000đ ✦
          </span>
        </div>

        <div className="flex items-center justify-between px-5 lg:px-20 h-[70px] border-b border-black">
          {/* left navbar*/}
          <div className="flex items-center gap-1">
            <div className="flex items-center gap-2">
              {!isLarge && (
                <IconButton>
                  <MenuIcon />
                </IconButton>
              )}
              <img
                className="w-10 h-10"
                src="/public/assets/image/logo_navbar.png"
                alt=""
              />
              <h1 className="logo cursor-pointer text-lg md:text-2xl text-black mt-2 mr-5">
                DailyZone
              </h1>
            </div>

            <ul className="flex items-center font-medium text-gray-800">
              {["Men Zone", "Women Zone", "Kid Zone", "Home & Furniture"].map(
                (item) => (
                  <li
                    className="mainCategory 
                          hover:text-primary 
                            border-b-2 border-transparent 
                          hover:border-black 
                            h-[70px] px-4 
                            flex items-center cursor-pointer
                            transition-all duration-200 mt-2 font-bold"
                    key={item}
                  >
                    {item}
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* right navbar */}
          <div className="flex gap-1 items-center lg:gap-6">
            <IconButton>
              <Search />
            </IconButton>

            <IconButton>
              <FavoriteBorder sx={{ fontSize: 29 }} />
            </IconButton>

            <IconButton>
              <AddShoppingCart
                className="text-gray-700"
                sx={{ fontSize: 29 }}
              />
            </IconButton>

            {false ? (
              <Button className="flex items-center gap-2">
                <Avatar
                  sx={{ width: 29, height: 29 }}
                  src="https://cafebiz.cafebizcdn.vn/162123310254002176/2023/10/25/z4813277681529-bd965f8ec0d57a2f9cbfc32cc5c0ca99-7819-1698218518898-16982185191991540570444.jpg"
                ></Avatar>
                <h1 className="font-semibold hidden lg:block text-black">
                  Name
                </h1>
              </Button>
            ) : (
              <Button variant="contained">Đăng nhập</Button>
            )}

            {isLarge && (
              <Button startIcon={<Storefront />} variant="outlined">
                Đăng ký bán hàng
              </Button>
            )}
          </div>
        </div>
      </Box>
    </div>
  );
};

export default Navbar;
