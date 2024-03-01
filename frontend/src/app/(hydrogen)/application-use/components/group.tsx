import Image from 'next/image'
import React from 'react'

export const GroupComponent = ({title, subTitle, description, imageUrl, }) => {
  return (
    <div>
        <h4>A. Pengguna User</h4>
        <h6 className='ml-4'>1. Login</h6>
        <p className='ml-4 text-justify mt-4 mb-2'>Buka website menggunakan link https://sipdmdent.com/ kemudian memasukkan username dan password yang telah diberikan pada masing-masing responden oleh admin. Setelah itu klik login</p>
        <Image className='m-auto ' width={600} height={120} src="/app-use/1.png" alt='Gambar' />
        <p className='ml-4 text-justify mt-2'>Pilihan tampilan diagram garis baik pemeriksaan gigi dan mulut maupun data kontrol diabetes melitus dapat disesuaikan tanggal yang akan dipilih. Langkah mengganti tanggal pemantauan kesehatan sebagai berikut :</p>
    </div>
  )
}
