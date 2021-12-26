import './Home.css';
import BackgroundMain from '../../assets/Mainpage-background.png'
import { NavLink } from 'react-router-dom';
function Home() {
  return (
    
    <div className='Main-page'>
      <div className='Category_list'>
        <h2 className='topic-category'>BROWSE BY CATEGORY</h2>
        <div className='main-page'>
        <NavLink to="/categories/electronics" ><h2 className='text-center'>Electronics</h2><img className="item" src="https://images.unsplash.com/photo-1611078489935-0cb964de46d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGFwdG9wc3xlbnwwfHwwfHw%3D&w=1000&q=80" width={"250px"} height={"188px"} alt="electronics"/></NavLink>
        <NavLink to="/categories/jewelery" ><h2 className='text-center'>Jewelery</h2><a href=''><img className="item" src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Z29sZCUyMGpld2VsbGVyeXxlbnwwfHwwfHw%3D&w=1000&q=80" width={"250px"} height={"188px"} alt="jewelery"/></a></NavLink>
        <NavLink to="/categories/men's clothing" ><h2 className='text-center'>Men's clothing</h2><a href=''><img className="item" src="https://wallpaperaccess.com/full/2489629.jpg" width={"250px"}  height={"188px"} alt="men's clothing"/></a></NavLink>
        <NavLink to="/categories/women's clothing" ><h2 className='text-center'>Women's clothing</h2><a href=''><img className="item" src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGNsb3RoaW5nfGVufDB8fDB8fA%3D%3D&w=1000&q=80" width={"250px"} height={"188px"} alt="women's clothing"/></a></NavLink>
        </div>  
      </div>

      <hr/>
      <div className='Main-center'>
        <img src={BackgroundMain} width="100%" alt="" />
      </div>
      <hr/>
      

      <div className='Featured_brands'>
        <h2 className='topic-interests'>YOU MAY BE INTERESTED </h2>
        <div className="main-page">
        <NavLink to="/categories/men's clothing/products/1" className=""><a href=''><img className="item" src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" width={"150px"} height={"110px"} alt=""/><h4 className='text-center mt-3 text-primary'>Backpack</h4></a></NavLink>
        <NavLink to="/categories/jewelery/products/7" ><a href=''><img className="item" src="https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg"width={"150px"} height={"110px"}  alt=""/><h4 className='text-center mt-3 text-primary'>Gold Plated Princess</h4></a></NavLink>
        <NavLink to="/categories/women's clothing/products/19" ><a href=''><img className="item" src="https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg" width={"150px"} height={"110px"}  alt=""/><h4 className='text-center mt-3 text-primary'>Sleeve Moisture</h4></a></NavLink>
        <NavLink to="/categories/electronics/products/12" ><a href=''><img className="item" src="https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg" width={"150px"} height={"110px"}  alt=""/><h4 className='text-center mt-3 text-primary'>External Hard Drive</h4></a></NavLink>
        </div>    
        </div>

    </div>
  );
}

export default Home;