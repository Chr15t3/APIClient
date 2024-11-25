// Arquivo de rotas da minha API

import {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyRequest,
  FastifyReply,
} from "fastify"

import { CreateCustomerController } from "./controllers/CreateCustomerController"

import { ListCustomersController } from "./controllers/ListCustomersController"
import { DeleteCustomerController } from "./controllers/DeleteCustomerController"

//Onde as rotas vão ser criadas.
export async function routes(
  fastify: FastifyInstance,
  options: FastifyPluginOptions
) {
  fastify.get(
    "/teste",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return { ok: true }
    }
  )

  fastify.post(
    //Requisição .post serve para "criar algo" criar um novo registro.
    "/customer",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new CreateCustomerController().handle(request, reply)
    }
  )

  fastify.get(
    //Requisição para listar os clientes
    "/customers",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new ListCustomersController().handle(request, reply)
    }
  )

  fastify.delete(
    //Requisição para listar os clientes
    "/customer",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new DeleteCustomerController().handle(request, reply)
    }
  )
}
