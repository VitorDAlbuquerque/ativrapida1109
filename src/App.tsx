import '../app/globals.css' 
 
import axios from 'axios'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

import fixingcar from './assets/FixingCar.jpg'
import fixingengine from './assets/mecanicoteste.jpg'
import logo from './assets/logo.png'
import { useState } from 'react'

function App() {

//js

const url = 'https://api.kanye.rest/';

fetch(url)
  .then(response => response.json())
  .then(data => {
  const a =  document.getElementById('quote');
  if(a){
    a.textContent = data.quote;
  }
  })
  .catch(error => console.error(error));


  


function scroll( a:string){


  const b = document.getElementById(a)

  if(b){
const c = b.offsetTop
window.scrollTo({top:c,behavior:"smooth"})  
}



}

const [l, setl] = useState (false)
function check (answer: string){

  if(answer == "Kanye West"){
    setl(true)
  }
  else{
    setl(false)
  }
}

  return (

    //html

<body className='h-screen'>



<header>
<nav className='flex items-center  justify-between bg-slate-300' id="nav" >

<div className='flex items-center '>
  
<img src="https://cdn-icons-png.flaticon.com/512/7279/7279717.png"  className='h-28' alt="" />
<h1 className='font-bold text-3xl'>Mecanica</h1>

  </div>
<ul className='flex gap-7 '>
  <li onClick={()=>scroll("nav")} className='cursor-pointer'>Início</li>
  <li onClick={()=>scroll("sobrenos")} className='cursor-pointer'>Sobre nós</li>
  <li onClick={()=>scroll("servicos")} className='cursor-pointer'>Serviços</li>
</ul>


<button className='pr-36'>Contate-nos</button>

</nav>
  
  </header>
<main>

<div className='bg-black h-screen w-screen absolute opacity-80 '></div>
<img src={fixingcar} alt="" className='h-screen w-screen'/>

<div className=' flex flex-col absolute top-0 h-screen justify-center  px-40  '>
<img src={logo} alt="#" className='w-32'/>
<h1 className=' text-white'>Aaaa</h1>
</div>

<div className="flex justify-center mt-10">
  <Carousel className="w-5/6">
    <CarouselPrevious />

      <CarouselContent className="">
  
          <CarouselItem className=' flex justify-center'>
            <img src="https://blog.engecass.com.br/wp-content/uploads/2023/05/dicas-para-manter-a-equipe-unida-na-oficina-mecanica-e-alcancar-o-sucesso.png"  alt="" />
          </CarouselItem>

          <CarouselItem className=' flex justify-center'>   

            <img src="https://mecanie.com.br/artigos/wp-content/uploads/2024/03/tecnico-em-mecanica.png" alt="" />

            
          </CarouselItem>

          <CarouselItem className=' flex justify-center'>   

            <img src="https://maintenance-minio.kdminhaoficina.com.br/blog/2023/08/criacao-de-bicicletas-na-oficina.jpg" alt="" />

            
          </CarouselItem>
   
      </CarouselContent>
      

 

      <CarouselNext />
    </Carousel>
 </div>

 <div className='flex flex-col items-center mt-10'>
<h1 className='' id="sobrenos">Sobre nós</h1>
<p className='bg-red-900 w-[700px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae minima neque possimus a,  magni sequi nulla. Suscipit saepe aliquid dolor neque velit voluptatum iusto pariatur distinctio consequatur architecto! Itaque, corporis! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus, ratione repellendus ipsum nostrum, aliquam veritatis ex facere atque labore esse cupiditate obcaecati vero eius, accusantium aliquid maiores iste praesentium ducimus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae libero necessitatibus voluptate culpa delectus quisquam sit laudantium aspernatur modi aliquam adipisci in fugit tempore accusantium, odio architecto porro, consequuntur maiores.</p>

</div>

<div className='flex flex-col items-center mt-10'>
<h1 className='' id="servicos">Serviços</h1>
<p className='bg-red-900 w-[700px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae minima neque possimus a,  magni sequi nulla. Suscipit saepe aliquid dolor neque velit voluptatum iusto pariatur distinctio consequatur architecto! Itaque, corporis! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus, ratione repellendus ipsum nostrum, aliquam veritatis ex facere atque labore esse cupiditate obcaecati vero eius, accusantium aliquid maiores iste praesentium ducimus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae libero necessitatibus voluptate culpa delectus quisquam sit laudantium aspernatur modi aliquam adipisci in fugit tempore accusantium, odio architecto porro, consequuntur maiores.</p>

</div>

<div id='quote' className='flex flex-col items-center mt-10 '>
<h1 className='' id="servicos">Serviços</h1>
<p className='bg-red-900 w-[700px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae minima neque possimus a,  magni sequi nulla. Suscipit saepe aliquid dolor neque velit voluptatum iusto pariatur distinctio consequatur architecto! Itaque, corporis! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus, ratione repellendus ipsum nostrum, aliquam veritatis ex facere atque labore esse cupiditate obcaecati vero eius, accusantium aliquid maiores iste praesentium ducimus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae libero necessitatibus voluptate culpa delectus quisquam sit laudantium aspernatur modi aliquam adipisci in fugit tempore accusantium, odio architecto porro, consequuntur maiores.</p>



</div>

<div className='flex flex-col items-center mt-10'>
  <input type="text" className='border-black border-2 ' onChange={(e) => check(e.target.value)}/>
{l?<p>Certo</p>:<p>Errado</p>}

</div>

</main>


<footer className='flex justify-center mt-10 bg-gray-900 text-rose-300'>

<form action="" method="get"  className='flex flex-col'>
<p>Nome</p>
<input type="text" className='border-black border-2' />
<p>Email</p>
<input type="text" className='border-black border-2' />
<p>Mensagem</p>
<textarea name="mensagem" id="mensagem" className='border-black border-2'></textarea>
<button type="submit" className='border-black border-2'>Enviar</button>
</form>

</footer>


 </body>


 )

}

export default App
