import React from 'react'
/**
Esto es un 
componente de React
*/
function Home() {
    const listItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const addItem = () => {
        const variableA = 1;
        const variableB = 3;
        const variableC = 2;
        return variableA*3 + variableB*variableC
    }
}

return(
    <><div>Home</div>
    <p>Hola mundo</p>
    <button onclick={addItem}></button>
    </>
)

export default Home
