import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import "./ParallaxComponent.css"; // Import CSS file

const ParallaxComponent = () => {
  return (
    <ParallaxProvider>
      <div className="parallax-container">
        
        {/* First Zoom Parallax Image */}
        <Parallax speed={-20} scale={[1, 2.0]}>
          <div className="parallax-image image1">
            <h1>Zoom Parallax - Image 1</h1>
          </div>
        </Parallax>

        {/* Second Zoom Parallax Image */}
        <Parallax speed={-15} scale={[1, 2.0]}>
          <div className="parallax-image image2">
            <h1>Zoom Parallax - Image 2</h1>
          </div>
        </Parallax>

        {/* Third Zoom Parallax Image */}
        <Parallax speed={-20} scale={[1, 2.0]}>
          <div className="parallax-image image3">
            <h1>Zoom Parallax - Image 3</h1>
          </div>
        </Parallax>

      </div>
    </ParallaxProvider>
  );
};

export default ParallaxComponent;
