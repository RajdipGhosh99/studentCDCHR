import Cookies from 'js-cookie';
import css from "../css/about.css"


const About = ()=>{
  console.log("Cookies values are");
  console.log(document.cookie.match("user_type"))
  console.log(Cookies.get("user_type"))
    return(
        <>
        <div  className="about" style={{marginTop: "150px"}}>

          <section>
            <div class="image">
              <img src="https://cdn.pixabay.com/photo/2017/08/26/23/37/business-2684758__340.png"/>
            </div>

            <div class="content">
              <h2 className="hh">About Us</h2>
             
              <p className="ppp">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis aspernatur voluptas inventore ab voluptates nostrum minus illo laborum harum laudantium earum ut, temporibus fugiat sequi explicabo facilis unde quos corporis!</p>
              <ul class="links">
                <li><a href="/">work</a></li>
                <div class="vertical-line"></div>
                <li><a href="/">service</a></li>
                <div class="vertical-line"></div>
                <li><a href="/">contact</a></li>
              </ul>
              <ul class="icons">
                <li>
                  <i class="fa fa-twitter"></i>
                </li>
                <li>
                  <i class="fa fa-facebook"></i>
                </li>
                <li>
                  <i class="fa fa-github"></i>
                </li>
                <li>
                  <i class="fa fa-pinterest"></i>
                </li>
              </ul>
            </div>
          </section>
        </div>
        </>
    );
}


export default About;