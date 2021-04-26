import Product from "@/models/Product"

export default async (): Promise<Product[] | any> => {
  let res = await fetch('https://5ff37c3328c3980017b195e8.mockapi.io/api/products')

  res = await res.json()
  return res
}