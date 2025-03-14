import { fetchFeedApi } from "@/utils/feedApi";

export default async function Home() {
  const data = await fetchFeedApi();
  console.log("response", data);
  return (
    <div className="container">
      <h2 className="text-center">Welcome User!!</h2>
    </div>
  );
}
