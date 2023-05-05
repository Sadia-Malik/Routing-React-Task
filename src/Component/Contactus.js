import Navbar from './Navbar'
const Contactus = () => {
    return(
        <>
        <Navbar/>
        <div className="container">
          
        <p className="fs-2 text-center text-dark fw-bold"> This is ContactUs Page</p>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpo7UcXwi11vmDY-B79jYTqzvhKoEnOa8BRB3pSVszVNr2leD2V7ltKdZO57FBHcJrnF8&usqp=CAU" alt="uuu" className="img-fluid w-100"/>
<form className="mt-5 mb-5">
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>

  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>

<h2 className="text-light bg-dark text-center py-4 mt-5"> FOOTER</h2>
        </div>
        </>
    )
}
export default Contactus;