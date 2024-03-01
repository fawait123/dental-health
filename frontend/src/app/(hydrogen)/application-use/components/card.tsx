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
      <h1 className="text-center text-lg">
        PEDOMAN PENGGUNAAN SISTEM INFORMASI PEMANTAUAN DIABETES MELITUS (SIP
        DM-DENT)
      </h1>
      <h1 className="text-lg">A. Pengguna User</h1>
      <div className="grid grid-cols-1 gap-5 p-4">
        <ListComponent
          title="1. Login"
          description="Buka website menggunakan link <a href='https://sipdmdent.com/' target='blank' className='text-blue-400'>https://sipdmdent.com</a> kemudian memasukkan
              username dan password yang telah diberikan pada masing-masing responden oleh
              admin. Setelah itu klik login"
          image="/app-use/1.png"
        />
        <ListComponent
          title="2. Tampilan Menu User"
          description="Setelah login, akan muncul tampilan beranda pada akun user. Tampilan yang muncul
          yaitu pilihan menu untuk user dan grafik monitoring kesehatan yang telah diisikan
          sebelumnya."
          subDescription="Pilihan tampilan diagram garis baik pemeriksaan gigi dan mulut maupun data kontrol diabetes melitus dapat disesuaikan tanggal yang akan dipilih. Langkah mengganti tanggal pemantauan kesehatan sebagai berikut :"
          image="/app/2.png"
          subList={[
            {
              list: `1. klik pada icon <img src="/app-use/2.png" width="40px" height="40px"/>`,
              image: '/app-use/3.png',
            },
            {
              list: `2. Pilih rentang tanggal yang akan dipantau dengan mengganti tanggal, kemudian pilih tetapkan`,
              image: '/app-use/4.png',
            },
          ]}
        />
        <ListComponent
          title="3. Biodata Pasien"
          description="Pada menu bodata pasien, user dapat mencocokkan sesuai dengan identitas masingmasing individu meliputi nama lengkap, tempat tanggal lahir, jenis kelamin, nomor HP,
          alamat dan riwayat diabetes melitus yang diderita. Biodata dapat diedit sesuai dengan
          informasi yang dimiliki oleh pasien <p>Langkah untuk mengedit menu biodata :</p>"
          // image="/app/3.png"
          subList={[
            {
              list: `a. Klik pada icon nama di bagian kanan atas`,
              image: '/app-use/5.png',
            },
            {
              list: `b. Pilih menu Profil Saya, maka akan muncul tampilan seperti berikut :`,
              image: '/app-use/6.png',
            },
            {
              list: `c.	Lengkapi data yang belum terisi, kemudian klik Save, maka data akan terupdate`,
              image: '/app-use/7.png',
            },
          ]}
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
              image: '/app-use/8.png',
            },
            {
              list: `b. Klik pada icon <img src='/app/17.png' width='170px' height='170px' alt='icon'/> , maka akan muncul tampilan data yang harus
              diisikan`,
              image: '/app-use/9.png',
            },
            {
              list: `c. Setelah semua data diisi klik <img src='/app-use/11.png' width='170px' height='170px' alt='icon'/>`,
              image: '/app-use/12.png',
            },
            {
              list: `d. Rekomendasi kesehatan yang sesuai dengan hasil data yang diisikan akan muncul seperti berikut :`,
              image: '/app-use/13.png',
            },
            {
              list: `e. Isian data akan secara otomatis muncul pada rekap menu pemeriksaan kesehatan
              gigi dan mulut serta pada tampilan Dashboard`,
              image: '/app-use/14.png',
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
              image: '/app-use/16.png',
            },
            {
              list: `b. Penambahan data dapat diisikan dengan klik <img src='/app/20.png' width='170px' height='170px' alt='icon'/> `,
              image: '/app-use/17.png',
            },
            {
              list: `c. Isi kan hasil pemeriksaan yang telah dilakukan, kemudian klik <img src='/app/21.png' width='170px' height='170px' alt='icon'/> `,
              image: '/app-use/18.png',
            },
            {
              list: `d. Setelah data ditambahkan, maka akan muncul rekomendasi yang sesuai dengan data`,
              image: '/app/9.png',
            },
            {
              list: `e. Isian data akan secara otomatis muncul pada rekap menu pemeriksaan kesehatan
              gigi dan mulut serta pada tampilan Dashboard`,
              image: '/app-use/19.png',
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
              image: '/app-use/20.png',
            },
            {
              list: `b. Klik pada tanggal yang akan diisi kemudian klik pilihan pagi dan malam dan klik
              tambah`,
              image: '/app-use/21.png',
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
              image: '/app-use/22.png',
            },
            {
              list: `b. Klik menu yang akan dibaca untuk mencari informasi terkait edukasi kesehatan gigi
              dan mulut pada icon <img src='/app/24.png' width='40px' height='40px' alt='icon'/> , maka akan muncul informasi yang dipilih. Untuk kembali
              ke menu sebelumnya klik icon <img src='/app/25.png' width='40px' height='40px' alt='icon'/> `,
              image: '/app-use/23.png',
            },
            {
              list: `c.	Untuk kembali ke menu sebelumnya klik <img src="/app-use/24.png"/> yang ada di samping judul materi`,
              image: '/app-use/25.png',
            },
          ]}
        />
        <ListComponent
          title="8. Menu Panduan"
          description={`Menu ini berisikan panduan tata cara penggunaan Sistem Informasi Pemantauan Diabetes Melitus (SIP DM-DENT Monitoring) dengan baik dan benar, sehingga dapat memberikan tutorial penggunaan website secara mandiri. Menu Panduan dapat dilihat dengan klik <img src="/app-use/26.png" width="120px" height="120px"/>`}
          image="/app-use/27.png"
          subDescription={`Panduan dapat diunduh pada link berikut : <a href="https://bit.ly/SIP_DM-DENT" className="text-blue-500" target="blank">https://bit.ly/SIP_DM-DENT</a>`}
        />
        <ListComponent
          title="9. Log Out"
          description="Menu logput digunakan untuk keluar dari sistem apabila user telah selesai menggunakan sistem SIP DM-DENT Monitoring dengan cara klik tombol pada bagian foto user dikanan atas yang berbentuk bulat hitam kemudian klik keluar"
          image="/app-use/28.png"
        />
      </div>
      <h1 className="text-lg">B. Pengguna Tenaga Kesehatan</h1>
      <div className="grid grid-cols-1 gap-5 p-4">
        <ListComponent
          title="1. Login"
          description="Buka website menggunakan link <a href='https://sipdmdent.com/' target='blank' className='text-blue-400'>https://sipdmdent.com</a> kemudian memasukkan
              username dan password yang telah diberikan pada masing-masing responden oleh
              admin. Setelah itu klik login"
          image="/app-use/1.png"
        />
        <ListComponent
          title="2. Tampilan Dashboard"
          description="Tampilan dasbord tenaga kesehatan berisikan rekapitulasi monitoring kesehatan dari pasien, sehingga tenaga kesehatan dapat memantau kesehatan pasien."
          subDescription="Pilihan tampilan diagram garis baik pemeriksaan gigi dan mulut maupun data kontrol diabetes melitus serta nama pasien dapat disesuaikan dengan data yang akan dipilih. Langkah mengganti tanggal pemantauan kesehatan dan nama pasien sebagai berikut :"
          image="/app/2.png"
          subList={[
            {
              list: `1. klik pada icon <img src="/app-use/2.png" width="40px" height="40px"/>`,
              image: '/app-use/3.png',
            },
            {
              list: `2. Pilih rentang tanggal yang akan dipantau dengan mengganti tanggal, kemudian pilih tetapkan`,
              image: '/app-use/4.png',
            },
          ]}
        />
         <ListComponent
          title="3. Menu Profile"
          description="Menu ini berisikan data diri tenaga kesehatan yang berisikan nama lengkap, username, nomor telepon, foto profile, jenis kelamin dan alamat. Langkah mengisi menu Profile :"
          // image="/app/3.png"
          subList={[
            {
              list: `a. Menu ini dapat diklik pada icon di sebelah kanan, kemudian klik “Profile Saya” `,
              image: '/app-use/5.png',
            },
            {
              list: `b.	Maka akan muncul menu Profile sebagai berikut :`,
              image: '/app-use/6.png',
            },
            {
              list: `c.	Untuk melakukan perubahan klik Save dan data akan terupdate secara otomatis`,
              image: '/app-use/7.png',
            },
          ]}
        />
        <ListComponent
          title="4. Menu Kontrol Diabetes Melitus"
          description="Pada menu ini, tenaga kesehatan dapat menambahkan hasil pemeriksaan yang telah dilakukan pada pasien. Cara menambahkan hasil pemeriksaan yang telah dilakukan pada pasien :"
          subList={[
            {
              list: `a. Klik menu Kontrol Diabetes Melitus pada icon <img src='/app/16.png' width='170px' height='170px' alt='icon'/> , maka
                    akan muncul tampilan berikut `,
              image: '/app-use/29.png',
            },
            {
              list: `b. Klik pada icon <img src='/app/17.png' width='170px' height='170px' alt='icon'/> , maka akan muncul tampilan data yang harus
              diisikan`,
              image: '/app-use/30.png',
            },
            {
              list: `c. Pilih nama pasien yang ingin ditambahkan namanya`,
              image: '/app-use/31.png',
            },
            {
              list: `d. Setelah semua data diisi klik <img src='/app-use/11.png' width='170px' height='170px' alt='icon'/>`,
              image: '/app-use/32.png',
            },
            {
              list: `e. Rekomendasi kesehatan yang sesuai dengan hasil data yang diisikan akan muncul seperti berikut :`,
              image: '/app-use/13.png',
            },
          ]}
        />
        <ListComponent
          title="5. Menu Pemeriksaan Gigi dan Mulut"
          description="Pada menu pemeriksaan gigi dan mulut, tenaga kesehatan dapat menambahkan hasil pemeriksaan yang telah dilakukan pada pasien."
          subList={[
            {
              list: `a. Klik menu Pemeriksaan Gigi dan Mulut pada icon <img src='/app/19.png' width='170px' height='170px' alt='icon'/> , maka
              akan muncul menu sebagai berikut`,
              image: '/app-use/33.png',
            },
            {
              list: `b. Penambahan data dapat diisikan dengan klik <img src='/app/20.png' width='170px' height='170px' alt='icon'/> `,
              image: '/app-use/34.png',
            },
            {
              list: `c. pilih data pasien yang ingin ditambahkan datanya`,
              image: '/app-use/35.png',
            },
            {
              list: `d. Isi kan hasil pemeriksaan yang telah dilakukan, kemudian klik <img src='/app/21.png' width='170px' height='170px' alt='icon'/> `,
              image: '/app-use/18.png',
            },
            {
              list: `e. Setelah data ditambahkan, maka akan muncul rekomendasi yang sesuai dengan data`,
              image: '/app/9.png',
            },
          ]}
        />
        <ListComponent
          title="8. Menu Panduan"
          description={`Menu ini berisikan panduan tata cara penggunaan Sistem Informasi Pemantauan Diabetes Melitus (SIP DM-DENT Monitoring) dengan baik dan benar, sehingga dapat memberikan tutorial penggunaan website secara mandiri. Menu Panduan dapat dilihat dengan klik <img src="/app-use/26.png" width="120px" height="120px"/>`}
          image="/app-use/27.png"
          subDescription={`Panduan dapat diunduh pada link berikut : <a href="https://bit.ly/SIP_DM-DENT" className="text-blue-500" target="blank">https://bit.ly/SIP_DM-DENT</a>`}
        />
        <ListComponent
          title="9. Log Out"
          description="Menu logput digunakan untuk keluar dari sistem apabila user telah selesai menggunakan sistem SIP DM-DENT Monitoring dengan cara klik tombol pada bagian foto user dikanan atas yang berbentuk bulat hitam kemudian klik keluar"
          image="/app-use/28.png"
        />
      </div>
    </WidgetCard>
  );
}
