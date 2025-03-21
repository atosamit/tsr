const sampleData = {
  premiumAdjustments: [
    {
      id: "1",
      comment: "Adjustment for borrower A",
      totalBorrowerFees: 1000.0,
      cuRetailRate: 5.5,
      protectedLoanAmount: 20000.0,
      payRate: 4.0,
      premiumDue: 150.0,
      totalAmount: 23000.0,
    },
  ],
};

const resolvers = {
  Query: {
    getPremiumAdjustment: (_, { id }) => {
      return sampleData.premiumAdjustments.find((adj) => adj.id === id);
    },
  },
  
  Mutation: {
    editPremiumAdjustment: (_, { input }) => {
      const index = sampleData.premiumAdjustments.findIndex((adj) => adj.id === input.id);
      if (index === -1) {
        throw new Error("Premium Adjustment not found");
      }
      sampleData.premiumAdjustments[index] = { ...sampleData.premiumAdjustments[index], ...input };
      return sampleData.premiumAdjustments[index];
    },
  },
};

export default resolvers;