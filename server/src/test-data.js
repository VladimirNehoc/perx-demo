const { v4: uuidv4 } = require('uuid');

const defaultId = uuidv4();

module.exports = [
  {
    table: 'recipesGroups',
    items: [
      {
        id: 1,
        name: 'Первые блюда',
      },
      {
        id: 2,
        name: 'Вторые блюда',
      },
      {
        id: 3,
        name: 'Гарнир',
      },
      {
        id: 4,
        name: 'Десерт',
      },
      {
        id: 5,
        name: 'Соус',
      },
      {
        id: 6,
        name: 'Коктейль',
      },
    ],
  },
  {
    table: 'difficulties',
    items: [
      {
        id: 1,
        name: 'Простой',
      },
      {
        id: 2,
        name: 'Средний',
      },
      {
        id: 3,
        name: 'Сложный',
      },
      {
        id: 4,
        name: 'Очень сложный',
      },
    ],
  },
  {
    table: 'recipes',
    items: [
      {
        id: defaultId,
        name: 'Карбонарочка',
        description: 'description description description description description description description',
        calories: 323,
        proteins: 125,
        carbohydrates: 30,
        fats: 74,
        recipesGroupId: 2,
        imageId: uuidv4(),
        difficultId: 1,
        requiredTime: 20,
      },
    ],
  },
  {
    table: 'steps',
    items: [
      {
        title: 'Налейте в кастрюлю воды',
        content: 'content content content content content content content content content content content content',
        order: 1,
        recipeId: defaultId,
      },
      {
        title: 'Положите макароны',
        content: 'content content content content content content content content content content content content',
        order: 2,
        recipeId: defaultId,
      },
      {
        title: 'Разогрейте сковороду',
        content: 'content content content content content content content content content content content content',
        order: 3,
        recipeId: defaultId,
      },
    ],
  },
  {
    table: 'ingredientsGroups',
    items: [
      {
        id: 1,
        name: 'Овощи и бобовые',
      },
      {
        id: 2,
        name: 'Фрукты',
      },
      {
        id: 3,
        name: 'Специи',
      },
      {
        id: 4,
        name: 'Мясо',
      },
      {
        id: 5,
        name: 'Птица',
      },
      {
        id: 6,
        name: 'Рыба',
      },
      {
        id: 7,
        name: 'Грибы',
      },
      {
        id: 8,
        name: 'Макаронные изделия',
      },
      {
        id: 9,
        name: 'Молочные продукты',
      },
      {
        id: 10,
        name: 'Соусы и заправки',
      },
      {
        id: 11,
        name: 'Готовые блюда',
      },
    ],
  },
  {
    table: 'ingredients',
    items: [
      {
        id: 1,
        name: 'Спагетти',
        ingredientsGroupId: 8,
      },
      {
        id: 2,
        name: 'Сливки',
        ingredientsGroupId: 9,
      },
      {
        id: 3,
        name: 'Соль',
        ingredientsGroupId: 3,
      },
      {
        id: 4,
        name: 'Бекон',
        ingredientsGroupId: 4,
      },
      {
        id: 5,
        name: 'Яйцо',
        ingredientsGroupId: 11,
      },
    ],
  },
  {
    table: 'units',
    items: [
      {
        id: 1,
        name: 'шт',
        description: 'штук',
        variants: ['штук', 'штука', 'штук'],
      },
      {
        id: 2,
        name: 'кг',
        description: 'килограмм',
        variants: ['килограммов', 'килограмм', 'килограммов'],
      },
      {
        id: 3,
        name: 'г',
        description: 'грамм',
        variants: ['граммов', 'грамм', 'граммов'],
      },
      {
        id: 4,
        name: 'л',
        description: 'литр',
        variants: ['литров', 'литр', 'литров'],
      },
      {
        id: 5,
        name: 'мл',
        description: 'миллилитр',
        variants: ['миллилитров', 'миллилитр', 'миллилитров'],
      },
      {
        id: 6,
        name: 'ч/л',
        description: 'чайная ложка',
        variants: ['чайных ложек', 'чайная ложка', 'чайных ложек'],
      },
      {
        id: 7,
        name: 'ст/л',
        description: 'столовая ложка',
        variants: ['столовых ложек', 'столовая ложка', 'столовых ложек'],
      },
      {
        id: 8,
        name: 'щеп',
        description: 'щепотка',
        variants: ['щепоток', 'щепотка', 'щепоток'],
      },
      {
        id: 9,
        name: 'горсть',
        description: 'горсть',
        variants: ['горстей', 'горсть', 'горстей'],
      },
    ],
  },
  {
    table: 'recipesIngredients',
    items: [
      {
        recipeId: defaultId,
        ingredientId: 1,
        count: 300,
        unitId: 3,
      },
      {
        recipeId: defaultId,
        ingredientId: 2,
        count: 200,
        unitId: 5,
      },
      {
        recipeId: defaultId,
        ingredientId: 3,
        count: 2,
        unitId: 8,
      },
      {
        recipeId: defaultId,
        ingredientId: 4,
        count: 200,
        unitId: 3,
      },
      {
        recipeId: defaultId,
        ingredientId: 5,
        count: 2,
        unitId: 1,
      },
    ],
  },
];
