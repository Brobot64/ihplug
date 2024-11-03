// import { FiPlus } from "react-icons/fi"

// const Faqs = () => {
//     return (
//         <section className="mx-16">
//             <h1 className="font-bold text-4xl my-8">FAQs</h1>
//             <div className="mx-10">
//                 <div className="flex flex-col justify-between cursor-pointer py-2 border-b border-gray-300">
//                     <div className="flex justify-between items-center">
//                         <p className="font-semibold">How can i order a digifon product?</p>
//                         <FiPlus />
//                     </div>

//                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quo nulla maiores accusamus, tempora laudantium?</p>


//                 </div>
//                 <div className="flex flex-col justify-between cursor-pointer py-2 border-b border-gray-300">
//                     <div className="flex justify-between items-center">
//                         <p className="font-semibold">When will i receive my order?</p>
//                         <FiPlus />
//                     </div>

//                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias placeat quos debitis accusamus. Voluptate, temporibus.</p>
//                 </div>
//                 <div className="flex flex-col justify-between cursor-pointer py-2 border-b border-gray-300">
//                     <div className="flex justify-between items-center">
//                         <p className="font-semibold">What is the return policy?</p>
//                         <FiPlus />
//                     </div>

//                         <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt rerum quam amet earum molestias ex.</p>
//                 </div>
//                 <div className="flex flex-col  cursor-pointer py-2">
//                     <div className="flex justify-between items-center">

//                         <p className="font-semibold">What stores sell digifon products?</p>
//                         <FiPlus />
//                     </div>

//                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi cum quos ea id, rerum pariatur!</p>
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default Faqs

"use client"
import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const Faqs = () => {
    const [expanded, setExpanded] = useState(null);

    const toggleFaq = (index:any) => {
        setExpanded(expanded === index ? null : index);
    };

    return (
        <section className="mx-16">
            <h1 className="font-bold text-4xl my-8">FAQs</h1>
            <div className="mx-10">
                {/* FAQ 1 */}
                <div onClick={() => toggleFaq(1)} className="flex flex-col cursor-pointer py-2 border-b border-gray-300">
                    <div className="flex justify-between items-center">
                        <p className="font-semibold">How can I order a digifon product?</p>
                        {expanded === 1 ? <FiMinus /> : <FiPlus />}
                    </div>
                    {expanded === 1 && (
                        <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quo nulla maiores accusamus, tempora laudantium?</p>
                    )}
                </div>

                {/* FAQ 2 */}
                <div onClick={() => toggleFaq(2)} className="flex flex-col cursor-pointer py-2 border-b border-gray-300">
                    <div className="flex justify-between items-center">
                        <p className="font-semibold">When will I receive my order?</p>
                        {expanded === 2 ? <FiMinus /> : <FiPlus />}
                    </div>
                    {expanded === 2 && (
                        <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias placeat quos debitis accusamus. Voluptate, temporibus.</p>
                    )}
                </div>

                {/* FAQ 3 */}
                <div onClick={() => toggleFaq(3)} className="flex flex-col cursor-pointer py-2 border-b border-gray-300">
                    <div className="flex justify-between items-center">
                        <p className="font-semibold">What is the return policy?</p>
                        {expanded === 3 ? <FiMinus /> : <FiPlus />}
                    </div>
                    {expanded === 3 && (
                        <p className="mt-2 text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt rerum quam amet earum molestias ex.</p>
                    )}
                </div>

                {/* FAQ 4 */}
                <div onClick={() => toggleFaq(4)} className="flex flex-col cursor-pointer py-2">
                    <div className="flex justify-between items-center">
                        <p className="font-semibold">What stores sell digifon products?</p>
                        {expanded === 4 ? <FiMinus /> : <FiPlus />}
                    </div>
                    {expanded === 4 && (
                        <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi cum quos ea id, rerum pariatur!</p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Faqs;
