export const api: string =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:3000/api"
    : "https://next-music-xi.vercel.app/api";
