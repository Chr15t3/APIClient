// Responsável por iniciar o BackEnd

import Fastify from "fastify"
import cors from "@fastify/cors"
import { routes } from "./routes"

const app = Fastify({ logger: true }) //Devolve um logger no console

app.setErrorHandler((error, request, reply) => {
  reply.code(400).send({ message: error.message })
}) //Em caso de dados não preenchidos.

const start = async () => {
  await app.register(cors)
  await app.register(routes)

  try {
    await app.listen({ port: 3333 }) //porta que eu quero rodar a aplicação.
  } catch (err) {
    process.exit(1) //Encerra o processo da aplicação
  }
}

start()
