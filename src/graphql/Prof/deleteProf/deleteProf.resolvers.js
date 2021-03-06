import { prisma } from '../../../../generated/prisma-client';

export default {
  Mutation: {
    deleteProf: async (_, { id }, { request, isAdmin }) => {
      isAdmin(request);
      return await prisma.deleteProf({ id });
    }
  }
};
