import video from "../data/video.js";
import Video from './Video'

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <Video videoData={video} />
      {/* <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      /> */}
    </div>
  );
}

export default App;



// Plan what components I'll need
// Draw out my component hierarchy
// Build out my components and pass down any data they need via props using the video object (imported into App)
// Consider what components need to use state as you're building out these features.

// Bonus
// If you finish early and want to get more practice with state and events, here are some ideas for additional features:

// Add a search bar to search comments by username
// Add a sorting feature to sort the comments