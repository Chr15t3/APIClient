import prismaClient from "../prisma"
class ListCustomersService {
  async execute() {
    const customers = await prismaClient.customer.findMany() //Sem parâmetros pois o objetivo é buscar todos os usuários cadastrados.
    return customers
  }
}

export { ListCustomersService }
