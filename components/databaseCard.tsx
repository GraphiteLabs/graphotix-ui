import React from "react";

export const DatabaseCard: React.FC = () =>
    <div className="bg-[#4B5563] text-[#F3F3F3] flex flex-col rounded-md shadow-lg">
        <div className="w-max py-2 px-4 flex items-center">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.0115 10.332V4.99863C15.0113 4.76482 14.9427 4.53517 14.8126 4.33274C14.6825 4.13031 14.4956 3.96221 14.2705 3.8453L9.08334 1.17863C8.85804 1.06161 8.60247 1 8.34231 1C8.08216 1 7.82659 1.06161 7.60129 1.17863L2.41411 3.8453C2.18903 3.96221 2.00208 4.13031 1.87202 4.33274C1.74195 4.53517 1.67335 4.76482 1.67308 4.99863V10.332C1.67335 10.5658 1.74195 10.7954 1.87202 10.9979C2.00208 11.2003 2.18903 11.3684 2.41411 11.4853L7.60129 14.152C7.82659 14.269 8.08216 14.3306 8.34231 14.3306C8.60247 14.3306 8.85804 14.269 9.08334 14.152L14.2705 11.4853C14.4956 11.3684 14.6825 11.2003 14.8126 10.9979C14.9427 10.7954 15.0113 10.5658 15.0115 10.332Z" stroke="#EEEEEE" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M1.87317 4.3053L8.34232 7.67196L14.8115 4.3053" stroke="#EEEEEE" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M8.34232 14.3853V7.66531" stroke="#EEEEEE" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

            <span className="ml-3 font-semibold">Post</span>
            <div className="flex flex-grow mr-32"></div>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 5L5 15" stroke="#F1F1F1" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M5 5L15 15" stroke="#F1F1F1" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </div>
        <div className="py-2 px-4 flex items-center bg-[#6B7280] rounded-br-lg rounded-bl-lg">
            <span className="font-mono text-sm font-medium">id</span>
            <div className="bg-sky-500 py-px px-3 rounded-full ml-3">
                <span className="font-mono text-xs font-semibold">id</span>
            </div>
        </div>
    </div>