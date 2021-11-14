export async function handleResponse(response: any) : Promise<JSON> {
    const text = await response.text();
    return text ? JSON.parse(text) : null;
}
