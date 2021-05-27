import { useQuery, gql } from "@apollo/client";

import "./styles.css";

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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.launchesPast.map(
    ({ id, mission_name, details, launch_date_local }) => (
      <div key={id}>
        <p>
          {id}: {mission_name}
        </p>
        <p>
          {details} - {launch_date_local}
        </p>
        <hr />
      </div>
    )
  );
}

export default App;
