import { urlFor } from "@/app/lib/sanity";
import Image from "next/image";

export default function ImageModule({
  image,
  alt,
  caption,
}: Partial<{
  caption: string;
  alt: string;
  image: any;
}>) {
  return (
    <section className="my-8">
      <div className="flex flex-col mx-auto gap-2">
        <Image
          src={urlFor(image).url()}
          width={500}
          height={500}
          alt={alt ?? ""}
          priority
          className="mx-auto rounded shadow-lg h-auto object-cover"
        />
        <div className="text-center text-sm italic">{caption}</div>
      </div>
    </section>
  );
}
