import { client } from "@/config/contentful"

const fetchProducts = async () =>{
    const products = await client.getEntries({
      'content_type': 'products',
    })
    console.log("Products",products.items[0].fields);
    return products.items
    
}

export default async function Products() {
     const data = await fetchProducts()
     console.log("data",data);
     
  return (
    <div>
        <h1>List of Products</h1>

        {data?.map(product =>{
          return <div>
               <h1>{product?.fields.title} - {product?.fields?.stock}</h1>
            </div>
        })}
        

    </div>
  )
}
