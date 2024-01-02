
import Header from '../../components/Header'
import Footer from '../../components/Footer'
 import './home.module.css'   
function Home() {
   return ( 
       

      <>
         <Header />    
         
         <section className='container'>
         
         <h1>O prazer de uma boa refeição começa com ingredientes de qualidade. Escolha ovos frescos, escolha a ENAVIS.</h1>
         <img src="src/assets/banner-home.png" alt="logo" width={1440} height={615}/>

         </section>
       
         


      <Footer/> 
      
      </>
    );
 }
 
export default Home;
  