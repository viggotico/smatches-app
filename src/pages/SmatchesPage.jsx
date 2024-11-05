import "../css/SmatchesPage.css";
import testImg from "../assets/people/self/pexels-jonaorle-5673896.jpg";
import ali from "../assets/people/ali/pexels-ali-akash-3515575-5253668.jpg";
import bilal from "../assets/people/bilal/pexels-mwabonje-1510529.jpg";
import bruno from "../assets/people/bruno/pexels-brunogobofoto-5424795.jpg";
// import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const SmatchesPage = () => {
    const navigate = useNavigate()


    //  demo purposes, test profiles
  const profiles = [
        { id: 1, imageUrl: ali, distance: "3.2 km", location: "Aarhus N", name: "Ali", age: 27 },
        { id: 2, imageUrl: bilal, distance: "5.4 km", location: "Copenhagen", name: "Bilal", age: 24 },
        { id: 3, imageUrl: bruno, distance: "1.9 km", location: "Odense", name: "Bruno", age: 30 },
    ];

    // Message data
    const nyeBeskeder = [
        { id: 1, imageUrl: bilal, name: "Bilal", message: "Du er så flot, at jeg helt glemte min scorereplik." },
        { id: 2, imageUrl: ali, name: "Ali", message: "Skal vi mødes eller bare blive ved med at flirte gennem skærmen?" },
        { id: 3, imageUrl: bruno, name: "Bruno", message: "Er du en magnet? For jeg er utrolig tiltrukket af dig" },
    ];

    // navigate message,name
    const handleOpenChatWithDetails = (msg) => {
        navigate(`/chat/${msg.id}`, {
            state: {
                initialMessage: msg.message,
                initialName: msg.name
            }});
    };
  
    


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
            {/* messages List */}
            <div className="message-container">
                <div className="row-1">
                    <h3>Nye beskeder</h3>
                    <span>{nyeBeskeder.length}</span>
                </div>

                <div className="row-2">
                    {nyeBeskeder.map((msg) => (
                        <MessageBox 
                        key={msg.id} 
                        name={msg.name} 
                        message={msg.message} 
                        imageUrl={msg.imageUrl}
                        onClick={() => handleOpenChatWithDetails(msg)}                        
                        />
                    ))}
                </div>
            </div>
        </>
    );
};



 const ProfileImage = ({ imageUrl }) => (
    <div className="profile-image">
        <img src={imageUrl} alt="Profile"/>
        <div className="img" style={{ backgroundImage: `url('${imageUrl}')` }}></div>
        {/* <div className="img" style={{ backgroundImage: `url('${bilal}')` }}></div>
        <div className="img" style={{ backgroundImage: `url('${bruno}')` }}></div> */}


    </div>
);

const ActionButton = ({ text, emoji }) => (
    <button className="action-button">
        {text} <span role="img" aria-label="emoji">{emoji}</span>
    </button>
);

// MessageBox Component
const MessageBox = ({ name, message, onClick, imageUrl }) => (
    <div className="mesg-box-container" onClick={onClick}>
        <div className="img-text-container">
            <div className="icon-img" style={{ backgroundImage: `url('${imageUrl}')` }}></div>
            
            <div className="info-msg-contianer">
                <h3>{name}</h3>
                <p className="p-msg">{message}</p>
            </div>
        </div>
    </div>
);










