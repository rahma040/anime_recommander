import { MoodCategory } from '../types';

export const moodCategories: MoodCategory[] = [
  {
    id: 'lazy',
    title: 'Feeling Lazy?',
    description: 'Perfect anime for those days when you just want to relax',
    color: '#FFB6C1', // Light pink
    animeList: [
      {
        id: 1,
        title: 'My Neighbor Totoro',
        description: 'A heartwarming tale of two sisters and their interactions with friendly forest spirits.',
        genres: ['Fantasy', 'Family'],
        coverImage: 'https://images.pexels.com/photos/8797307/pexels-photo-8797307.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      },
      {
        id: 2,
        title: 'Tanaka-kun is Always Listless',
        description: 'The story of Tanaka, a high school boy who is constantly tired and just wants to sleep.',
        genres: ['Comedy', 'Slice of Life'],
        coverImage: 'https://images.pexels.com/photos/10604313/pexels-photo-10604313.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      },
      {
        id: 3,
        title: 'Flying Witch',
        description: 'A relaxing story about a witch who moves to the countryside to complete her training.',
        genres: ['Slice of Life', 'Fantasy'],
        coverImage: 'https://images.pexels.com/photos/5638615/pexels-photo-5638615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      },
      {
        id: 4,
        title: 'Laid-Back Camp',
        description: 'High school girls going camping around Mt. Fuji - a perfect slow-paced, cozy anime.',
        genres: ['Slice of Life', 'Adventure'],
        coverImage: 'https://images.pexels.com/photos/14287484/pexels-photo-14287484.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      },
      {
        id: 5,
        title: 'Hyouka',
        description: 'An energy-conserving high school student solves mysteries that no one else wants to solve.',
        genres: ['Mystery', 'Slice of Life'],
        coverImage: 'https://images.pexels.com/photos/5662857/pexels-photo-5662857.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      }
    ]
  },
  {
    id: 'inspiration',
    title: 'Need Inspiration?',
    description: 'Anime that will motivate you to chase your dreams',
    color: '#ADD8E6', // Light blue
    animeList: [
      {
        id: 6,
        title: 'Haikyuu!!',
        description: 'A tale of determination as a high school volleyball team fights their way to the nationals.',
        genres: ['Sports', 'Drama'],
        coverImage: 'https://images.pexels.com/photos/13286800/pexels-photo-13286800.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      },
      {
        id: 7,
        title: 'Your Lie in April',
        description: 'A piano prodigy who lost his ability to play meets a free-spirited violinist.',
        genres: ['Music', 'Drama', 'Romance'],
        coverImage: 'https://images.pexels.com/photos/4709822/pexels-photo-4709822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      },
      {
        id: 8,
        title: 'A Place Further Than The Universe',
        description: 'High school girls embark on a journey to Antarctica, pushing beyond their limits.',
        genres: ['Adventure', 'Coming of Age'],
        coverImage: 'https://images.pexels.com/photos/1252811/pexels-photo-1252811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      },
      {
        id: 9,
        title: 'Bakuman',
        description: 'Two students aspire to become mangaka (manga creators) and achieve their dreams.',
        genres: ['Comedy', 'Drama', 'Romance'],
        coverImage: 'https://images.pexels.com/photos/5638683/pexels-photo-5638683.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      },
      {
        id: 10,
        title: 'Keep Your Hands Off Eizouken!',
        description: 'Three high school girls come together to create an animation club and create their own anime.',
        genres: ['Comedy', 'Adventure'],
        coverImage: 'https://images.pexels.com/photos/5011647/pexels-photo-5011647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      }
    ]
  },
  {
    id: 'cry',
    title: 'Want to Cry?',
    description: 'Emotional anime that will tug at your heartstrings',
    color: '#D8BFD8', // Light purple
    animeList: [
      {
        id: 11,
        title: 'Grave of the Fireflies',
        description: 'A devastating tale of two siblings struggling to survive during World War II.',
        genres: ['Drama', 'War'],
        coverImage: 'https://images.pexels.com/photos/3329718/pexels-photo-3329718.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      },
      {
        id: 12,
        title: 'Clannad: After Story',
        description: 'Follow-up to Clannad focusing on Tomoya and Nagisa\'s life together.',
        genres: ['Romance', 'Slice of Life', 'Supernatural'],
        coverImage: 'https://images.pexels.com/photos/4709285/pexels-photo-4709285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      },
      {
        id: 13,
        title: 'Anohana: The Flower We Saw That Day',
        description: 'A group of childhood friends reunite after being driven apart by the death of their friend.',
        genres: ['Drama', 'Slice of Life', 'Supernatural'],
        coverImage: 'https://images.pexels.com/photos/4709280/pexels-photo-4709280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      },
      {
        id: 14,
        title: 'Violet Evergarden',
        description: 'A former soldier learns to understand emotions while working as a letter writer.',
        genres: ['Drama', 'Fantasy'],
        coverImage: 'https://images.pexels.com/photos/1122868/pexels-photo-1122868.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      },
      {
        id: 15,
        title: 'I Want to Eat Your Pancreas',
        description: 'A moving story of a stoic boy who discovers a popular girl\'s terminal illness secret.',
        genres: ['Drama', 'Romance'],
        coverImage: 'https://images.pexels.com/photos/8942581/pexels-photo-8942581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      }
    ]
  },
  {
    id: 'laugh',
    title: 'Just for Laughs',
    description: 'Hilarious anime to brighten your day',
    color: '#FFDAB9', // Peach
    animeList: [
      {
        id: 16,
        title: 'Gintama',
        description: 'Set in an alternate-history Japan where aliens have taken over, follows the life of a freelancer.',
        genres: ['Comedy', 'Sci-Fi', 'Action'],
        coverImage: 'https://images.pexels.com/photos/5638598/pexels-photo-5638598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      },
      {
        id: 17,
        title: 'Konosuba',
        description: 'After dying, a shut-in is sent to a fantasy world with a useless goddess.',
        genres: ['Comedy', 'Fantasy', 'Adventure'],
        coverImage: 'https://images.pexels.com/photos/5639065/pexels-photo-5639065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      },
      {
        id: 18,
        title: 'Nichijou',
        description: 'Follows the mundane lives of various people in the town of Tokisadame with exaggerated reactions.',
        genres: ['Comedy', 'Slice of Life'],
        coverImage: 'https://images.pexels.com/photos/3329731/pexels-photo-3329731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      },
      {
        id: 19,
        title: 'Daily Lives of High School Boys',
        description: 'Hilariously depicts the ordinary high school lives of boys in a realistic way.',
        genres: ['Comedy', 'Slice of Life'],
        coverImage: 'https://images.pexels.com/photos/5638627/pexels-photo-5638627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      },
      {
        id: 20,
        title: 'The Devil is a Part-Timer!',
        description: 'The Devil King escapes to Tokyo and has to work at a fast food restaurant to survive.',
        genres: ['Comedy', 'Fantasy'],
        coverImage: 'https://images.pexels.com/photos/5639166/pexels-photo-5639166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      }
    ]
  }
];