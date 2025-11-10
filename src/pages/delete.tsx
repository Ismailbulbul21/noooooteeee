import React from 'react';
import './delete.css';

const DataDeletion: React.FC = () => {
  return (
    <div className="deletion-page">
      <div className="deletion-container">
        <header className="deletion-header">
          <h1>Delete Account and Data — NotesApp</h1>
        </header>

        <main className="deletion-content">
          <section className="deletion-section">
            <h2>Overview</h2>
            <p>
              NotesApp allows users to create accounts to securely save and sync their notes. If you would like to delete your account and all associated data, you can do so directly from the app settings, or by contacting our support team.
            </p>
          </section>

          <section className="deletion-section">
            <h2>How to Delete Your Account</h2>
            <ol>
              <li>Open the NotesApp.</li>
              <li>Go to Settings → Account → Delete Account.</li>
              <li>Confirm your request. This will permanently delete your account and all your notes stored in our database.</li>
            </ol>
          </section>

          <section className="deletion-section">
            <h2>Alternative Method</h2>
            <p>
              If you cannot access your account, you can request deletion by emailing us using the subject line "Delete My NotesApp Account." We will delete your account and associated data within 7 days of receiving your request.
            </p>
          </section>

          <section className="deletion-section">
            <h2>Data Deleted</h2>
            <ul>
              <li>User profile information (name, email)</li>
              <li>Saved notes in our database</li>
              <li>Any linked device data</li>
            </ul>
          </section>

          <section className="deletion-section">
            <h2>Data Retained</h2>
            <p>None — all user data will be fully removed after account deletion.</p>
          </section>

          <section className="deletion-section contact-section">
            <h2>Contact</h2>
            <p>If you need further assistance, please contact us at:</p>
            <p className="contact-email">
              <a href="mailto:ismailbulbul381@gmail.com">ismailbulbul381@gmail.com</a>
            </p>
          </section>
        </main>

        <footer className="deletion-footer">
          <p>Last Updated: November 2025</p>
          <p>&copy; 2025 NotesApp. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default DataDeletion;

