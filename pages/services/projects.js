export default async function getProject({id}) {
    const response = await fetch(`https://api.github.com/repos/${id}`);
    projects = await response.json();
    return projects;
}