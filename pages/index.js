import Gallery from "@/components/Gallery";
// import React, { useEffect, useState } from "react";
import React, { useState } from "react";

const index = () => {
    // const [images, setImages] = useState(null);
    // const [isShow, setIsShow] = useState(false);

    // const GetImages = async () => {
    //     const strdata = await fetch("https://picsum.photos/v2/list");
    //     const json = await strdata.json();
    //     setImages(json);
    // };

    // // Lifecycle of component
    // useEffect(() => {
    //     GetImages();
    // }, []);

    const [isShow, setIsShow] = useState(true);

    return (
        <div>
             <button onClick={() => setIsShow(!isShow)}>
                {isShow ? "Hide" : "Show"}
            </button>
            {isShow && <Gallery />}
        </div>
    );
};


export default index;