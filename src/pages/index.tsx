import EmptyStateDesktop from "@/components/EmptyStateDesktop";
import EmptyStateMobile from "@/components/EmptyStateMobile";

export default function Home() {
  return (
    <main className="bg-white" role="main">
      <div className="mx-auto">
        <EmptyStateDesktop />
        <EmptyStateMobile />
      </div>
    </main>
  );
}
