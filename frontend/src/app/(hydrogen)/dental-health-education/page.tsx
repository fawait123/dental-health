import { metaObject } from '@/config/site.config';
import PageHeader from '@/app/shared/page-header';
import { routes } from '@/config/routes';
import RecentAppList from '@/app/(hydrogen)/widgets/cards/recent-app-list';
import { DentalHealthListOne } from './component/dentalhealthlist';
import { FaBookMedical } from 'react-icons/fa';
import { useState } from 'react';
import { ContentDentalHealthEducation } from './component/contentdentalhealtheducation';

export const metadata = {
  ...metaObject('Edukasi Kesehatan Gigi'),
};

const pageHeader = {
  title: 'Edukasi Kesehatan Gigi',
  breadcrumb: [
    {
      name: 'Edukasi Kesehatan Gigi',
    },
    {
      name: 'index',
    },
  ],
};

export default function ApplicationUsePage() {
  return (
    <>
      <PageHeader
        title={pageHeader.title}
        breadcrumb={pageHeader.breadcrumb}
      ></PageHeader>
      <ContentDentalHealthEducation />
    </>
  );
}
