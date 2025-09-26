import { getCourse } from "@/src/server/request";

export default async function page({ params }) {
    const course = await getCourse(params?.id);
    console.log(course);
    return <div>single page</div>;
}