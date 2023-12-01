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
          list: 'a. Kadar gula darah anda kurang dari batas kadar gula darah normal',
        },
        {
          list: 'b. Konsumsi makanan yang mengadung karbohidrat kompleks seperti buah-buahan',
        },
        {
          list: 'c. Istirahat yang cukup',
        },
      ];
    case count >= 100 && count <= 139:
      return [
        {
          list: 'a. Kadar gula darah anda melebihi batas kadar gula darah normal',
        },
        {
          list: 'b. Batasi asupan makanan yang mengandung gula, lemak, dan natrium seperti minuman manis, makanan cepat saji, ikan asin',
        },
        {
          list: 'c. Utamakan makanan yang rendah kolesterol',
        },
        {
          list: 'd. Lakukan aktivitas fisik secara teratur',
        },
      ];
    case count >= 140 && count <= 199:
      return [
        {
          list: 'a. Kadar gula darah anda melebihi batas kadar glukosa darah normal',
        },
        {
          list: 'b. Batasi asupan makanan yang mengandung gula, lemak, dan natrium seperti minuman manis, makanan cepat saji, ikan asin',
        },
        {
          list: 'c. Utamakan makanan yang rendah kolesterol',
        },
        {
          list: 'd. Lakukan aktivitas fisik secara teratur',
        },
      ];
    default:
      return [
        {
          list: 'a. Kadar gula darah anda melebihi batas kadar glukosa darah normal',
        },
        {
          list: 'b. Batasi asupan makanan yang mengandung gula, lemak, dan natrium seperti minuman manis, makanan cepat saji, ikan asin',
        },
        {
          list: 'c. Perhatikan asupan karbohidrat dan waktu makan',
        },
        {
          list: 'd. Lakukan aktivitas fisik setidaknya 30 menit setiap hari',
        },
        {
          list: 'e. Konsultasikan dengan dokter apabila kadar gula darah masih tinggi',
        },
      ];
  }
};
