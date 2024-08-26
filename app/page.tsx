import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex items-center justify-center h-[100%]">
      <div className="max-w-[400px] w-[100%] h-[100%] flex flex-col justify-between">
        <div className="w-[100%] p-6 flex items-center justify-center">
          <img src="images/imageone.jpg" className="w-[100%]" alt="" />
        </div>
        <div className="p-6 relative bottom-14">
          <h3 className="text-[23px] font-bold mb-3 text-[#3f3d55]">This is a Quiz app</h3>
          <p className="text-[15px] text-neutral-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum natus dignissimos inventore quasi. Nisi, mollitia, illum excepturi obcaecati, eaque explicabo ex voluptatibus iure et magni fuga beatae corporis ab modi!</p>
        </div>
        <div className="p-6 flex items-center justify-end">
          <Link href='/terms-condition'><button className="bg-[#3f3d55] hover:bg-[#2f2d3f] transition-all h-10 w-24 text-white text-[15px] rounded-xl">Start Now</button></Link>
        </div>

      </div>
    </main>

  );
}


// #63FF70