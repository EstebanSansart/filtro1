let myForm = document.querySelector('#myForm');

const form = document.querySelector('#form');

const get_data = () => {
    const datos = new FormData(form);
    const proceso = Object.fromEntries(datos.entries());
    form.reset();
    return proceso;
}

const post = async () => {
    const newuser = get_data();

    try {
        const response = await fetch('http://localhost:3000/usuarios', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newuser)
        });
        
        if (response.ok) {
            const responsejson = await response.json();
            const {nombre, usuario, pass} = responsejson;
        }
    } catch (error) {
        console.log(error);
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    post();
});


const myfun = async (e)=>{
  e.preventDefault();
  let data = Object.fromEntries(new FormData(e.target));
  let res = await (await fetch(`http://localhost:3000/usuarios?usuario=${data.user}&pass=${data.pass}`)).json();
  let mensaje = (res.length) ? window.location.href = "../dashBoard/categorias/categorias.html" : alert("el usuario no existe");
  
  console.log(mensaje);
}

myForm.addEventListener('submit', myfun);