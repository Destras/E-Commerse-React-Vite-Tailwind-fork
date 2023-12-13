function Card() {
  return (
    <div className=" cursor-pointer w-56 h-60 border rounded-lg">
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-myGray rounded-lg text-black m-2 px-2">
          Electronics
        </span>
        <img
          className="w-full h-full object-cover rounded-t-lg"
          src="https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg"
          alt="headphones"
        />
        <button className="absolute top-2 right-2 bg-myGray w-6 h-6 rounded-full text-black font-bold text-3xl/none flex justify-center items-center pb-1.5">
          +
        </button>
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">Headphones</span>
        <span className="text-sm font-medium">$300</span>
      </p>
    </div>
  );
}

export { Card };

// className="absolute top-2 right-2 bg-myGray w-6 h-6 rounded-full text-black font-bold text-3xl flex justify-center"
