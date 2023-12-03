import UploadIcon from '@/components/shape/upload';
import cn from '@/utils/class-names';
import { Loader, Text } from 'rizzui';
import { useDropzone } from 'react-dropzone';
import toast from 'react-hot-toast';
import { LoadingSpinner } from '@/components/ui/file-upload/upload-zone';
import { PiPencilSimple } from 'react-icons/pi';
import Image from 'next/image';
import { useState } from 'react';

type TypeUploadFileProps = {
  setValue?: any;
  getValue?: any;
};

export default function UploadFIle({
  setValue,
  getValue,
}: TypeUploadFileProps) {
  const [isLoading, setIsLoading] = useState(false);
  const { acceptedFiles, fileRejections, getRootProps, getInputProps } =
    useDropzone({
      onDrop: (acceptedFiles) => {
        setIsLoading(true);
        if (acceptedFiles.length > 0) {
          let reader = new FileReader();
          reader.readAsDataURL(acceptedFiles[0]);
          reader.onload = function () {
            setValue(reader.result);
          };
          reader.onerror = function (error) {
            toast.error(<Text as="b">Terjadi pada saat convert file</Text>);
          };
          setIsLoading(false);
        } else {
          toast.error(
            <Text as="b">File Harus Berupa Gambar (png,jpg,jpeg)</Text>
          );
          setIsLoading(false);
        }
      },
      accept: {
        'image/jpeg': ['.jpg', '.jpeg'],
        'image/png': ['.png'],
      },
    });
  return (
    <div className="relative grid h-40 w-40 place-content-center rounded-full border">
      {getValue ? (
        <>
          <figure className="absolute inset-0 rounded-full">
            <Image
              fill
              alt="user avatar"
              src={getValue}
              className="rounded-full"
            />
          </figure>
          <div
            {...getRootProps()}
            className={cn(
              'absolute inset-0 grid place-content-center rounded-full bg-black/40'
            )}
          >
            {isLoading ? (
              <LoadingSpinner />
            ) : (
              <PiPencilSimple className="h-5 w-5 cursor-pointer text-white" />
            )}

            <input {...getInputProps()} />
          </div>
        </>
      ) : (
        <>
          <div
            {...getRootProps()}
            className={cn(
              'absolute inset-0 z-10 grid cursor-pointer place-content-center'
            )}
          >
            <input {...getInputProps()} />
            <UploadIcon className="mx-auto h-12 w-12" />

            {isLoading ? (
              <Loader className="justify-center" />
            ) : (
              <Text className="font-medium">Drop or select file</Text>
            )}
          </div>
        </>
      )}
    </div>
  );
}
