import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-header-blue pt-[100px] h-32">
      <main>
        <section className="flex justify-between items-center h-full">
          <div className="flex flex-col justify-center">
            <h1 className="text-white text-3xl font-bold">
              Control
              <br />
              Panel
            </h1>
          </div>
          <Image
            className="rounded-full border-2"
            src="/profile.jpg"
            alt="profile picture"
            width={50}
            height={50}
          />
        </section>
      </main>
    </header>
  );
};

export default Header;
