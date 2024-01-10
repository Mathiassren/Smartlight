import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-header-blue pt-[90px] h-32">
      <main>
        <section className="flex justify-between items-center h-full">
          <div className="flex flex-col justify-center">
            <h1 className="text-white text-3xl font-bold">
              Control
              <br />
              Panel
            </h1>
            <p className="text-white">Lights</p>
          </div>
          <Image src="/vector.png" alt="Vector" width={80} height={80} />
        </section>
      </main>
    </header>
  );
};

export default Header;
