import React from "react"
import CategoryList from "./Components/CategoryList";
import CategoryRegister from "./Components/CategoryRegister";
import ProductList from "./Components/ProductList";
import ProductRegister from "./Components/ProductRegister";



function App() {
  const [visivel, setVisivel] = React.useState(1)


function seletorDeComponente(){
  
  if(visivel === 1){
    return  <ProductRegister texto={"Componente de Cadastro de Produtos"} />
  }else if (visivel === 2){
    return <ProductList  texto={"Componente de Listagem de Produtos"}/>
  }else if (visivel === 3){
    return <CategoryRegister  texto={"Componente de Cadastro de Categorias"}/>
  }else{
    return  <CategoryList  texto={"Componente de Listagem de Categorias"}/>
  }
}


  return (
    <div>
      <button onClick={() => {setVisivel(1)}} >Cadastro de Produtos</button>
      <button onClick={() => {setVisivel(2)}} >Listagem de Produtos</button>
      <button onClick={() => {setVisivel(3)}} >Cadastro de Categorias</button>
      <button onClick={() => {setVisivel(4)}} >Listagem de Categorias</button>
    {seletorDeComponente()}
    </div>
  );
}

export default App;
