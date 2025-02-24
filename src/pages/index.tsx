import EmptyStateDesktop from "@/components/EmptyStateDesktop";
import EmptyStateMobile from "@/components/EmptyStateMobile";
import { getGithubColors } from "@/services/getGithubColors";
import { getGithubReposData } from "@/services/getGithubReposData";
import { getGithubUserData } from "@/services/getGithubUserData";
import { GithubReposColors, iRepo, iUserData } from "@/types";
import { GetServerSideProps } from "next";

interface iProps {
  colors: GithubReposColors;
  userResponse?: iUserData;
  reposResponse?: iRepo[];
  error?: string;
}

const Home: React.FC<iProps> = ({
  colors,
  userResponse,
  reposResponse,
  error,
}) => {
  return (
    <main className="bg-white" role="main">
      <div className="mx-auto">
        <EmptyStateDesktop />
        <EmptyStateMobile />
      </div>
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { username } = context.query;

  try {
    const userData = username
      ? await getGithubUserData(username as string)
      : null;

    const [reposData, colorsData] = userData
      ? await Promise.all([
          getGithubReposData(username as string),
          getGithubColors(),
        ])
      : [null, null];

    return {
      props: {
        colors: colorsData || [],
        userResponse: userData || null,
        reposResponse: reposData || null,
      },
    };
  } catch (err) {
    return {
      props: {
        colors: [],
        userResponse: null,
        reposResponse: null,
        error: "Erro ao buscar dados. Tente novamente mais tarde.",
      },
    };
  }
};

export default Home;