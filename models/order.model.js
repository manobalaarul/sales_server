import mongoose, { Mongoose } from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    invoiceNo: {
      type: String,
      default: "",
    },
    productList: [
      {
        productId: {
          type: mongoose.Schema.ObjectId,
          ref: "products",
        },
        productName: {
          type: String,
          default: "",
        },
        quantity: {
          type: Number,
          default: 1,
        },
        price: {
          type: Number,
          default: 1,
        },
        totalPrice: {
          type: Number,
          default: 1,
        },
      },
    ],
    customer_name: {
      type: String,
      default: "",
    },
    customer_phone: {
      type: String,
      default: "",
    },
    customer_address: {
      type: String,
      default: "",
    },
    total_qty: {
      type: Number,
      default: 1,
    },
    sub_total: {
      type: Number,
      default: 0,
    },
    gst: {
      type: Number,
      default: 0,
    },
    total: {
      type: Number,
      default: 0,
    },
    status: {
      type: String,
      enum: ["saved", "confirmed", "cancelled"],
      default: "saved",
    },
  },
  {
    timestamps: true,
  }
);

orderSchema.index(
  {
    customer_name: "text",
    customer_phone: "text",
  },
  {
    weights: {
      customer_name: 10,
      customer_phone: 5,
    },
  }
);

const OrderModel = mongoose.model("orders", orderSchema);
export default OrderModel;
