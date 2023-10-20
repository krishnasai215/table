import React from 'react';

function Header() {
  return (
    <div>
      <body className="bg-black text-white p-10">
        <div className="max-w-lg mx-auto">
          <h1 className="font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 py-10">ReactJS Tasks</h1>
          <div className="grid grid-cols-2 gap-10">
            <div>
              <p className="text-xl font-semibold">* Name:</p>
              <p className="text-lg">Sai Krishna Kanth VS</p>
            </div>
            <div>
              <p className="text-xl font-semibold">* Reg No:</p>
              <p className="text-lg">21BLC1211</p>
            </div>
            <div>
              <p className="text-xl font-semibold">* Email:</p>
              <p className="text-lg">vssaikrishna2003@gmail.com</p>
              <p className="text-lg">saikrishna.kanthvs2021@vitstudent.ac.in</p>
            </div>
            <div>
              <p className="text-xl font-semibold">* College:</p>
              <p className="text-lg">VIT-Chennai</p>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default Header;
