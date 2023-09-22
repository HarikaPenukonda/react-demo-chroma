import "./navbar.css"

export default function Navbar(){
    return(
        <div className="navbar">
            <div className="logo">
                <img src="logo.png" alt="website-logo"/>
                <span>My Website</span>
            </div>
            <div className="icons">
                <img src="search.png" alt="search"/>
                <img src="profile.png" alt="profile"/>
                <div className="messages">
                    <img src="message.png" alt="message"/>
                    <span className="count">1</span>
                </div>
                <div className="user">
                    <img 
                        className="user-p"
                        src="https://img.freepik.com/premium-photo/girl-is-taking-photo-with-camera_727939-5369.jpg"
                        alt=""
                    />
                    <span>Jane</span>
                </div>
                <img src="login.png" alt=""/>
            </div>

        </div>
    )
}
