import { useState, createContext} from 'react'

const OrderContext = createContext([])

const OrderContextProvider = (props) => {
    const [order, setOrder] = useState([]);

    const isInOrder = (id) => {
        return order.find(prod => prod.id === id)
    }

    const addItem = (producto, cantidad) => {
        if(isInOrder(producto.id)) {
            const indice = orrder.findIndex(prod => prod.id === producto.id)
            const aux = [...order]
            aux[indice].cant = cantidad
            setOrder(aux)
        } else {
            const nuevoProducto = {
                ...producto,
                cant: cantidad
            }

            setOrder([...order, nuevoProducto])
        }
        
    }

    const emptyOrder = () => {
        return setOrder([])
    }
   
    const removeItem = (id) => {
        return setOrder(order.filter(prod => prod.id !== id))
    }

    const getItemQuantity = () => {
        return order.reduce((acum, prod) => acum += prod.cant, 0)
    }

    const totalPrice = () => {
        return order.reduce((acum, prod) => acum += (prod.cant * prod.precio), 0)
    }
    return (
        <OrderContext.Provider value = {{order, isInOrder, addItem, emptyOrder, removeItem,getItemQuantity, totalPrice}}>
            {props.children}
        </OrderContext.Provider>
    )

}

export {OrderContextProvider, OrderContext}