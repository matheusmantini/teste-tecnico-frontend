import EmptySearchIcon from "./icons/EmptySearchIcon";

export default function EmptyStateDesktop() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] bg-white hidden sm:flex">
      <div className="text-center container mx-auto px-4 max-w-3xl flex flex-col items-center">
        <h1 className="font-semibold text-[21px] text-neutral-gray mb-1">
          Procure pelo Nome ou Nome de Usuário
        </h1>
        <p className="font-normal text-[16px] text-neutral-gray mb-8">
          Encontre os repositórios de algum usuário digitando no campo acima
        </p>
        <EmptySearchIcon aria-hidden="true" />
      </div>
    </section>
  );
}
