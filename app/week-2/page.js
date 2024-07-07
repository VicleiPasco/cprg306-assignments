import Link from "next/link";
import StudentInfo from ".week-2";

export default function Page2() {
    return (
        <main>
            <h1>My Second Page!</h1>
            <p>This is the second page of my React App!</p>
            <StudentInfo />
            <Link href="../">Back</Link>
        </main>
    );
}
