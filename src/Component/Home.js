import Navbar from './Navbar'
const Home = () => {
    return(
        <>
       <Navbar/>
       <div className="container">
        <div className="text-light bg-dark py-3 text-center fs-3 mb-4">
            Home Page
        </div>
       <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://e1.pxfuel.com/desktop-wallpaper/125/969/desktop-wallpaper-web-development-posted-by-sarah-anderson-full-stack.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://images.squarespace-cdn.com/content/v1/50f457bfe4b06f99b6404e78/1476667450569-UX70MBME2SDPK9KSWA67/media-ad+-+2500.jpg?format=1500w" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://miro.medium.com/v2/resize:fit:1400/1*UVm5I1j351RFw8aLHpVs5g.jpeg" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
<h2 className="text-light bg-dark text-center py-4 mt-5"> FOOTER</h2>
       </div>
        </>
    )
}
export default Home;