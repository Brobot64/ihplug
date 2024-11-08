import { FaRegUser } from "react-icons/fa"
import { SlCalender } from "react-icons/sl"

const BlogPost = () => {
  return (
    <section className="mx-16">
      <h1 className="font-bold text-4xl my-8">Blog posts</h1>

      <div className="p-0 flex justify-around slide-list scroll-none">
       
        <div className="relative shadow-2xl px-6 flex flex-shrink-0">
          <img src="boom3.png" className="w-72 "  alt="" />
          <div className="absolute bottom-[30px] text-sm">
            <p className="font-bold my-2">BoomMax Elite vs Soundcore Flare Mini ...</p>

            <div className="flex gap-2">
              
              <div className="flex items-center gap-1">
                <SlCalender />
                <p>October 7, 024</p>
              </div>

              <div className="flex items-center gap-1">
                <FaRegUser />
                <p>Nwankwo Kingsley</p>
              </div>

            </div>
          </div>
        </div>
       
        <div className="relative shadow-2xl px-6 flex flex-shrink-0">
          <img src="boom3.png" className="w-72"  alt="" />
          <div className="absolute bottom-[30px] text-sm">
            <p className="font-bold my-2">BoomMax Elite vs Soundcore Flare Mini ...</p>

            <div className="flex gap-2">
              
              <div className="flex items-center gap-1">
                <SlCalender />
                <p>October 7, 024</p>
              </div>

              <div className="flex items-center gap-1">
                <FaRegUser />
                <p>Nwankwo Kingsley</p>
              </div>

            </div>
          </div>
        </div>
        
        <div className="relative shadow-2xl px-6 flex flex-shrink-0">
          <img src="boom3.png" className="w-72"  alt="" />
          <div className="absolute bottom-[30px] text-sm">
            <p className="font-bold my-2">BoomMax Elite vs Soundcore Flare Mini ...</p>

            <div className="flex gap-2">
              
              <div className="flex items-center gap-1">
                <SlCalender />
                <p>October 7, 024</p>
              </div>

              <div className="flex items-center gap-1">
                <FaRegUser />
                <p>Nwankwo Kingsley</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlogPost