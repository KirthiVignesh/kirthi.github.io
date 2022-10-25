import React from "react";
import { ClipboardListIcon } from "@heroicons/react/solid";

const Resume = () => {
  return (
    <div
      id="Resume"
      className="lg:w-1/2 mt-64 mb-4 text-justify mx-12 lg:mr-60 lg:ml-auto"
    >
      <div>
        <div className="table">
          <ClipboardListIcon className="h-5 w-5 mr-4 text-yellow_vs" />{" "}
          <code className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap">
            Resume
          </code>
          <div className="table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full"></div>
        </div>
      </div>
      <div className="text-[#a2aabc] text-lg mt-5">
        <div className="flex flex-row">
          <div className="w-1/4">
            <code className="text-yellow_vs">Education</code>
          </div>
          <div className="w-3/4">
          {/* school/college */}
            <code className="text-blue_vs">Sri Eshwar College of Engineering</code>
            <br />
            <code className="italic text-sm text-lightblue_vs">
              Bachelors in Computer Science and Engineering
            </code>
            <br />
            <code className="text-xs text-brown_vs">
              • Nov 2020 - Present
            </code>
          </div>
        </div>
        <div className="flex flex-row pt-10">
          <div className="w-1/4">
            <code className="text-yellow_vs"> </code>
          </div>
          <div className="w-3/4">
            <code className="text-blue_vs">Nirmala Matha Convent School(ICSE/ISC)</code>
            <br />
            <code className="italic text-sm text-lightblue_vs">
              ISC/ICSE
            </code>
            <br />
            <code className="text-xs text-brown_vs">
              • April 2020
            </code>
          </div>
        </div>
        <div className="flex flex-row pt-10 flex-wrap">
          <div className="w-1/4">
            <code className="text-yellow_vs">Skills</code>
          </div>
          <div className="w-3/4">
            <code className="text-sm">
              <br />• Python
              <br />• Flutter
              <br />• Linux
              <br />• Blockchain
              <br />• Git
              <br />• Pentesting/OSINT
            </code>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
