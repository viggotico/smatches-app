import "../css/SmatchesPage.css";
import testImg from "../assets/people/self/pexels-jonaorle-5673896.jpg";
import ali from "../assets/people/ali/pexels-ali-akash-3515575-5253668.jpg"
import bilal from "../assets/people/bruno/pexels-brunogobofoto-5424795.jpg"
import bruno from "../assets/people/bruno/pexels-brunogobofoto-5424795.jpg"

export const SmatchesPage = () => {
    // For demo purposes, here are some test profiles
    const profiles = [
        { id: 1, imageUrl: ali, distance: "3.2 km", location: "Aarhus N", name: "Ali", age: 27 },
        { id: 2, imageUrl: bilal, distance: "5.4 km", location: "Copenhagen", name: "Bilal", age: 24 },
        { id: 3, imageUrl: bruno, distance: "1.9 km", location: "Odense", name: "Bruno", age: 30 },
        // Add more profiles as needed
    ];

    const nyeBeskeder = [
        { imgIcon: ali, message: "haha, hvordan kan det være du.. " }
    ];

    return (
        <>
        <div className="scrollmenu">
            {profiles.map(profile => (
                <div className="profile-card" key={profile.id}>
                    <ProfileImage imageUrl={profile.imageUrl} />
                    <div className="profile-info-container"> 
                    <div className="profile-info">
                        <div className="profile-distance">{profile.distance}</div>
                        <div className="profile-location">{profile.location}</div>
                        <div className="profile-name-age">
                            {profile.name}, {profile.age}
                        </div>
                    </div>
                    <ActionButton text="Smash" emoji="😘" />
                    {/* <button></button> */}
                    </div>
                </div>
            ))}
        </div> 

        <div className="message-container">

            <div className="row-1">
            <h3>Nye beskeder</h3>
            <span>6</span>
            </div>

             <div className="row-2">{/* start of row-2 */}
            {/* bilal */}
            <div className="mesg-box-container">
                <div className="img-text-container">
                <img src={bilal} alt="bilal" />
                <div className="info-msg-contianer">
                    <h3>Bilal</h3>
                    <p>haha, hvordan kan det være...</p>
                </div>
                </div>
            </div>

            {/* ali */}
            <div className="mesg-box-container">
                <div className="img-text-container">
                <img src={ali} alt="bilal" />
                <div className="info-msg-contianer">
                    <h3>ali</h3>
                    <p>haha, hvordan kan det være...</p>
                </div>
                </div>
            </div>

              {/* bruno */}
              <div className="mesg-box-container">
                <div className="img-text-container">
                <img src={bruno} alt="bilal" />
                <div className="info-msg-contianer">
                    <h3>bruno</h3>
                    <p>haha, hvordan kan det være...</p>
                </div>
                </div>
            </div>



            
            </div>   {/* end of row-2 */}
            
        </div>

        </>
                  
    );

   



}

const ProfileImage = ({ imageUrl }) => {
    return (
        <div className="profile-image">
            <img src={imageUrl} alt="Profile" />
        </div>
    );
};

const ActionButton = ({ text, emoji }) => {
    return (
        <button className="action-button">
            {text} <span role="img" aria-label="emoji">{emoji}</span>
        </button>
    );
};
