import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-header-blue pt-[20px] h-28 relative">
      <main>
        <section className="flex justify-between items-center h-full">
          <div className="flex flex-col justify-center">
            <h1 className="text-white text-3xl font-bold">
              Bed
              <br />
              Room
            </h1>
            <p className="text-orange-400">4 Lights</p>
          </div>

          <div className="flex flex-col pb-10 items-center absolute right-0 pr-8">
            <Image
              priority={false}
              src="/Lampnobulb.png"
              alt="Lamp"
              width={150}
              height={150}
            />
            <div className="border-2 border-red-400 rounded-3xl flex items-center justify-center w-32"></div>
          </div>
        </section>
      </main>
    </header>
  );
};

export default Header;
