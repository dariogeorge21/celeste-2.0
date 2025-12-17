'use client';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-christmas-red via-christmas-gold to-christmas-green text-black py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6">
          <p className="font-playfair text-xl font-semibold">
            Celeste 2.0 - Christmas Celebration
          </p>
          <p className="text-black/90">
            St. Joseph's College of Engineering and Technology, Palai
          </p>
          <div className="flex items-center justify-center space-x-2 text-sm">
            <span>Initiative by Jesus Youth SJCET</span>
          </div>
          <div className="flex items-center justify-center space-x-6 my-4">
            <img 
              src="/sjcet.png" 
              alt="SJCET Logo" 
              className="h-12 w-auto object-contain"
            />
            <img 
              src="/jy.png" 
              alt="Jesus Youth Logo" 
              className="h-12 w-auto object-contain"
            />
          </div>
          
          {/* <p className="text-xs text-black/70">
            © {new Date().getFullYear()} SJCET Palai. All rights reserved.
          </p> */}
        </div>
      </div>
    </footer>
  );
}

