import Image from "next/image";
import ceramix from "../../public/ceramix.png";
import Link from "next/link";

const Lawyer = () => {
  return (
    // <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
    <div className="h-max md:pb-10 flex flex-col  items-center space-y-6 flex-shrink-0 w-[260px] md:w-[700px] px-4 py-6 my-6 ">
      <Link href="https://www.leiaceramix.com/" target="_blank">
        <Image
          className="md:mb-0  w-36 h-36 rounded md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[300px] object-contain cursor-pointer"
          src={ceramix}
          alt="site' screenshot"
        />
      </Link>

      <div className="space-x-10 space-y-6 px-0 md:px-10 max-w-6xl">
        <h4 className="text-2xl md:text-4xl font-semibold text-center">
          <span className="underline decoration-[#5dc1b9]/50"> Leia</span>{" "}
          Ceramix
        </h4>
        <p className="text-lg text-start">
          Celebrating queer art through exquisite ceramics. Discover vibrant,
          innovative creations that embrace diversity and empower
          self-expression. Explore the gallery and find the perfect piece to add
          beauty and meaning to your space. Join the movement today and
          celebrate the power of art.
        </p>
      </div>
    </div>
  );
};

export default Lawyer;
