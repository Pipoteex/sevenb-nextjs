import * as React from "react";

function BarIcon() {
    return (
        <svg
            viewBox="0 0 512 512"
            fill="currentColor"
            className="block ml-auto w-[15%] cursor-pointer p-[2%] mr-[5%] max-w-[80px] md:hidden"
        >
            <path d="M0 96c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm64 160c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zm384 160c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32z" />
        </svg>
    );
}

export default BarIcon;