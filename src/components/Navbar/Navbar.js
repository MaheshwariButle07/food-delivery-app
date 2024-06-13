import "./Navbar.css"

const Navbar = () => {
    return(
        <>
        <div className="nav-container">
        <a href="/" className="nav-item">Home</a>
        <a href="/about" className="nav-item">About</a>
        <a href="/services" className="nav-item">Serivces</a>
    
        </div>
        </>
    )
}

export default Navbar