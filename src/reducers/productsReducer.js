import { GET_PRODUCTS } from "../constants";
import p1 from "../1.jpg";

export function productsReducer(
  state = {
    products: [
      {
        id: 1,
        title: "Laptop",
        url:
          "https://tse4.mm.bing.net/th?id=OIP.Wx2owJEDDmZnUk7b4xzErAHaHe&pid=15.1&P=0&w=300&h=300"
      },
      {
        id: 2,
        title: "Camera",
        url:
          "https://tse2.mm.bing.net/th?id=OIP.qN8MfHRVgOH1nO_xEGmKhgHaHa&pid=15.1&P=0&w=300&h=300"
      },
      {
        id: 3,
        title: "Mobile",
        url:
          "https://tse4.mm.bing.net/th?id=OIP.kfnUw-QRvslc6PlIk_z4pgHaE6&pid=15.1&P=0&w=244&h=163"
      },
      {
        id: 4,
        title: "Laptop",
        url:
          "https://tse4.mm.bing.net/th?id=OIP.KG6nW6Lj8UHbAzry9z5uNgHaHa&pid=15.1&P=0&w=300&h=300"
      },
      {
        id: 5,
        title: "Camera",
        url:
          "https://tse4.mm.bing.net/th?id=OIP.Wx2owJEDDmZnUk7b4xzErAHaHe&pid=15.1&P=0&w=300&h=300"
      },
      {
        id: 6,
        title: "Mobile",
        url:
          "https://tse4.mm.bing.net/th?id=OIP.KG6nW6Lj8UHbAzry9z5uNgHaHa&pid=15.1&P=0&w=300&h=300"
      },
      {
        id: 7,
        title: "Laptop",
        url:
          "https://tse4.mm.bing.net/th?id=OIP.kfnUw-QRvslc6PlIk_z4pgHaE6&pid=15.1&P=0&w=244&h=163"
      },
      {
        id: 8,
        title: "Camera",
        url:
          "https://tse2.mm.bing.net/th?id=OIP.qN8MfHRVgOH1nO_xEGmKhgHaHa&pid=15.1&P=0&w=300&h=300"
      },
      {
        id: 9,
        title: "Mobile",
        url:
          "https://tse4.mm.bing.net/th?id=OIP.KG6nW6Lj8UHbAzry9z5uNgHaHa&pid=15.1&P=0&w=300&h=300"
      }
    ]
  },
  action
) {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        products: [...state.products]
      };
      break;
    default:
  }

  return state;
}
