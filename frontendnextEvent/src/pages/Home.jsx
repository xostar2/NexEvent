import "../styles/Home.css"
const Home = () => {
  return (
    <>
      <main>
          <section className="section-hero">
              <div className="container-grid-grid-two-cols">
                <div className="hero-content">
                  <p>We are the Worlds Best Event Management Company</p>
                  <h1>Welcome to NexEvent</h1>
                  <p>
                  Welcome to <span id="NexEvent-title-name">NexEvent</span>! We offer innovative solutions for all your event management needs. Experience the future of event planning with our user-friendly platform. Join us and let's create memorable events together!

                  </p>
                  <div className="btn-btn-group">
                    <a href="/contact">
                      <button className="btn">
                        connect now
                      </button>
                    </a>
                    <a href="/">
                      <button className="btn">
                        leran more
                      </button>
                    </a>
                  </div>
                </div>
                {/* hero images */}

                <div className="hero-image">
                  <img src="/images/home.png" alt="Great to have you here" width="400" height="400" />
                </div>
              </div>
          </section>

      </main>
    </>
  )
}

export default Home
