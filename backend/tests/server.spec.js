const request = require("supertest");
const server = require("../index")

describe("GET /fonda365/obtiene_comunas", () => {
    it("Obteniendo un 200 en obtiene_comunas", async () => {
        const { statusCode}= await request(server).get("/fonda365/obtiene_comunas").send();
        expect(statusCode).toBe(200);
    });
});

describe("POST /comentarios/obtener_comentario", () => {
    it("Debería retornar un 200 y los datos del comentario creado", async () => {
        const payload = {
            idproducto: 2
        };

        const response = await request(server)
            .post("/comentarios/obtener_comentario")
            .send(payload);

        // Verifica el status
        expect(response.statusCode).toBe(200);
        console.log(response.body)
        // Verifica el cuerpo de la respuesta
        expect(response.body).toBeInstanceOf(Array)
    });
});

describe("GET /producto/obtener_producto", () => {
    it("Obteniendo un 200 y valida el tipo de dato de body en obtener_producto", async () => {
        const { body, statusCode}= await request(server).get("/producto/obtener_producto").send();
        expect(statusCode).toBe(200);
        expect(body).toBeInstanceOf(Array);
    });
});

describe("POST /usuario/registra_usuario", () => {
    it("Debería retornar un 201 y los Usuarios creados exitosamente", async () => {
        const payload = {
            nombre: "Fleur",
            apellido: "Thomas",
            correo: "fleurclement4@gmail.com",
            password: "*******",
            ciudad: "santiago",
            comuna: "santiago",
            fechanacimiento: "07-02-2002"
        };
        const response = await request(server)
            .post("/usuario/registra_usuario")
            .send(payload);

        // Verifica el status
        expect(response.statusCode).toBe(201);
        console.log(response.body)
        // Verifica el cuerpo de la respuesta
        expect(response.body).toBeInstanceOf(Array)
    });
});