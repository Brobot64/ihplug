import { CiSquareChevRight, CiSquareMinus } from "react-icons/ci"

const AvailableAndSocials = () => {
    return (
        <>

            <section className="mx-16">

                <div className="flex justify-between items-center">
                    <h1 className="font-bold text-2xl my-8">Available at following channels</h1>
                    <div className="flex">
                        <CiSquareMinus className="h-8 w-8 cursor-pointer" />
                        <CiSquareChevRight className="h-8 w-8 cursor-pointer" />
                    </div>
                </div>

                <div className="flex justify-around">
                    <img className="w-48" src="/Outlet-Slot.jpg.png" alt="" />
                    <img className="w-48" src="/Outlet-Royalline.jpg.png" alt="" />
                    <img className="w-48" src="/Outlet-BlackHub.jpg.png" alt="" />
                    <img className="w-48" src="/Outlet-Casper.jpg.png" alt="" />
                </div>
            </section>

            <section className="mx-16 flex flex-col items-center">
                <h2 className="my-3 font-semibold">Get <br /> Social</h2>

                <p className="text-center">Write content about your <br /> brand</p>

                <div className="flex gap-4 justify-evenly my-5">
                    <img className="w-72" src="/packPower.png" alt="" />
                    <img className="w-72" src="/pack2.png" alt="" />
                    <img className="w-72" src="/pack3.png" alt="" />
                </div>

                <div className="bg-black p-2">
                    <a href="/" className="text-white">Follow Us on Instagram</a>
                </div>
            </section>

            <section className="mx-16  flex  items-center justify-around">
                <a href="/">
                    <img  className="w-40"src="/instagram.png" alt="" />
                </a>
                <a href="/">
                    <img className="w-40" src="/Facebook.png" alt="" />
                </a>
                <a href="/">
                    <img className="w-40" src="/YouTube.png" alt="" />
                </a>
                <a href="/">
                    <img className="w-16" src="/x.jpg" alt="" />
                </a>
            </section>
        </>
    )
}

export default AvailableAndSocials