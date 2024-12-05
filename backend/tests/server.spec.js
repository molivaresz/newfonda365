const request = require("supertest");
const server = require("../index")

describe("Operaciones newfonda365", () => {
    it("Obteniendo un 200 en obtiene_comunas", async () => {
        const { body, statusCode}= await request(server).get("/fonda365/obtiene_comunas").send();
        expect(statusCode).toBe(200);
        expect(body).toBeInstanceOf(Array);
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