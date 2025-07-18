/*
    FUNCIONES ASÍNCRONAS
*/

const users = [
    {
        id: 1,
        name: "Juan",
        email: "juan@gamil.com"
    },
    {
        id: 2,
        name: "Lorena",
        email: "lore@gamil.com"
    },
    {
        id: 3,
        name: "Mariana",
        email: "mary@gamil.com"
    }
];

const getUserById = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = users.find((user) => user.id === id);

            if (!user) {
                reject(new Error(`Usuario ID:${id} no encontrado`));
            }

            resolve(user);
        }, 2000);
    });
}

const showUser = async (id) => {
    try {
        const usuario = await getUserById(id);
        console.log('Usuario obtenido:', usuario);
    } catch (error) {
        console.error(error.message);
    }
}

showUser(2);
showUser(5);