import styles from "./footer.module.css";
import {
  footerNavigation,
  footerOthers,
  footerContact,
  socialMedia,
} from "../../../utils/constants/footer";
import ImgArcherNursingLogo from "../../media/images/header/archer-nursing-logo.png";
import Image from "next/image";

const Footer = (): JSX.Element => {
  return (
    <footer className={styles.footer}>
      {/* Top Section - Navigation Links */}
      <div className={styles.topSection}>
        <div className={styles.container}>
          <div className={styles.navGrid}>
            {/* Company Column */}
            <div className={styles.navColumn}>
              <h3 className={styles.navTitle}>
                {footerNavigation.company.title}
              </h3>
              <ul className={styles.navList}>
                {footerNavigation.company.links.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className={styles.navLink}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Nursing Column */}
            <div className={styles.navColumn}>
              <h3 className={styles.navTitle}>
                {footerNavigation.nursing.title}
              </h3>
              <ul className={styles.navList}>
                {footerNavigation.nursing.links.map((link, index) => (
                  <li
                    key={index}
                    className={link.hasDropdown ? styles.dropdownItem : ""}
                  >
                    <a href={link.href} className={styles.navLink}>
                      {link.label}
                      {link.hasDropdown && (
                        <span className={styles.dropdownIcon}>▼</span>
                      )}
                    </a>
                    {link.hasDropdown && link.subLinks && (
                      <ul className={styles.subNavList}>
                        {link.subLinks.map((subLink, subIndex) => (
                          <li key={subIndex}>
                            <a
                              href={subLink.href}
                              className={styles.subNavLink}
                            >
                              {subLink.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Educators Column */}
            <div className={styles.navColumn}>
              <h3 className={styles.navTitle}>
                {footerNavigation.educators.title}
              </h3>
              <ul className={styles.navList}>
                {footerNavigation.educators.links.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className={styles.navLink}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Private Tutors Column */}
            <div className={styles.navColumn}>
              <h3 className={styles.navTitle}>
                {footerNavigation.privateTutors.title}
              </h3>
              <ul className={styles.navList}>
                {footerNavigation.privateTutors.links.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className={styles.navLink}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Logo, Others, Contact, Social */}
      <div className={styles.bottomSection}>
        <div className={styles.container}>
          <div className={styles.bottomGrid}>
            {/* Logo Column */}
            <div className={styles.logoColumn}>
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
              <p className={styles.tagline}>INTERACT, LEARN, AND EXCEL!</p>
            </div>

            {/* Others Column */}
            <div className={styles.othersColumn}>
              <h3 className={styles.othersTitle}>Others</h3>
              <ul className={styles.othersList}>
                {footerOthers.map((item, index) => (
                  <li key={index}>
                    <a href={item.href} className={styles.othersLink}>
                      {item.label}
                      {item.badge && (
                        <span
                          className={`${styles.badge} ${
                            styles[
                              `badge${
                                item.badgeColor.charAt(0).toUpperCase() +
                                item.badgeColor.slice(1)
                              }`
                            ]
                          }`}
                        >
                          {item.badge}
                        </span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Column */}
            <div className={styles.contactColumn}>
              <h3 className={styles.contactTitle}>Contact Us</h3>
              <div className={styles.contactInfo}>
                <a
                  href={footerContact.email.href}
                  className={styles.contactItem}
                >
                  <span className={styles.contactIcon}>
                    {footerContact.email.icon}
                  </span>
                  <span>{footerContact.email.text}</span>
                </a>
                <div className={styles.contactItem}>
                  <span className={styles.contactIcon}>
                    {footerContact.address.icon}
                  </span>
                  <div className={styles.addressLines}>
                    {footerContact.address.lines.map((line, index) => (
                      <span key={index}>{line}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Column */}
            <div className={styles.socialColumn}>
              <h3 className={styles.socialTitle}>Follow Us</h3>
              <div className={styles.socialIcons}>
                {socialMedia.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={styles.socialIcon}
                    aria-label={social.name}
                    title={social.name}
                  >
                    <span className={styles.socialIconText}>{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
