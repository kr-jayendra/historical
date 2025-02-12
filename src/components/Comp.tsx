"use client";   
import React, { useEffect } from "react";

const Comp = () => {
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api/historical-token");
      console.log("🚀 ~ fetch ~ response:", response);
    }
    fetchData();
  }, []);
  return <div>Comp</div>;
};

export default Comp;
