/* eslint-disable @typescript-eslint/no-explicit-any */
import styles from "./header.module.css";
import { HEADER_MENU_ITEMS } from "../../../utils/constants/menu";
import ImgArcherNursingLogo from "../../media/images/header/archer-nursing-logo.png";
import Image from "next/image";
import { JSX } from "react";
const Header = (): JSX.Element => {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        {/* Logo Section */}
        <div className={styles.logoSection}>
          <a href="/" className={styles.logoLink}>
            <Image
              src={ImgArcherNursingLogo}
              alt="ArcherReview Nursing"
              className={styles.logoImage}
              width="140"
              height="70"
              decoding="async"
            />
          </a>
        </div>

        {/* Navigation Section */}
        <nav className={styles.navSection}>
          <ul className={styles.navList}>
            {HEADER_MENU_ITEMS.map((item: any, index: number) => (
              <li key={index} className={styles.navItem}>
                {index > 0 && <span className={styles.separator}>|</span>}
                <div className={styles.navItemWrapper}>
                  <a href={item.href} className={styles.navLink}>
                    {item.label}
                    {item.hasDropdown && (
                      <span className={styles.dropdownIcon}>▼</span>
                    )}
                  </a>
                  {item.hasDropdown && item.subMenu && (
                    <div className={styles.dropdownMenu}>
                      <div className={styles.dropdownContent}>
                        {item.subMenu.map((subItem: any, subIndex: number) => (
                          <a
                            key={subIndex}
                            href={subItem.href}
                            className={styles.courseCard}
                          >
                            <div
                              className={styles.courseIcon}
                              style={{ backgroundColor: subItem.iconBg }}
                            >
                              <svg
                                className={styles.iconSymbol}
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              >
                                <path d="M12 6L6 9v2c0 3.314 2.686 6 6 6s6-2.686 6-6V9l-6-3z" />
                                <line x1="12" y1="6" x2="12" y2="17" />
                                <line x1="9" y1="9" x2="15" y2="9" />
                                <circle cx="12" cy="12" r="1.5" />
                              </svg>
                            </div>
                            <div className={styles.courseInfo}>
                              <h3 className={styles.courseTitle}>
                                {subItem.title}
                              </h3>
                              <p className={styles.courseDescription}>
                                {subItem.description}
                              </p>
                            </div>
                            <span className={styles.courseArrow}>→</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </nav>

        {/* Action Buttons Section */}
        <div className={styles.actionSection}>
          <span className={styles.separator}>|</span>
          <a href="#" className={styles.loginButton}>
            Login
          </a>
          <span className={styles.separator}>|</span>
          <a href="#" className={styles.signUpButton}>
            Sign Up
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
