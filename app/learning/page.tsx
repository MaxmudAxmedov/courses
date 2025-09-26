import Link from "next/link";
import { getCourses } from "../../src/server/request";

type itemType = {
    id: number;
    title: string;
    path: string
};

export default async function LearningPage() {
    const courses = await getCourses();

    return <ul className="mt-7">
        {
            courses?.map((item: itemType, index: number) => {
                return <li key={index} className="transition hover:translate-y-[-6px] p-3 border rounded-lg mb-4">

                    <Link href={`/learning/${item.id}`}>

                        <h2 className="mb-2 text-center">{item.title}</h2>
                    </Link>

                </li>
            })
        }
    </ul>
}