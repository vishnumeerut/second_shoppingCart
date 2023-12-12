import { Link } from "react-router-dom";

function CategoryItem ({itemName}) {
    return(
        <Link to={"/products"}>
            <div className="relative h-[150px] w-[150px] rounded-md">
                <img
                    src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
                    alt="AirMax Pro"
                    className="z-0 h-full w-full rounded-lg object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-left">
                    <p className="mt-2 text-lg font-bold text-gray-300">
                    {itemName}
                    </p>
                    
                    </div>
            </div>
        </Link>
    )
}

export default CategoryItem;