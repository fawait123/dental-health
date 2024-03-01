import Image from 'next/image';
import React from 'react';
import parse from 'html-react-parser';

type ListType = {
  list: string;
  image?: string | null;
};

export default function ListComponent({
  title,
  description,
  subDescription,
  image = null,
  subList = [],
}: {
  title: string;
  description: string;
  image?: string;
  subList?: ListType[];
  subDescription?:string
}) {
  return (
    <div>
      <h3 className="text-lg">{title}</h3>
      <div className="mx-2 my-2 text-justify">{parse(description)}</div>
      {image ? (
        <Image
          src={image}
          width={700}
          height={700}
          alt="login"
          className="m-auto mt-3"
        />
      ) : null}
      {subDescription? <div className="mx-2 my-2 text-justify">{parse(subDescription)}</div> : null}
      {subList.length > 0 ? (
        <div className="ml-4">
          {subList.map((item, index) => (
            <div className="m-4" key={index}>
              <p className="mx-2 my-2 flex text-justify">{parse(item.list)}</p>
              {item.image ? (
                <Image
                  src={item.image}
                  alt="gambar"
                  width={700}
                  height={700}
                  className="m-auto"
                />
              ) : null}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
