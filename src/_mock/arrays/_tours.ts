import { add } from 'date-fns';
//
import _mock from '../_mock';

// ----------------------------------------------------------------------

const CONTINENTS = [
  'Asia',
  'Europe',
  'Africa',
  'Australia',
  'North America',
  'South America',
  'Antarctica',
  'Asia',
  'Europe',
  'Africa',
  'Australia',
  'North America',
  'South America',
  'Antarctica',
  'South America',
  'Antarctica',
];

export const _tours = [...Array(12)].map((_, index) => ({
  id: _mock.id(index),
  coverImg: _mock.image.travel(index),
  heroImg: [
    '/assets/images/travel/travel_post_hero.jpg',
    '/assets/images/travel/travel_post_01.jpg',
    '/assets/images/travel/travel_post_02.jpg',
    '/assets/images/travel/travel_post_03.jpg',
    '/assets/images/travel/travel_post_04.jpg',
  ][index],
  slug: _mock.text.tourName(index),
  createdAt: _mock.time(index),
  availableStart: add(new Date(), { months: 2 }),
  availableEnd: add(new Date(), { months: 4 }),
  location: _mock.address.country(index),
  continent: CONTINENTS[index],
  duration: '3 ngày 2 đêm',
  price: (index % 2 && 259.99) || 369.99,
  priceSale: (index === 2 && 89.99) || (index === 5 && 69.99) || 0,
  reviews: 345,
  favorited: index === 2 || index === 4 || false,
  ratings: 3.9 + index / 10,
  tourGuide: {
    name: _mock.name.fullName(index),
    role: _mock.role(index),
    picture: _mock.image.avatar(index),
    phoneNumber: _mock.phoneNumber(index),
    quotes: 'Member since Mar 15, 2021',
    verified: true,
    ratings: 5,
    reviews: 345,
    about:
      'Integer tincidunt. Nullam dictum felis eu pede mollis pretium. Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem.',
    shareLinks: _mock.shareLinks,
  },
  includes: [
    { label: 'Xe ô tô đời mới theo lịch trình', enabled: true },
    { label: 'Bảo hiểm du lịch', enabled: true },
    { label: 'Mũ lá vành to', enabled: true },
    { label: 'Nước uống + Khăn lạnh', enabled: true },
    { label: 'Các bữa ăn theo chương trình', enabled: true },
    { label: 'Hướng dẫn viên nhiệt tình, có kinh nghiệm', enabled: true },
    { label: 'Khách sạn 3 sao tiêu chuẩn', enabled: true },
    { label: 'Vé tham quan', enabled: true },
    { label: 'Thuế VAT 10%', enabled: false },
    { label: 'Chi phí ăn uống, vui chơi ngoài chương trình', enabled: false },
  ],
  languages: ['Vietnamese', 'English'],
  tags: ['Lamp', 'A man', 'Human', 'Lantern', 'Festival'],
  gallery: [
    '/assets/images/travel/ganh-da-dia-1.jpg',
    '/assets/images/travel/ganh-da-dia-2.jpg',
    '/assets/images/travel/ganh-da-dia-3.jpg',
    '/assets/images/travel/ganh-da-dia-4.jpg',
    '/assets/images/travel/ganh-da-dia-5.jpg',
  ],
  description: _mock.text.description(index),
  highlights: [...Array(6)].map((__, itemIndex) => _mock.text.sentence(itemIndex)),
  program: [...Array(3)].map((__, itemIndex) => ({
    label: `Ngày ${itemIndex + 1}`,
    text: _mock.text.description(itemIndex + 1),
  })),
  shareLinks: _mock.shareLinks,
}));
