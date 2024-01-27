import { Title, Text } from '@/components/ui/text';
import WidgetCard from '@/components/cards/widget-card';
import { teams as apps } from '@/data/teams-data';
import { PiArrowLineUpRightBold } from 'react-icons/pi';
import ListComponent from './list';

export default function CardApplicationUse() {
  return (
    <WidgetCard
      title={''}
      titleClassName="leading-none"
      headerClassName="mb-3 lg:mb-4"
    >
      <div className="grid grid-cols-1 gap-5">
        <h1 className="text-center text-lg">
          Penggunaan SIP DM-DENT Monitoring
        </h1>
        <ListComponent
          title="1. Login"
          description="Buka website menggunakan link <a href='https://sipdmdent.com/' target='blank' className='text-blue-400'>https://sipdmdent.com</a> kemudian memasukkan
              username dan password yang telah diberikan pada masing-masing responden oleh
              admin. Setelah itu klik login"
          image="/app/1.png"
        />
        <ListComponent
          title="2. Tampilan Menu User"
          description="Setelah login, akan muncul tampilan beranda pada akun user. Tampilan yang muncul
          yaitu pilihan menu untuk user dan grafik monitoring kesehatan yang telah diisikan
          sebelumnya."
          image="/app/2.png"
        />
        <ListComponent
          title="3. Biodata Pasien"
          description="Pada menu bodata pasien, user dapat mencocokkan sesuai dengan identitas masingmasing individu meliputi nama lengkap, tempat tanggal lahir, jenis kelamin, nomor HP,
          alamat dan riwayat diabetes melitus yang diderita. Biodata dapat diedit sesuai dengan
          informasi yang dimiliki oleh pasien"
          image="/app/3.png"
        />
        <ListComponent
          title="4. Menu Kontrol Diabetes Melitus"
          description="Pada menu ini pasien mengisikan kontrol gula darah, tekanan darah, konsumsi obat dan
          aktivitas fisik yang dilakukan penderita diabetes melitus.
          Langkah pengisian data :"
          subList={[
            {
              list: `a. Klik menu Kontrol Diabetes Melitus pada icon <img src='/app/16.png' width='170px' height='170px' alt='icon'/> , maka
                    akan muncul tampilan berikut `,
              image: '/app/4.png',
            },
            {
              list: `b. Klik pada icon <img src='/app/17.png' width='170px' height='170px' alt='icon'/> , maka akan muncul tampilan data yang harus
              diisikan`,
              image: '/app/5.png',
            },
            {
              list: `c. Setelah semua data diisi klik icon <img src='/app/18.png' width='170px' height='170px' alt='icon'/> , maka akan muncul
              rekomendasi kesehatan yang sesuai dengan hasil data yang diisikan.`,
              image: '/app/6.png',
            },
            {
              list: `d. Isian data akan secara otomatis muncul pada rekap menu pemeriksaan kesehatan
              gigi dan mulut serta pada tampilan Dashboard`,
            },
          ]}
        />
        <ListComponent
          title="5. Menu Pemeriksaan Gigi dan Mulut"
          description="Menu ini berisikan pengisian hasil pemeriksaan kondisi kesehatan gigi dan mulut pada
          pasien. Kondisi yang diisi diantaranya debris index, CPITN, jumlah gigi, jumlah gigi
          goyang dan jumlah gigi berlubang.
          Langkah pengisian data"
          subList={[
            {
              list: `a. Klik menu Pemeriksaan Gigi dan Mulut pada icon <img src='/app/19.png' width='170px' height='170px' alt='icon'/> , maka
              akan muncul menu sebagai berikut`,
              image: '/app/7.png',
            },
            {
              list: `b. Penambahan data dapat diisikan dengan klik <img src='/app/20.png' width='170px' height='170px' alt='icon'/> `,
            },
            {
              list: `c. Isi kan hasil pemeriksaan yang telah dilakukan, kemudian klik <img src='/app/21.png' width='170px' height='170px' alt='icon'/> `,
              image: '/app/8.png',
            },
            {
              list: `d. Setelah data ditambahkan, maka akan muncul rekomendasi yang sesuai dengan data`,
              image: '/app/9.png',
            },
            {
              list: `e. Isian data akan secara otomatis muncul pada rekap menu pemeriksaan kesehatan
              gigi dan mulut serta pada tampilan Dashboard`,
            },
          ]}
        />
        <ListComponent
          title="6. Menu Ceklis Kepatuhan Menggosok Gigi"
          description="Menu ini berisikan ceklis kepatuhan dalam menggosok gigi pada penderita diabetes
          melitus. Ceklis yang diisikan adalah ceklis menggosok gigi pada pagi dan malam.
          Langkah pengisian data :"
          subList={[
            {
              list: `a. Klik menu Ceklist Menggosok Gigi <img src='/app/22.png' width='170px' height='170px' alt='icon'/> , maka akan muncul
              tampilan kalender sebagai berikut :`,
              image: '/app/10.png',
            },
            {
              list: `b. Klik pada tanggal yang akan diisi kemudian klik pilihan pagi dan malam dan klik
              tambah`,
              image: '/app/11.png',
            },
            {
              list: `c. Setelah diisikan pada ceklis menggosok gigi, maka pada kalender akan muncul
              keterangan pengisian menggosok gigi`,
              image: '/app/12.png',
            },
          ]}
        />
        <ListComponent
          title="7. Menu Edukasi Kesehatan Gigi"
          description="Menu ini berisikan materi penyuluhan mengenai keterkaitan penyakit diabetes melitus
          dengan penyakit gigi, cara menjaga kesehatan gigi, langkah dalam menggosok gigi
          yang baik dan benar, diet makanan dan tindakan perawatan gigi pada penderita diabetes
          melitus. Langkah untuk melihat edukasi kesehatan gigi :"
          subList={[
            {
              list: `a. Klik menu Edukasi Kesehatan Gigi <img src='/app/23.png' width='170px' height='170px' alt='icon'/> , maka akan muncul
              tampilan menu sebagai berikut :`,
              image: '/app/13.png',
            },
            {
              list: `b. Klik menu yang akan dibaca untuk mencari informasi terkait edukasi kesehatan gigi
              dan mulut pada icon <img src='/app/24.png' width='40px' height='40px' alt='icon'/> , maka akan muncul informasi yang dipilih. Untuk kembali
              ke menu sebelumnya klik icon <img src='/app/25.png' width='40px' height='40px' alt='icon'/> `,
              image: '/app/14.png',
            },
          ]}
        />
        <ListComponent
          title="8. Menu Panduan"
          description="Menu ini berisikan panduan tata cara penggunaan Sistem Informasi Pemantauan
          Diabetes Melitus (SIP DM-DENT Monitoring) dengan baik dan benar, sehingga dapat
          memberikan tutorial penggunaan website secara mandiri. Menu Panduan dapat dilihat
          dengan klik icon
          Panduan dapat diunduh pada link berikut : <a href='https://bit.ly/SIP_DM-DENT' target='blank' className='text-blue-400'>https://bit.ly/SIP_DM-DENT</a>"
        />
        <ListComponent
          title="9. Log Out"
          description="Menu logput digunakan untuk keluar dari sistem apabila user telah selesai
          menggunakan sistem SIP DM-DENT Monitoring dengan cara klik tombol pada bagian
          foto user kemudian klik keluar"
          image="/app/15.png"
        />
      </div>
    </WidgetCard>
  );
}
