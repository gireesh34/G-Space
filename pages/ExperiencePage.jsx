"use client";
import React from 'react';
import styles from './ExperiencePage.module.css';


const ExperiencePage = () => {
    return (
      <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={`${styles.title} ${styles.responsiveTitle}`}>Experience</h1>
      </header>
      <section className={styles.section}>
        <h2 className={styles.title}>E-commerce Website Development</h2>
        <h3 className={styles.subtitle}>Web Developer</h3>
        <p className={styles.paragraph}>
        Developed and maintained a fully functional e-commerce website using HTML, CSS, and SQL to manage the product database.
        </p>
        <p className={styles.paragraph}>
        Developing and maintaining web applications using React.js and other related technologies.
        </p>
        <p className={styles.paragraph}>
        Integrated secure database connections for product management, including adding, updating, and deleting items in the inventory.
        </p>
        <p className={styles.paragraph}>
        Implementing responsive design and ensuring cross-browser compatibility.
        </p>
        <p className={styles.paragraph}>
        Ensured cross-browser compatibility and worked on optimizing website load time for better performance.
        </p>
        <p className={styles.paragraph}>
        Gained hands-on experience in front-end and back-end development, as well as database management.
        </p>
        <p className={styles.paragraph}>
        <strong>Duration:</strong> Sep 2021 - Nov 2021
        </p>
      </section>
      <section className={styles.section}>
        <h2 className={styles.title}>Automated Face Recognition Attendance System</h2>
        <h3 className={styles.subtitle}>ML Engineer</h3>
        <p className={styles.paragraph}>
        Designed and developed a face recognition-based attendance system using Python and OpenCV, focusing on real-time image processing and machine learning algorithms to enhance recognition accuracy.
        </p>
        <p className={styles.paragraph}>
        Implemented machine learning techniques to improve the model's accuracy and efficiency in recognizing faces under varying lighting and environmental conditions.
        </p>
        <p className={styles.paragraph}>
        Integrated a user-friendly interface for seamless interaction and data retrieval, allowing easy attendance tracking and management.
        </p>
        <p className={styles.paragraph}>
        Optimized the system for scalability and speed, ensuring it could handle large data sets and multiple users simultaneously.
        </p>
        <p className={styles.paragraph}>
        Collaborated with cross-functional team members to refine system functionality, ensuring high performance and accuracy.
        </p>
        <p className={styles.paragraph}>
        Worked on improving the accuracy of facial recognition by fine-tuning algorithms and optimizing the training data set.
        </p>
        <p className={styles.paragraph}>
        <strong>Duration:</strong> Feb 2022 - May 2022
        </p>
      </section>
      <section className={styles.section}>
        <h2 className={styles.title}>Elevate Discernable Over Formation Retardant in Neural Network</h2>
        <h3 className={styles.subtitle}>DL Engineer, Full-stack Developer</h3>
        <p className={styles.paragraph}>
        Developed an advanced medical image recognition system utilizing Python, Convolutional Neural Networks (CNN), and R-CNN (Region-based CNN) to assist in diagnosing diseases from scanned medical reports.
        </p>
        <p className={styles.paragraph}>
        Focused on improving image classification accuracy by leveraging deep learning techniques for better image processing and analysis.
        </p>
        <p className={styles.paragraph}>
        Designed a neural network architecture that efficiently processes complex patient scan images, specifically targeting fields such as neurology and dermatology for disease detection.
        </p>
        <p className={styles.paragraph}>
        Implemented data pre-processing techniques to enhance the quality of input data, making the system robust for accurate image recognition.
        </p>
        <p className={styles.paragraph}>
        Trained the model with extensive datasets to ensure precision in detecting disease impact levels and providing appropriate treatment recommendations.
        </p>
        <p className={styles.paragraph}>
        Built a website using HTML, CSS, and JavaScript to showcase the entire project, allowing users to view system outputs, interact with the neural network, and access the results in a user-friendly interface.
        </p>
        <p className={styles.paragraph}>
        This project demonstrated the efficiency of CNNs in adaptive image processing, creating a scalable and secure platform for medical diagnosis powered by deep learning.
        </p>
        <p className={styles.paragraph}>
        <strong>Duration:</strong> Dec 2022 - April 2023
        </p>
      </section>
      <section className={styles.section}>
        <h2 className={styles.title}>Solar Marketplace Website</h2>
        <h3 className={styles.subtitle}>Full-stack Developer</h3>
        <p className={styles.paragraph}>
        Developed an e-commerce platform for solar products using HTML, CSS, JavaScript, and SQL.
        </p>
        <p className={styles.paragraph}>
        Created a responsive and user-friendly interface for browsing and purchasing solar products.
        </p>
        <p className={styles.paragraph}>
        Managed product database and inventory with SQL.
        </p>
        <p className={styles.paragraph}>
        Integrated secure payment gateway and order management system.
        </p>
        <p className={styles.paragraph}>
        Implemented product filtering and search functionality for easy navigation.
        </p>
        <p className={styles.paragraph}>
        Optimized website performance and ensured cross-browser compatibility.
        </p>
        <p className={styles.paragraph}>
        <strong>Duration:</strong> Dec 2022 - April 2023
        </p>
      </section>
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
          <div className={styles.footerSectionTitle}>About</div>
          <div className={styles.footerLink}>
            <span>gireeshbogisetti123@gmail.com</span>
          </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          &copy; Copyright 2024. All rights reserved
        </div>
        </div>
      </footer>
      </div>
    );
};




export default ExperiencePage;