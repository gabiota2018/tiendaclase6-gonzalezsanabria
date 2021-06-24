import React, {useState, useEffect} from 'react';
import Card from './Card';

const referensData = [
    {
        message: 'Pizza con muzzarella. Entre tantos gustos de pizza sin duda la Pizza con Muzzarella se lleva la medalla de oro entre las preferidas por nosotros los argentinos. .... ',
        user: {
            name: 'Muzza',
            course: '$350',
            photo: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pedidosya.com.ar%2Fblog%2Fvariedades-de-pizzas-mas-populares&psig=AOvVaw3wXcyDeBcvBJGmu1Pr2Kwq&ust=1624585361208000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCPDCg52Sr_ECFQAAAAAdAAAAABAD'

        }
    },
    {
        message: 'Otro gran clásico que está presente en el ranking de los gustos de pizza más pedidos por nuestros usuarios argentinos en los últimos meses es la rica pizza con jamón: ¡la favorita por los más pequeños de la casa! ¿Qué hace de esta pizza tan especial? ¡Trozos de jamón repartidos entre la rica muzzarella! Si sumamos todas sus variantes, con morrones, rúcula, o jamón crudo entre otros, estaría en el segundo lugar, ¡sólo siendo vencido por la muzza! ',
        user: {
            name: 'Pizza con Jamón',
            course: '$550',
            photo: 'https://www.pedidosya.com.ar/blog/wp-content/uploads/sites/5/2018/05/pizza-con-jamon.jpg',
        }
    },
    {
        message: ' Se puede decir que la pizza Margarita es la más básica de todas, pues solo lleva tomate, queso mozzarella y un toque de albahaca, pero aunque sea la más sencilla de preparar, con una buena masa obtendremos un resultado delicioso. ',
        user: {
            name: 'Margarita',
            course: '450',
            photo: 'https://recetinas.com/wp-content/uploads/2017/09/pizza-margarita.jpg'
        }
    },
]


function CardContainer(){

    const [referens, setReferences] = useState(referensData);

    const [contador, setContador] = useState(0)

    const addNewCard = () => {
        const newReference =  {
            message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
            user: {
                name: 'Nicolas Test New',
                course: 'Desarrollo React',
                photo: 'https://picsum.photos/id/237/200/300'
            }
        }
        setReferences([...referens, newReference])
    }

    const buttonFunction = () => {
        alert('esta funcion esta desde el padre')
    }

    useEffect(() => { console.log('esto es un componentDidMount')}, []) // componentDidMount

    useEffect(() => { console.log('cada vez que reference cambien yo cambio')
}, [referens]) // componentDidMount
    
    return(
        <div>
            Container Card
          {referens.map((item, key) => 
                <Card {...item} buttonFunction={buttonFunction} />)}

            <button onClick={addNewCard}>Agregar Referencia</button>    
        </div>
    )
}

export default CardContainer;
