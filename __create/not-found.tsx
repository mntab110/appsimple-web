export default function NotFound() {
  return <div>The page you're looking for doesn't exist.</div>;
}
if (import.meta.env.DEV) {
  import("../__create/not-found");
}
