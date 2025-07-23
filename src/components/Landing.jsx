import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { NavLink, Link } from 'react-router-dom';

// Import all rabbit images from the assets/images folder
const imageImports = import.meta.glob('../assets/images/*.jpg', { eager: true });
const images = Object.fromEntries(
  Object.entries(imageImports).map(([path, mod]) => {
    const filename = path.split('/').pop();
    return [filename, mod.default];
  })
);

console.log("Loaded images:", images);

const data = [
  { images: ["rabbit1.jpg", "rabbit2.jpg", "rabbit3.jpg"], total: 12, males: 5, females: 7, served: 3, birth: "2025-08-15" },
  { images: ["rabbit4.jpg", "rabbit5.jpg", "rabbit6.jpg"], total: 15, males: 6, females: 9, served: 4, birth: "2025-08-20" },
  { images: ["rabbit7.jpg", "rabbit8.jpg", "rabbit9.jpg"], total: 10, males: 4, females: 6, served: 2, birth: "2025-08-10" },
  { images: ["rabbit10.jpg", "rabbit11.jpg", "rabbit12.jpg"], total: 18, males: 8, females: 10, served: 5, birth: "2025-08-25" },
  { images: ["rabbit13.jpg", "rabbit14.jpg", "rabbit15.jpg"], total: 9, males: 3, females: 6, served: 1, birth: "2025-08-18" },
  { images: ["rabbit16.jpg", "rabbit17.jpg", "rabbit18.jpg"], total: 14, males: 6, females: 8, served: 2, birth: "2025-08-21" },
  { images: ["rabbit19.jpg", "rabbit20.jpg", "rabbit21.jpg"], total: 11, males: 4, females: 7, served: 3, birth: "2025-08-23" },
  { images: ["rabbit22.jpg", "rabbit23.jpg", "rabbit24.jpg"], total: 13, males: 5, females: 8, served: 4, birth: "2025-08-12" },
  { images: ["rabbit25.jpg", "rabbit26.jpg", "rabbit27.jpg"], total: 16, males: 7, females: 9, served: 5, birth: "2025-08-28" },
  { images: ["rabbit28.jpg", "rabbit29.jpg", "rabbit30.jpg"], total: 8, males: 3, females: 5, served: 1, birth: "2025-08-30" },
  { images: ["rabbit31.jpg", "rabbit32.jpg", "rabbit33.jpg"], total: 20, males: 9, females: 11, served: 6, birth: "2025-09-01" },
  { images: ["rabbit34.jpg", "rabbit35.jpg", "rabbit36.jpg"], total: 17, males: 7, females: 10, served: 4, birth: "2025-08-29" }
];

const Landing = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="home-landing">
      <section className="welcome-banner" data-aos="fade-down">
        <h1>🐇 Welcome to Rabbit Farm</h1>
        <p>Your trusted hub for tracking, managing, and expanding rabbit colonies</p>

      <NavLink to="/rabbitform" className="cta-btn">
       Add Your First Rabbit
      </NavLink>
      </section>

      <section className="highlight" data-aos="fade-up">
        <h2>🌟 Featured Rabbit of the Month</h2>
        <img src={images["rabbit1.jpg"]} alt="Featured Rabbit" className="featured-img" />
        <p><em>“Milo” - Healthy, Active, and Father to 7 kits in Section A</em></p>
      </section>

      <div className="stats-container">
        {data.map((section, index) => (
          <div key={index} className="section-card" data-aos="zoom-in">
            <div className="image-row">
              {section.images.map((imgName, i) => (
                <img key={i} src={images[imgName]} alt={`Rabbit ${imgName}`} className="rabbit-img" />
              ))}
            </div>
            <div className="stats">
              <p><strong>Total Rabbits:</strong> {section.total}</p>
              <p><strong>Males:</strong> {section.males} | <strong>Females:</strong> {section.females}</p>
              <p><strong>Rabbits Served:</strong> {section.served}</p>
              <p><strong>Birth Date:</strong> {section.birth}</p>
            </div>
          </div>
        ))}
      </div>

      <section className="testimonial" data-aos="fade-up">
        <h2>💬 Farmer’s Feedback</h2>
        <blockquote>
          “This system made tracking my rabbits effortless. I’ve increased productivity by 40%!”
          <footer>— Felister Derrick and Karani.</footer>
        </blockquote>
      </section>
    </div>
  );
};

export default Landing;
