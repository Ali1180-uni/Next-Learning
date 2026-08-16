type cardProps = {
    Title: string;
    Description: string;
}

export default function card({Title, Description}: cardProps){
    return (
        <div className="card mt-10 p-4 rounded shadow-md w-fit bg-gray-900">
          <h2>{Title}</h2>
          <p>{Description}</p>
        </div>
    )
}