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






          <button onClick={()=>setquestion1Hidden(!question1Hidden)} className={question1Hidden ? "w-full mb-5 text-xl text-white bg-[#16a34a] p-3 rounded-lg flex justify-between" : "w-full  text-xl text-white bg-[#16a34a] p-3  flex justify-between rounded-t-lg"}>   
            <h1 className="w-80">এতো এতো প্রতারকের মধ্যে আপনাদেরকে কিভাবে বিশ্বাস করবো?</h1>
            {question1Hidden ? <ChevronDown color="white" size={60} className="w-50"/> : <ChevronUp color="white" size={60} className="w-150"/>}
            </button>
{
  !question1Hidden &&  <h1 className={question1Hidden ? "text-lg text-white bg-green-900 p-3 rounded-b-lg" : "text-lg text-slate-900 bg-slate-200 p-3 rounded-b-lg mb-5"}>
  সম্মানীত প্রবাসী,
  
  ভুইফোড় কোম্পানী আর বিশ্বস্ত কোম্পানি চেনার সবথেকে সহজ উপায় হলো তাদের স্বচ্ছতা দেখা। 
  
  এক্ষেত্রে একমাত্র আমাদের আছে লাইভ গ্রুপ চ্যাট অপশন।
  আমাদের অ্যাপের গ্রুপচ্যাট অপশনে আপনি যুক্ত হয়ে আমাদের অন্যান্য একটিভ কাস্টমারদের সাথে সরাসরি নিজেই চ্যাটের সুযোগ পাচ্ছেন যা আমাদের স্বচ্ছ বিজনেসের নিশ্চয়তা দেয়।
  
  আমরা ১০০% বিশ্বস্ততার সাথে সেবা দিয়ে থাকি বলেই একমাত্র আমরা আপনাদের নিজেদের মধ্যে গ্রুপচ্যাটে যোগাযোগ এর ব্যবস্থা করে দিয়েছি যা ভুয়া কোম্পানি গুলো কখনোই করেনা।
  
  এছাড়া আপনি  কোম্পানীর ট্রেড লাইসেন্স ও রেজিষ্ট্রেশন সার্টিফিকেট যাচাই করে নিতে পারেন।
  
  আমাদের অ্যাপের প্রতিটা লেনদেন হয় অটো সার্ভারের মাধ্যমে। ফলে  অ্যাপে কোন পেন্ডিং ঝামেলা নেই এবং আপনার লেনদেন থাকে সম্পূর্ন সুরক্ষিত। 
  
  অ্যাপে রয়েছে হেল্প সেন্টার যেখানে আপনি ২৪ ঘন্টা যেকোন সমস্যার সমাধান পাবেন। </h1>
}








<button onClick={()=>setquestion2Hidden(!question2Hidden)} className={question2Hidden ? "w-full mb-5 text-xl text-white bg-[#16a34a] p-3 rounded-lg flex justify-between" : "w-full text-xl text-white bg-[#16a34a] p-3  flex justify-between rounded-t-lg"}>   
            <h1 className="w-80">অন্যদের তুলনায় আপনারা রেট কিভাবে বেশি দিচ্ছেন?</h1>
            {question2Hidden ? <ChevronDown color="white" size={60} className="w-20"/> : <ChevronUp color="white" size={60} className="w-20"/>}
            </button>
{
  !question2Hidden &&  <h1 className={question2Hidden ? "text-lg text-white bg-green-900 p-3 rounded-b-lg" : "text-lg text-slate-900 bg-slate-200 p-3 rounded-b-lg mb-5"}>
 সম্মানীত প্রবাসী,
আমরা মূলত এক্সচেঞ্জ কোম্পানী। আমাদের কোম্পানীর সাথে পার্টনারশীপে যুক্ত প্রতিষ্ঠান বা ব্যক্তিরা তাদের অর্থ সবথেকে দ্রুত ও সহজে বাংলাদেশ থেকে অন্য দেশে বিনিময় করতে তারা আমাদের মাধ্যম ব্যবহার করে থাকে।
এক্ষেত্রে আমাদের পার্টনার প্রতিষ্ঠান বা ব্যক্তিরা তাদের অর্থের দ্রুত বিনিময় বা স্থানান্তর কে মুনাফার থেকে বেশি অগ্রাধিকার দিয়ে থাকে। এছাড়া আমাদের সকল লেনদেন ইন্টারন্যাশনাল  ক্রিপ্টো কারেন্সি যেমন ইউএসডিটি, বিটকয়েন এ কনভার্টেট হয় যা ক্রিপ্টো ট্রেডিং থেকে একটি বড় ইনকাম জেনারেট করতে সহায়তা করে। তাছাড়া আমাদের লেনদেনগুলোর একটি বড় অংশ ইন্টারন্যাশনাল শেয়ার মার্কেটের সাথে যুক্ত।
<br></br>
<br></br>
সর্বোপরি, পার্টনারশিপ এর দ্রুত ও  ঝামেলাহীন টাকা স্থানান্তর এবং এজেন্টশীপের অধিক মুনাফায় টাকা স্থানান্তর এই দুই উদ্দেশ্যের মেলবন্ধন ঘটিয়ে সিটি পে আপনাকে দিচ্ছে একটি সহজ ও বিশ্বস্ত লেনদেন মাধ্যম।</h1>
}











<button onClick={()=>setquestion3Hidden(!question3Hidden)} className={question3Hidden ? "w-full mb-5 text-xl text-white bg-[#16a34a] p-3 rounded-lg flex justify-between" : "w-full text-xl text-white bg-[#16a34a] p-3  flex justify-between rounded-t-lg"}>   
            <h1 className="w-80">কিভাবে ব্যাংকের মাধ্যমে ডিপোজিট করব?</h1>
            {question3Hidden ? <ChevronDown color="white" size={60} className="w-20"/> : <ChevronUp color="white" size={60} className="w-20"/>}
            </button>
{
  !question3Hidden &&  <h1 className={question3Hidden ? "text-lg text-white bg-green-900 p-3 rounded-b-lg" : "text-lg text-slate-900 bg-slate-200 p-3 rounded-b-lg mb-5"}>
 আমরা যেসব দেশে রেমিট্যান্স সেবা দিই সেসকল দেশে আমাদের কোম্পানীর ব্যাংক একাউন্ট আছে। যেমন সৌদিতে আমাদের আছে আল রাজি ব্যাংক এবং মালয়েশিয়া তে আছে মে ব্যাংক। আপনি অ্যাপের হেল্প সেন্টারে মেসেজ দিয়ে ডিপোজিট করতে চাইলে আপনাকে ব্যাংক একাউন্ট তথ্য দিয়ে দেওয়া হবে।
 <br></br>
 <br></br>
ধরুন আপনি মালয়েশিয়া আছেন।
এক্ষেত্রে  আপনি আপনার ব্যাংক একাউন্ট থেকে  মালয়েশিয়াতে কোম্পানির মে ব্যাংকএকাউন্টে রিংগিত ট্রান্সফার করে অ্যাপে রিসিট সাবমিট করলে বা হেল্প সেন্টারের হোয়াটসএপ নাম্বারে রিসিট জমা দিলে আপনাকে প্রতি রিংগিতে কোম্পানির রেট অনুযায়ী অ্যাপে বাংলাদেশি টাকায় ব্যালেন্স এড করে দেওয়া হবে।
<br></br>
<br></br>
অর্থাত মনে করুন আজকে মালোশিয়াতে কোম্পানীর রেট চলতেছে ৩২ টাকা।
<br></br>
<br></br>
সেক্ষেত্রে আজকে আপনি যদি মালোশিয়া থেকে কোম্পানির মে ব্যাংকে   ৫০০ রিংগিত ডিপোজিট করেন সেক্ষেত্রে আপনি অ্যাপে ব্যালেন্স পাবেন ৫০০*৩২=১৬০০০/= টাকা।
<br></br>
<br></br>
অ্যাপে ব্যালেন্স পাওয়ার পর আপনি অ্যাপ থেকে বাংলাদেশের যেকোন বিকাশ, নগদ বা ব্যাংকে টাকা পাঠাতে পারবেন।</h1>
}














<button onClick={()=>setquestion4Hidden(!question4Hidden)} className={question4Hidden ? "w-full mb-5 text-xl text-white bg-[#16a34a] p-3 rounded-lg flex justify-between" : "w-full text-xl text-white bg-[#16a34a] p-3  flex justify-between rounded-t-lg"}>   
            <h1 className="w-80">কিভাবে বিকাশের মাধ্যমে ডিপোজিট নিব?</h1>
            {question4Hidden ? <ChevronDown color="white" size={60} className="w-20"/> : <ChevronUp color="white" size={60} className="w-20"/>}
            </button>
{
  !question4Hidden &&  <h1 className={question4Hidden ? "text-lg text-white bg-green-900 p-3 rounded-b-lg" : "text-lg text-slate-900 bg-slate-200 p-3 rounded-b-lg mb-5"}>
আপনার যদি কোন কারনে প্রবাসে ব্যাংক একাউন্ট না থাকে সেক্ষেত্রে আপনি শর্ত সাপেক্ষে কোম্পানির বিকাশের মাধ্যমে অ্যাপে ব্যালেন্স নিতে পারবেন।

এক্ষেত্রে আপনি কোম্পানির বিকাশে প্রবাসে আপনি যে দেশে আছেন সেই দেশে বর্তমানে যে হুন্ডি রেট পান সেই রেটে টাকা পাঠাবেন।
টাকা পাঠানোর পর কোম্পানির হেল্পলাইনে পিন এবং এমাউন্ট জানায়ে দিলে আপনাকে কোম্পানীর রেট অনুযায়ী ব্যালেন্স দিয়ে দেওয়া হবে।

বিষয়টা আরো সহজভাবে বুঝার জন্য ধরে নিন আপনি মালোশিয়া প্রবাসী। মালোশিয়া থেকে হুুন্ডি মাধ্যমে আপনি যদি কোম্পানির বিকাশে ১০০ রিংগিত ২৮ টাকা রেট হিসেবে ২৮০০ টাকা পাঠান তাহলে আপনি অ্যাপে ব্যালেন্স পাবেন কোম্পানীর রেট ৩২ টাকা হিসেবে ৩২০০ টাকা।
<br></br>
<br></br>
বিকাশের মাধ্যমে ডিপোজিটের শর্তসমূহ:
<br></br>
অবশ্যই বিকাশ এজেন্ট নাম্বার থেকে কোম্পানির বিকাশে ক্যাশইন করতে হবে।
<br></br>
<br></br>
ডিপোজিটের ক্ষেত্রে শুধুমাত্র হুন্ডি এজেন্টদের মাধ্যমে কোম্পানীর বিকাশে টাকা পাঠাতে হবে। 
<br></br>
<br></br>
অ্যাপ থেকে কোম্পানির বিকাশে ডিপোজিট গ্রহনযোগ্য নয়। 

<br></br>
<br></br>
যতক্ষন হেল্পলাইনে পিন এবং এমাউন্ট জানাবেন না ততক্ষন ব্যালেন্স এড হবেনা।
<br></br>
<br></br>
অটো এড ব্যালেন্সের ক্ষেত্রে সর্বনিম্ন ২০০০০/= টাকা ডিপোজিট করতে হবে।
<br></br>
<br></br>
বিকাশের মাধ্যমে একমাসে সর্বোচ্চ ২ লক্ষ টাকার ব্যালেন্স নিতে পারবেন। এর উপর হলে ব্যাংকের মাধ্যমে নিতে হবে।
</h1>
}































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
