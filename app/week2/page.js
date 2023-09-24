import React from "react";
import Link from "next/link"; // Import the Link component from Next.js

import StudentInfo from "app/week2/StudentInfo";

export default function Page() {
  return (
    <div>
      <h1>My Shopping List</h1>
      <StudentInfo />
      <Link href="/">Go to home</Link>
    </div>
  );
}
