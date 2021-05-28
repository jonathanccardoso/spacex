import { useQuery, gql } from "@apollo/client";

import { format, parseISO } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

const LAUNCHES_PAST = gql`
  query GetLaunchesPast {
    launchesPast(limit: 10) {
      id
      mission_name
      details
      launch_date_local
      links {
        article_link
        video_link
        flickr_images
      }
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(LAUNCHES_PAST);

  // FIXME: adds components animated loading
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      <header className="bg-gray-200">
        <nav className="container mx-auto px-20 text-center flex flex-wrap">
          <a href="/">
            <img src="./logo.png" class="w-60 pl-0 p-4" alt="SpaceX" />
          </a>
          <form action=".">
            <input
              type="search"
              id="site-search"
              name="q"
              aria-label="Search through site content"
              placeholder="Search through site content"
              className="m-4 rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-black-600 focus:border-transparent"
            />
          </form>
        </nav>
      </header>
      <div className="container mx-auto px-20 bg-white">
        <h1 className="text-3xl font-black pt-4">Missions</h1>
        <div className="flex flex-wrap flex-grow flex-cols-1 lg:flex-2 content-between items-center justify-center">
          {data?.launchesPast.map(
            ({ id, mission_name, details, launch_date_local }) => (
              <div
                key={id}
                className="w-2/5 m-4 p-4 bg-indigo-200 cursor-pointer hover:bg-indigo-300 transition delay-150 duration-200 ease-in-out"
              >
                <p className="text-xl font-black">
                  {id}: {mission_name}
                </p>
                <p className="pt-4 pb-4">
                  {details
                    ? details.substring(0, 70) + "..."
                    : "Not description..."}
                </p>
                <span className="italic">
                  {format(parseISO(launch_date_local), "d MMM yy", {
                    locale: ptBR,
                  })}
                </span>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
}

export default App;
