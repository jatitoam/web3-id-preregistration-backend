module.exports.preregistration = function () {
  return {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    product: {
      type: String,
      required: true,
      enum: ["community", "starter", "team", "growth", "enterprise"],
    },
    organization: {
      type: String,
      required: false,
    },
    message: {
      type: String,
      required: false,
    },
    orderId: {
      type: String,
      required: false,
    },
    refShare2Earn: {
      type: String,
      required: false,
    },
    account: {
      type: String,
      required: false,
    },
    share2earn: {
      type: String,
      required: false,
    },
    referred: {
      type: Number,
      required: true,
      default: 0,
    },
    dateReg: {
      type: Date,
      required: true,
    },
    dateShare2Earn: {
      type: Date,
      required: false,
    },
    beta: {
      type: Boolean,
      required: false,
    },
  };
};
