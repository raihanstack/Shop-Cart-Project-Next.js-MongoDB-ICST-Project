import { connection } from "next/server";
import Link from "next/link";
import Shop from "@/app/shop/page";
import styles from "./HomePage.module.css";

export default async function HomePage() {
  await connection();
  return (
    <main className={styles.homePage}>
      <header className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroHeading}>Raihan Interactive Shop</h1>
          <p className={styles.heroSubtitle}>
            Your one-stop destination for premium products delivered at lightning speed.
          </p>
          <Link href="/shop">
            <button className={styles.btnHero}>Start Shopping</button>
          </Link>
        </div>
      </header>

      <section className={styles.sectionWrapper}>
        <h2 className={styles.sectionTitle}>Why Shop With Us?</h2>
        <div className={styles.featureCards}>
          <article className={styles.featureCard}>
            <div className={styles.iconWrapper}>
              {/* Delivery Icon */}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="1" y="3" width="15" height="13"></rect>
                <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                <circle cx="5.5" cy="18.5" r="2.5"></circle>
                <circle cx="18.5" cy="18.5" r="2.5"></circle>
              </svg>
            </div>
            <h3 className={styles.cardTitle}>Fast Delivery</h3>
            <p className={styles.cardDesc}>Get your products delivered to your door in record time.</p>
          </article>
          
          <article className={styles.featureCard}>
            <div className={styles.iconWrapper}>
              {/* Lock Icon */}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
            </div>
            <h3 className={styles.cardTitle}>Secure Payments</h3>
            <p className={styles.cardDesc}>All transactions are 100% secure and encrypted end-to-end.</p>
          </article>

          <article className={styles.featureCard}>
            <div className={styles.iconWrapper}>
              {/* Star Icon */}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            </div>
            <h3 className={styles.cardTitle}>Top Quality</h3>
            <p className={styles.cardDesc}>We exclusively offer the best products from trusted global brands.</p>
          </article>

          <article className={styles.featureCard}>
            <div className={styles.iconWrapper}>
              {/* Phone Icon */}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>
            <h3 className={styles.cardTitle}>24/7 Support</h3>
            <p className={styles.cardDesc}>Our expert support team is always here to assist you anytime.</p>
          </article>
        </div>
      </section>

      <section className={`${styles.sectionWrapper} ${styles.featuredProducts}`}>
        <h2 className={styles.sectionTitle}>Featured Products</h2>
        <div>
          <Shop preview={true} />
        </div>
        <div className={styles.viewAllWrapper}>
          <Link href="/shop">
            <button className={styles.btnViewAll}>Explore Entire Catalog</button>
          </Link>
        </div>
      </section>

      <section className={`${styles.sectionWrapper} ${styles.testimonials}`}>
        <h2 className={styles.sectionTitle}>What Our Customers Say</h2>
        <div className={styles.testimonialCards}>
          <div className={styles.testimonialCard}>
            <p className={styles.quote}>"Great products, fast shipping, and amazing customer service. Exceeded all expectations!"</p>
            <h4 className={styles.author}>- Nazmul Islam</h4>
          </div>
          <div className={styles.testimonialCard}>
            <p className={styles.quote}>"I absolutely love this shop! The build quality of these products is entirely top-notch."</p>
            <h4 className={styles.author}>- Ratul Hossain</h4>
          </div>
          <div className={styles.testimonialCard}>
            <p className={styles.quote}>"Highly recommended for anyone looking for reliable products and a secure buying experience."</p>
            <h4 className={styles.author}>- Reven Devnath</h4>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <p className={styles.footerCopyright}>&copy; {new Date().getFullYear()} Mostafa Raihan. All rights reserved.</p>
          <div className={styles.social}>
            <a href="https://www.facebook.com/Mostafa.Raihan.07/" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Facebook">
              <svg viewBox="0 0 24 24" stroke="none">
                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/mostafa-raihan/" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" stroke="none">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="https://github.com/mostafaraihan" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="GitHub">
              <svg viewBox="0 0 24 24" stroke="none">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}