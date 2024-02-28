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

export default function ContentFour({
  setStatus,
  setName,
}: TypePropsRecentAppList) {
  return (
    <div className="flex w-full justify-center">
      <div className="w-5/6">
        <div className="leading-9">
          <div className="flex">
            <Text as="b" className="mb-5 text-xl">
              Diet Makanan bagi Kesehatan Gigi dan Diabetes Melitus
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
            <li>1.Konsumsi makanan rendah gula</li>
            <div className="my-4 flex justify-center">
              <Image
                src={'/p18.png'}
                alt="picture 21"
                width={180}
                height={180}
              />
            </div>
            {parse(
              '<p className="text-center">Sumber : <a href="https://www.freepik.com/" target="blank" className="text-blue-500">freepik.com</a></p>'
            )}
            <p className="py-4">
              Hindari makanan dan minuman yang tinggi gula seperti permen, kue
              dan minuman manis karena dapat meningkatkan risiko kerussakan gigi
              dan gusi serta menyebabkan kadar gula meningkat.
            </p>
            <li>2.Pilih makanan yang berserat</li>
            <div className="my-4 flex justify-center">
              <Image
                src={'/p19.png'}
                alt="picture 22"
                width={180}
                height={180}
              />
            </div>
            {parse(
              '<p className="text-center">Sumber : <a href="https://www.freepik.com/" target="blank" className="text-blue-500">freepik.com</a></p>'
            )}
            <p className="py-4">
              Konsumsi makanan yang beserat seperti sayuran, buah-buahan dan
              biji-bijian yang mampu meningkatkan kerja kelenjar air liur yang
              dapat membantu membersihkan gigi dan gusi serta mengontrol kadar
              gula darah.
            </p>
            <li>3.Batasi makanan yang bersifat asam</li>
            <div className="my-4 flex justify-center">
              <Image
                src={'/p20.png'}
                alt="picture 22"
                width={180}
                height={180}
              />
            </div>
            {parse(
              '<p className="text-center">Sumber : <a href="https://www.freepik.com/" target="blank" className="text-blue-500">freepik.com</a></p>'
            )}
            <p className="py-4">
              Makanan dan minuman yang tinggi asam seperti jeruk dan minuman
              berkarbonasi (soda) dapat mempercepat terjadinya gigi berlubang.
            </p>
            <li>4.Konsumsi protein yang berkualitas</li>
            <div className="my-4 flex justify-center">
              <Image
                src={'/p21.png'}
                alt="picture 22"
                width={180}
                height={180}
              />
            </div>
            {parse(
              '<p className="text-center">Sumber : <a href="https://www.freepik.com/" target="blank" className="text-blue-500">freepik.com</a></p>'
            )}
            <p className="py-4">
              Pilih sumber protein yang berkualitas seperti daging tanpa lemak,
              ikan, telur dan kacang-kacangan. Makanan dengan kandungan protein
              tinggi dapat membantu memperbaiki jaringan gusi dan memperkuat
              gigi.
            </p>
            <li>5.Minum air putih</li>
            <div className="my-4 flex justify-center">
              <Image
                src={'/p22.png'}
                alt="picture 22"
                width={180}
                height={180}
              />
            </div>
            {parse(
              '<p className="text-center">Sumber : <a href="https://www.freepik.com/" target="blank" className="text-blue-500">freepik.com</a></p>'
            )}
            <p className="py-4">
              Pastikan minum air putih yang cukup, karena air dapat membantu
              memebrsihkan sisa makanan di mulut dan mengurangi risiko mulut
              kering yang biasanya terjadi pada penderita DM.
            </p>
          </ul>
        </div>
      </div>
    </div>
  );
}
