import Link from 'next/link';
export default function Profile() {

    return (
        <main className="Main">
            Your Profile
            <br></br>
            <Link href="/home">
                Home
            </Link>
        </main>
    );
}
