import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

function Home(){
  return (
    <div className="homepage">
      <section className="hero">
        <div className="hero-text">
          <h1>Discover Nairobi's Best Eateries</h1>
          <p>
            Explore top-rated restaurants, local favorites, and hidden gems.
            From Nyama Choma to international cuisine—find it all on Nairobi Bitez.
          </p>
          <div className="download-buttons">
            <button className="btn dark">Google Play</button>
            <button className="btn light">App Store</button>
          </div>
          <div className="social-icons">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
          </div>
        </div>
        <div className="hero-image">
          <img src="src/assets/assets/Homepage.png" alt="homepage" />
        </div>
      </section>
    </div>
  );
};
export default Home;

