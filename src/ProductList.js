import { Products } from "./Products";

export function ProductList() {
    const ProductList = [
        {
          model: "Nikn D 5600 DSLR",
          img: "https://www.rentoclick.com/uploads/product/NIkon_D5600.png",
          price: "RS.600/Day",
          description:
            "Nikon D5600 Camera is available for rent. We offer a wide range of Nikon Camera's on rent in Delhi NCR. Our other Camera Rental includes Red, Sony, Panasonic, Canon, Drone Camera’s.",
        },
        {
          model: "Sony 24-70 G Master F-2.8 Lens",
          img: "https://www.rentoclick.com/uploads/product/Canon_24-70_f2_8-min.png",
          price: "Rs.1000/day",
          description:
            "Sony 24-70 G Master F-2.8 Lens is available for rent. We offer a wide range of Sony lens on rent in Delhi NCR. Our other lens rental includes Canon, Compact Prime, Tamron, Carl Zeiss, Sigma lenses.",
        },
        {
          model: "DJI Ronin RS-2 Handheld Gimbal Stabilizer",
          img: "https://www.rentoclick.com/uploads/product/Ronin_RS-2_-min.png",
          price: "Rs.1200/day",
          description:
            "DJI Ronin RS-2 Handheld Gimbal Stabilizer is available on rent.RentOclick is a One Stop Solution for all your Videography & Photography Equipment Rental Needs.",
        },
        {
          model: "Canon (X)SF-305 Camera",
          img: "https://www.rentoclick.com/uploads/product/Canon_XSF_305_camera_rent.png",
          price: "Rs.4000/day",
          description:
            "Canon (X)SF-305 Camera is available on rent. We offer a complete range of Canon camera on rent in Delhi NCR. Our other Camera Rental includes Red, Sony, Panasonic, Go Pro Camera’s.",
        },
      ];
  return (
    <div className="product-list-container">
      {ProductList.map((product) => {
          return(
        <Products product={product} />
        )
      })}
    </div>
  );
}


