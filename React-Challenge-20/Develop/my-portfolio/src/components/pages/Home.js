import React from 'react';
import './css/Home.css';

export default function Home() {
  return (
    <div>
      <h1>Portfolio</h1>
      <section>
        <h2>My Applications</h2>
        <div className="applications">
          <div>
          <img src="./pages/ironman.jpg" alt=""/>
            <a href="https://wiilki.github.io/marvel-geeks-fandom-page/">
              <h3>Marvel Movie Index</h3>
            </a>
            <a href="https://github.com/wiilki/marvel-geeks-fandom-page">Github</a>
          </div>
          <div>
            <a href="https://coreykirschner.github.io/the-friendly-parakeet-password-generator/">
              <h3>Password Generator</h3>
            </a>
            <a href="https://github.com/CoreyKirschner/the-friendly-parakeet-password-generator">Github</a>
          </div>
          <div>
            <a href=" https://coreykirschner.github.io/Circa-1989">
              <h3>Old Portfolio</h3>
            </a>
            <a href=" https://github.com/CoreyKirschner/Circa-1989">Github</a>
          </div>
          <div>
            <a href="https://coreykirschner.github.io/reimagined-era-quiz-week-4/">
              <h3>Quiz</h3>
            </a>
            <a href="https://github.com/CoreyKirschner/reimagined-era-quiz-week-4">Github</a>
          </div>
          <div>
            <a href="https://coreykirschner.github.io/sturdy-spork-week-5-scheduler/">
              <h3>Scheduler</h3>
            </a>
            <a href="https://github.com/CoreyKirschner/sturdy-spork-week-5-scheduler">Github</a>
          </div>
          <div>
            <a href="https://coreykirschner.github.io/electric-weather-dashboard/">
              <h3>Weather Dashboard</h3>
            </a>
            <a href="https://github.com/CoreyKirschner/electric-weather-dashboard/">Github</a>
          </div>
        </div>
      </section>
    </div>
  );
}

