'use client';

import { Text } from '@/components/ui/text';
import WidgetCard from '@/components/cards/widget-card';
import {
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  LineChart,
  Line,
} from 'recharts';
import { PiDownloadSimple } from 'react-icons/pi';
import SimpleBar from '@/components/ui/simplebar';
import { useMedia } from '@/hooks/use-media';
import cn from '@/utils/class-names';

type TypeDataKey = {
  name?: string;
  slug?: string;
  color?: string;
  bgcolor?: string;
};
type TypeActivityReport = {
  className?: string;
  rows?: any[];
  title?: string;
  dataKey?: TypeDataKey[];
  desciption?: string;
};
export default function ActivityReport({
  className,
  rows,
  title,
  dataKey,
  desciption,
}: TypeActivityReport) {
  const isTablet = useMedia('(max-width: 800px)', false);

  return (
    <WidgetCard
      title={title || ''}
      description={desciption || ''}
      titleClassName="text-lg xl:text-xl font-semibold"
      descriptionClassName="text-sm font-light my-3"
      className={className}
    >
      <div className="mt-3 flex items-start 2xl:mt-5">
        {dataKey.map((item, index) => (
          <div key={index} className="me-9 flex items-start">
            <div className={cn('me-3 rounded p-2 text-white', item?.bgcolor)}>
              <PiDownloadSimple className="h-6 w-6" />
            </div>
            <div>
              <Text className="text-gray-500">{item?.name}</Text>
              <Text className="font-lexend text-sm font-semibold text-gray-900 dark:text-gray-700 2xl:text-base">
                {rows.reduce(
                  (prev, next) => prev + parseInt(next[item?.slug]),
                  0
                )}
              </Text>
            </div>
          </div>
        ))}
      </div>
      <SimpleBar>
        <div className="h-96 w-full pt-9">
          <ResponsiveContainer
            width="100%"
            height="100%"
            {...(isTablet && { minWidth: '700px' })}
          >
            <LineChart width={600} height={300} data={rows}>
              {dataKey.map((item, index) => (
                <Line
                  key={index}
                  type="monotone"
                  dataKey={item?.slug}
                  strokeWidth={2}
                  stroke={item?.color}
                />
              ))}

              <CartesianGrid stroke="#ccc" />
              <XAxis dataKey="name" />
              <YAxis />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </SimpleBar>
    </WidgetCard>
  );
}
