import React from 'react';
import Link from 'next/link'; // Import the Link component from Next.js
import StudentInfo from 'app/week2/StudentInfo'; // Update the import path as needed

export default function Page() {
  return (
    <div>
      <MyHeading />
      <br></br>
      <StudentInfo /> {/* Render the StudentInfo component */}
      <br></br>
      {/* Use the Link component to link to the /week2 route */}
      <Link href="/week2">
        Go to Week 2
      </Link>
    </div>
  );
}

function MyHeading() {
  return <h1>CPRG 306: Web Development 2 - Assignments</h1>;
}
