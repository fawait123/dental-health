'use client';

import React, { useState } from 'react';
import { DentalHealthListOne } from './dentalhealthlist';
import { FaBookMedical } from 'react-icons/fa';
import RecentAppList from '@/app/(hydrogen)/widgets/cards/recent-app-list';

export const ContentDentalHealthEducation = () => {
  const [status, setStatus] = useState(false);
  return (
    <>
      {status ? (
        <RecentAppList setStatus={setStatus} />
      ) : (
        <DentalHealthListOne
          name="Penyakit Gigi pada Pasien Diabetes Melitus"
          content="Gigi berlubang terjadi karena adanya proses pengikisan dari lapisan
          gigi oleh bakteri di permukaan rongga mulut. Sisa makanan yang
          tertinggal di permukaan gigi akan menghasilkan asam yang merusak
          lapisan gigi secara bertahap."
          icon={<FaBookMedical />}
          setStatus={setStatus}
        />
      )}
    </>
  );
};
