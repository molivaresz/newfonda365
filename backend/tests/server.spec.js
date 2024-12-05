const request = require("supertest");
const server = require("../index")

describe("Operaciones newfonda365", () => {
    it("Obteniendo un 200 en obtiene_comunas", async () => {
        const { body, statusCode}= await request(server).get("/fonda365/obtiene_comunas").send();
        expect(statusCode).toBe(200);
        expect(body).toBeInstanceOf(Array);
    });
});