import { Title, Text } from '@/components/ui/text';
import WidgetCard from '@/components/cards/widget-card';
import { teams as apps } from '@/data/teams-data';
import { PiArrowLineUpRightBold } from 'react-icons/pi';
import Image from 'next/image';
import { Button } from 'rizzui';
import { FaReplyAll } from 'react-icons/fa';
import parse from 'html-react-parser';

type TypePropsRecentAppList = {
  setStatus?: any;
  setName?: any;
};

export default function ContentTwo({
  setStatus,
  setName,
}: TypePropsRecentAppList) {
  return (
    <div className="flex w-full justify-center">
      <div className="w-5/6">
        <div className="leading-9">
          <div className="flex">
            <Text as="b" className="text-xl">
              Cara Menjaga Kesehatan Gigi
            </Text>
            <FaReplyAll
              className="ml-4 cursor-pointer text-blue-500"
              onClick={() => {
                setStatus(false);
                setName('');
              }}
            />
          </div>
          <ul className="mx-4 my-1">
            <li>1. Rajin menggosok gigi</li>
            <div className="my-4 flex justify-center">
              <Image
                src={'/p8.png'}
                alt="picture 10"
                width={230}
                height={230}
              />
            </div>
            {parse(
              '<p className="text-center">Sumber : <a href="https://semenpadanghospital.co.id/" target="blank" className="text-blue-500">semenpadanghospital.co.id</a></p>'
            )}
            <p className="py-4">
              Menggosok gigi 2x sehari dengan pasta gigi yang mengandung
              fluoride. Gunakan sikat gigi yang berbulu lembut dan sikatlah
              dengan gerakan lembut.
            </p>
            <li>2. Minum air putih</li>
            <div className="my-4 flex justify-center">
              <Image
                src={'/p9.png'}
                alt="picture 11"
                width={230}
                height={230}
              />
            </div>
            {parse(
              '<p className="text-center">Sumber : <a href="https://www.freepik.com/" target="blank" className="text-blue-500">freepik.com</a></p>'
            )}
            <p className="py-4">
              Minum air putih dapat membantu membersihkan dan meluruhkan sisa
              makanan yang menempel di permukaan gigi. Hal ini dapat mencegah
              terjadinya penumpukan sisa makanan yang dapat menyebabkan
              terjadinya gigi berlubang.
            </p>
            <li>3.Konsumsi buah dan sayur</li>
            <div className="my-4 flex justify-center">
              <Image
                src={'/p10.png'}
                alt="picture 12"
                width={230}
                height={230}
              />
            </div>
            {parse(
              '<p className="text-center">Sumber : <a href="https://www.freepik.com/" target="blank" className="text-blue-500">freepik.com</a></p>'
            )}
            <p className="py-4">
              Kandungan nutrisi pada buah dan sayur yang berserat serta berair
              dapat membantu pembersihan sendiri oleh air liur serta menjaga
              kesehatan gigi dan mulut. Namun, disarankan bagi penderita DM
              dapat mengkonsumsi buah dan sayur yang mengandung serat dan kalori
              yang rendah, seperti jeruk, apel, tomat, okra, kiwi, papaya,
              bayam, kembang kol, kangkung dan jambu air.
            </p>
            <li>4.Kurangi makanan manis dan melekat</li>
            <div className="my-4 flex justify-center">
              <Image
                src={'/p11.png'}
                alt="picture 13"
                width={230}
                height={230}
              />
            </div>
            {parse(
              '<p className="text-center">Sumber : <a href="https://www.freepik.com/" target="blank" className="text-blue-500">freepik.com</a></p>'
            )}
            <p className="py-4">
              Mengkonsumsi makanan yang manis dan melekat seperti donat, coklat,
              sirup, dan permen secara berlebihan dapat meningkatkan kadar gula
              darah. Hal ini juga dapat menyebabkan terjadinya gigi berlubang
              akibat kadar gula yang tinggi pada rongga mulut.
            </p>
            <li>5.Rutin periksa ke dokter gigi</li>
            <div className="my-4 flex justify-center">
              <Image
                src={'/p12.png'}
                alt="picture 14"
                width={230}
                height={230}
              />
            </div>
            {parse(
              '<p className="text-center">Sumber : <a href="https://www.freepik.com/" target="blank" className="text-blue-500">freepik.com</a></p>'
            )}
            <p className="py-4">
              Penting untuk mengunjungi dokter gigi setidaknya 6 bulan sekali
              untuk melakukan pemeriksaan rutin dan pembersihan karang gigi.
            </p>
          </ul>
        </div>
      </div>
    </div>
  );
}
