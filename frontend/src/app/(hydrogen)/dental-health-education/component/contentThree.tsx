import { Title, Text } from '@/components/ui/text';
import WidgetCard from '@/components/cards/widget-card';
import { teams as apps } from '@/data/teams-data';
import { PiArrowLineUpRightBold } from 'react-icons/pi';
import Image from 'next/image';
import { Button } from 'rizzui';
import { FaReplyAll } from 'react-icons/fa';

type TypePropsRecentAppList = {
  setStatus?: any;
  setName?: any;
};

export default function ContentThree({
  setStatus,
  setName,
}: TypePropsRecentAppList) {
  return (
    <div className="flex w-full justify-center">
      <div className="w-5/6">
        <div className="leading-9">
          <div className="flex">
            <Text as="b" className="mb-5 text-xl">
              Cara Menggosok Gigi yang Baik dan Benar
            </Text>
            <FaReplyAll
              className="ml-4 cursor-pointer text-blue-500"
              onClick={() => {
                setStatus(false);
                setName('');
              }}
            />
          </div>
          <p className="text-justify">
            Menggosok gigi dengan baik dan benar merupakan praktik yang penting
            dalam menjaga kesehatan gigi dan mulut. Sehingga perlu diperhatikan
            cara dan waktu yang tepat dalam menggosok gigi.
          </p>
          <p className="text-justify">
            Waktu yang tepat dalam menggosok gigi, yaitu
          </p>
          <div className="my-4 flex justify-center">
            <Image
              src={'/picture166.png'}
              alt="picture 166"
              width={600}
              height={600}
            />
          </div>
          <p className="text-justify">
            Berikut cara menggosok gigi yang baik dan benar :
          </p>
          <ul className="mx-4 my-1">
            <li>
              1.Tempatkan sikat gigi yang sudah diberi pasta gigi mengarah ke
              permukaan gigi. Pada gigi bagian depan, gosok gigi dengan mengarah
              dari gusi ke gigi, bila gigi atas maka dari atas ke bawah, bila
              gigi bagian bawah maka dari bawah ke atas. Bulu sikat harus
              menyentuh hingga batas antara gigi dan gusi.
            </li>
            <div className="my-4 flex justify-center">
              <Image
                src={'/p13.png'}
                alt="picture 16"
                width={230}
                height={230}
              />
            </div>
            <li>
              2.Gerakkan sikat dengan gerakan kecil perlahan dan memutar pada
              gigi bagian samping baik gigi rahang atas maupun rahang bawah.
            </li>
            <div className="my-4 flex justify-center">
              <Image
                src={'/p14.png'}
                alt="picture 17"
                width={230}
                height={230}
              />
            </div>
            <li>
              3.Arahkan sikat di permukaan gigi bagian dalam, sikar secara
              perlahan dengan gerakan maju, mundur dan berputar
            </li>
            <div className="my-4 flex justify-center">
              <Image
                src={'/p15.png'}
                alt="picture 18"
                width={230}
                height={230}
              />
            </div>
            <li>
              4.Bersihkan bagian dalam permukaan gigi depan atas dan gigi bawah
              dengan gerakan mencungkil secara perlahan.
            </li>
            <div className="my-4 flex justify-center">
              <Image
                src={'/p16.png'}
                alt="picture 19"
                width={230}
                height={230}
              />
            </div>
            <li>
              5.Gosok gigi pada permukaan gigi yang digunakan untuk mengunyah.
              Gerakkan sikat gigi ke depan untuk membersihkan permukaan gigi
              pengunyahan. Jangan lupa untuk membersihkan lidah dengan bagian
              sikat yang halus
            </li>
            <div className="my-4 flex justify-center">
              <Image
                src={'/p17.png'}
                alt="picture 20"
                width={230}
                height={230}
              />
            </div>
          </ul>
          <p className="text-justify">Tips sikat gigi yang baik :</p>
          <div className="my-4 flex justify-center">
            <Image src={'/sc1.png'} alt="picture 20" width={600} height={600} />
          </div>
        </div>
      </div>
    </div>
  );
}
