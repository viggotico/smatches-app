import "../css/SmatchesPage.css";
import testImg from "../assets/people/self/pexels-jonaorle-5673896.jpg";
import ali from "../assets/people/ali/pexels-ali-akash-3515575-5253668.jpg";
import bilal from "../assets/people/bruno/pexels-brunogobofoto-5424795.jpg";
import bruno from "../assets/people/bruno/pexels-brunogobofoto-5424795.jpg";

export const SmatchesPage = () => {
    //  demo purposes, test profiles
    const profiles = [
        { id: 1, imageUrl: ali, distance: "3.2 km", location: "Aarhus N", name: "Ali", age: 27 },
        { id: 2, imageUrl: bilal, distance: "5.4 km", location: "Copenhagen", name: "Bilal", age: 24 },
        { id: 3, imageUrl: bruno, distance: "1.9 km", location: "Odense", name: "Bruno", age: 30 },
    ];

    // Message data
    const nyeBeskeder = [
        { id: 1, imgIcon: bilal, name: "Bilal", message: "haha, hvordan kan det være..." },
        { id: 2, imgIcon: ali, name: "Ali", message: "haha, hvordan kan det være..." },
        { id: 3, imgIcon: bruno, name: "Bruno", message: "haha, hvordan kan det være..." },
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
                        </div>
                    </div>
                ))}
            </div> 

            <div className="message-container">
                <div className="row-1">
                    <h3>Nye beskeder</h3>
                    <span>{nyeBeskeder.length}</span>
                </div>

                <div className="row-2">
                    {nyeBeskeder.map((msg) => (
                        <MessageBox key={msg.id} imgIcon={msg.imgIcon} name={msg.name} message={msg.message} />
                    ))}
                </div>
            </div>
        </>
    );
};

const ProfileImage = ({ imageUrl }) => (
    <div className="profile-image">
        <img src={imageUrl} alt="Profile" />
    </div>
);

const ActionButton = ({ text, emoji }) => (
    <button className="action-button">
        {text} <span role="img" aria-label="emoji">{emoji}</span>
    </button>
);

// individual message boxes
const MessageBox = ({ imgIcon, name, message }) => (
    <div className="mesg-box-container">
        <div className="img-text-container">
            <img src={imgIcon} alt={name} />
            <div className="info-msg-contianer">
                <h3>{name}</h3>
                <p>{message}</p>
            </div>
        </div>
    </div>
);
