import React from 'react';

function Home() {
  return (
    <>
      <div className="alert alert-warning">
        <h2>Under Construction</h2>
        <p>Pardon the appearance, this site is still under construction!</p>
      </div>
      <h1>
        Howdy{' '}
        <span role="img" aria-label="smiley">
          😊
        </span>
      </h1>
      <h3>
        I&apos;m <abbr title="Pronounced STEHP-on">Stefan</abbr> (or Steve)
        Koshy
      </h3>
      <p>
        Working at{' '}
        <a href="https://common.com" rel="noopener noreferrer" target="_blank">
          Common
        </a>
        , previously a{' '}
        <a
          href="https://nextjump.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          Next Jumper
        </a>
        , currently residing in New York City
      </p>
      <h3>Web Development is my passion</h3>
      <p>
        Full Stack Javascript with React or Vue preferred, but experienced in
        PHP and Golang as well
      </p>
    </>
  );
}

export default Home;
