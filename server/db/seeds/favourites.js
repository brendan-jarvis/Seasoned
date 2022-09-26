exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('favourites')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('favourites').insert([
        {
          id: 1,
          auth0_id: 'auth0|123456789',
          recipe: {
            uri: 'http://www.edamam.com/ontologies/edamam.owl#recipe_ee439691b9844a99086a240633eb12ad',
            label: 'Carrot Limeade',
            image:
              'https://edamam-product-images.s3.amazonaws.com/web-img/fc8/fc8e6d4ba4b0e0ea34aec2d54110e03a?X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLWVhc3QtMSJHMEUCIEAuUklbJY9mP6v2iUHcv%2FB8hypzfqLqX7sIKVs%2FGZmPAiEAkAyC%2B2k3IvHb3Y7DILyU5uCtedCpdKs4VkiPRNqNly8q1QQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDA0vBss8ZSrLUx7%2F5iqpBBacZ8gXefuX74ZlRNACzHs%2FTUTbdnioe%2Bj8pSHf8%2B4JHvomPWqHF191YJlOAvJIzrdQ230TIizM4WW1Q%2BRXH6kDUmXE%2FpmsdzcU3cRXCpwnXlghIULikk4krjVEqIqTu8Mh5yLcp3vSIsUL2hqYxDMUh8EMwQalGJ63xCQZr%2B0GyIicIqWRO%2F8zcBurJhuR98zpzVV%2F0xdrdxJWy1kasfV4q%2BMbsIeJmxDsjmwePK7zM5Q45P5hhUlW1I2NY6BYRTGUpmuucIU3GwaZWSer0FJNH7EnEhjRb1iYwr0Etv5%2FhWJFEnzwv%2Fnoq37W%2Fb8kqkyJrJsmhjXIWeDUrFotb8qH7bw3Xh5iLaEqfL%2F5wIzev2j1q2zEXOlRNvdFJsP%2FszszEuIfcmZuyAENZXHyEIskHjmWroM8EwQHxZfnToOBKhhgZKZNgmUbpqTAUZ8DXsTH2rlpOQEOxPTFv4b25zxfnY15C%2FE8pbkdr6cSb1SZcN1l2nF8bIgh2kK%2FDTgcYnd2LIV2rYkRoSyIAX7sNcGRvgFLPVTD49t6bDzd6ZI0ywMTws8Jok5HsDuzpvfh%2FizJWazPi3lgrqtCG%2FGXKYJZtI8F%2BG9m0ikuD96CklLIv48Gar4m8Atzccv3M%2BtiTJaJlwZgclFasb4%2B1s%2B0we%2FZDyz%2Fzn4AM5WMHfJNprpCBF%2FViktUTZgo3RWMMLAKN%2B%2BGZnXBI4aK3%2FkN7c7QIn3B1igdsib1p6sw9M7EmQY6qQHKRyHVZFoi12d31ZZQZe6FBneu8ZyBzmgS9K6AMn%2FHF5pACyxHVeUbVz7%2BI2aP6hkacKVTz5uwRtuwFwpTdvFulswIZtyuzNySvBqfTaQxMoMDH9TY4hhFxOJXtdObobI0HZaEbGRf2j%2BFkeIkuuJ6XxziTBVl0NfYBs%2BObZg%2BypfQsiajFJQsKznmAkYdVFodBPSbfnFLgbkAtBRhO1vp6ULRxAEyYw5s&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220926T044116Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFJN3FE64X%2F20220926%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=050c182b0c04e4b5c24617d7ebb2f0ddcd59865a2cfd9abc2c10f846eadf4ce7',
            source: 'Martha Stewart',
            url: 'https://www.marthastewart.com/1547130/carrot-limeade',
            shareAs:
              'http://www.edamam.com/recipe/carrot-limeade-ee439691b9844a99086a240633eb12ad/carrot',
            yield: 8,
            dietLabels: [],
            healthLabels: [
              'Vegan',
              'Vegetarian',
              'Pescatarian',
              'Dairy-Free',
              'Gluten-Free',
              'Wheat-Free',
              'Egg-Free',
              'Peanut-Free',
              'Tree-Nut-Free',
              'Soy-Free',
              'Fish-Free',
              'Shellfish-Free',
              'Pork-Free',
              'Red-Meat-Free',
              'Crustacean-Free',
              'Celery-Free',
              'Mustard-Free',
              'Sesame-Free',
              'Lupine-Free',
              'Mollusk-Free',
              'Alcohol-Free',
              'No oil added',
              'FODMAP-Free',
              'Kosher',
            ],
            cautions: ['Sulfites'],
            ingredientLines: [
              '16 ounces pure carrot juice',
              '4 ounces fresh lime juice (1/2 cup)',
              '3 tablespoons super-fine sugar',
              '16 ounces seltzer',
              'Carrot greens, for garnish (optional)',
            ],
            ingredients: [
              {
                text: '16 ounces pure carrot juice',
                quantity: 16,
                measure: 'ounce',
                food: 'carrot juice',
                weight: 453.59237,
                foodCategory: 'canned vegetables',
                foodId: 'food_abwe3lrbt7e353b7gmtn7b555zh3',
                image:
                  'https://www.edamam.com/food-img/2cf/2cf3fba5241e28ae562f4cb4c5420eb1.jpg',
              },
              {
                text: '4 ounces fresh lime juice (1/2 cup)',
                quantity: 0.5,
                measure: 'cup',
                food: 'lime juice',
                weight: 121,
                foodCategory: 'fruit',
                foodId: 'food_b0iywbmaujvd4eblrooo9bsvn7e6',
                image:
                  'https://www.edamam.com/food-img/8f0/8f0c10eb3dbf476a05e61018e76ea220.jpg',
              },
              {
                text: '3 tablespoons super-fine sugar',
                quantity: 3,
                measure: 'tablespoon',
                food: 'sugar',
                weight: 37.4999999993661,
                foodCategory: 'sugars',
                foodId: 'food_axi2ijobrk819yb0adceobnhm1c2',
                image:
                  'https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg',
              },
              {
                text: '16 ounces seltzer',
                quantity: 16,
                measure: 'ounce',
                food: 'seltzer',
                weight: 453.59237,
                foodCategory: 'flavored water',
                foodId: 'food_ae33wnvaild66dawgxsqlbcrp02x',
                image:
                  'https://www.edamam.com/food-img/0c7/0c7ea246f0c3b05641539fd1861c1c20.jpg',
              },
              {
                text: 'Carrot greens, for garnish (optional)',
                quantity: 0,
                measure: null,
                food: 'Carrot',
                weight: 0,
                foodCategory: 'vegetables',
                foodId: 'food_ai215e5b85pdh5ajd4aafa3w2zm8',
                image:
                  'https://www.edamam.com/food-img/121/121e33fce0bb9546ed7d060b6c114e29.jpg',
              },
            ],
            calories: 356.8119479975469,
            totalWeight: 1065.6847399993662,
            totalTime: 10,
            cuisineType: ['american'],
            mealType: ['lunch/dinner'],
            dishType: ['drinks'],
            totalNutrients: {
              ENERC_KCAL: {
                label: 'Energy',
                quantity: 356.8119479975469,
                unit: 'kcal',
              },
              FAT: {
                label: 'Fat',
                quantity: 0.7650885550000001,
                unit: 'g',
              },
              FASAT: {
                label: 'Saturated',
                quantity: 0.1321499399,
                unit: 'g',
              },
              FATRN: {
                label: 'Trans',
                quantity: 0,
                unit: 'g',
              },
              FAMS: {
                label: 'Monounsaturated',
                quantity: 0.041431465900000006,
                unit: 'g',
              },
              FAPU: {
                label: 'Polyunsaturated',
                quantity: 0.34988058270000005,
                unit: 'g',
              },
              CHOCDF: {
                label: 'Carbs',
                quantity: 89.77407193536624,
                unit: 'g',
              },
              'CHOCDF.net': {
                label: 'Carbohydrates (net)',
                quantity: 0,
                unit: 'g',
              },
              FIBTG: {
                label: 'Fiber',
                quantity: 4.112738960000001,
                unit: 'g',
              },
              SUGAR: {
                label: 'Sugars',
                quantity: 57.205361666367374,
                unit: 'g',
              },
              'SUGAR.added': {
                label: 'Sugars, added',
                quantity: 37.42499999936737,
                unit: 'g',
              },
              PROCNT: {
                label: 'Protein',
                quantity: 4.817327515000001,
                unit: 'g',
              },
              CHOLE: {
                label: 'Cholesterol',
                quantity: 0,
                unit: 'mg',
              },
              NA: {
                label: 'Sodium',
                quantity: 397.42036189999374,
                unit: 'mg',
              },
              CA: {
                label: 'Calcium',
                quantity: 148.85678729999367,
                unit: 'mg',
              },
              MG: {
                label: 'Magnesium',
                quantity: 77.7188555,
                unit: 'mg',
              },
              K: {
                label: 'Potassium',
                quantity: 1475.8815677999874,
                unit: 'mg',
              },
              FE: {
                label: 'Iron',
                quantity: 2.2595341389996833,
                unit: 'mg',
              },
              ZN: {
                label: 'Zinc',
                quantity: 1.3706086359999368,
                unit: 'mg',
              },
              P: {
                label: 'Phosphorus',
                quantity: 207.44879540000002,
                unit: 'mg',
              },
              VITA_RAE: {
                label: 'Vitamin A',
                quantity: 4338.763057200001,
                unit: 'µg',
              },
              VITC: {
                label: 'Vitamin C',
                quantity: 74.85535145,
                unit: 'mg',
              },
              THIA: {
                label: 'Thiamin (B1)',
                quantity: 0.4475549804,
                unit: 'mg',
              },
              RIBF: {
                label: 'Riboflavin (B2)',
                quantity: 0.27475080349987957,
                unit: 'mg',
              },
              NIA: {
                label: 'Niacin (B3)',
                quantity: 1.9226865482000002,
                unit: 'mg',
              },
              VITB6A: {
                label: 'Vitamin B6',
                quantity: 1.0302754429,
                unit: 'mg',
              },
              FOLDFE: {
                label: 'Folate equivalent (total)',
                quantity: 30.2436948,
                unit: 'µg',
              },
              FOLFD: {
                label: 'Folate (food)',
                quantity: 30.2436948,
                unit: 'µg',
              },
              FOLAC: {
                label: 'Folic acid',
                quantity: 0,
                unit: 'µg',
              },
              VITB12: {
                label: 'Vitamin B12',
                quantity: 0,
                unit: 'µg',
              },
              VITD: {
                label: 'Vitamin D',
                quantity: 0,
                unit: 'µg',
              },
              TOCPHA: {
                label: 'Vitamin E',
                quantity: 5.527871492000001,
                unit: 'mg',
              },
              VITK1: {
                label: 'Vitamin K',
                quantity: 71.03281735,
                unit: 'µg',
              },
              'Sugar.alcohol': {
                label: 'Sugar alcohol',
                quantity: 0,
                unit: 'g',
              },
              WATER: {
                label: 'Water',
                quantity: 966.109716849,
                unit: 'g',
              },
            },
            totalDaily: {
              ENERC_KCAL: {
                label: 'Energy',
                quantity: 17.840597399877343,
                unit: '%',
              },
              FAT: {
                label: 'Fat',
                quantity: 1.1770593153846156,
                unit: '%',
              },
              FASAT: {
                label: 'Saturated',
                quantity: 0.6607496995000001,
                unit: '%',
              },
              CHOCDF: {
                label: 'Carbs',
                quantity: 29.924690645122077,
                unit: '%',
              },
              FIBTG: {
                label: 'Fiber',
                quantity: 16.450955840000002,
                unit: '%',
              },
              PROCNT: {
                label: 'Protein',
                quantity: 9.634655030000001,
                unit: '%',
              },
              CHOLE: {
                label: 'Cholesterol',
                quantity: 0,
                unit: '%',
              },
              NA: {
                label: 'Sodium',
                quantity: 16.559181745833072,
                unit: '%',
              },
              CA: {
                label: 'Calcium',
                quantity: 14.885678729999366,
                unit: '%',
              },
              MG: {
                label: 'Magnesium',
                quantity: 18.504489404761905,
                unit: '%',
              },
              K: {
                label: 'Potassium',
                quantity: 31.401735485106116,
                unit: '%',
              },
              FE: {
                label: 'Iron',
                quantity: 12.55296743888713,
                unit: '%',
              },
              ZN: {
                label: 'Zinc',
                quantity: 12.460078509090334,
                unit: '%',
              },
              P: {
                label: 'Phosphorus',
                quantity: 29.635542200000003,
                unit: '%',
              },
              VITA_RAE: {
                label: 'Vitamin A',
                quantity: 482.0847841333334,
                unit: '%',
              },
              VITC: {
                label: 'Vitamin C',
                quantity: 83.17261272222223,
                unit: '%',
              },
              THIA: {
                label: 'Thiamin (B1)',
                quantity: 37.29624836666667,
                unit: '%',
              },
              RIBF: {
                label: 'Riboflavin (B2)',
                quantity: 21.134677192298426,
                unit: '%',
              },
              NIA: {
                label: 'Niacin (B3)',
                quantity: 12.016790926250001,
                unit: '%',
              },
              VITB6A: {
                label: 'Vitamin B6',
                quantity: 79.25195714615386,
                unit: '%',
              },
              FOLDFE: {
                label: 'Folate equivalent (total)',
                quantity: 7.5609237,
                unit: '%',
              },
              VITB12: {
                label: 'Vitamin B12',
                quantity: 0,
                unit: '%',
              },
              VITD: {
                label: 'Vitamin D',
                quantity: 0,
                unit: '%',
              },
              TOCPHA: {
                label: 'Vitamin E',
                quantity: 36.85247661333334,
                unit: '%',
              },
              VITK1: {
                label: 'Vitamin K',
                quantity: 59.194014458333335,
                unit: '%',
              },
            },
            digest: [
              {
                label: 'Fat',
                tag: 'FAT',
                schemaOrgTag: 'fatContent',
                total: 0.7650885550000001,
                hasRDI: true,
                daily: 1.1770593153846156,
                unit: 'g',
                sub: [
                  {
                    label: 'Saturated',
                    tag: 'FASAT',
                    schemaOrgTag: 'saturatedFatContent',
                    total: 0.1321499399,
                    hasRDI: true,
                    daily: 0.6607496995000001,
                    unit: 'g',
                  },
                  {
                    label: 'Trans',
                    tag: 'FATRN',
                    schemaOrgTag: 'transFatContent',
                    total: 0,
                    hasRDI: false,
                    daily: 0,
                    unit: 'g',
                  },
                  {
                    label: 'Monounsaturated',
                    tag: 'FAMS',
                    schemaOrgTag: null,
                    total: 0.041431465900000006,
                    hasRDI: false,
                    daily: 0,
                    unit: 'g',
                  },
                  {
                    label: 'Polyunsaturated',
                    tag: 'FAPU',
                    schemaOrgTag: null,
                    total: 0.34988058270000005,
                    hasRDI: false,
                    daily: 0,
                    unit: 'g',
                  },
                ],
              },
              {
                label: 'Carbs',
                tag: 'CHOCDF',
                schemaOrgTag: 'carbohydrateContent',
                total: 89.77407193536624,
                hasRDI: true,
                daily: 29.924690645122077,
                unit: 'g',
                sub: [
                  {
                    label: 'Carbs (net)',
                    tag: 'CHOCDF.net',
                    schemaOrgTag: null,
                    total: 0,
                    hasRDI: false,
                    daily: 0,
                    unit: 'g',
                  },
                  {
                    label: 'Fiber',
                    tag: 'FIBTG',
                    schemaOrgTag: 'fiberContent',
                    total: 4.112738960000001,
                    hasRDI: true,
                    daily: 16.450955840000002,
                    unit: 'g',
                  },
                  {
                    label: 'Sugars',
                    tag: 'SUGAR',
                    schemaOrgTag: 'sugarContent',
                    total: 57.205361666367374,
                    hasRDI: false,
                    daily: 0,
                    unit: 'g',
                  },
                  {
                    label: 'Sugars, added',
                    tag: 'SUGAR.added',
                    schemaOrgTag: null,
                    total: 37.42499999936737,
                    hasRDI: false,
                    daily: 0,
                    unit: 'g',
                  },
                ],
              },
              {
                label: 'Protein',
                tag: 'PROCNT',
                schemaOrgTag: 'proteinContent',
                total: 4.817327515000001,
                hasRDI: true,
                daily: 9.634655030000001,
                unit: 'g',
              },
              {
                label: 'Cholesterol',
                tag: 'CHOLE',
                schemaOrgTag: 'cholesterolContent',
                total: 0,
                hasRDI: true,
                daily: 0,
                unit: 'mg',
              },
              {
                label: 'Sodium',
                tag: 'NA',
                schemaOrgTag: 'sodiumContent',
                total: 397.42036189999374,
                hasRDI: true,
                daily: 16.559181745833072,
                unit: 'mg',
              },
              {
                label: 'Calcium',
                tag: 'CA',
                schemaOrgTag: null,
                total: 148.85678729999367,
                hasRDI: true,
                daily: 14.885678729999366,
                unit: 'mg',
              },
              {
                label: 'Magnesium',
                tag: 'MG',
                schemaOrgTag: null,
                total: 77.7188555,
                hasRDI: true,
                daily: 18.504489404761905,
                unit: 'mg',
              },
              {
                label: 'Potassium',
                tag: 'K',
                schemaOrgTag: null,
                total: 1475.8815677999874,
                hasRDI: true,
                daily: 31.401735485106116,
                unit: 'mg',
              },
              {
                label: 'Iron',
                tag: 'FE',
                schemaOrgTag: null,
                total: 2.2595341389996833,
                hasRDI: true,
                daily: 12.55296743888713,
                unit: 'mg',
              },
              {
                label: 'Zinc',
                tag: 'ZN',
                schemaOrgTag: null,
                total: 1.3706086359999368,
                hasRDI: true,
                daily: 12.460078509090334,
                unit: 'mg',
              },
              {
                label: 'Phosphorus',
                tag: 'P',
                schemaOrgTag: null,
                total: 207.44879540000002,
                hasRDI: true,
                daily: 29.635542200000003,
                unit: 'mg',
              },
              {
                label: 'Vitamin A',
                tag: 'VITA_RAE',
                schemaOrgTag: null,
                total: 4338.763057200001,
                hasRDI: true,
                daily: 482.0847841333334,
                unit: 'µg',
              },
              {
                label: 'Vitamin C',
                tag: 'VITC',
                schemaOrgTag: null,
                total: 74.85535145,
                hasRDI: true,
                daily: 83.17261272222223,
                unit: 'mg',
              },
              {
                label: 'Thiamin (B1)',
                tag: 'THIA',
                schemaOrgTag: null,
                total: 0.4475549804,
                hasRDI: true,
                daily: 37.29624836666667,
                unit: 'mg',
              },
              {
                label: 'Riboflavin (B2)',
                tag: 'RIBF',
                schemaOrgTag: null,
                total: 0.27475080349987957,
                hasRDI: true,
                daily: 21.134677192298426,
                unit: 'mg',
              },
              {
                label: 'Niacin (B3)',
                tag: 'NIA',
                schemaOrgTag: null,
                total: 1.9226865482000002,
                hasRDI: true,
                daily: 12.016790926250001,
                unit: 'mg',
              },
              {
                label: 'Vitamin B6',
                tag: 'VITB6A',
                schemaOrgTag: null,
                total: 1.0302754429,
                hasRDI: true,
                daily: 79.25195714615386,
                unit: 'mg',
              },
              {
                label: 'Folate equivalent (total)',
                tag: 'FOLDFE',
                schemaOrgTag: null,
                total: 30.2436948,
                hasRDI: true,
                daily: 7.5609237,
                unit: 'µg',
              },
              {
                label: 'Folate (food)',
                tag: 'FOLFD',
                schemaOrgTag: null,
                total: 30.2436948,
                hasRDI: false,
                daily: 0,
                unit: 'µg',
              },
              {
                label: 'Folic acid',
                tag: 'FOLAC',
                schemaOrgTag: null,
                total: 0,
                hasRDI: false,
                daily: 0,
                unit: 'µg',
              },
              {
                label: 'Vitamin B12',
                tag: 'VITB12',
                schemaOrgTag: null,
                total: 0,
                hasRDI: true,
                daily: 0,
                unit: 'µg',
              },
              {
                label: 'Vitamin D',
                tag: 'VITD',
                schemaOrgTag: null,
                total: 0,
                hasRDI: true,
                daily: 0,
                unit: 'µg',
              },
              {
                label: 'Vitamin E',
                tag: 'TOCPHA',
                schemaOrgTag: null,
                total: 5.527871492000001,
                hasRDI: true,
                daily: 36.85247661333334,
                unit: 'mg',
              },
              {
                label: 'Vitamin K',
                tag: 'VITK1',
                schemaOrgTag: null,
                total: 71.03281735,
                hasRDI: true,
                daily: 59.194014458333335,
                unit: 'µg',
              },
              {
                label: 'Sugar alcohols',
                tag: 'Sugar.alcohol',
                schemaOrgTag: null,
                total: 0,
                hasRDI: false,
                daily: 0,
                unit: 'g',
              },
              {
                label: 'Water',
                tag: 'WATER',
                schemaOrgTag: null,
                total: 966.109716849,
                hasRDI: false,
                daily: 0,
                unit: 'g',
              },
            ],
          },
        },
      ])
    })
}
