type RecomendationType = {
  data: [ListType];
};

type ListType = {
  list: string;
};

export const dentalHealthRecomendation = (
  countTeeth: number,
  countTeethLoose: number
): { list: string }[] => {
  switch (true) {
    case countTeeth > 0 && countTeethLoose > 0:
      return [
        {
          list: '1. Gunakan obat kumur antiseptic',
        },
        {
          list: '2. Hindari makanan dan minuman yang dapat mengiritasi gusi seperti makanan yang keras',
        },
        {
          list: '3. Gunakan benang gigi untuk membersihkan sela-sela gigi',
        },
        {
          list: '4. Periksakan gigi lebih lanjut ke dokter gigi untuk melakukan penambalan gigi dan perawatan radang gusi',
        },
      ];
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
    case countTeeth > 0 && countTeethLoose == 0:
      return [
        {
          list: '1. Gunakan benang gusi untuk membersihkan sela-sela gigi',
        },
        {
          list: '2. Periksakan gigi lebih lanjut ke dokter gigi untuk melakukan penambalan gigi',
        },
      ];
    default:
      return [];
  }
};
