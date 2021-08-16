import "./App.css";
import avatar2 from "./avatar2.jpg";
function App() {
  let profile = () => (
    <>
      <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
        <h1 className="title red">{"Rezgui chaima"}</h1>

        <img src={avatar2} alt="src" />

        <img src="/avatar1.jpg" alt="public" />

        <video width={320} height={240} controls>
          <source src="myVideo.mp4" type="video/mp4" />
        </video>
      </div>
    </>
  );
  return <>{profile()}</>;
}

export default App;
