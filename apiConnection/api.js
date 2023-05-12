const url = "http://localhost:4000/user";

// Obtiene campers

export const getCampers = async () => {
    try {
        const result = await fetch(url);
        const campers = await result.json();
        return campers
    } catch (error){
        console.log(error);
    }
}

// Inserta nuevo camper

export const newCamper = async (camper) => {
    console.log(camper);
    try {
        await fetch(url,{
            method: "POST",
            body: JSON.stringify(camper),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        window.location.href = 'index.html';
    } catch (error) {
        console.log(error);
    }
}

// Elimina campers

export const deleteCamper = async id => {
    try {
        await fetch(`${url}/${id}`,{

        })
    } catch (error) {
        console.log(error);
    }
}

// Autenticación sencilla de usuarios en Rest Api

export const getUsers = async () => {
    try {
        const result = await fetch (urlUsuarios);
        const users = await result.json();
        return users
    } catch (error){
        console.log(error);
    }
}