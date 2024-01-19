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

export default function ContentOne({
  setStatus,
  setName,
}: TypePropsRecentAppList) {
  return (
    <div className="flex w-full justify-center">
      <div className="w-5/6">
        <div className="leading-9">
          <div className="flex">
            <Text as="b" className="text-xl">
              Penyakit Gigi pada Pasien Diabetes Melitus
            </Text>
            <FaReplyAll
              className="ml-4 cursor-pointer text-blue-500"
              onClick={() => {
                setStatus(false);
                setName('');
              }}
            />
          </div>
          <p className="my-2 font-medium">1.Gigi Berlubang (Karies Gigi)</p>
          <div className="my-4 flex justify-center">
            <div className="flex">
              <Image
                src={'/sc2.png'}
                alt="picture 1"
                width={600}
                height={600}
              />
            </div>
          </div>
          <p className="text-justify">
            Gigi berlubang terjadi karena adanya proses pengikisan dari lapisan
            gigi oleh bakteri di permukaan rongga mulut. Sisa makanan yang
            tertinggal di permukaan gigi akan menghasilkan asam yang merusak
            lapisan gigi secara bertahap. Pada penderita DM dengan kadar gula
            yang tidak terkontrol dapat meningkatkan risiko terjadinya gigi
            berlubang akibat bertambahnya karbohidrat yang di Gejala yaitu :
          </p>
          <ul className="mx-4 my-1">
            <li>
              a.Adanya noda berwarna coklat, hitam atau putih pada permukaan
              gigi
            </li>
            <li>b.Gigi terasa ngilu atau sakit saat menggigit</li>
            <li>c.Terdapat lubang pada permukaan gigi</li>
          </ul>
          <p className="text-justify">Proses terjadinya karies gigi :</p>
          <ul className="mx-4 my-1">
            <li>
              a.Sisa makanan yang menempel pada permukaan gigi dan menjadi plak
              merupakan penyebab awal terjadinya gigi berlubang
            </li>
            <div className="my-4 flex justify-center">
              <Image src={'/p1.png'} alt="picture 3" width={200} height={200} />
            </div>
            <li>
              b.Kandungan gula pada sisa makanan akan diproses oleh bakteri dan
              menjadi asam yang menyebabkan gigi berlubang
            </li>
            <div className="my-4 flex justify-center">
              <Image src={'/p2.png'} alt="picture 4" width={200} height={200} />
            </div>
            <li>
              c.Seiring berjalannya waktu, gigi berlubang akan meluas dari
              lapisan terluar gigi (email gigi) ke lapisan dalam gigi (dentin)
              hingga saraf gigi dan dapat menyebabkan rasa linu atau sakit
            </li>
            <div className="my-4 flex justify-center">
              <Image src={'/p3.png'} alt="picture 5" width={200} height={200} />
            </div>
          </ul>
          <p className="text-justify">
            Pencegahan terjadinya gigi berlubang pada pasien diabetes melitus,
            disarankan untuk melakukan perawatan gigi dan mulut yang baik,
            seperti menyikat gigi minimal 2 kali sehari, menggunakan pasta gigi
            yang mengandung fluoride, dan mengurangi konsumsi makanan dan
            minuman yang manis, lunak, dan melekat.
          </p>
          <p className="my-2 font-medium">2. Mulut Kering</p>
          <div className="my-4 flex justify-center">
            <div className="flex">
              <Image src={'/p4.png'} alt="picture 6" width={230} height={230} />
            </div>
          </div>
          <p className="text-justify">
            Mulut kering merupakan gejala umum yang banyak dialami oleh
            penderita DM. Pada penderita DM, mulut kering disebabkan akibar
            peningkatan kadar glukosa darah dan efek penggunaan obat seperti
            sulfonamida. Pengaruh DM dapat sampai merusak saraf yang
            mengendalikan produksi air liur dalam mulut yang menyebabkan
            produksi air liur tidak memadai. Selain itu penderita DM cenderung
            mengalami dehidrasi yang menyebabkan mulut menjadi kering. Perawatan
            mulut kering pada pasien diabetes dapat termasuk rujukan ke dokter
            spesialis penyakit dalam untuk mengganti obat antidiabetik dengan
            obat yang memiliki efek samping lebih sedikit pada mulut kering,
            seperti glimepiride, sulfonilurea generasi ketiga
          </p>
          <p className="my-2 font-medium">3. Penyakit Periodontal</p>
          <div className="my-4 flex justify-center">
            <div className="flex">
              <Image src={'/p5.png'} alt="picture 7" width={230} height={230} />
            </div>
          </div>
          <p className="text-justify">
            Penyakit periodontal merupakan kondisi peradangan kerusakan pada
            jaringan gigi dan tulang gigi. Gejala penyakit periodontal ditandai
            dengan :
          </p>
          <ul className="mx-4 my-1">
            <li>
              a.Gusi mudah berdarah saat menggosok gigi atau mengunyah makanan
            </li>
            <li>b.Gusi bengkak, berwarna merah, gelap atau keunguan</li>
            <li>c.Gusi terasa nyeri</li>
            <li>
              d.Gusi mulai menyusut dan membuat gigi terlihat menjadi lebih
              panjang
            </li>
            <li>e.Gusi terasa renggang</li>
          </ul>
          <p className="text-justify">
            Pencegahan penyakit periodontal pada penderita diabetes, dianjurkan
            untuk mengontrol kadar gula darah, menjaga kebersihan mulut dengan
            menyikat gigi minimal dua kali sehari dan menggunakan obat kumur,
            serta menghindari makanan dan minuman yang manis dan lengket serta
            melakukan pemeriksaan gigi rutin setiap 6 bulan sekali.
          </p>
          <p className="my-2 font-medium">4. Gigi Goyang</p>
          <div className="my-4 flex justify-center">
            <div className="flex">
              <Image src={'/p6.png'} alt="picture 8" width={230} height={230} />
            </div>
          </div>
          <p className="text-justify">
            Gigi goyang merupakan ciri-ciri penderita diabetes yang tidak
            menjaga diri dengan mengontrol kadar gula darah. Diabetes dapat
            meningkatkan risiko infeksi gusi. Infeksi gusi yang tidak diobati
            dapat merusak tulang di sekitar gigi sehingga menyebabkan gigi
            goyang. Penderita DM seringkali pulih lebih lambat. Artinya, jika
            terjadi kerusakan pada gusi atau jaringan mulut lainnya, maka proses
            penyembuhannya mungkin terpengaruh sehingga dapat menyebabkan gigi
            goyang. Penderita DM sebaiknya rutin memeriksakan gigi dan
            berkonsultasi dengan dokter gigi serta dokter spesialis penyakit
            dalam untuk mendapatkan penanganan yang tepat
          </p>
          <p className="my-2 font-medium">5. Rasa Mulut Terbakar</p>
          <div className="my-4 flex justify-center">
            <div className="flex">
              <Image src={'/p7.png'} alt="picture 9" width={230} height={230} />
            </div>
          </div>
          <p className="text-justify">
            Penderita diabetes melitus terkadang mengeluhkan rasa terbakar di
            mulut. Hal ini mungkin disebabkan oleh kontrol gula darah yang
            buruk, perubahan metabolisme pada mukosa mulut, penyakit pembuluh
            darah, infeksi Candida, dan neuropati. Penanganan untuk mengurangi
            rasa mulut terbakar tersebut maka penderita diabetes sebaiknya
            menjaga kebersihan mulut dengan menyikat gigi dua kali sehari (30
            menit setelah sarapan dan malam sebelum tidur). Selain itu, menjaga
            air dan hidrasi rongga mulut juga tak kalah penting.
          </p>
        </div>
      </div>
    </div>
  );
}
