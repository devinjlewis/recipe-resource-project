\c recipes_dev

INSERT INTO categories (category_name) VALUES
('Italian'),('Indian'),('Salad'),('Main Course'),('Dessert'),('Thai');

INSERT INTO recipes (name, ingredients, prep_time, cook_time, serving_size, date, instructions, category_id, is_favorite, origin)
VALUES
  ('Pasta Carbonara', 'Pasta, Eggs, Bacon, Parmesan Cheese, Black Pepper', 10, 20, 2, '2023-08-03', 'Step 1: Cook the pasta according to package instructions. 
Step 2: In a separate bowl, whisk together eggs, grated Parmesan cheese, and black pepper. 
Step 3: Cook bacon in a skillet until crispy, then add cooked pasta and egg mixture to the skillet. 
Step 4: Toss everything together until the sauce thickens. Serve hot.', '1', false, 'Italy'),

  ('Chicken Curry', 'Chicken, Onions, Tomatoes, Curry Powder, Coconut Milk', 15, 30, 4, '2023-08-03', 'Step 1: Heat oil in a pan and sauté chopped onions until they become translucent. 
Step 2: Add diced chicken and cook until browned. 
Step 3: Stir in chopped tomatoes, curry powder, and coconut milk. 
Step 4: Simmer until the chicken is cooked through and the sauce thickens. Serve with rice or naan bread.', '2', false, 'India'),

  ('Caesar Salad', 'Romaine Lettuce, Croutons, Caesar Dressing, Parmesan Cheese', 10, 0, 2, '2023-08-03', 'Step 1: Tear the lettuce leaves into bite-sized pieces and place them in a large salad bowl. 
Step 2: Add croutons and grated Parmesan cheese. 
Step 3: Drizzle Caesar dressing over the salad. 
Step 4: Toss everything together until the salad is evenly coated with the dressing. Serve immediately.', '3', false, 'Mexico'),

  ('Lemon Garlic Chicken Kebabs', '¼ cup butter melted, 1 lemon, juiced and zested, 1 tablespoon brown sugar, 1 clove garlic, minced or pressed, 4 boneless chicken breasts, cubed 4 skewers, or as needed', 15, 12, 12, '2023-08-03', 'Step 1: Combine butter, lemon juice, lemon zest, brown sugar, and garlic in a bowl. Add chicken and marinate for at least 1 hour. 
Step 2: Preheat grill for high heat. 
Step 3: Remove chicken from the marinade and shake off excess. Thread onto skewers. 
Step 4: Lightly oil the grill grate. Arrange skewers on the prepared grill. Cook 15 to 20 minutes, turning occasionally, until chicken juices run clear.', '4', false, 'United States'),

  ('Chocolate Chip Cookies', 'Flour, Butter, Sugar, Chocolate Chips, Eggs', 15, 12, 12, '2023-08-03', 'Step 1: Preheat the oven to 350°F (175°C). 
Step 2: In a bowl, cream together softened butter and sugar until light and fluffy. 
Step 3: Beat in eggs one at a time, then add flour and chocolate chips. 
Step 4: Drop spoonfuls of dough onto a baking sheet and bake for 10-12 minutes, or until the edges are golden brown. Let cool on a wire rack before serving.', '5', true, 'United States'),

  ('Spaghetti Bolognese', 'Ground Beef, Onion, Garlic, Tomato Sauce, Spaghetti, Olive Oil', 15, 25, 4, '2023-08-03', 'Step 1: Cook spaghetti according to package instructions. 
Step 2: In a separate pan, sauté chopped onion and garlic in olive oil. 
Step 3: Add ground beef and cook until browned. 
Step 4: Stir in tomato sauce and let it simmer. 
Step 5: Serve the Bolognese sauce over the cooked spaghetti.', '1', true, 'Italy'),
    
  ('Chicken Alfredo', 'Chicken Breast, Fettuccine Pasta, Butter, Heavy Cream, Parmesan Cheese', 20, 30, 4, '2023-08-03', 'Step 1: Cook fettuccine pasta according to package instructions. 
Step 2: Season chicken breast with salt and pepper, then grill or cook until done. 
Step 3: In a saucepan, melt butter and add heavy cream. 
Step 4: Stir in grated Parmesan cheese to create the Alfredo sauce. 
Step 5: Combine the cooked pasta, sliced chicken, and Alfredo sauce. Serve hot.', '1', false, 'Italy'),

  ('Greek Salad', 'Romaine Lettuce, Cucumber, Tomatoes, Red Onion, Kalamata Olives, Feta Cheese', 10, 0, 2, '2023-08-03', 'Step 1: Chop romaine lettuce, cucumbers, and tomatoes. 
Step 2: Slice red onion and Kalamata olives. 
Step 3: Crumble feta cheese on top. 
Step 4: Toss all the ingredients together and drizzle with olive oil and lemon juice.', '3', true, 'Greece'),

  ('Thai Green Curry', 'Chicken, Green Curry Paste, Coconut Milk, Thai Eggplants, Bamboo Shoots', 15, 20, 4, '2023-08-03', 'Step 1: In a pan, heat green curry paste with a little coconut milk. 
Step 2: Add sliced chicken and cook until it changes color. 
Step 3: Pour in the rest of the coconut milk and add Thai eggplants and bamboo shoots. 
Step 4: Simmer until the chicken is cooked through and the vegetables are tender. Serve hot withStepamed rice.', '6', false, 'Thailand'),
  
  ('Chocolate Brownies', 'Butter, Sugar, Eggs, Cocoa Powder, All-Purpose Flour, Chocolate Chips', 15, 25, 12, '2023-08-03', 'Step 1: Preheat the oven to 350°F (175°C) and grease a baking pan. 
Step 2: Melt butter and mix it with sugar until well combined. 
Step 3: Beat in the eggs, one at a time, and add cocoa powder. 
Step 4: Stir in all-purpose flour and chocolate chips. 
Step 5: Pour the batter into the prepared pan and bake until a toothpick inserted comes out with a few crumbs. Let cool before cutting into squares.', '5', false, 'United States'),

  ('Lemon Garlic Shrimp Scampi', '¼ cup butter melted, 1 lemon, juiced and zested, 1 tablespoon brown sugar, 1 clove garlic, minced or pressed, 1 pound large shrimp, peeled and deveined, 8 ounces linguine pasta, 2 tablespoons chopped fresh parsley', 20, 10, 8, '2023-08-04', 'Step 1: In a large bowl, mix together butter, lemon juice, lemon zest, brown sugar, and garlic. Add shrimp and marinate for at least 10 minutes. 
Step 2: Cook linguine pasta according to package instructions. 
Step 3: In a large skillet, melt the remaining butter over medium heat. Add the marinated shrimp and cook for about 4-5 minutes or until pink and opaque. 
Step 4: Serve the shrimp over cooked linguine and garnish with chopped fresh parsley.', '4', false, 'United States'),

  ('Grilled Teriyaki Salmon', '½ cup soy sauce ½ cup water ¼ cup brown sugar 2 tablespoons honey 1 teaspoon grated fresh ginger 1 teaspoon minced garlic 4 salmon fillets', 25, 15, 10, '2023-08-05', 'Step 1: In a small saucepan, combine soy sauce, water, brown sugar, honey, ginger, and garlic. Bring to a simmer and cook for 5 minutes. 
Step 2: Let the teriyaki sauce cool. 
Step 3: Marinate salmon fillets in the teriyaki sauce for at least 15 minutes. 
Step 4: Preheat grill for medium heat. 
Step 5: Grill salmon fillets for about 5-6 minutes per side or until cooked through and flaky. 
Step 6: Serve withStepamed vegetables and rice.', '4', false, 'United States'),

  ('Caprese Salad', '4 large ripe tomatoes, sliced ¼ inch thick 8 ounces fresh mozzarella cheese, sliced ¼ inch thick ¼ cup fresh basil leaves 2 tablespoons balsamic glaze 2 tablespoons extra-virgin olive oil Salt and pepper to taste', 10, 10, 0, '2023-08-06', 'Step 1: Arrange alternating slices of tomatoes and mozzarella on a serving platter. 
Step 2: Tuck fresh basil leaves between the tomato and mozzarella slices. 
Step 3: Drizzle balsamic glaze and olive oil over the salad. 
Step 4: Season with salt and pepper to taste. 
Step 5: Serve immediately as a refreshing appetizer or side dish.', '3', false, 'Italy'),

  ('Spaghetti Bolognese', '8 ounces spaghetti pasta 1 tablespoon olive oil 1 onion, finely chopped 2 cloves garlic, minced 1 carrot, finely chopped 1 celery stalk, finely chopped 1 pound ground beef 1 can (28 ounces) crushed tomatoes 1 teaspoon dried oregano 1 teaspoon dried basil Salt and pepper to taste Grated Parmesan cheese for serving', 30, 20, 10, '2023-08-07', 'Step 1: Cook spaghetti pasta according to package instructions. 
Step 2: In a large skillet, heat olive oil over medium heat. Add onion, garlic, carrot, and celery. Cook until softened. 
Step 3: Add ground beef and cook until browned and cooked through. 
Step 4: Stir in crushed tomatoes, oregano, basil, salt, and pepper. Simmer for 15-20 minutes. 
Step 5: Serve Bolognese sauce over cooked spaghetti. 
Step 6: Garnish with grated Parmesan cheese.', '4', false, 'Italy'),

  ('Greek Chicken Gyros', '1 pound boneless, skinless chicken breasts ¼ cup olive oil 3 tablespoons lemon juice 2 cloves garlic, minced 1 teaspoon dried oregano ½ teaspoon dried thyme Salt and pepper to taste 4 pita breads ½ cup Tzatziki sauce Sliced tomatoes, cucumbers, and red onions for serving', 25, 15, 10, '2023-08-08', 'Step 1: In a bowl, whisk together olive oil, lemon juice, garlic, oregano, thyme, salt, and pepper. 
Step 2: Add chicken breasts to the marinade and coat well. Marinate for at least 15 minutes. 
Step 3: Preheat grill or skillet over medium-high heat. Cook chicken for 6-7 minutes per side or until cooked through. 
Step 4: Let the chicken rest for a few minutes, then slice it thinly. 
Step 5: Warm pita bread in a pan or microwave. 
Step 6: Assemble gyros by placing sliced chicken, tomatoes, cucumbers, and red onions on the pita bread. Drizzle with Tzatziki sauce. 
Step 7: Roll up the pita to form the gyro and serve.', '4', false, 'Greece'),

  ('Veggie Quinoa Bowl', '1 cup quinoa 2 cups vegetable broth 1 tablespoon olive oil 1 red bell pepper, diced 1 zucchini, diced 1 cup cherry tomatoes, halved 1 cup cooked chickpeas 2 cups baby spinach ¼ cup chopped fresh parsley Salt and pepper to taste Lemon wedges for serving', 25, 15, 10, '2023-08-09', 'Step 1: Rinse quinoa under cold water and drain. In a saucepan, bring vegetable broth to a boil. Add quinoa, reduce heat, cover, and simmer for 15-20 minutes or until the quinoa is cooked and liquid is absorbed. 
Step 2: In a large skillet, heat olive oil over medium heat. Add diced bell pepper and zucchini. Cook until tender. 
Step 3: Add cherry tomatoes and cooked chickpeas. Cook for a few more minutes. 
Step 4: Stir in baby spinach and cook until wilted. 
Step 5: Season with chopped fresh parsley, salt, and pepper. 
Step 6: Serve the veggie quinoa bowl with a squeeze of lemon juice on top.', '4', false, 'International'),

  ('Classic Margherita Pizza', '1 pound pizza dough ½ cup pizza sauce 1 cup shredded mozzarella cheese 1 large ripe tomato, thinly sliced ¼ cup fresh basil leaves 1 tablespoon olive oil Salt and pepper to taste', 20, 10, 10, '2023-08-10', 'Step 1: Preheat oven to the highest temperature (usually 500°F or 260°C). 
Step 2: Roll out pizza dough on a floured surface to your desired thickness. 
Step 3: Transfer the rolled-out dough to a pizza stone or a baking sheet lined with parchment paper. 
Step 4: Spread pizza sauce evenly over the dough, leaving a small border around the edges. 
Step 5: Sprinkle shredded mozzarella cheese over the sauce. 
Step 6: Arrange tomato slices and fresh basil leaves on top of the cheese. 
Step 7: Drizzle olive oil over the pizza and season with salt and pepper. 
Step 8: Bake the pizza in the preheated oven for 8-10 minutes or until the crust is golden and the cheese is bubbly and slightly browned. 
Step 9: Slice and serve hot.', '4', false, 'Italy'),

  ('Thai Red Curry with Tofu', '1 tablespoon vegetable oil 2 tablespoons Thai red curry paste 1 can (14 ounces) coconut milk 1 cup vegetable broth 1 tablespoon soy sauce 2 tablespoons brown sugar 1 red bell pepper, sliced 1 cup sliced mushrooms 1 cup sliced zucchini 1 block (14 ounces) firm tofu, cubed 2 tablespoons chopped fresh cilantro Cooked jasmine rice for serving', 30, 15, 15, '2023-08-11', 'Step 1: In a large skillet or wok, heat vegetable oil over medium heat. Add Thai red curry paste and cook for a minute until fragrant. 
Step 2: Pour in coconut milk, vegetable broth, soy sauce, and brown sugar. Stir well to combine. 
Step 3: Add sliced bell pepper, mushrooms, and zucchini to the curry sauce. Simmer for about 10 minutes or until the vegetables are tender. 
Step 4: Add cubed tofu and cook for an additional 5 minutes. 
Step 5: Stir in chopped fresh cilantro. 
Step 6: Serve the Thai red curry over cooked jasmine rice.', '4', false, 'Thailand'),

  ('Mexican Street Corn (Elote)', '4 ears of corn, husked ¼ cup mayonnaise ¼ cup sour cream ½ cup crumbled cotija cheese 1 teaspoon chili powder 1 lime, cut into wedges Fresh cilantro leaves for garnish', 15, 10, 5, '2023-08-12', 'Step 1: Preheat grill to medium-high heat. Grill corn until slightly charred on all sides. 
Step 2: In a small bowl, mix together mayonnaise and sour cream. 
Step 3: Brush grilled corn with the mayo-sour cream mixture. 
Step 4: Roll the corn in crumbled cotija cheese to coat evenly. 
Step 5: Sprinkle chili powder over the corn. 
Step 6: Serve with lime wedges and garnish with fresh cilantro leaves.', '4', false, 'Mexico'),

  ('Waldorf Salad', '2 cups diced apples 1 cup diced celery 1/2 cup chopped walnuts 1/2 cup raisins 1/2 cup mayonnaise 1 tablespoon lemon juice 1 tablespoon honey Lettuce leaves for serving', 10, 0, 10, '2023-08-09', 'Step 1: In a large mixing bowl, combine diced apples, diced celery, chopped walnuts, and raisins. 
Step 2: In a small bowl, whisk together mayonnaise, lemon juice, and honey to make the dressing. 
Step 3: Pour the dressing over the apple mixture and toss to coat evenly. 
Step 4: Chill the salad in the refrigerator for at least 30 minutes. 
Step 5: Serve the Waldorf salad on a bed of lettuce leaves.', 3, false, 'United States'),

  ('Quinoa and Avocado Salad', '1 cup cooked quinoa 1 avocado, diced 1/2 cup cherry tomatoes, halved 1/4 cup diced red onion 1/4 cup chopped fresh cilantro 2 tablespoons lime juice 1 tablespoon extra-virgin olive oil Salt and pepper to taste', 15, 5, 10, '2023-08-10', 'Step 1: In a large mixing bowl, combine cooked quinoa, diced avocado, halved cherry tomatoes, diced red onion, and chopped fresh cilantro. 
Step 2: In a small bowl, whisk together lime juice, extra-virgin olive oil, salt, and pepper to make the dressing. 
Step 3: Pour the dressing over the quinoa mixture and toss to combine. 
Step 4: Chill the salad in the refrigerator for at least 5 minutes. 
Step 5: Serve the quinoa and avocado salad as a nutritious and flavorful side dish.', 3, false, 'International'),

  ('Spinach and Strawberry Salad', '4 cups baby spinach leaves 1 cup sliced strawberries 1/2 cup crumbled feta cheese 1/4 cup sliced almonds 2 tablespoons balsamic vinaigrette dressing', 10, 0, 10, '2023-08-11', 'Step 1: In a large salad bowl, combine baby spinach leaves, sliced strawberries, crumbled feta cheese, and sliced almonds. 
Step 2: Drizzle balsamic vinaigrette dressing over the salad and toss to coat evenly. 
Step 3: Serve the spinach and strawberry salad as a refreshing and healthy option for lunch or as a side dish with your favorite meal.', 3, false, 'International'),

  ('Vanilla Ice Cream', '2 cups heavy cream 1 cup whole milk 3/4 cup granulated sugar 1 tablespoon pure vanilla extract Pinch of salt', 30, 5, 25, '2023-08-07', 'Step 1: In a large mixing bowl, whisk together the heavy cream, whole milk, sugar, vanilla extract, and a pinch of salt until the sugar is dissolved. 
Step 2: Cover the bowl and refrigerate the mixture for at least 4 hours or overnight. 
Step 3: Pour the chilled mixture into an ice cream maker and churn according to the manufacturer&#39;s instructions. 
Step 4: Transfer the churned ice cream to a lidded container and freeze for an additional 2 hours to firm up. 
Step 5: Serve the creamy and smooth vanilla ice cream on its own or with your favorite toppings.', 5, false, 'International'),

  ('Fruit Salad with Honey-Lime Dressing', '2 cups diced watermelon 1 cup diced cantaloupe 1 cup diced pineapple 1 cup sliced strawberries 1 cup green grapes 1 tablespoon honey 1 tablespoon fresh lime juice 1 teaspoon lime zest Fresh mint leaves for garnish', 15, 10, 5, '2023-08-08', 'Step 1: In a large mixing bowl, combine diced watermelon, cantaloupe, pineapple, sliced strawberries, and green grapes. 
Step 2: In a small bowl, whisk together honey, fresh lime juice, and lime zest to make the dressing. 
Step 3: Drizzle the honey-lime dressing over the fruit salad and toss to coat evenly. 
Step 4: Garnish with fresh mint leaves. 
Step 5: Serve the refreshing fruit salad as a light and healthy dessert or snack.', 5, false, 'International'),

  ('Tiramisu', '1 cup heavy cream 1 cup mascarpone cheese 1/2 cup granulated sugar 1 teaspoon pure vanilla extract 1 cup strong brewed coffee, cooled 2 tablespoons coffee liqueur (optional) 24-30 ladyfinger cookies 2 tablespoons cocoa powder', 20, 5, 15, '2023-08-09', 'Step 1: In a large mixing bowl, whip the heavy cream until stiff peaks form. 
Step 2: In another bowl, whisk together mascarpone cheese, sugar, and vanilla extract until smooth. 
Step 3: Gently fold the whipped cream into the mascarpone mixture until well combined. 
Step 4: In a shallow dish, combine the cooled coffee and coffee liqueur (if using). 
Step 5: Dip the ladyfinger cookies into the coffee mixture, one at a time, and arrange them in the bottom of a serving dish or a trifle dish. 
Step 6: Spread half of the mascarpone mixture over the ladyfingers. 
Step 7: Repeat the layers with the remaining ladyfingers and mascarpone mixture. 
Step 8: Sift cocoa powder over the top layer of the tiramisu. 
Step 9: Cover the tiramisu with plastic wrap and refrigerate for at least 4 hours or overnight. 
Step 10: Serve the chilled and indulgent tiramisu as a classic Italian dessert.', 5, false, 'Italy'),


  ('Chocolate Mousse', '8 ounces semi-sweet chocolate, chopped 1/4 cup unsalted butter 4 large eggs, separated 1/4 cup granulated sugar 1 teaspoon pure vanilla extract Pinch of salt Whipped cream and chocolate shavings for garnish', 25, 10, 15, '2023-08-10', 'Step 1: In a microwave-safe bowl, melt the chopped chocolate and butter together, stirring until smooth. 
Step 2: In a separate bowl, whisk together the egg yolks, sugar, vanilla extract, and a pinch of salt until pale and creamy. 
Step 3: Gradually whisk the melted chocolate mixture into the egg yolk mixture until well combined. 
Step 4: In another bowl, whip the egg whites until stiff peaks form. 
Step 5: Gently fold the whipped egg whites into the chocolate mixture until no white streaks remain. 
Step 6: Spoon the chocolate mousse into individual serving cups or glasses. 
Step 7: Chill the mousse in the refrigerator for at least 2 hours to set. 
Step 8: Garnish with a dollop of whipped cream and chocolate shavings before serving.', 5, false, 'International'),

  ('Tom Kha Gai (Thai Coconut Chicken Soup)', '4 cups chicken broth 1 can (14 ounces) coconut milk 1 stalk lemongrass, sliced 1 inch piece of galangal (or ginger), sliced 1 cup sliced mushrooms 2 cups cooked chicken, shredded 2 tablespoons fish sauce (or soy sauce for a vegetarian version) 2 tablespoons lime juice 1 tablespoon brown sugar 2 kaffir lime leaves Fresh cilantro for garnish Sliced red chilies for garnish Cooked jasmine rice for serving', 30, 15, 15, '2023-08-06', 'Step 1: In a large pot, bring chicken broth to a boil. 
Step 2: Add sliced lemongrass and galangal (or ginger) to the broth. Simmer for 10 minutes to infuse the flavors. 
Step 3: Stir in sliced mushrooms and kaffir lime leaves. Cook for a few more minutes until the mushrooms are tender. 
Step 4: Add coconut milk and shredded cooked chicken to the soup. 
Step 5: In a small bowl, whisk together fish sauce (or soy sauce), lime juice, and brown sugar. Pour the sauce into the soup and stir to combine. 
Step 6: Serve Tom Kha Gai over cooked jasmine rice. Garnish with fresh cilantro and sliced red chilies.', 6, false, 'Thailand'),

  ('Thai Green Papaya Salad (Som Tum)', '2 cups shredded green papaya 1/4 cup shredded carrots 1/4 cup long beans or green beans, cut into 2-inch pieces 2 cloves garlic 2 Thai bird chilies 2 tablespoons palm sugar (or brown sugar) 2 tablespoons fish sauce (or soy sauce for a vegetarian version) 2 tablespoons lime juice 1 tablespoon tamarind paste 1/4 cup cherry tomatoes, halved 2 tablespoons roasted peanuts Fresh cilantro for garnish', 20, 10, 10, '2023-08-07', 'Step 1: In a mortar and pestle, pound garlic and Thai bird chilies until crushed. 
Step 2: Add palm sugar, fish sauce (or soy sauce), lime juice, and tamarind paste to the mortar. Mix well to create the dressing. 
Step 3: In a large mixing bowl, combine shredded green papaya, shredded carrots, and cut long beans. 
Step 4: Pour the dressing over the salad and toss to combine. 
Step 5: Add halved cherry tomatoes and roasted peanuts. 
Step 6: Garnish with fresh cilantro before serving.', 6, true, 'Thailand'),

  ('Thai Red Curry with Shrimp', '1 pound large shrimp, peeled and deveined 2 tablespoons red curry paste 1 can (14 ounces) coconut milk 1 cup vegetable broth 1 cup sliced bell peppers 1 cup sliced zucchini 1 tablespoon fish sauce (or soy sauce for a vegetarian version) 1 tablespoon brown sugar 1/2 cup fresh basil leaves Cooked jasmine rice for serving', 25, 15, 10, '2023-08-08', 'Step 1: In a large skillet or wok, cook shrimp over medium heat until pink and opaque. Remove the shrimp from the skillet and set aside. 
Step 2: Add red curry paste to the skillet and cook for a minute until fragrant. 
Step 3: Pour in coconut milk and vegetable broth. Bring to a simmer. 
Step 4: Add sliced bell peppers and zucchini to the curry. Simmer for about 10 minutes or until the vegetables are tender. 
Step 5: Stir in fish sauce (or soy sauce) and brown sugar. 
Step 6: Add fresh basil leaves and cooked shrimp to the skillet. 
Step 7: Serve Thai Red Curry with Shrimp over cooked jasmine rice.', 6, true, 'Thailand'),

  ('Chana Masala', '1 cup dried chickpeas, soaked overnight 2 tablespoons vegetable oil 1 large onion, finely chopped 3 cloves garlic, minced 1-inch piece of ginger, grated 2 large tomatoes, chopped 2 teaspoons garam masala 1 teaspoon ground cumin 1 teaspoon ground coriander 1/2 teaspoon turmeric powder 1/4 teaspoon cayenne pepper Salt to taste Fresh cilantro for garnish Cooked basmati rice or naan for serving', 60, 30, 30, '2023-08-06', 'Step 1: Drain and rinse the soaked chickpeas. 
Step 2: In a large pot, heat vegetable oil over medium heat. Add chopped onions and cook until softened. 
Step 3: Stir in minced garlic and grated ginger. Cook for another minute until fragrant. 
Step 4: Add chopped tomatoes and cook until they break down and become soft. 
Step 5: Stir in garam masala, ground cumin, ground coriander, turmeric powder, and cayenne pepper. 
Step 6: Add the soaked chickpeas to the pot and mix well with the spices. 
Step 7: Pour enough water to cover the chickpeas and bring to a boil. 
Step 8: Reduce the heat, cover the pot, and let it simmer for about 30 minutes or until the chickpeas are tender. 
Step 9: Season with salt to taste. 
Step 10: Serve Chana Masala over cooked basmati rice or with naan. Garnish with fresh cilantro.', 2, false, 'India'),

( 'Vegetable Biryani', '1 cup basmati rice, soaked for 30 minutes 2 tablespoons ghee (clarified butter) or vegetable oil 1 large onion, thinly sliced 2 carrots, peeled and diced 1 cup green beans, trimmed and chopped 1 cup cauliflower florets 1/2 cup green peas 1/4 cup plain yogurt 1/4 cup chopped mint leaves 1/4 cup chopped cilantro leaves 1 teaspoon garam masala 1/2 teaspoon turmeric powder 1/2 teaspoon ground cumin 1/2 teaspoon ground coriander 1/4 teaspoon saffron threads (soaked in warm milk) Salt to taste Fried onions for garnish (optional)', 40, 20, 20, '2023-08-07', 'Step 1: Cook the soaked basmati rice in a pot of boiling salted water until it is 70% cooked. Drain and set aside. 
Step 2: In a large skillet or pot, heat ghee (or vegetable oil) over medium heat. Add thinly sliced onions and cook until they turn golden brown and crispy. Remove half of the fried onions and set aside for garnish. 
Step 3: To the remaining fried onions in the skillet, add diced carrots, chopped green beans, cauliflower florets, and green peas. Cook for a few minutes until the vegetables are partially cooked. 
Step 4: Stir in plain yogurt, chopped mint leaves, chopped cilantro leaves, garam masala, turmeric powder, ground cumin, and ground coriander. 
Step 5: Layer the partially cooked basmati rice over the spiced vegetables. 
Step 6: Drizzle the saffron-infused milk over the rice. 
Step 7: Cover the pot with a tight-fitting lid and let it cook over low heat for about 20 minutes or until the rice and vegetables are fully cooked and fragrant. 
Step 8: Garnish with the reserved fried onions before serving. 
Step 9: Serve Vegetable Biryani with raita or cucumber salad on the side.', 2, false, 'India'),

('Spaghetti Carbonara', '8 ounces spaghetti 4 ounces pancetta or guanciale, diced 2 large eggs 1 cup grated Pecorino Romano cheese 1 clove garlic, minced Freshly ground black pepper Fresh parsley for garnish', 20, 10, 10, '2023-08-06', 'Step 1: Cook the spaghetti in a large pot of salted boiling water until al dente. 
Step 2: In a skillet, cook the diced pancetta or guanciale over medium heat until crispy. 
Step 3: In a bowl, whisk together the eggs, grated Pecorino Romano cheese, minced garlic, and a generous amount of freshly ground black pepper. 
Step 4: Drain the cooked spaghetti and immediately add it to the skillet with the cooked pancetta or guanciale. 
Step 5: Quickly stir the spaghetti in the skillet to coat it with the rendered fat. 
Step 6: Remove the skillet from heat and quickly pour the egg and cheese mixture over the spaghetti. Toss everything together until the sauce thickens and coats the pasta. 
Step 7: Serve Spaghetti Carbonara immediately, garnished with fresh parsley.', 1, false, 'Italy'),

('Lasagna', '9 lasagna noodles, cooked according to package instructions 1 pound ground beef 1 large onion, chopped 3 cloves garlic, minced 1 can (28 ounces) crushed tomatoes 1 can (6 ounces) tomato paste 2 tablespoons chopped fresh basil 2 tablespoons chopped fresh parsley 1 teaspoon dried oregano 1/2 teaspoon sugar Salt and pepper to taste 15 ounces ricotta cheese 2 cups shredded mozzarella cheese 1 cup grated Parmesan cheese', 60, 30, 30, '2023-08-08', 'Step 1: In a large skillet, cook ground beef over medium heat until browned. Drain excess fat. 
Step 2: Add chopped onion and minced garlic to the skillet. Cook until the onion is translucent. 
Step 3: Stir in crushed tomatoes, tomato paste, chopped basil, chopped parsley, dried oregano, sugar, salt, and pepper. Simmer the sauce for about 20 minutes. 
Step 4: Preheat your oven to 375°F (190°C). 
Step 5: In a greased 9x13-inch baking dish, spread a thin layer of the meat sauce. 
Step 6: Place three cooked lasagna noodles on top of the sauce. 
Step 7: Spread a layer of ricotta cheese over the noodles, followed by a layer of shredded mozzarella cheese and grated Parmesan cheese. 
Step 8: Repeat the layers, ending with a layer of meat sauce and a generous sprinkle of shredded mozzarella and grated Parmesan cheese on top. 
Step 9: Cover the baking dish with aluminum foil and bake for 20 minutes. 
Step 10: Remove the foil and bake for an additional 10 minutes until the cheese is bubbly and lightly browned. 
Step 11: Let the Lasagna cool for a few minutes before serving.', 1, false, 'Italy'),

('Risotto Milanese', '1 1/2 cups Arborio rice 4 cups chicken or vegetable broth 1/2 cup dry white wine 1 small onion, finely chopped 2 tablespoons unsalted butter 1 tablespoon olive oil 1/4 teaspoon saffron threads (soaked in warm water) 1/2 cup grated Parmesan cheese Salt and pepper to taste Fresh parsley for garnish', 30, 15, 15, '2023-08-09', 'Step 1: In a small bowl, soak saffron threads in warm water for 10 minutes. 
Step 2: In a saucepan, heat chicken or vegetable broth and keep it warm on low heat. 
Step 3: In a large skillet or saucepan, heat olive oil and 1 tablespoon of butter over medium heat. Add finely chopped onion and cook until softened. 
Step 4: Stir in Arborio rice and cook for a minute until lightly toasted. 
Step 5: Pour in dry white wine and cook until it is mostly absorbed by the rice. 
Step 6: Ladle in a cup of warm broth and stir the rice until the liquid is mostly absorbed. Repeat this process, adding broth one cup at a time and stirring constantly, until the rice is creamy and cooked al dente. 
Step 7: Stir in saffron-infused water, grated Parmesan cheese, and the remaining tablespoon of butter. Season with salt and pepper to taste. 
Step 8: Let the Risotto Milanese rest for a few minutes before serving. 
Step 9: Garnish with fresh parsley.', 1, false, 'Italy');