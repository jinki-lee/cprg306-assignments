import React from "react";
import Link from "next/link"; // Import the Link component from Next.js
import StudentInfo from "./week2/StudentInfo"; // Update the import path as needed

import 'flowbite';

export default function Home() {
  return (
    <div>
      <MyHeading />
      <br></br>
      <StudentInfo />
      <p>
        <Link href="/week2">Go to Week 2</Link>
      </p>
      <p>
        <Link href="/week3">Go to Week 3</Link>
      </p>
    </div>
  );
}

function MyHeading() {
  return <h1>CPRG 306: Web Development 2 - Assignments</h1>;
}
