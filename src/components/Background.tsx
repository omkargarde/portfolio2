import Image from "next/image";
import background from "../../public/backgroundDark.jpg";
export default function Background() {
  return (
    <Image
      alt="Mountains"
      src={background}
      placeholder="blur"
      quality={100}
      fill
      sizes="100vw"
      style={{
        objectFit: "cover",
      }}
    />
  );
}
