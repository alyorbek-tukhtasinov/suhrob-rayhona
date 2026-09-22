// ============================================================================
//  TO'Y TAKLIFNOMASI — MIJOZ SOZLAMALARI (yagona tahrirlanadigan fayl)
//  MIJOZ: Suhrobjon & Rayhona
// ============================================================================

export interface WeddingContent {
  heroGroom: string;
  heroBride: string;
  heroAnd: string;
  heroSubtitle: string;
  heroDate: string;

  invTitle: string;
  invText: string;
  invClosing: string;

  event1Name: string;
  event1Date: string;
  event1Time: string;
  event2Name: string;
  event2Date: string;
  event2Time: string;

  detailsVenueVal: string;
  detailsAddress: string;
  mapVenue: string;
  mapAddress: string;

  giftHolder: string;
  giftBank: string;
}

export interface VenueInfo {
  label: { uz: string; ru: string };
  name: { uz: string; ru: string };
  address: { uz: string; ru: string };
  embed: string;
  yandexLink: string;
  googleLink: string;
}

export interface WeddingConfig {
  siteTitle: string;
  monogram: string;
  venues?: VenueInfo[];

  countdown: {
    event1: string;
    event2: string;
  };

  map: {
    embed: string;
    yandexLink: string;
    googleLink: string;
  };

  gift: {
    enabled: boolean;
    cardNumber: string;
    cardNumberRaw: string;
    validity: string;
  };

  content: {
    uz: WeddingContent;
    ru: WeddingContent;
  };
}

export const weddingConfig: WeddingConfig = {
  siteTitle: "Suhrobjon & Rayhona — To'y taklifnomasi",
  monogram: 'S&R',

  // Ikki tadbir — ikki xil to'yxonada
  venues: [
    {
      label: { uz: "Qiz bazmi", ru: "Девичник (Qiz bazmi)" },
      name: { uz: "«Kohinur» to'yxonasi", ru: "«Kohinur» to'yxonasi" },
      address: { uz: "G'allaorol tumani", ru: "Галляаральский р-н" },
      embed:
        'https://yandex.uz/map-widget/v1/?ll=67.589306%2C40.020046&mode=search&sctx=ZAAAAAgBEAAaKAoSCW3H1F3Z5VBAEavLKQExA0RAEhIJNBE2PL1Shj8Rpdqn4zEDdT8iBgABAgMEBSgKOABAmO8LSAFqAnV6nQHNzMw9oAEAqAEAvQEVXUV%2FwgEMtO%2FDqMQBsIywxtIFggIRR8q7YWxsYW9yb2wgdmlzb2yKAgCSAgCaAgxkZXNrdG9wLW1hcHM%3D&sll=67.590013%2C40.022680&sspn=0.010900%2C0.005131&text=G%CA%BBallaorol%20visol&z=19',
      yandexLink: 'https://yandex.uz/maps/-/CXEZ6D28',
      googleLink: 'https://www.google.com/maps/search/?api=1&query=40.020046%2C67.589306',
    },
    {
      label: { uz: "Nikoh to'yi", ru: "Свадьба (Nikoh to'yi)" },
      name: { uz: "«Beksaroy» to'yxonasi", ru: "«Beksaroy» to'yxonasi" },
      address: { uz: "G'allaorol tumani", ru: "Галляаральский р-н" },
      embed:
        'https://yandex.uz/map-widget/v1/?ll=67.603026%2C40.012510&z=17',
      yandexLink: 'https://yandex.uz/maps/?ll=67.603026%2C40.012510&z=17',
      googleLink: 'https://www.google.com/maps/search/?api=1&query=40.012510%2C67.603026',
    },
  ],

  countdown: {
    event1: '2026-11-13T11:00:00',
    event2: '2026-11-14T11:00:00',
  },

  // Bir nechta to'yxona bo'lgani uchun quyidagi bitta `map` ishlatilmaydi,
  // lekin tuzilma to'liq bo'lishi uchun to'ldirilgan (nikoh to'yxonasi).
  map: {
    embed:
      'https://yandex.uz/map-widget/v1/?ll=67.603026%2C40.012510&z=17',
    yandexLink: 'https://yandex.uz/maps/?ll=67.603026%2C40.012510&z=17',
    googleLink: 'https://www.google.com/maps/search/?api=1&query=40.012510%2C67.603026',
  },

  gift: {
    enabled: false,
    cardNumber: '',
    cardNumberRaw: '',
    validity: '',
  },

  content: {
    uz: {
      heroGroom: 'Suhrobjon',
      heroBride: 'Rayhona',
      heroAnd: '&',
      heroSubtitle: "To'yimizga taklif etamiz",
      heroDate: '13–14 Noyabr 2026',

      invTitle: "Hurmatli va aziz mehmon!",
      invText:
        "Sizni hayotimizdagi eng quvonchli ayyom — nikoh to'yimizga lutfan taklif etamiz. Ushbu baxtli va unutilmas kunimizda sizdek aziz insonlarni yonimizda ko'rish biz uchun ulkan baxt. Tashrifingiz bilan davramizga fayz, quvonchimizga quvonch qo'shasiz degan umiddamiz.",
      invClosing: "Suhrobjon & Rayhona",

      event1Name: "Qiz bazmi",
      event1Date: "13-noyabr 2026",
      event1Time: "11:00",
      event2Name: "Nikoh to'yi",
      event2Date: "14-noyabr 2026",
      event2Time: "11:00",

      detailsVenueVal: "«Kohinur» / «Beksaroy» to'yxonalari",
      detailsAddress: "G'allaorol tumani",
      mapVenue: "«Beksaroy» to'yxonasi",
      mapAddress: "G'allaorol tumani",

      giftHolder: "",
      giftBank: "",
    },
    ru: {
      heroGroom: 'Сухробжон',
      heroBride: 'Райхона',
      heroAnd: '&',
      heroSubtitle: "Приглашаем вас на нашу свадьбу",
      heroDate: '13–14 ноября 2026',

      invTitle: "Уважаемый и дорогой гость!",
      invText:
        "От всей души приглашаем вас на самое радостное событие в нашей жизни — нашу свадьбу. Для нас огромное счастье видеть таких дорогих сердцу людей рядом в этот незабываемый день. Надеемся, что своим присутствием вы украсите наш праздник и разделите нашу радость.",
      invClosing: "Сухробжон & Райхона",

      event1Name: "Девичник (Qiz bazmi)",
      event1Date: "13 ноября 2026",
      event1Time: "11:00",
      event2Name: "Свадьба (Nikoh to'yi)",
      event2Date: "14 ноября 2026",
      event2Time: "11:00",

      detailsVenueVal: "«Kohinur» / «Beksaroy»",
      detailsAddress: "Галляаральский р-н",
      mapVenue: "«Beksaroy» to'yxonasi",
      mapAddress: "Галляаральский р-н",

      giftHolder: "",
      giftBank: "",
    },
  },
};
