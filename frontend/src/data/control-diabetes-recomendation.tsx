type RecomendationType = {
  data: [ListType];
};

type ListType = {
  list: string;
};

export const controlDiabetesRecomendation = (
  count: number
): { list: string }[] => {
  switch (true) {
    case count < 100:
      return [
        {
          list: '1. Kadar gula darah anda kurang dari batas kadar gula darah normal',
        },
        {
          list: '2. Konsumsi makanan yang mengadung karbohidrat kompleks seperti buah-buahan',
        },
        {
          list: '3. Istirahat yang cukup',
        },
      ];
    case count >= 100 && count <= 139:
      return [
        {
          list: '1. Kadar gula darah anda melebihi batas kadar gula darah normal',
        },
        {
          list: '2. Batasi asupan makanan yang mengandung gula, lemak, dan natrium seperti minuman manis, makanan cepat saji, ikan asin',
        },
        {
          list: '3. Utamakan makanan yang rendah kolesterol',
        },
        {
          list: '4. Lakukan aktivitas fisik secara teratur',
        },
      ];
    case count >= 140 && count <= 199:
      return [
        {
          list: '1. Kadar gula darah anda melebihi batas kadar glukosa darah normal',
        },
        {
          list: '2. Batasi asupan makanan yang mengandung gula, lemak, dan natrium seperti minuman manis, makanan cepat saji, ikan asin',
        },
        {
          list: '3. Utamakan makanan yang rendah kolesterol',
        },
        {
          list: '4. Lakukan aktivitas fisik secara teratur',
        },
      ];
    default:
      return [
        {
          list: '1. Kadar gula darah anda melebihi batas kadar glukosa darah normal',
        },
        {
          list: '2. Batasi asupan makanan yang mengandung gula, lemak, dan natrium seperti minuman manis, makanan cepat saji, ikan asin',
        },
        {
          list: '3. Perhatikan asupan karbohidrat dan waktu makan',
        },
        {
          list: '4. Lakukan aktivitas fisik setidaknya 30 menit setiap hari',
        },
        {
          list: '5. Konsultasikan dengan dokter apabila kadar gula darah masih tinggi',
        },
      ];
  }
};
