"use client";

import { FadeLoader } from "react-spinners";

const GlobalLoders = () => {
  return (
    <div className="bg-primary-foreground max-w-[1400px] mx-auto w-full h-screen flex items-center justify-center">
      <FadeLoader
        className="h-[50px]"
        color={"#38d6ac"}
        loading={true}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default GlobalLoders;
