import React from 'react';
import Link from 'next/link'; // Import the Link component from Next.js

import StudentInfo from 'app/week2/StudentInfo';

export default function Week2Page() {
  return (
    <div>
      <h1>My Shopping List</h1>
      <br></br>
      <StudentInfo />
      <br></br>
            {/* Use the Link component to link to the /week2 route */}
      <Link href="/">
        Go to home
      </Link>
    </div>
  );
}
