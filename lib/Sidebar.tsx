import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faNewspaper,
  faCog,
  faBox,
  faTicket,
  faLock,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

interface Button {
  path: string;
  icon: typeof faHome;
  label: string;
}

const Sidebar: React.FC = () => {
  const location = useLocation();
  const [activeButton, setActiveButton] = useState<string>(
    localStorage.getItem("activeButton") || location.pathname
  );

  const buttons: Button[] = [
    { path: "/home", icon: faHome, label: "Home" },
    { path: "/inventory", icon: faBox, label: "Inventory" },
    { path: "/cwm", icon: faTicket, label: "Issues" },
    { path: "/elog", icon: faNewspaper, label: "eLogs" },
    { path: "/815", icon: faClock, label: "8:15" },
    { path: "/admin/generalAdmin", icon: faLock, label: "Admin" },
    { path: "/settings", icon: faCog, label: "Settings" },
  ];

  useEffect(() => {
    setActiveButton(location.pathname);
  }, [location.pathname]);

  const handleClick = (path: string) => {
    if (activeButton !== path) {
      setActiveButton(path);
      localStorage.setItem("activeButton", path);
    }
  };

  return (
    <div className="flex flex-col items-center top-16 left-0 w-16 bg-red-800 transition-width duration-300 fixed z-50 h-screen">
      <ul className="w-full">
        <br />
        {buttons.map((button) => (
          <div key={button.path} className="w-full">
            {button.path === "/elog" ? (
              <a
                href="https://accel-webapp-dev.slac.stanford.edu/elog"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <button
                  className={`flex flex-col items-center justify-center w-full h-16 text-lg bg-transparent border-none cursor-pointer ${
                    activeButton === button.path ? "bg-white text-black" : ""
                  }`}
                >
                  <div className="flex flex-col items-center">
                    <FontAwesomeIcon
                      icon={button.icon}
                      className={`text-sm ${
                        activeButton === button.path ? "text-red-800" : "text-white"
                      } pb-1`}
                      title={button.label}
                    />
                    <div
                      className={`text-xs ${
                        activeButton === button.path ? "text-red-800" : "text-white"
                      }`}
                    >
                      {button.label}
                    </div>
                  </div>
                </button>
              </a>
            ) : (
              <Link to={button.path} className="w-full">
                <button
                  onClick={() => handleClick(button.path)}
                  className={`flex flex-col items-center justify-center w-full h-16 text-lg bg-transparent border-none cursor-pointer ${
                    activeButton === button.path ? "bg-white text-black" : ""
                  }`}
                >
                  <div className="flex flex-col items-center">
                    <FontAwesomeIcon
                      icon={button.icon}
                      className={`text-sm ${
                        activeButton === button.path ? "text-red-800" : "text-white"
                      } pb-1`}
                      title={button.label}
                    />
                    <div
                      className={`text-xs ${
                        activeButton === button.path ? "text-red-800" : "text-white"
                      }`}
                    >
                      {button.label}
                    </div>
                  </div>
                </button>
              </Link>
            )}
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
