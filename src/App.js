import React,{useState,useEffect} from 'react';
import Video from './Video'
import './App.css';
import db from './firebase'


function App() {
  const [reels ,setreels] = useState([])

    useEffect(() => {
      db.collection('reels').onSnapshot(snapshot =>(
        setreels(snapshot.docs.map(doc => doc.data()))
      ))
    }, [])
  return (
    <div className="app">
      <div className='app_top'>
        <img className='app_logo' src='https://www.bloomforher.com/wp-content/uploads/2020/09/reels-instagram-logo-new-feature-social-media-app-3d-rendering_1379-5023.jpg'></img>
      </div>
      <div className="front">
        <div className="youtube">Insta</div>
      <div className='app_videos'>
        {reels.map(({url,likes,shares,avatarSrc,channel,song}) =>(
          <Video channel= {channel} avatarSrc={avatarSrc} song={song} url={url} likes={likes} shares={shares}></Video>

        ))}
      </div>
          <div className="shorts">Reels</div>
      </div>
    </div>
  );
}

export default App;
