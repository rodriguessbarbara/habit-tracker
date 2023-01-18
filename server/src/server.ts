import Fastify from 'fastify'
import cors from '@fastify/cors'
import { Prisma, PrismaClient } from '@prisma/client'

const app = Fastify()
const prisma = new PrismaClient()
/** método HTTP
 * Get, Post, Put, Patch, Delete
*/

app.register(cors)

// isso é a criação de uma rota:
app.get('/', async () => {
  const habits = await prisma.habit.findMany({where: {
    title: {
      startsWith: 'Beber'
    }
  }})
  return habits
})


app.get('/hello', () => {
  return 'AINNN PRETO'
})

app.listen({
  port: 3333,
}).then(() => {
  console.log('to on');
})