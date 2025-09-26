const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function getUsers() {
    const res = await fetch(`${baseURL}/users`);
    return res.json();
}

export async function getProducts() {
    const res = await fetch(`${baseURL}/products`);
    return res.json();
}

export async function getCourses() {
    const res = await fetch(`${baseURL}/courses`, {
        cache: "no-store",
    });
    return res.json();
}

export async function getCourse(url) {
    const res = await fetch(`${baseURL}/${url}`);
    return res.json();
}
