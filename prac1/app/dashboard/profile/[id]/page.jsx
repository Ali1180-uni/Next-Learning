async function page({ params }) {
    const { id } = await params;
  return (
    <div className = "page" >
      <h1>Profile Page</h1>
      <br/>
      <p>User ID: {id}</p>
    </div>
  )
}

export default page