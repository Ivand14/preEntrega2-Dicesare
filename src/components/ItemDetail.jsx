
import { Card,  CardBody,Image,Text,CardHeader,Button } from '@chakra-ui/react'
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import {useState} from 'react'
import Loading from './Loading'




const ItemDetail = ({productos}) => {

  const[loader,setLoader]=useState(true)
  
  const [IrAlCart,setIrAlCart]=useState(false)

  const Add=()=>{
    setIrAlCart(true);
  }

  setTimeout(() => {
    setLoader(false)
  }, 1000);

  
  if(loader){
    return(
      <>
      <Loading />
      </>
    )
  }



  
  
  return (

  <div className="cardDetail">
    <Link to={`/`}>
        <span className="material-symbols-outlined volver">keyboard_return</span>
    </Link>

    {
      <div key={productos.id} className='contDetail'>

      <Card direction={'row'} alignItems={'center'} boxShadow='dark-lg'>
        <CardHeader marginRight={'1rem'}>
          <Image height={'20rem'}
            src={productos.img}
          />
        </CardHeader>
        <CardBody >
            <Text pt='2' textAlign={'center'} fontSize={'1.5rem'} fontFamily='Oswald, sans-serif'>{productos.name}</Text>
            <Text pt='2' fontFamily='Oswald, sans-serif'>{productos.description}</Text>
            <Text pt='2' display={'flex'} alignItems={'center'} fontFamily='Oswald, sans-serif' ><span className="material-symbols-outlined">credit_card</span>PAGA EN 3 CUOTAS DE : {Math.round(parseInt(productos.precio)/3)}$</Text>
            <Text pt='2' display={'flex'} alignItems={'center'} fontFamily='Oswald, sans-serif' ><span className="material-symbols-outlined">credit_card</span>PAGA EN 6 CUOTAS DE : {Math.round(parseInt(productos.precio)/6)}$</Text>
            <Text pt='2' display={'flex'} alignItems={'center'} fontFamily='Oswald, sans-serif' ><span className="material-symbols-outlined">credit_card</span>PAGA EN 12 CUOTAS DE : {Math.round(parseInt(productos.precio)/12)}$</Text>
            <Text pt='2'fontSize={'1.4rem'} color={'darkcyan'} fontFamily='Oswald, sans-serif'>STOCK : {productos.stock}</Text>
            <Text marginBottom={6} fontSize={'1.6rem'} color={'darkcyan'} fontFamily='Oswald, sans-serif'>{productos.precio}$</Text>

            <Text>
              {IrAlCart ? <Link to={`/cart`}>
                            <Button colorScheme='facebook' className='btn-cart' fontFamily='Oswald, sans-serif'>TERMINAR COMPRA</Button>
                          </Link> : 
                          <ItemCount Add={Add} id={productos.id} nombre={productos.name}img={productos.img}stock={productos.stock}precio={productos.precio}
                          />}

            </Text>


            
            

        </CardBody>
      </Card>
         

</div>

    }

    
    
      
 

</div>
  )
}

export default ItemDetail