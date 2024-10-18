import React from "react";
import {
    RxDiscordLogo,
    RxGithubLogo,
} from "react-icons/rx";
import { FaYoutube } from "react-icons/fa";
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.footerContent}>
                    <div className={styles.footerSection}>
                        <div className={styles.sectionTitle}>Community</div>
                        <p className={styles.sectionItem}>
                            <FaYoutube />
                            <span className={styles.sectionText}>Youtube</span>
                        </p>
                        <p className={styles.sectionItem}>
                            <RxGithubLogo />
                            <span className={styles.sectionText}>Github</span>
                        </p>
                        <p className={styles.sectionItem}>
                            <RxDiscordLogo />
                            <span className={styles.sectionText}>Discord</span>
                        </p>
                    </div>
                    <div className={styles.footerSection}>
                        <div className={styles.sectionTitle}>Social Media</div>
                        <p className={styles.sectionItem}>
                            <FaYoutube />
                            <span className={styles.sectionText}>Instagram</span>
                        </p>
                        <p className={styles.sectionItem}>
                            <RxGithubLogo />
                            <span className={styles.sectionText}>Twitter</span>
                        </p>
                        <p className={styles.sectionItem}>
                            <RxDiscordLogo />
                            <span className={styles.sectionText}>Linkedin</span>
                        </p>
                    </div>
                    <div className={styles.footerSection}>
                        <div className={styles.sectionTitle}>About</div>
                        <p className={styles.sectionItem}>
                            <span className={styles.sectionText}>Become Sponsor</span>
                        </p>
                        <p className={styles.sectionItem}>
                            <span className={styles.sectionText}>Learning about me</span>
                        </p>
                        <p className={styles.sectionItem}>
                            <span className={styles.sectionText}>gireeshbogisetti123@gmail.com</span>
                        </p>
                    </div>
                </div>
                <div className={styles.footerCopyright}>
                    &copy; Copyright 2024. All rights reserved
                </div>
            </div>
        </div>
    );
};

export default Footer;
