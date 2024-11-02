import { FiPlus } from "react-icons/fi"

const Faqs = () => {
    return (
        <section className="mx-16">
            <h1 className="font-bold text-4xl my-8">FAQs</h1>
            <div className="mx-10">
                <div className="flex justify-between cursor-pointer py-2 border-b border-gray-300">
                    <p className="font-semibold">How can i order a digifon product?</p>
                    <FiPlus />
                </div>
                <div className="flex justify-between cursor-pointer py-2 border-b border-gray-300">
                    <p className="font-semibold">How can i order a digifon product?</p>
                    <FiPlus />
                </div>
                <div className="flex justify-between cursor-pointer py-2 border-b border-gray-300">
                    <p className="font-semibold">How can i order a digifon product?</p>
                    <FiPlus />
                </div>
                <div className="flex justify-between cursor-pointer py-2">
                    <p className="font-semibold">How can i order a digifon product?</p>
                    <FiPlus />
                </div>
            </div>
        </section>
    )
}

export default Faqs