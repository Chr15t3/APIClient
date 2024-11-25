import { FastifyRequest, FastifyReply } from "fastify"
import { CreateCustomerService } from "../services/CreateCustomerService"

class CreateCustomerController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    //Request da nossa requisição e o Reply como response.

    const { name, email } = request.body as { name: string; email: string }
    const customerService = new CreateCustomerService()
    const customer = await customerService.execute({ name, email })

    reply.send(customer)
  }
}

export { CreateCustomerController }
