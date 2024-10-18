import React, { ReactNode, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import '../../app/globals.css';
import styles from './Layout.module.css';
import dynamic from 'next/dynamic';

const StarsCanvas = dynamic(() => import('./StarBackground'), { ssr: false });

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    useEffect(() => {
        const canvas = document.querySelector('canvas') as HTMLCanvasElement;
        if (canvas) {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            // Your createStars function here
        }
    }, []);

    return (
        <div>
            <div className={styles.canvas}>
                <StarsCanvas />
            </div>
            <div >
                <Navbar />
                <main className={styles.main}>{children}</main>
                <Footer />
            </div>
        </div>
    );
};

export default Layout;