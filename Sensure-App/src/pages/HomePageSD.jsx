import "../App.css";
import "../components/css/HomePageSD.css";


function HomePageSD() {
  return (
    <div className="homepage-Student">
      <div className="StudentLeftContainer">
        <div className="StudentPicture"></div>
        <p className="idNum">ID #12345</p>
        <div className="plate-number"></div>
      </div>

      <div className="StudentRightContainer">
        <h2>Student Information</h2>
      </div>
    </div>
  );
}

export default HomePageSD;
