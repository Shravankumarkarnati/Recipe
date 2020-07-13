class formatIngredient {
  constructor(ingredients) {
    this.ingredients = ingredients;
  }

  formatSizes() {
    let newIngredients = [];

    const sizes = {
      cups: "cup",
      ounces: "oz",
      ounce: "oz",
      teaspoons: "tsp",
      teaspoon: "tsp",
      tsps: "tsp",
      tablespoon: "tsp",
      tablespoons: "tbsp",
      tbsps: "tbsp",
      pounds: "pound",
    };
    const values = [];
    for (let [key, value] of Object.entries(sizes)) {
      values.push(value);
    }
    this.ingredients.forEach((cur) => {
      const stringSplited = cur
        .toString()
        .replace(/ *\([^)]*\) */g, " ")
        .split(" ");
      stringSplited.forEach((cur, index) => {
        cur = cur.toLowerCase();
        if (cur in sizes) {
          stringSplited[index] = sizes[cur];
        }
      });
      cur = stringSplited.join(" ");
      newIngredients.push(cur);
    });
    this.ingredients = newIngredients;
    newIngredients = [];

    this.ingredients.forEach((cur) =>
      newIngredients.push(this.calcUnits(cur, values))
    );
    this.ingredients = newIngredients;
  }

  calcTime() {
    const standard = 15;
    const periods = Math.ceil(this.ingredients.length / 3);
    return periods * standard;
  }

  calcUnits(ingredient, values) {
    const splitedIng = ingredient.split(" ");
    let value = -1;
    let unit = "";
    values.forEach((cur) => {
      if (splitedIng.indexOf(cur) > -1) {
        value = splitedIng.indexOf(cur);
        unit = cur;
      }
    });
    let objIng = {};
    if (value === -1) {
      if (parseInt(splitedIng[0], 10)) {
        objIng = {
          count: Math.abs(parseInt(splitedIng[0], 10)) || 1,
          unit: "",
          ingredient: splitedIng.splice(1).join(" "),
        };
      } else {
        objIng = {
          count: 1,
          unit: "",
          ingredient: splitedIng.join(" "),
        };
      }
    } else if (value > -1) {
      let countFound = splitedIng.slice(0, value);
      let count = countFound.join("+");
      objIng = {
        count: Math.abs(count) || 1,
        unit: unit,
        ingredient: splitedIng.splice(value + 1).join(" "),
      };
    }
    return objIng;
  }
}

export default formatIngredient;
