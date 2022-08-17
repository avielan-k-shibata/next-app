import Link from 'next/link';

export const ItemCard = ({name, id}:any) => {
    const link=`/items/${id}`
    return (
           <div className="card w-1/3 bg-base-100 drop-shadow-sm p-8">
           <Link href={link}><a>

            <figure><img className='w-full' src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                Shoes!
                <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{name}{id}</p>
                <div className="card-actions justify-end">
                <div className="badge badge-outline">Fashion</div> 
                <div className="badge badge-outline">Products</div>
                </div>
            </div>
            </a></Link>
            </div>

    )
}  