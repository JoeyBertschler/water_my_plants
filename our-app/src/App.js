import './App.css';

import logo from './logo.svg';
import thumb1 from './copyOfImages/gallery/thumbs/01.jpg'
import thumb2 from './copyOfImages/gallery/thumbs/02.jpg'
import thumb3 from './copyOfImages/gallery/thumbs/03.jpg'
import thumb4 from './copyOfImages/gallery/thumbs/04.jpg'
import thumb5 from './copyOfImages/gallery/thumbs/05.jpg'
import thumb6 from './copyOfImages/gallery/thumbs/06.jpg'
import thumb7 from './copyOfImages/gallery/thumbs/07.jpg'
import thumb8 from './copyOfImages/gallery/thumbs/08.jpg'
import thumb9 from './copyOfImages/gallery/thumbs/09.jpg'
import thumb10 from './copyOfImages/gallery/thumbs/10.jpg'

// import main from './copyOfJs/main' --> Tried importing by wrapping stuff into functions and..
// import util from './copyOfJs/util' --> ..making a copy folder of js but couldn't figure it out

function App() {
  return (
    <div className="App">
      <header className="App-header">


        {/* Wrapper */}
        <div id="wrapper"> 

        {/* Intro */}
          <section className="intro">
            <h1>Water My Plants</h1>
                <p>
                Never forget when it's time to feed your foliage and quench your
                plants' thirst.
                </p>
              <ul className="actions">
                <li>
                  <button className="button primary">Register</button>
                  <br/>
                  <button className="button primary">Sign In</button>
                </li>
                <li>
                  <a href="#first" className="arrow scrolly"
                    ><span className="label">Next</span></a
                  >
                </li>
              </ul>
          </section>


          {/* Section */}
          <section>
            <header>
              <h2>Awesome Features</h2>
            </header>
            <div className="content">
              <p>
                <strong>Etiam tristique libero</strong> eu nibh porttitor amet
                fermentum. Nullam venenatis erat id vehicula ultrices sed ultricies
                condimentum.
              </p>
              <ul className="feature-icons">
                <li className="icon solid fa-laptop">Consequat tempus</li>
                <li className="icon solid fa-bolt">Etiam adipiscing</li>
                <li className="icon solid fa-signal">Libero nullam</li>
                <li className="icon solid fa-cog">Blandit condimentum</li>
                <li className="icon solid fa-map-marker-alt">Lorem ipsum dolor</li>
                <li className="icon solid fa-code">Nibh amet venenatis</li>
              </ul>
              <p>
                Vehicula ultrices sed ultricies condimentum. Magna sed etiam
                consequat, et lorem adipiscing sed nulla. Volutpat nisl et tempus et
                dolor libero, feugiat magna tempus, sed et lorem adipiscing.
              </p>
            </div>
          </section>


          {/* Section */}
          <section>
            <header>
              <h2>Photo Gallery</h2>
            </header>
            <div className="content">
              <p>
                <strong>Healthy Plants</strong> nam maximus erat id euismod egestas.
                Pellentesque sapien ac quam. Lorem ipsum dolor sit nullam.
              </p>


              {/* Section */}
              <section>
                <div className="content">
                  <div className="gallery">

                    <img src={logo} className="App-logo" alt="logo" />
                      <p>
                        React IMG tag for reference
                      </p>

                    <a href="../public/InitialData/images/thumbs/01.jpg" className="landscape"
                      ><img src={thumb1} alt=""
                    /></a>
                    <a href="images/gallery/fulls/02.jpg"
                      ><img src={thumb2} alt=""
                    /></a>
                    <a href="images/gallery/fulls/03.jpg"
                      ><img src={thumb3} alt=""
                    /></a>
                    <a href="images/gallery/fulls/04.jpg" className="landscape"
                      ><img src={thumb4} alt=""
                    /></a>
                  </div>
                </div>
              </section>
              

              {/* Section */}
              <section>
                <header>
                  <h3>Meet The Team</h3>
                </header>
                <div className="content">
                  <div className="gallery">
                    <a href="images/gallery/fulls/08.jpg" className="portrait"
                      ><img src={thumb8} alt=""
                    /></a>
                    <a href="images/gallery/fulls/09.jpg" className="portrait"
                      ><img src={thumb9} alt=""
                    /></a>
                    <a href="images/gallery/fulls/10.jpg" className="landscape"
                      ><img src={thumb10} alt=""
                    /></a>
                  </div>
                </div>
              </section>

            </div>
          </section>


          {/* Section */}
          <section>

            <header>
              <h2>Get in touch</h2>
            </header>

            <div className="content">
              <p>
                <strong>Auctor commodo</strong> interdum et malesuada fames ac ante
                ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet
                dolor mattis sagittis.
              </p>


              <form>
                <div className="fields">
                  <div className="field half">
                    <input type="text" name="name" id="name" placeholder="Name" />
                  </div>
                  <div className="field half">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="field">
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Message"
                      rows="7"
                    ></textarea>
                  </div>
                </div>
                <ul className="actions">
                  <li>
                    <input
                      type="submit"
                      value="Send Message"
                      className="button primary"
                    />
                  </li>
                </ul>
              </form>


            </div>


            <footer>

              <ul className="items">
                <li>
                  <h3>Email</h3>
                  <a href="#">information@untitled.ext</a>
                </li>
                <li>
                  <h3>Phone</h3>
                  <a href="#">(000) 000-0000</a>
                </li>
                <li>
                  <h3>Address</h3>
                  <span>1234 Somewhere Road, Nashville, TN 00000</span>
                </li>
                <li>
                  <h3>Elsewhere</h3>
                  <ul className="icons">
                    <li>
                      <a href="#" className="icon brands fa-twitter"
                        ><span className="label">Twitter</span></a
                      >
                    </li>
                    <li>
                      <a href="#" className="icon brands fa-facebook-f"
                        ><span className="label">Facebook</span></a
                      >
                    </li>
                    <li>
                      <a href="#" className="icon brands fa-instagram"
                        ><span className="label">Instagram</span></a
                      >
                    </li>
                    <li>
                      <a href="#" className="icon brands fa-linkedin-in"
                        ><span className="label">LinkedIn</span></a
                      >
                    </li>
                    <li>
                      <a href="#" className="icon brands fa-github"
                        ><span className="label">GitHub</span></a
                      >
                    </li>
                    <li>
                      <a href="#" className="icon brands fa-codepen"
                        ><span className="label">Codepen</span></a
                      >
                    </li>
                  </ul>
                </li>
              </ul>
            </footer>

          </section>


          {/* Copyright  */}
          <div className="copyright">
            &copy; Untitled. All rights reserved. Design:
            <a href="https://html5up.net">HTML5 UP</a>.
          </div>

          {/* Scripts */}
          {/* <script src="./copyOfJs/jquery.scrolly.min.js"></script>
          <script src="./copyOfJs/jquery.min.js"></script>
          <script src="./copyOfJs/browser.min.js"></script>
          <script src="./copyOfJs/breakpoints.min.js"></script> */}
          {/* <script src={main}></script>
          <script src={util}></script> */}


         
          
        

        </div>

      </header>
    </div>
  );
}

export default App;
