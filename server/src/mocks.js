const mocks = {
  Query: () => ({
    tracksForHome: () => [...new Array(6)],
    spaceCats: () => [...new Array(8)],
  }),
  SpaceCat: () => ({
    id: () => "spacecat_01",
    name: () => "spacecat pioneer",
    age: () => 4
  }),
  Track: () => ({
    id: () => "track_01",
    title: () => "Astro Kitty, Space Explorer",
    author: () => {
      return {
        name: "Grumpy Cat",
        photo:
          "https://res.cloudinary.com/dety84pbu/image/upload/v1606816219/kitty-veyron-sm_mctf3c.jpg",
      };
    },
    thumbnail: () =>
      "https://res.cloudinary.com/dety84pbu/image/upload/v1598465568/nebula_cat_djkt9r.jpg",
    length: () => 1210,
    modulesCount: () => 6,
  }),
};

module.exports = mocks;