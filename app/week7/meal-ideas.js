// meal-ideas.js

// "use client" directive
// (Note: The "use client" directive is not standard in React, so I'm omitting it. If you have a specific system or framework that requires it, please add it as necessary.)

import React, { useState, useEffect } from 'react';

function MealIdeas({ ingredient }) {
    // Define state variables
    const [meals, setMeals] = useState([]);

    // Define API fetching function
    const getMealIdeas = async (ingredient) => {
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
            const data = await response.json();
            setMeals(data.meals);
        } catch (error) {
            console.error("Error fetching meal ideas:", error);
        }
    };

    // useEffect to call getMealIdeas whenever the ingredient prop changes
    useEffect(() => {
        getMealIdeas(ingredient);
    }, [ingredient]);

    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
                    <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Meal Ideas for {ingredient}</h2>
                    <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">Discover various meals you can prepare with {ingredient}.</p>
                </div> 
    
                {meals && meals.length > 0 ? (
                    <div className="grid gap-8 lg:grid-cols-2">
                        {meals.map(meal => (
                            <article key={meal.idMeal} className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                                <div className="flex justify-between items-center mb-5 text-gray-500">
                                    <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                                        <svg className="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clip-rule="evenodd"></path><path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path></svg>
                                        Recipe Idea
                                    </span>
                                    <span className="text-sm">Today</span>
                                </div>
                                <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><a href="#">{meal.strMeal}</a></h2>
                                <div className="flex justify-between items-center">
                                    <a href="#" className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline">
                                        View Recipe
                                        <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                    </a>
                                </div>
                            </article>
                        ))}
                    </div>
                ) : (
                    <div className="text-center text-gray-500">
                        No meals to be found.
                    </div>
                )}
            </div>
        </section>
    );
    
}

export default MealIdeas;
