import { useState } from 'react'
import './App.css'
import { TbMeat } from "react-icons/tb";
import { MdOutlineIcecream } from "react-icons/md";
import { LuCoffee } from "react-icons/lu";
import { HiOutlineCake } from "react-icons/hi2";
import { GiHotMeal } from "react-icons/gi";
import { PiHamburgerThin } from "react-icons/pi";
import { MdOutlineRoomService } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='ust'>
    <nav className='navbar'>
      <h2>PULSE <span className='sp'>.</span></h2>
      <ul>
        <li className='about'>Home</li>
        <li >About Us</li>
        <li>Restaurant</li>
        <li>News</li>
        <li>Contact Us</li>
        <li className='li_res'> <span className='sp1'> Reservations </span> <BsTelephone /> 652-345 3222 11</li>
      </ul>
    </nav>
    <div className='heading_tex'>
      <h1 className='text'>Food and more <span className='text_n'>.</span></h1>
      <p className='paragraph'>By Chef Francis Smith</p>
      </div>
      </div>
    <section className='ilk'>
      <div className='ilk_top'>
      < TbMeat/>
      </div>
      <img className='welcome' src="\Capture.PNG" alt="" />
      <div className='ilk_bottom'>
        <div className='ilk_bottom_div'>
         <h3 className='head_3'>2002</h3>
         <p className='ilk_bottom_p1'>In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.</p>
        </div>
        <div className='ilk_bottom_div'>
          <h3 className='head_3'>2010</h3>
          <p className='ilk_bottom_p2'>Stpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat. Maecenas sollicitudin est in libero pretium.</p>
        </div>
        <div className='ilk_bottom_div'>
          <h3 className='head_3'>2018</h3>
          <p className='ilk_bottom_p3'>In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.</p>
        </div>
      </div>
      <div>
          <img className='imza' src="\sign.png" alt="" />
        </div>
    </section>
    <section className='ikinci'>
      <div className='ilk_yuxari'>
       <p className='icon_i'><MdOutlineIcecream/></p>
       <h2 className='test'>Testimonials</h2>
      </div>
      <div className='ilk_asaqi'>
        <p className='ilk_asaqi_p'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, perspiciatis enim! Maxime cupiditate hic voluptatibus blanditiis voluptatem soluta vero, voluptas at placeat quis deleniti error tempora ducimus harum tenetur est. Atque cum voluptas corporis dolore nihil odit distinctio! Quaerat, laborum!
        </p>
        <p className='ikinci_son'><span className='ikinci_p'>Ted Chapman</span>, Client</p>
      </div>
    </section>
    <section className='ucuncu'>
      <div className='ucuncu_top'>
        <img className='service' src="\our services.PNG" alt="" />
      </div>
      <div className='ucuncu_alt'>
        <div className='ucuncu_alt_div'>
          <p className='alt_icon'><LuCoffee/></p>
          <h3 className='alt_div_h'>Breakfast</h3>
          <p className='alt_div_p'>In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum.</p>
        </div>
        <div className='ucuncu_alt_div'>
        <p className='alt_icon'> <HiOutlineCake/></p>
          <h3 className='alt_div_h'>Brunch</h3>
          <p className='alt_div_p'>Scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis.</p>
        </div>
        <div className='ucuncu_alt_div'>
         <p className='alt_icon'> <GiHotMeal/></p>
          <h3 className='alt_div_h'>Lunch</h3>
          <p className='alt_div_p'>In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum.</p>
        </div>
        <div className='ucuncu_alt_div'>
         <p className='alt_icon'> <PiHamburgerThin/></p>
          <h3 className='alt_div_h'>Dinner</h3>
          <p className='alt_div_p'>Aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendreri.</p>
        </div>
      </div>
    </section>
    <section className='dorduncu'>
   <p className='dorduncu_icon'><MdOutlineRoomService/></p>
      <h2 className='dorduncu_head'>Our Menu</h2>
      <div>
        <ul className='dorduncu_ul'>
          <li className='d_li'>Breakfast</li>
          <li>Brunch</li>
          <li>Lunch</li>
          <li>Dinner</li>
        </ul>
      </div>
      <div className='dorduncu_menu'>
       <div className="dorduncu_siyahi">
        <h3 className='dord_siyahi_h3'>Scrambled Eggs with ham
        <p className='dord_siyahi_p'>with wild mushrooms and asparagus <span>.................................</span> <span className='dorduncu_span'>$8.00</span></p>
        </h3>
       </div>
       <div className="dorduncu_siyahi">
        <h3 className='dord_siyahi_h3'>Scrambled Eggs with ham
        <p className='dord_siyahi_p'>with wild mushrooms and asparagus <span>.................................</span> <span className='dorduncu_span'>$8.00</span></p>
        </h3>
       </div>
       <div className="dorduncu_siyahi">
        <h3 className='dord_siyahi_h3'>Scrambled Eggs with ham
        <p className='dord_siyahi_p'>with wild mushrooms and asparagus <span>.................................</span> <span className='dorduncu_span'>$8.00</span></p>
        </h3>
       </div>
       <div className="dorduncu_siyahi">
        <h3 className='dord_siyahi_h3'>Scrambled Eggs with ham
        <p className='dord_siyahi_p'>with wild mushrooms and asparagus <span>.................................</span> <span className='dorduncu_span'>$8.00</span></p>
        </h3>
       </div>
       <div className="dorduncu_siyahi">
        <h3 className='dord_siyahi_h3'>Scrambled Eggs with ham
        <p className='dord_siyahi_p'>with wild mushrooms and asparagus <span>.................................</span> <span className='dorduncu_span'>$8.00</span></p>
        </h3>
       </div>
       <div className="dorduncu_siyahi">
        <h3 className='dord_siyahi_h3'>Scrambled Eggs with ham
        <p className='dord_siyahi_p'>with wild mushrooms and asparagus <span>.................................</span> <span className='dorduncu_span'>$8.00</span></p>
        </h3>
       </div>
       <div className="dorduncu_siyahi">
        <h3 className='dord_siyahi_h3'>Scrambled Eggs with ham
        <p className='dord_siyahi_p'>with wild mushrooms and asparagus <span>.................................</span> <span className='dorduncu_span'>$8.00</span></p>
        </h3>
       </div>
       <div className="dorduncu_siyahi">
        <h3 className='dord_siyahi_h3'>Scrambled Eggs with ham
        <p className='dord_siyahi_p'>with wild mushrooms and asparagus <span>.................................</span> <span className='dorduncu_span'>$8.00</span></p>
        </h3>
       </div>
      </div>
      <button className='btn'>See More</button>
    </section>
    <section className='son'>
      <div className='map'>
      <iframe className='map_width' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7399.918253361819!2d48.83157060349593!3d38.757227183354935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2saz!4v1716799144181!5m2!1sen!2saz"></iframe>
      </div>
      <div className='map_son'>
        <p className='colorlib'>Copyright ©2024 All rights reserved | This template is made with <span> <MdFavoriteBorder/> </span> by <span className='color'> <a href="">Colorlib</a></span> </p>
      </div>
      <div className='contact_us'>
        <div className='contact_us_sekil'>
          <img className='son_sekil' src="\public\son.PNG" alt="" />
        </div>
        <div className='inputlar'>
          <input className='inputs' placeholder='Name' type="text" />
          <input className='inputs' placeholder='E-mail' type="text" />
          <input className='inputs1' placeholder='Message' type="text" />
        </div>
        <button className='btn1'>Send Message</button>
      </div>
    </section>

    </>
  )
}

export default App
