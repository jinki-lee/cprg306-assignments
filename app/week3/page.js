import React from "react";
import Link from "next/link"; // Import the Link component from Next.js

import ItemList from "./item-list";

export default function Page() {
  return (
    <main>
      <h1>WEEK 3</h1>
      <Link href="/">Go to home</Link>
      <ItemList />
    </main>
  );
}
