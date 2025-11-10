import React from 'react';
import './privacy.css';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="privacy-page">
      <div className="privacy-container">
        <header className="privacy-header">
          <h1>Privacy Policy</h1>
          <p className="privacy-updated">Last updated: November 10, 2025</p>
        </header>

        <main className="privacy-content">
          <section className="privacy-section">
            <p>
              Welcome to NotesApp (the “App”), operated by [Your Developer/Company Name].
            </p>
            <p>
              This Privacy Policy explains how we collect, use, and protect your information when you use our application.
            </p>
          </section>

          <section className="privacy-section">
            <h2>Information We Collect</h2>
            <p>
              We collect basic account information such as your name, email address, and password when you sign up. This data is used only to create and manage your account.
            </p>
          </section>

          <section className="privacy-section">
            <h2>How We Use Your Data</h2>
            <p>Your data is used to provide login access, store your notes, and improve your experience.</p>
            <p>We do not sell or share your data with third parties.</p>
          </section>

          <section className="privacy-section">
            <h2>Data Security</h2>
            <p>
              All data transmitted between your device and our servers is encrypted using HTTPS to ensure your privacy and security.
            </p>
          </section>

          <section className="privacy-section">
            <h2>Account and Data Deletion</h2>
            <p>You can request account and data deletion anytime by visiting:</p>
            <p className="privacy-link">
              <a href="https://notesappp-beta.vercel.app/delete-account" target="_blank" rel="noreferrer">
                👉 https://notesappp-beta.vercel.app/delete-account
              </a>
            </p>
            <p>Once you submit the request, all your account data and notes will be permanently deleted.</p>
          </section>

          <section className="privacy-section">
            <h2>Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us at: <a href="mailto:iamailbulbul@gmail.com">iamailbulbul@gmail.com</a>
            </p>
          </section>
        </main>

        <footer className="privacy-footer">
          <p>&copy; {new Date().getFullYear()} NotesApp. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
