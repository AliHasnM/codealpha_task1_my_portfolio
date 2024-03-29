// create for dynamics import images in components easily 
export const getImageUrl = (path) => {
    return new URL(`/assets/${path}`, import.meta.url).href;
}