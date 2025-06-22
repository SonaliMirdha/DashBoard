import './UserProfile.css';

function UserProfile({ 
    name = "Sonali Mirdha", 
    role = "Frontend Developer",
    avatarSrc = './usericon.svg'
}) {
    return (
        <div className="user-profile">
            <div className="user-logo">
            <img src={avatarSrc} alt={`${name}'s profile`} className="user-icon" />

            </div>
            <div className="user-details">
                <h3>{name}</h3>
                <p>{role}</p>
            </div>
        </div>
    );
}

export default UserProfile;