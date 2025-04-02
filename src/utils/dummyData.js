const dummyData = {
  user: { id: 1, name: "Kevin Wong" },
  recipes: [
    {
      id: 1,
      title: "Vegan Pancakes",
      description: "Fluffy and delicious vegan pancakes.",
      instructions: "Mix ingredients, cook on medium heat, serve with syrup.",
      image:
        "https://www.diannesvegankitchen.com/wp-content/uploads/2023/09/pancakes-horizontal.jpg",
      category: "Vegan",
      author: "Kevin Wong",
      createdAt: new Date(),
      comments: ["Delicious!", "Made this last weekend."],
      ratings: [5, 4, 5],
    },
  ],
  friends: ["Abiel", "Jamie"],
};
export default dummyData;
