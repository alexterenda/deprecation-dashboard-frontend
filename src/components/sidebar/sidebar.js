import React from "react";
import SideLink from "./sidelink";
import MenuLink from "./menulink";
// import SideHeader from "./sidebar-header";

const SideBar = () => {
  const navLinks = [
    {
      name: "Home",
      iconPath:
        "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
    },
    {
      name: "Inbox",
      iconPath:
        "M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4",
    },
  ];

  const apiLinks = ["Twitter", "Reddit"];

  const collectionLinks = ["GraphQL APIs", "Ecommerce"];

  const createNavLinks = navLinks.map((link) => {
    return <SideLink content={link.name} icon={link.iconPath} />;
  });

  const createApiLinks = apiLinks.map((link) => {
    return <MenuLink content={link} />;
  });

  const createCollectionLinks = collectionLinks.map((link) => {
    return <MenuLink content={link} />;
  });

  return (
    <div className="sidebar-container">
      <div className="sidebar-content-container">
        <div className="sidebar-wordmark-container">
          <img
            src="https://tray.io/images/tray_logo_white.svg"
            alt="Tray Logo"
            className="sidebar-wordmark-image"
          />
          <div className="sidebar-wordmark-title-container">
            <h1 className="sidebar-wordmark-title">Deprecation Dashboard</h1>
          </div>
        </div>
        <div className="sidebar-sidelinks-container">
          {createNavLinks}

          <div className="sidebar-sidelink-container">
            <div className="sidebar-sidelink-item">
              <div className="sidebar-sidelink-icon-container">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="sidebar-sidelink-icon"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <div className="sidebar-sidelink-text-container">
                <a href="/" className="sidebar-sidelink-text">
                  My APIs
                </a>
              </div>
              <div className="sidebar-sidelink-toggle-icon-container">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="sidebar-sidelink-toggle-icon"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M5 15L12 8L19 15"
                  />
                </svg>
              </div>
            </div>
            <div className="sidebar-menulinks-container">{createApiLinks}</div>
          </div>

          <div className="sidebar-sidelink-container">
            <div className="sidebar-sidelink-item">
              <div className="sidebar-sidelink-icon-container">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="sidebar-sidelink-icon"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </div>
              <div className="sidebar-sidelink-text-container">
                <a href="/" className="sidebar-sidelink-text">
                  Collections
                </a>
              </div>
              <div className="sidebar-sidelink-toggle-icon-container">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="sidebar-sidelink-toggle-icon"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M5 15L12 8L19 15"
                  />
                </svg>
              </div>
            </div>
            <div className="sidebar-menulinks-container">
              {createCollectionLinks}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
