import { MusicCard } from "@/components/MusicCard/MusicCard";
import { Feed } from "@/models/feed";
import { fetchFeedApi } from "@/utils/feedApi";

export default async function Home() {
  const data: Feed = await fetchFeedApi();

  return (
    <div className="container mt-5">
      <h2 className="text-center">Welcome User!!</h2>
      <div className="row">
        {data?.feed?.entry.map((entry, index) => (
          <div
            className="col-lg-4 col-md-6 col-12 mb-4"
            key={entry?.id.attributes["im:id"]}
          >
            <MusicCard
              imageurl={entry?.["im:image"]?.[0]?.label}
              title={entry?.["im:name"]?.label}
              text={entry?.["im:artist"]?.label}
              price={entry?.["im:price"]?.label}
              index={index}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
