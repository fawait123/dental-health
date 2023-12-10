import { Title, Text } from '@/components/ui/text';
import WidgetCard from '@/components/cards/widget-card';
import { teams as apps } from '@/data/teams-data';
import { PiArrowLineUpRightBold } from 'react-icons/pi';
import Image from 'next/image';

export default function RecentAppList() {
  return (
    <div className="flex w-full justify-center">
      <div className="w-5/6">
        <div className="leading-9">
          <Text as="b" className="text-xl">
            Penyakit Gigi pada Pasien Diabetes Melitus
          </Text>
          <p className="my-2 font-medium">1.Gigi Berlubang (Karies Gigi)</p>
          <div className="my-4 flex justify-center">
            <div className="flex">
              <Image
                src={'/picture1.png'}
                alt="picture 1"
                width={180}
                height={180}
              />
              <Image
                src={'/picture2.png'}
                alt="picture 2"
                width={180}
                height={180}
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
              <Image
                src={'/picture3.png'}
                alt="picture 3"
                width={180}
                height={180}
              />
            </div>
            <li>
              b.Kandungan gula pada sisa makanan akan diproses oleh bakteri dan
              menjadi asam yang menyebabkan gigi berlubang
            </li>
            <div className="my-4 flex justify-center">
              <Image
                src={'/picture4.png'}
                alt="picture 4"
                width={180}
                height={180}
              />
            </div>
            <li>
              c.Seiring berjalannya waktu, gigi berlubang akan meluas dari
              lapisan terluar gigi (email gigi) ke lapisan dalam gigi (dentin)
              hingga saraf gigi dan dapat menyebabkan rasa linu atau sakit
            </li>
            <div className="my-4 flex justify-center">
              <Image
                src={'/picture5.png'}
                alt="picture 5"
                width={180}
                height={180}
              />
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
              <Image
                src={'/picture6.png'}
                alt="picture 6"
                width={180}
                height={180}
              />
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
              <Image
                src={'/picture7.png'}
                alt="picture 7"
                width={180}
                height={180}
              />
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
              <Image
                src={'/picture8.png'}
                alt="picture 8"
                width={180}
                height={180}
              />
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
              <Image
                src={'/picture9.png'}
                alt="picture 9"
                width={180}
                height={180}
              />
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
          <Text as="b" className="text-xl">
            Cara Menjaga Kesehatan Gigi
          </Text>
          <ul className="mx-4 my-1">
            <li>1. Rajin menggosok gigi</li>
            <div className="my-4 flex justify-center">
              <Image
                src={'/picture10.png'}
                alt="picture 10"
                width={180}
                height={180}
              />
            </div>
            <p className="py-4">
              Menggosok gigi 2x sehari dengan pasta gigi yang mengandung
              fluoride. Gunakan sikat gigi yang berbulu lembut dan sikatlah
              dengan gerakan lembut.
            </p>
            <li>2. Minum air putih</li>
            <div className="my-4 flex justify-center">
              <Image
                src={'/picture11.png'}
                alt="picture 11"
                width={180}
                height={180}
              />
            </div>
            <p className="py-4">
              Minum air putih dapat membantu membersihkan dan meluruhkan sisa
              makanan yang menempel di permukaan gigi. Hal ini dapat mencegah
              terjadinya penumpukan sisa makanan yang dapat menyebabkan
              terjadinya gigi berlubang.
            </p>
            <li>3.Konsumsi buah dan sayur</li>
            <div className="my-4 flex justify-center">
              <Image
                src={'/picture12.png'}
                alt="picture 12"
                width={180}
                height={180}
              />
            </div>
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
                src={'/picture13.png'}
                alt="picture 13"
                width={180}
                height={180}
              />
            </div>
            <p className="py-4">
              Mengkonsumsi makanan yang manis dan melekat seperti donat, coklat,
              sirup, dan permen secara berlebihan dapat meningkatkan kadar gula
              darah. Hal ini juga dapat menyebabkan terjadinya gigi berlubang
              akibat kadar gula yang tinggi pada rongga mulut.
            </p>
            <li>5.Rutin periksa ke dokter gigi</li>
            <div className="my-4 flex justify-center">
              <Image
                src={'/picture14.png'}
                alt="picture 14"
                width={180}
                height={180}
              />
            </div>
            <p className="py-4">
              Penting untuk mengunjungi dokter gigi setidaknya 6 bulan sekali
              untuk melakukan pemeriksaan rutin dan pembersihan karang gigi.
            </p>
          </ul>
          <Text as="b" className="mb-5 text-xl">
            Cara Menggosok Gigi yang Baik dan Benar
          </Text>
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
                src={'/picture16.png'}
                alt="picture 16"
                width={180}
                height={180}
              />
            </div>
            <li>
              2.Gerakkan sikat dengan gerakan kecil perlahan dan memutar pada
              gigi bagian samping baik gigi rahang atas maupun rahang bawah.
            </li>
            <div className="my-4 flex justify-center">
              <Image
                src={'/picture17.png'}
                alt="picture 17"
                width={180}
                height={180}
              />
            </div>
            <li>
              3.Arahkan sikat di permukaan gigi bagian dalam, sikar secara
              perlahan dengan gerakan maju, mundur dan berputar
            </li>
            <div className="my-4 flex justify-center">
              <Image
                src={'/picture18.png'}
                alt="picture 18"
                width={180}
                height={180}
              />
            </div>
            <li>
              4.Bersihkan bagian dalam permukaan gigi depan atas dan gigi bawah
              dengan gerakan mencungkil secara perlahan.
            </li>
            <div className="my-4 flex justify-center">
              <Image
                src={'/picture19.png'}
                alt="picture 19"
                width={180}
                height={180}
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
                src={'/picture20.png'}
                alt="picture 20"
                width={180}
                height={180}
              />
            </div>
          </ul>
          <p className="text-justify">Tips sikat gigi yang baik :</p>
          <div className="my-4 flex justify-center">
            <Image src={'/sc1.png'} alt="picture 20" width={600} height={600} />
          </div>
          <Text as="b" className="mb-5 text-xl">
            Diet Makanan bagi Kesehatan Gigi dan Diabetes Melitus
          </Text>
          <ul className="mx-4 my-1">
            <li>1.Konsumsi makanan rendah gula</li>
            <div className="my-4 flex justify-center">
              <Image
                src={'/picture21.png'}
                alt="picture 21"
                width={180}
                height={180}
              />
            </div>
            <p className="py-4">
              Hindari makanan dan minuman yang tinggi gula seperti permen, kue
              dan minuman manis karena dapat meningkatkan risiko kerussakan gigi
              dan gusi serta menyebabkan kadar gula meningkat.
            </p>
            <li>2.Pilih makanan yang berserat</li>
            <div className="my-4 flex justify-center">
              <Image
                src={'/picture22.png'}
                alt="picture 22"
                width={180}
                height={180}
              />
            </div>
            <p className="py-4">
              Konsumsi makanan yang beserat seperti sayuran, buah-buahan dan
              biji-bijian yang mampu meningkatkan kerja kelenjar air liur yang
              dapat membantu membersihkan gigi dan gusi serta mengontrol kadar
              gula darah.
            </p>
            <li>3.Batasi makanan yang bersifat asam</li>
            <div className="my-4 flex justify-center">
              <Image
                src={'/picture23.png'}
                alt="picture 22"
                width={180}
                height={180}
              />
            </div>
            <p className="py-4">
              Makanan dan minuman yang tinggi asam seperti jeruk dan minuman
              berkarbonasi (soda) dapat mempercepat terjadinya gigi berlubang.
            </p>
            <li>4.Konsumsi protein yang berkualitas</li>
            <div className="my-4 flex justify-center">
              <Image
                src={'/picture24.png'}
                alt="picture 22"
                width={180}
                height={180}
              />
            </div>
            <p className="py-4">
              Pilih sumber protein yang berkualitas seperti daging tanpa lemak,
              ikan, telur dan kacang-kacangan. Makanan dengan kandungan protein
              tinggi dapat membantu memperbaiki jaringan gusi dan memperkuat
              gigi.
            </p>
            <li>5.Minum air putih</li>
            <div className="my-4 flex justify-center">
              <Image
                src={'/picture25.png'}
                alt="picture 22"
                width={180}
                height={180}
              />
            </div>
            <p className="py-4">
              Pastikan minum air putih yang cukup, karena air dapat membantu
              memebrsihkan sisa makanan di mulut dan mengurangi risiko mulut
              kering yang biasanya terjadi pada penderita DM.
            </p>
          </ul>
          <Text as="b" className="mb-5 text-xl">
            Tindakan Perawatan Gigi pada Pasien DM
          </Text>
          <ul className="mx-4 my-1">
            <li>1.Pembersihan karang gigi</li>
            <div className="my-4 flex justify-center">
              <Image
                src={'/picture26.png'}
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
                src={'/picture27.png'}
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
                src={'/picture28.png'}
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
                src={'/picture29.png'}
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
                src={'/picture30.png'}
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
