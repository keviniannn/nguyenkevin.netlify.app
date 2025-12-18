import React from "react";
import Header from "../components/Header";

const Resume = () => {
  return (
    <div className="w-full h-screen px-4 py-6 box-border text-blue-700">
      <div className="relative w-full h-full max-w-4xl mx-auto border-4 border-blue-700 bg-stone-100 px-6 py-8 flex flex-col gap-10 overflow-hidden box-border">
        <Header />
        <div className="flex-1 flex flex-col items-center justify-center text-center gap-6 overflow-hidden">
          <h2 className="text-3xl tracking-wider uppercase">Resume</h2>
          <div className="w-full max-w-xl h-[70vh] bg-stone-100 overflow-hidden">
            <embed
              src="/KevinNguyenResume.pdf"
              type="application/pdf"
              width="100%"
              height="100%"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
