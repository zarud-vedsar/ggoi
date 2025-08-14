import React, { useEffect, useState, useRef } from "react";
import "./assets/css/top-header.css";
import { useLocation } from "react-router-dom";
import { FaHandPointer } from "react-icons/fa6";
import { MdHideImage } from "react-icons/md";
import { IoAccessibility } from "react-icons/io5";
import { FaFont } from "react-icons/fa";

const languages = [
  { code: "en", label: "English" },
  { code: "hi", label: "हिन्दी Hindi" },
  { code: "gu", label: "ગુજરાતી Gujarati" },
  { code: "mr", label: "मराठी Marathi" },
  { code: "kn", label: "ಕನ್ನಡ Kannada" },
  { code: "ml", label: "മലയാളം Malayalam" },
  { code: "ta", label: "தமிழ் Tamil" },
  { code: "te", label: "తెలుగు Telugu" },
  { code: "or", label: "ଓଡ଼ିଆ Odia" },
  { code: "bn", label: "বাংলা Bengali" },
];

export default function TopHeader() {
  const [selectedLang, setSelectedLang] = useState(
    localStorage.getItem("selectedLang") || "en"
  );
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const fontSizeMap = useRef(new Map());
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();
  const [isBigCursor, setIsBigCursor] = useState(false);
  const [isimagesHidden, setImagesHidden] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);
  const location = useLocation();
  const selectedLabel =
    languages.find((l) => l.code === selectedLang)?.label || "English";

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Load Google Translate script once
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);

    window.googleTranslateElementInit = () => {
      if (window.google?.translate) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: languages.map((l) => l.code).join(","),
          },
          "google_translate_element"
        );
      }
    };

    return () => document.body.removeChild(script);
  }, []);

  // Update language on dropdown change
  useEffect(() => {
    const selectField = document.querySelector(".goog-te-combo");
    if (selectField) {
      selectField.value = selectedLang;

      selectField.dispatchEvent(new Event("change"));
    }
  }, [selectedLang]);

  // Close dropdown on outside click
  useEffect(() => {
    const closeDropdown = (e) => {
      if (!e.target.closest(".custom-select")) setDropdownOpen(false);
    };
    document.addEventListener("click", closeDropdown);
    return () => document.removeEventListener("click", closeDropdown);
  }, []);

  const handleLanguageSelect = (langCode) => {
    setSelectedLang(langCode);
    localStorage.setItem("selectedLang", langCode);
    setDropdownOpen(false);
    setTimeout(() => {
      window.location.reload();
    }, 800);
  };

  const scaleFonts = (factor) => {
    const elements = document.querySelectorAll("body *");

    elements.forEach((el) => {
      if (!fontSizeMap.current.has(el)) {
        const computedSize = window.getComputedStyle(el).fontSize;
        if (computedSize) {
          fontSizeMap.current.set(el, parseFloat(computedSize));
        }
      }

      const currentSize = parseFloat(window.getComputedStyle(el).fontSize);
      if (!isNaN(currentSize)) {
        el.style.fontSize = `${currentSize * factor}px`;
      }
    });
  };

  const resetFonts = () => {
    fontSizeMap.current.forEach((originalSize, el) => {
      el.style.fontSize = `${originalSize}px`;
    });
    fontSizeMap.current.clear();
  };



  useEffect(() => {
    if (isBigCursor) {
      document.body.classList.add("big-cursor");
    } else {
      document.body.classList.remove("big-cursor");
    }
  }, [isBigCursor, location.pathname]);

  useEffect(() => {
    if (isimagesHidden) {
      document.querySelectorAll('img').forEach(img => {
        img.style.display = 'none';
      });
    } else {
      document.querySelectorAll('img').forEach(img => {
        img.style.display = '';
      });
    }
  }, [isimagesHidden, location.pathname]);
  return (
    <header className="header-container p-1 top-header-section">
      <div className="topbar">
        <div className="d-flex justify-content-between  bg-top-section">
          <a href="#main-content" className="btn skip-btn f14 f500 ">
            <img src="/website/img/angles-down-solid-full.svg" className="me-0 me-md-2" alt="" style={{ width: "20px" }} />
            <span className=" text-white  d-none d-md-inline">  Skip to main content  </span>
          </a>

          <div className="d-flex align-items-center am-header-item">
            {/* Language Selector */}
            <div className="custom-select source-font" translate="no">
              <div
                className="select-selected"
                onClick={() => setDropdownOpen((prev) => !prev)}
              >
                {selectedLabel}
              </div>
              {dropdownOpen && (
                <div className="select-items">
                  {languages.map(({ code, label }) => (
                    <div key={code} onClick={() => handleLanguageSelect(code)}>
                      {label}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div
              className="btn-group position-relative"
              ref={menuRef}
              translate="no"
            >
              <button
                type="button"
                className="btn text-white dropdown-toggle am-f14"
                onClick={toggleDropdown}
                aria-haspopup="true"
                aria-expanded={isOpen}
              >
                <IoAccessibility className="am-f20" />
              </button>
              {isOpen && (
                <div className="dropdown-menu show am-accessbilty-menu">
                  <h6 className="dropdown-header am-f18">Text Size</h6>
                  <div className="dropdown-divider m-0"></div>
                  <div className="d-flex my-2">
                    <div className="mx-3">
                      <button
                        onClick={() => scaleFonts(1.1)}
                        className="btn am-font-scale-btn "
                      >
                        <p className="am-f16 mb-2">  A <sup>+</sup></p>
                        <p
                          className="text-center m-0 am-f12"

                        >
                          Increase <br />
                          Text
                        </p>
                      </button>
                    </div>
                    <div className="mx-3">
                      <button
                        onClick={resetFonts}
                        className="btn am-font-scale-btn"
                      >
                        <p className="am-f16 mb-2">  A</p>
                        <p
                          className="text-center m-0 am-f12"

                        >
                          Reset <br />
                          Text
                        </p>
                      </button>
                    </div>
                    <div className="mx-3">
                      <button
                        onClick={() => scaleFonts(0.9)}
                        className="btn am-font-scale-btn"
                      >
                        <p className="am-f16 mb-2">   A<sup>-</sup>{" "}</p>
                        <p
                          className="text-center   m-0 am-f12"

                        >
                          Decrease <br />
                          Text
                        </p>
                      </button>
                    </div>
                  </div>
                  <h6 className="dropdown-header am-f18">Navigation Adjustment</h6>
                  <div className="dropdown-divider m-0"></div>

                  <div className="d-flex my-2">
                    <div className="mx-3 d-none d-md-inline">
                      <button onClick={() => setIsBigCursor(prev => !prev)} className={`btn am-font-scale-btn ${isBigCursor ? 'active' : ''}`}>
                        <FaHandPointer className="am-f16 mb-2" />
                        <p className="text-center m-0 am-f12" >Big <br /> Cursor</p>
                      </button>
                    </div>
                    <div className="mx-3 d-none">
                      <button onClick={() => setImagesHidden(prev => !prev)
                      } className={`btn am-font-scale-btn ${isimagesHidden ? 'active' : ''} `}>
                        <MdHideImage className="am-f16 mb-2" />

                        <p className="text-center m-0 am-f12" >Hide <br /> Image</p>

                      </button>
                    </div>

                  </div>
                </div>
              )}
            </div>

          </div>

        </div>
      </div>
    </header>
  );
}
