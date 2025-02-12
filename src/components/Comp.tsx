"use client";   
import React, { useEffect } from "react";

const Comp = () => {
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api/historical-token");
      
      const data = await response.json();

      console.log("🚀 ~ fetchData ~ data: 11", data)
    }
    fetchData();
  }, []);
  return <div>Comp</div>;
};

export default Comp;
