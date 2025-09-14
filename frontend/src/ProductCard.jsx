const ProductCard =() =>{
    return(
        <div className="border-5 border-black w-[300px] flex flex-col items-center gap-10 py-4 px-4 rounded-2xl">
         <img src="vite.svg" alt=""  className="w-[150px] h-[150px] border-2 border-blue-600 rounded-full"/>
         <div className="flex flex-col gap-5 items-center">
            <h2 className="font-bold text-2xl ">ProductName=FaceWash</h2>
            <p className="text-2xl text-blue-700 text-center font-mono">ProductPrice=100</p>
            <p className="text-2xl text-red-500 font-medium ">out of stock</p>
            </div>
            <button className="bg-blue-400 w-[90%] py-2 rounded-2xl cursor-pointer hover:bg-blue-300">Add to Cart</button>
        </div>
    )
}
export default ProductCard;