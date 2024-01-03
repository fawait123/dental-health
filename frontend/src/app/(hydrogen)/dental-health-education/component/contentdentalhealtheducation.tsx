'use client';

import React, { useState } from 'react';
import { DentalHealthListOne } from './dentalhealthlist';
import { FaBookMedical } from 'react-icons/fa';
import ContentOne from './contentOne';
import ContentTwo from './contentTwo';
import ContentThree from './contentThree';
import ContentFour from './contentFour';
import ContentFive from './contentFive';

export const ContentDentalHealthEducation = () => {
  const [status, setStatus] = useState(false);
  const [name, setName] = useState(null);
  return (
    <>
      {status ? (
        name == 'Penyakit Gigi pada Pasien Diabetes Melitus' ? (
          <ContentOne setStatus={setStatus} setName={setName} />
        ) : name == 'Cara Menjaga Kesehatan Gigi' ? (
          <ContentTwo setStatus={setStatus} setName={setName} />
        ) : name == 'Cara Menggosok Gigi yang Baik dan Benar' ? (
          <ContentThree setStatus={setStatus} setName={setName} />
        ) : name == 'Diet Makanan bagi Kesehatan Gigi dan Diabetes Melitus' ? (
          <ContentFour setStatus={setStatus} setName={setName} />
        ) : name == 'Tindakan Perawatan Gigi pada Pasien DM' ? (
          <ContentFive setStatus={setStatus} setName={setName} />
        ) : null
      ) : (
        <>
          <DentalHealthListOne
            title=""
            name="Penyakit Gigi pada Pasien Diabetes Melitus"
            content="Gigi berlubang terjadi karena adanya proses pengikisan dari lapisan
          gigi oleh bakteri di permukaan rongga mulut. Sisa makanan yang
          tertinggal di permukaan gigi akan menghasilkan asam yang merusak
          lapisan gigi secara bertahap."
            icon={<FaBookMedical />}
            setStatus={setStatus}
            setName={setName}
          />
          <DentalHealthListOne
            title=""
            name="Cara Menjaga Kesehatan Gigi"
            content="Menggosok gigi 2x sehari dengan pasta gigi yang mengandung fluoride. Gunakan sikat gigi yang berbulu lembut dan sikatlah dengan gerakan lembut."
            icon={<FaBookMedical />}
            setStatus={setStatus}
            setName={setName}
          />
          <DentalHealthListOne
            title=""
            name="Cara Menggosok Gigi yang Baik dan Benar"
            content="Menggosok gigi dengan baik dan benar merupakan praktik yang penting dalam menjaga kesehatan gigi dan mulut. Sehingga perlu diperhatikan cara dan waktu yang tepat dalam menggosok gigi."
            icon={<FaBookMedical />}
            setStatus={setStatus}
            setName={setName}
          />
          <DentalHealthListOne
            title=""
            name="Diet Makanan bagi Kesehatan Gigi dan Diabetes Melitus"
            content="Hindari makanan dan minuman yang tinggi gula seperti permen, kue dan minuman manis karena dapat meningkatkan risiko kerussakan gigi dan gusi serta menyebabkan kadar gula meningkat."
            icon={<FaBookMedical />}
            setStatus={setStatus}
            setName={setName}
          />
          <DentalHealthListOne
            title=""
            name="Tindakan Perawatan Gigi pada Pasien DM"
            content="Pembersihan karang gigi (scaling) merupakan tindakan yang dilakukan oleh dokter gigi maupun perawat gigi untuk membersihkan karang gigi yang menempel pada permukaan gigi. Tindakan ini dilakukan sebagai upaya dalam mencegah akumulasi plak dan karang gigi yang menumpuk dan dapat menyebabkan penyakit gigi. Namun sebelum pembersihan karang gigi dilakukan, penderita DM harus dalam kondisi gula darah yang normal agar tidak terjadi perdarahan yang berlebihan ketika melakukan pembersihan karang gigi."
            icon={<FaBookMedical />}
            setStatus={setStatus}
            setName={setName}
          />
        </>
      )}
    </>
  );
};
