const blogsData = [{
    id:1, 
    slug:"top-software",
    description:" top software houses"
},
{
    id:2, 
    slug:"top-companies",
    description:"Top software companies"
}]
export default function Blogs ({ params }: { params: { slug: string } }){
    const selectBlog = blogsData.filter((item)=> item.slug === params.slug)
    return (
        <div>{selectBlog[0]?.description}</div>
    )
}