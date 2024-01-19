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

export default function ContentFive({
  setStatus,
  setName,
}: TypePropsRecentAppList) {
  return (
    <div className="flex w-full justify-center">
      <div className="w-5/6">
        <div className="leading-9">
          <div className="flex">
            <Text as="b" className="mb-5 text-xl">
              Tindakan Perawatan Gigi pada Pasien DM
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
            <li>1.Pembersihan karang gigi</li>
            <div className="my-4 flex justify-center">
              <Image
                src={'/p23.png'}
                alt="picture 21"
                width={180}
                height={180}
              />
            </div>
            <p className="py-4">
              Pembersihan karang gigi (scaling) merupakan tindakan yang
              dilakukan oleh dokter gigi maupun perawat gigi untuk membersihkan
              karang gigi yang menempel pada permukaan gigi. Tindakan ini
              dilakukan sebagai upaya dalam mencegah akumulasi plak dan karang
              gigi yang menumpuk dan dapat menyebabkan penyakit gigi. Namun
              sebelum pembersihan karang gigi dilakukan, penderita DM harus
              dalam kondisi gula darah yang normal agar tidak terjadi perdarahan
              yang berlebihan ketika melakukan pembersihan karang gigi.
            </p>
            <li>2.Penambalan Gigi</li>
            <div className="my-4 flex justify-center">
              <Image
                src={'/p24.png'}
                alt="picture 21"
                width={180}
                height={180}
              />
            </div>
            <p className="py-4">
              Penambalan gigi merupakan perawatan yang dilakukan oleh dokter
              gigi untuk memperbaiki gigi yang berlubang. Gigi yang berlubang
              akan dibersihkan, kemudian akan dilakukan penambalan dengan bahan
              khusus yang menyerupai warna gigi untuk menutup lubang tersebut.
              Hal ini dilakukan untuk mencegah terjadinya lubang gigi yang lebih
              dalam.
            </p>
            <li>3.Perawatan saluran akar</li>
            <div className="my-4 flex justify-center">
              <Image
                src={'/p25.png'}
                alt="picture 21"
                width={180}
                height={180}
              />
            </div>
            <p className="py-4">
              Perawatan saluran akar dilakukan apabila infeksi pada gigi telah
              mencapai saraf dan akar gigi. Perawatan ini dilakukan untuk
              menyelamatkan gigi yang telah terinfeksi. Proses perawatan saluran
              akar memerlukan kunjungan lebih dari 1x tergantung pada kedalaman
              infeksi gigi.
            </p>
            <li>4.Perawatan gusi</li>
            <div className="my-4 flex justify-center">
              <Image
                src={'/p26.png'}
                alt="picture 21"
                width={180}
                height={180}
              />
            </div>
            <p className="py-4">
              Perawatan pada gusi dilakukan apabila gusi mengalami peradangan.
              Perawatan yang dilakukan meliputi scaling dan root planning untuk
              membersihkan akar gigi dan jaringan gusi yang terinfeksi.
            </p>
            <li>5.Pencabutan gigi</li>
            <div className="my-4 flex justify-center">
              <Image
                src={'/p27.png'}
                alt="picture 21"
                width={180}
                height={180}
              />
            </div>
            <p className="py-4">
              Pencabutan gigi merupakan pilihan terkahir apabila gigi sudah
              dalam kondisi yang parah dan tidak dapat diselamatkan. Pencabutan
              gigi diperlukan untuk mencegah terjadinya infeksi yang lebih
              lanjut. Apabila gigi dicabut, direkomendasikan untuk menggunakan
              gigi palsu agar fungsi pengunyahan gigi tetap terjaga.
            </p>
          </ul>
          <p className="text-justify">
            Namun sebelum melakukan tindakan perawatan gigi, penderita DM perlu
            memperhatikan beberapa hal berikut:
          </p>
          <ul className="mx-4 my-1">
            <li>
              1.Melakukan konsultasi dengan dokter untuk melakukan kontrol
              diabetes
            </li>
            <li>2.Memperbaharui riwayat medis dan konsumsi obat-obatan</li>
            <li>
              3.Memastikan pasien telah makan dan minum obat sebelum melakukan
              perawatan
            </li>
            <li>4.Mengantisipasi jika menangani hipoglikemia</li>
            <li>
              5.Mencegah, mengobati dan menghilangkan infeksi yang terjadi
              dengan segera
            </li>
            <li>
              6.Tidak menggunakan dan tidak merekomendasikan senyawa yang
              mengandung aspirin
            </li>
            <li>7.Mendapatkan anestesi lokal yang mendalam</li>
            <li>
              8.Memastikan kebersihan mulut yang sangat baik dan memberikan
              perawatan pencegahan yang mendalam
            </li>
            <li>
              9.Memperkuat pola makan dan rejimen pengobatan yang teratur
              sebelum dan sesudah kunjungan perawatan gigi
            </li>
            <li>
              10.Melakukan pembacaan glukometer apabila pasien memiliki risiko
              tinggi dan menggunakan insulin atau menjalani operasi
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
