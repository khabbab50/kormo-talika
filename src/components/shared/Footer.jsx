export default function Footer() {
  const date = new Date();
  const fullYear = date.getFullYear();
  return (
    <footer className="fixed bottom-0 w-full dark:bg-[#262B28] bg-gray-300 py-4 sm:py-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-[10px] sm:text-xs lg:text-sm dark:text-[#a9a9a9] text-[#858585]">
          স্বত্ব © 2024 - {fullYear} আস-সুন্নাহ স্কিল ডেভেলপমেন্ট ইনস্টিটিউট -
          সর্ব স্বত্ব সংরক্ষিত।
        </p>
      </div>
      <p className=" text-center text-[#858585]">
        Develop by ❤️ <strong>Khabbab</strong>
      </p>
    </footer>
  );
}
