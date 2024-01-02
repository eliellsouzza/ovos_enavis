import "./footer.style.css";

function Footer() {
  
  return (
    <footer className="main_footer container">
          <div className="custom-shape-divider-bottom-1683068753">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
            </svg>
      </div>
      

        <div className="content">
            
            <div className="colfooter">
                
            <h4 className="titleFooter"> Redes Sociais</h4>
                
                <a href="#" className="botao"><span> <i className="fa-brands fa-facebook"></i> </span></a>   
                <a href="#" className="botao"><span> <i className="fa-brands fa-instagram"></i> </span></a>            
                <a href="#" className="botao"><span> <i className="fa-brands fa-x-twitter"></i> </span></a>            
                <a href="#" className="botao"><span> <i className="fa-brands fa-linkedin"></i> </span></a>           
            </div>     
            
        <div className="colfooter">
        <h4 className="titleFooter"> Menu</h4>
                
                <ul>
                
                  <li><a href="#" title="Página Inícial">Página Inícial</a></li>
                  <li><a href="#" title="Sobre a Empresa">Sobre a Empresa</a></li>
                  <li><a href="#" title="Galeria de Fotos">Produtos</a></li>
                  <li><a href="#" title="Fale Conosco">Fale Conosco</a></li>
                
                </ul>
           
            
            </div> 
            
        

            <div className="colfooter">
            <h4 className="titleFooter"> Contato</h4>
               <p><i className="fa-solid fa-globe"></i> enavis.com.br</p>
               <p><i className="fa-solid fa-envelope"></i> qualidade@enavis.com.br</p>
               <p><i className="fa-brands fa-whatsapp"></i> (81) 9.9966-6111</p>
               <p><i className="fa-solid fa-phone"></i> (81) 3649.xxxx</p>
            
             
            </div>
            
            <div className="clear"></div>
        
        </div>
        <div className="main_footer_copy">
            
            <p className="m-b-footer"> Enavis - 2024, todos os direitos reservados.</p> 
        <p className="by"><i className="icon icon-heart-3"></i> Desenvolvido por: <a href="#" title="Grupo Souza"> </a></p>
        <img src="src/assets/grupo-souza-branco.png" alt="logo" width={100}/>
        </div>

    </footer>


  );
}

export default Footer;
