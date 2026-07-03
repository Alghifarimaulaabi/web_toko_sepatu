const Navbar = () => {
    return (
        <>
        <nav className="flex justify-between p-4 bg-[#4E342E] w-full text-white">
            <div className="logo">
                <h3 className="text-3xl font-bold">Logo Website</h3>
            </div>
            <ul className="flex gap-3">
                <li>Home</li>
                <li>Trending</li>
                <li>Produk</li>
                <li>Kenapa Kami</li>
            </ul>
            <div className="menu">
                <span>Menu</span>
            </div>
        </nav>
        </>
    )
}

export default Navbar