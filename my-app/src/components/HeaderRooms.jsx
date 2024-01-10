import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-header-blue pt-[90px] h-32 relative">
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

          <div className="absolute top-0 right-0 p-0">
            <Image src="/Lamp.png" alt="Lamp" width={200} height={200} />
          </div>
        </section>
      </main>
    </header>
  );
};

export default Header;
