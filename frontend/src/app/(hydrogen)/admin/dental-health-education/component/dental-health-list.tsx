import React, { useState } from 'react';
import { PiArrowLineUpRightBold } from 'react-icons/pi';
import { Title, Text } from 'rizzui';

type TypePropsList = {
  icon?: any;
  name?: string;
  content?: string;
  url?: string;
};
export const DentalHealthList = ({
  icon,
  name,
  content,
  url,
}: TypePropsList) => {
  return (
    <div className="flex items-start">
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
            href={url}
            target="_blank"
            rel="noopener noreferrer nofollow noindex"
            className="inline-flex rounded-md border border-gray-200 p-2"
          >
            <PiArrowLineUpRightBold />
          </a>
        </div>
      </div>
    </div>
  );
};
