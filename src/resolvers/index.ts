import { Prisma } from "../generated/prisma-client"

export default {
  Query: {
    projectById(root, args: {projectId: string}, ctx: {prisma: Prisma}) {
      return ctx.prisma.project({ id: args.projectId })
    },

    completedTasks(root, args, ctx: {prisma: Prisma}) {
      return ctx.prisma.tasks({where: {isCompleted: true}})
    },

  }
}