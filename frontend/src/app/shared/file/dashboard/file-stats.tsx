'use client';

import cn from '@/utils/class-names';
import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { useScrollableSlider } from '@/hooks/use-scrollable-slider';
import { PiCaretLeftBold, PiCaretRightBold } from 'react-icons/pi';
import MetricCard from '@/components/cards/metric-card';
import CircleProgressBar from '@/components/charts/circle-progressbar';
import TrendingUpIcon from '@/components/icons/trending-up';
import moment from 'moment';
import { FaUserCog, FaBell, FaPaintBrush } from 'react-icons/fa';
import { RiHealthBookFill } from 'react-icons/ri';
import { GiHealingShield } from 'react-icons/gi';

type FileStatsType = {
  className?: string;
  data?: TypeData;
};

type TypeData = {
  brusingCheckList?: TypeList;
  controlDiabetes?: TypeList;
  dentalHealth?: TypeList;
  notification?: TypeList;
  user?: TypeList;
};

type TypeList = {
  count?: number;
  latestUpdate?: object;
};

const filesStatData = [
  {
    id: 1,
    title: 'Total Pengguna',
    metric: '36,476 GB',
    fill: '#3872FA',
    percentage: 32,
    increased: true,
    decreased: false,
    value: '+32.40',
    key: 'user',
    icons: <FaUserCog />,
    iconClassName: 'bg-orange-700',
    classDate: 'text-orange-700',
  },
  {
    id: 2,
    title: 'Total Notifikasi',
    metric: '53,406 GB',
    fill: '#15803d',
    percentage: 48,
    increased: false,
    decreased: true,
    value: '-18.45',
    key: 'notification',
    icons: <FaBell />,
    iconClassName: 'bg-green-700',
    classDate: 'text-green-700',
  },
  {
    id: 3,
    title: 'Total Menggosok Gigi',
    metric: '90,875 GB',
    fill: '#EE0000',
    percentage: 89,
    increased: true,
    decreased: false,
    value: '+20.34',
    key: 'brusingCheckList',
    icons: <FaPaintBrush />,
    iconClassName: 'bg-emerald-700',
    classDate: 'text-emerald-700',
  },
  {
    id: 4,
    title: 'Total Kontrol Diabetes',
    metric: '63,076 GB',
    fill: '#3872FA',
    percentage: 54,
    increased: true,
    decreased: false,
    value: '+14.45',
    key: 'controlDiabetes',
    icons: <RiHealthBookFill />,
    iconClassName: 'bg-cyan-700',
    classDate: 'text-cyan-700',
  },
  {
    id: 5,
    title: 'Total Pemeriksaan Kesahatan Gigi',
    metric: '63,076 GB',
    fill: '#3872FA',
    percentage: 54,
    increased: true,
    decreased: false,
    value: '+14.45',
    key: 'dentalHealth',
    icons: <GiHealingShield />,
    iconClassName: 'bg-blue-700',
    classDate: 'text-blue-700',
  },
];

export function FileStatGrid({
  className,
  data,
}: {
  className?: string;
  data?: TypeData;
}) {
  return (
    <>
      {filesStatData.map((stat: any) => {
        return (
          <MetricCard
            key={stat.id}
            title={stat.title}
            metric={data[stat.key]?.count ?? 0}
            metricClassName="3xl:text-[22px]"
            className={cn('w-full max-w-full justify-between', className)}
            icon={stat?.icons}
            iconClassName={cn(stat?.iconClassName, 'text-gray-50')}
          >
            <Text className="mt-3 flex items-center leading-none text-gray-500">
              <Text
                as="span"
                className={cn(
                  'me-2 inline-flex items-center font-medium',
                  stat?.classDate
                )}
              >
                <TrendingUpIcon className="me-1 h-4 w-4" />
                {moment(data[stat.key]?.latestUpdate?.createdAt).format(
                  'DD MMMM YYYY'
                )}
              </Text>
            </Text>
          </MetricCard>
        );
      })}
    </>
  );
}

export default function FileStats({ className, data }: FileStatsType) {
  const {
    sliderEl,
    sliderPrevBtn,
    sliderNextBtn,
    scrollToTheRight,
    scrollToTheLeft,
  } = useScrollableSlider();
  return (
    <div
      className={cn(
        'relative flex w-auto items-center overflow-hidden',
        className
      )}
    >
      <Button
        title="Prev"
        variant="text"
        ref={sliderPrevBtn}
        onClick={() => scrollToTheLeft()}
        className="!absolute left-0 top-0 z-10 !h-full w-8 !justify-start rounded-none bg-gradient-to-r from-white via-white to-transparent px-0 text-gray-500 hover:text-black dark:from-gray-50/80 dark:via-gray-50/80 3xl:hidden"
      >
        <PiCaretLeftBold className="h-5 w-5" />
      </Button>
      <div className="w-full overflow-hidden">
        <div
          ref={sliderEl}
          className="custom-scrollbar-x grid grid-flow-col gap-5 overflow-x-auto scroll-smooth 2xl:gap-6 3xl:gap-8"
        >
          <FileStatGrid data={data} className="min-w-[292px]" />
        </div>
      </div>
      <Button
        title="Next"
        variant="text"
        ref={sliderNextBtn}
        onClick={() => scrollToTheRight()}
        className="!absolute right-0 top-0 z-10 !h-full w-8 !justify-end rounded-none bg-gradient-to-l from-white via-white to-transparent px-0 text-gray-500 hover:text-black dark:from-gray-50/80 dark:via-gray-50/80 3xl:hidden"
      >
        <PiCaretRightBold className="h-5 w-5" />
      </Button>
    </div>
  );
}
