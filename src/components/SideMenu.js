import React from "react";

function SideMenu() {
  const menuItems = [
    "My Order & Delivery",
    "Return & Refunds",
    "My Account",
    "Payment, Promotions & Gift Cards",
    "Repairs & Warranty",
    "Spare Parts & Links",
    "Product Care & Information",
    "Legal & Data Protection",
  ];
  return (
    <>
      <div className="side-menu">
        {menuItems.map((item, index) => (
          <li key={`item${index}`} className="menu-item">
            {item}
          </li>
        ))}
      </div>
    </>
  );
}

export default SideMenu;
