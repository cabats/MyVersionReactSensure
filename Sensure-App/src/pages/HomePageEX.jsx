import "../App.css";
import "../components/css/HomePageEX.css";

function HomePageEX({ expandedSection, onExpand, onCollapse }) {
    return (
        <div className="homepageRight-insider">
            {expandedSection === "entrance" ? (
                <div className="expandedContainer">
                    <button className="backButton" onClick={onCollapse}>Back</button>
                    <h2>Entrance View</h2>
                </div>
            ) : expandedSection === "exit" ? (
                <div className="expandedContainer">
                    <button className="backButton" onClick={onCollapse}>Back</button>
                    <h2>Exit View</h2>
                </div>
            ) : (
                <>
                    <div className="Entrance" onClick={() => onExpand("entrance")}>
                        Click to Expand Entrance
                    </div>
                    <div className="Exit" onClick={() => onExpand("exit")}>
                        Click to Expand Exit
                    </div>
                </>
            )}
        </div>
    );
}

export default HomePageEX;
