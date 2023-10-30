import '@fastify/jwt'

declare module '@fastify/jwt' {
  export interface FastifyJWT {
    user: {
      avatarurl: string
      name: string
      sub: string
    }
  }
}
