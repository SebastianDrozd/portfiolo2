import logo from './logo.svg';
import './App.css';
import Header from './containers/Header/Header';
import About from './containers/about/About';
import { useEffect } from 'react';
import Middle from './containers/middle/Middle';
import Websites from './containers/websites/Websites';

function App() {
  
  useEffect(()=> {
    // Parallax effect
// Adapted from @ilonacodes article ->  https://link.medium.com/7fFiON6Q1X

// Update : added throttle to increase performance
window.addEventListener('scroll', throttle(parallax, 14));

function throttle(fn, wait) {
  var time = Date.now();
  return function() {
    if ((time + wait - Date.now()) < 0) {
      fn();
      time = Date.now();
    }
  }
};

function parallax() {
  var scrolled = window.pageYOffset;
  var parallax = document.querySelector(".parallax");
  // You can adjust the 0.4 to change the speed
	var coords = (scrolled * 0.3) + 'px'
  parallax.style.transform = 'translateY(' + coords + ')';
};
  },[])

  useEffect(() => {
    let options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3
    };
   
    
  
  let observer = new IntersectionObserver(callbackFunc, options);
  
  observer.observe(document.getElementById('featured-image'));
  observer.observe(document.getElementById('card1'));
  observer.observe(document.getElementById('card2'));
  observer.observe(document.getElementById('card3'));
  observer.observe(document.getElementById('pro1'));
  observer.observe(document.getElementById('pro2'));
  observer.observe(document.getElementById('pro3'));
 
  },[])
  function callbackFunc(entries, observer)
{
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('inview');
    }else{
      entry.target.classList.remove('inview');
    }
    
  
  });
}
  return (
    <>
     <header class="parallax-wrapper">
     <div className="parallax">  <Header/></div>
</header>
   
  
    <About/>
    <Middle/>
    <Websites/>
    </>
  );
}

export default App;
