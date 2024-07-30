import React from 'react';
import './ChefGuide.css';
import Navbar from './Navbar ';
import Footer from './Footer';

const chefs = [
    {
        name: "Chef John Doe",
        title: "Executive Chef",
        bio: "With over 15 years of experience, Chef John Doe brings a unique blend of flavors and techniques to Hotel Karan.",
        specialty: "Signature Dish: Truffle Risotto",
        image: "https://img.freepik.com/free-photo/medium-shot-professional-chef-posing_23-2151232159.jpg",
        video: "https://www.youtube.com/embed/JIlg86z02rU?si=dUEEdZddDZQ7hP-d",
        recipes: [
            {
                title: "Truffle Risotto",
                description: "Treat yourself to a delightful truffle-infused risotto.",
                image: "https://cookingwithcocktailrings.com/wp-content/uploads/2021/02/img_60393f2625abc.jpg",
            },
        ],
    },
    {
        name: "Chef Jane Smith",
        title: "Pastry Chef",
        bio: "Chef Jane Smith, our talented pastry chef, is known for her delicate and innovative desserts that captivate the senses.",
        specialty: "Signature Dish: Chocolate Lava Cake",
        image: "https://img.freepik.com/premium-photo/cheerful-male-pastry-chef-standing-with-arms-crossed-bakery-shop_533998-12458.jpg",
        video: "https://www.youtube.com/embed/X2jakwIVLbY?si=ya_zlyGk0XQB4Yhf",
        recipes: [
            {
                title: "Chocolate Lava Cake",
                description: "A rich and gooey chocolate lava cake with a molten center.",
                image: "https://media.istockphoto.com/id/541267186/photo/chocolate-fondant-with-strawberries-and-powdered-sugar.jpg?s=612x612&w=0&k=20&c=6a_-IAUELw0zVMR0vjVtr9UiDg_GAN-S3eowoDGsMhI=",
            },
        ],
    },
    {
        name: "Chef Emily Brown",
        title: "Sous Chef",
        bio: "Chef Emily Brown brings her expertise in modern culinary techniques and seasonal ingredients to create extraordinary dishes.",
        specialty: "Signature Dish: Seared Scallops",
        image: "https://c4.wallpaperflare.com/wallpaper/537/897/121/cook-soup-ladle-gray-background-wallpaper-preview.jpg",
        video: "https://www.youtube.com/embed/pzAYPLetuPE?si=55kdge1-um4gDvgq",
        recipes: [
            {
                title: "Seared Scallops",
                description: "Perfectly seared scallops with a citrus beurre blanc sauce.",
                image: "https://images.pexels.com/photos/4114979/pexels-photo-4114979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            },
        ],
    },
    // Add more chefs as needed
];

const ChefGuide = () => {
    return <div>
        <Navbar />
        <div className="bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 p-8">
            {/* Introduction Section */}
            <header className="text-center mb-16 animate-fade-in text-white">
                <h1 className="text-5xl font-bold mb-4 leading-tight">Meet Our Talented Chefs</h1>
                <p className="text-xl">Discover the culinary artists behind our delectable dishes</p>
            </header>

            {/* Chef Profiles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {chefs.map((chef, index) => (
                    <div key={index} className="bg-gray-900 text-white p-6 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300 animate-slide-up">
                        <img src={chef.image} alt={chef.name} className="w-full h-72 object-cover rounded-lg mb-4 border border-gray-600" />
                        <h2 className="text-3xl font-semibold mb-2">{chef.name}</h2>
                        <h3 className="text-xl mb-2 italic">{chef.title}</h3>
                        <p className="text-lg mb-2 font-light">{chef.specialty}</p>
                        <p className="text-base mb-4">{chef.bio}</p>
                    </div>
                ))}
            </div>

            {/* Video Interviews */}
            <section className="mt-16 animate-fade-in">
                <h2 className="text-4xl font-bold mb-8 text-center text-white">Chef Interviews</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {chefs.map((chef, index) => (
                        <div key={index} className="bg-gray-900 text-white p-6 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300">
                            <iframe
                                src={chef.video}
                                title={`${chef.name} Interview`}
                                className="w-full h-64 rounded-lg mb-4 border border-gray-600"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen>
                            </iframe>
                            <h3 className="text-xl font-semibold">{chef.name}</h3>
                        </div>
                    ))}
                </div>
            </section>

            {/* Recipe Highlights */}
            <section className="mt-16 animate-slide-up pb-10 max-sm:pb-6">
                <h2 className="text-4xl font-bold mb-8 text-center text-white">Recipe Highlights</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {chefs.flatMap((chef) =>
                        chef.recipes.map((recipe, rIndex) => (
                            <div key={`${chef.name}-${rIndex}`} className="bg-gray-900 text-white p-6 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300 flex flex-col md:flex-row lg:flex-col lg:items-center lg:justify-center">
                                <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover rounded-lg mb-4 border border-gray-600 lg:w-96 lg:h-80 lg:mb-6 lg:mr-0 lg:mb-4" />
                                <div className="flex flex-col items-center text-center lg:text-left lg:items-start">
                                    <h3 className="text-2xl font-semibold mb-2">{recipe.title}</h3>
                                    <p className="text-base">{recipe.description}</p>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </section>
        </div>
        <div className=''>

            <Footer />
        </div>
    </div>

};

export default ChefGuide;
