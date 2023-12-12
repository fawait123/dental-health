'use client';

import React, { useState } from 'react';
import { PiArrowLineUpRightBold } from 'react-icons/pi';
import { Title, Text } from '@/components/ui/text';
import WidgetCard from '@/components/cards/widget-card';

type TypePropsList = {
  icon?: any;
  name?: string;
  content?: string;
  url?: string;
  setStatus?: any;
};
export const DentalHealthListOne = ({
  icon,
  name,
  content,
  url,
  setStatus,
}: TypePropsList) => {
  return (
    <WidgetCard
      title={'Edukasi Kesehatan Gigi'}
      titleClassName="leading-none"
      headerClassName="mb-3 lg:mb-4"
    >
      <div className="my-4 flex items-start">
        <div className="me-3 shrink-0">{icon}</div>
        <div className="flex w-[calc(100%-48px)] items-center justify-between">
          <div className="w-[calc(100%-40px)]">
            <Title as="h4" className="mb-1 text-sm font-semibold">
              {name}
            </Title>
            <Text className="w-[94%] truncate text-gray-500">{content}</Text>
          </div>
          <div>
            <a
              onClick={() => {
                setStatus(true);
              }}
              href={url}
              target="_blank"
              rel="noopener noreferrer nofollow noindex"
              className="inline-flex cursor-pointer rounded-md border border-gray-200 p-2"
            >
              <PiArrowLineUpRightBold />
            </a>
          </div>
        </div>
      </div>
    </WidgetCard>
  );
};
