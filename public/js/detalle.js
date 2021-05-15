const btnEliminar= document.querySelector('#btnEliminar');

btnEliminar.addEventListener('click', async()=>{
    const id= btnEliminar.dataset.id
    
    
    try {
        const data= await fetch(`/alimentos/${id}`,{
            method: 'delete'
        })
        const res = await data.json()
        if (res.estado) {
            window.location.href='/alimentos'
            
        }else{
            console.log(res)
        }


    } catch (error) {
        console.log(error)
    }

})

const formularioEditar= document.querySelector('#formularioEditar');


formularioEditar.addEventListener('submit', async(e)=>{
    e.preventDefault()
    const nombre= formularioEditar.elements['nombre'].value
    const descripcion= document.querySelector('#descripcionInput').value
    const precio= document.querySelector('#precioInput').value
    const id= formularioEditar.dataset.id


    try {
        const data= await fetch(`/alimentos/${id}`, {
            method: 'put',
            headers:{
                'Content-Type': 'application/json'


            },
            body: JSON.stringify({nombre, descripcion, precio})
        })

        const res= await data.json()

        if (res.estado) {

            window.location.href='/alimentos'
            
        }else{

            console.log(res)
        }

    } catch (error) {
        console.log(error)
    }
    
})