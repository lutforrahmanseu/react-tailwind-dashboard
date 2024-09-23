import React from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div>
      Dashboard
      <Link to="/products">Products</Link>
    </div>
  );
}
