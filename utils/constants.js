export const URL = "https://d3sh7ah1ts7yf7.cloudfront.net/blog";

export const ALBUMS = [
  {
    slug: "life-lately",
    title: "Life Lately",
    folder: "life_lately",
    imageCount: 10,
  },
  { slug: "lima", title: "Lima, Peru", folder: "lima", imageCount: 81 },
  { slug: "bolivia", title: "Bolivia", folder: "bolivia", imageCount: 454 },
  {
    slug: "salkantay",
    title: "Salkantay Trek, Peru",
    folder: "salkantay",
    imageCount: 232,
  },
  {
    slug: "chile-and-argentina",
    title: "Chile & Argentina",
    folder: "chile_and_argentina",
    imageCount: 89,
  },
  { slug: "new-york", title: "NYC", folder: "new_york", imageCount: 200 },
  { slug: "yosemite", title: "Yosemite", folder: "yosemite", imageCount: 109 },
  {
    slug: "dc-and-nashville",
    title: "DC & Nashville",
    folder: "dc_and_nashville",
    imageCount: 270,
  },
];

export const getAlbum = (slug) => ALBUMS.find((album) => album.slug === slug);
