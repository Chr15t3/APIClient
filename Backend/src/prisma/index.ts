// Arquivo para se conectar com Prisma

import { PrismaClient } from "@prisma/client"

const prismaClient = new PrismaClient()

export default prismaClient