'use client'


import { ArrowDown, ChevronDown, ChevronUp, Download, DownloadCloud, DownloadCloudIcon, DownloadIcon, LucideDownload } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
export default function Home() {



const [question1Hidden, setquestion1Hidden] = useState(true)

const [question2Hidden, setquestion2Hidden] = useState(true)
const [question3Hidden, setquestion3Hidden] = useState(true)
const [question4Hidden, setquestion4Hidden] = useState(true)
const onDownloadButtonClick = ()=>{
  console.log('working')
  
}






  return (
    <div className="">
<div className="items-center justify-center col-span-6 mb-8">
  
  <Link href="https://github.com/paybd/citypay/raw/refs/heads/main/public/app.apk" className="bg-[#e50113] px-4 py-4 rounded-lg flex  shadow-sm shadow-[#e50113]"><h1 className="text-white text-md mx-auto">DOWNLOAD APP</h1> <DownloadCloudIcon color="white"/></Link>
  </div>

<div className="flex items-center justify-center">
     <Image src="/logo.png" height={200} width={200} alt="fdf"  />
     </div>

     <h1 className="text-6xl text-red-500 text-center my-3">GRS Remit</h1>



     <div className="flex items-center justify-center">
     <Image src="/banner.png" height={200} width={400} alt="fdf"  />
     </div>


   








     <h1 className="text-lg text-slate-800  font-banglasemibold my-6"> <span className="text-4xl text-red-500">জিআরএস রেমিট</span> হচ্ছে গ্লোবাল রেমিট্যান্স সার্ভিস লি. এর একটি মোবাইল ভিত্তিক ইন্টারন্যাশনাল মানি ট্রান্সফার
          এন্ড রিচার্জ এপ। আমরা 2021 সাল থেকে যাত্রা শুরু করে এখন পর্যন্ত বিশ্বস্ততার সাথে
          সৌদি আরব, কাতার, ওমান, দুবাই, মালয়েশিয়া, সিঙ্গাপুর, মালদ্বীপ, ব্রুনাই
          সহ আরও প্রায় 13 টি দেশে মোবাইল ব্যাংকিং ও রেমিট্যান্স সেবা দিয়ে
          আসছি। সময়ের সাথে সাথে জিআরএস রেমিট এখন আরও দ্রুত ও বিশ্বস্ততার
          সাথে কাজ করে যাচ্ছে। দেশ বিদেশ মিলিয়ে জিআরএস রেমিট এর সাথে
          ইতোমধ্যেই যুক্ত হয়েছেন বিশ্বব্যাপী প্রায় 13850 জন গ্রাহক যারা 24 ঘন্টা
          সম্পূর্ন নিরাপদ ও বিশ্বস্ততার সাথে লেনদেন করে যাচ্ছেন। জিআরএস রেমিট তার কাস্টমার এক্সপেরিয়েন্সকে সবোর্চ্চ গুরুত্ব দেয়। বিশেষ করে
          প্রবাসী ভাইদের লেনদেন কে সহজ, দ্রুত ও নিরাপদ করতে আমরা বদ্ধপরিকর।</h1>

































   <div className="grid grid-cols-12  items-center gap-5  ">
   <div className="flex items-center justify-center col-span-6">
     <Image src="/mock.png" height={200} width={200} alt="fdf"  />
     </div>

<div className="items-center justify-center col-span-6">
  
<Link href="https://github.com/paybd/citypayapp/raw/refs/heads/main/public/app.apk" className="bg-[#e50113] px-4 py-4 rounded-lg flex gap-2 shadow-md shadow-[#e50113]"><h1 className="text-white text-sm">DOWNLOAD APP</h1> <DownloadCloudIcon color="white"/></Link>
</div>
   </div>

   

    </div>
  );
}
