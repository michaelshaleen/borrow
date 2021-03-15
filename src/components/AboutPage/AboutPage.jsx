import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div>
        <p>If you have any questions or need assistance
          please use the following contact methods
        </p>
        <div>Email: toi_admin@gmail.com</div>
        <div>Phone: 801-010-8010</div>
      </div>
    </div>
  );
}

export default AboutPage;
