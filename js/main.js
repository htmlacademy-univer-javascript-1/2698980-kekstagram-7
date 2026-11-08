const PHOTO_COUNT = 25;

const descriptions = [
  'Отличный день!',
  'Красивый закат',
  'Незабываемое путешествие',
  'Моё любимое место',
  'Прекрасное настроение',
  'Немного фотографий из отпуска',
  'Сегодня было здорово!',
  'Красота вокруг нас',
  'Хорошие воспоминания',
  'Просто красивое фото'
];

const messages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const names = [
  'Артём',
  'Александр',
  'Мария',
  'Анна',
  'Иван',
  'Екатерина',
  'Дмитрий',
  'Ольга'
];

const getRandomInteger = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomArrayElement = (elements) =>
  elements[getRandomInteger(0, elements.length - 1)];

let commentId = 0;

const createComment = () => {
  commentId++;

  const messageCount = getRandomInteger(1, 2);
  let message = '';

  for (let i = 0; i < messageCount; i++) {
    if (i > 0) {
      message += ' ';
    }

    message += getRandomArrayElement(messages);
  }

  return {
    id: commentId,
    avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
    message: message,
    name: getRandomArrayElement(names)
  };
};

const createPhoto = (id) => {
  const commentsCount = getRandomInteger(0, 30);
  const comments = [];

  for (let i = 0; i < commentsCount; i++) {
    comments.push(createComment());
  }

  return {
    id: id,
    url: `photos/${id}.jpg`,
    description: getRandomArrayElement(descriptions),
    likes: getRandomInteger(15, 200),
    comments: comments
  };
};

const photos = [];

for (let i = 1; i <= PHOTO_COUNT; i++) {
  photos.push(createPhoto(i));
};

console.log(photos);
