import NavBar from"./NavBar.jsx"
import { Bookmark } from 'lucide-react';

function HomePage() {
    const posts = [{
        id: 1,
        title: "Getting Started with React and Tailwind CSS",
        author: "Seeyonu",
        timeRead: " 5 min read",
        postedOn: "Jan 10, 2024",
        content: "React and Tailwind CSS are a powerful combination for building modern web applications. In this article, we'll explore how to set up a React project with Tailwind CSS and create a simple responsive layout.",
        Image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        profilePic: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    }, {
        id: 2,
        title: "Understanding JavaScript Closures",
        author: " Mani supriya",
        timeRead: " 7 min read",
        postedOn: "Dec 05, 2023",
        content: "JavaScript closures are a fundamental concept that every developer should understand. In this article, we'll dive deep into closures, how they work, and practical examples of their usage.",
        Image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        profilePic: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    }, {
        id: 3,
        title: "A Guide to Responsive Web Design",
        author: "Jayanth",
        timeRead: " 6 min read",
        postedOn: "Nov 20, 2023",
        content: "Responsive web design is essential in today's mobile-first world. This guide will walk you through the principles of responsive design and how to implement them using CSS and modern frameworks.",
        Image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        profilePic: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    }, {
        id: 4,
        title: "Exploring the New Features of ES2021",
        author: "Amulya",
        timeRead: " 8 min read",
        postedOn: "Oct 01, 2023",
        content: "ES2021 introduces several new features that enhance the JavaScript language. In this article, we'll explore these features and how they can improve your code.",
        Image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        profilePic: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    }, {
        id: 5,
        title: "Mastering Flexbox for Layout Design",
        author: "Jayasree",
        timeRead: " 10 min read",
        postedOn: "Sep 15, 2023",
        content: "Flexbox is a powerful layout module in CSS that allows for flexible and responsive design. This article will guide you through the basics of Flexbox and how to use it effectively in your projects.",
        Image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        profilePic: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    }, {
        id: 6,
        title: "Introduction to TypeScript for JavaScript Developers",
        author: "Minnie",
        timeRead: " 9 min read",
        postedOn: "Aug 10, 2023",
        content: "TypeScript is a superset of JavaScript that adds static typing and other features to enhance developer productivity. This introduction will cover the basics of TypeScript and how to get started.",
        Image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        profilePic: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    }]

    return (
        <div>

            <div className="flex-col">
                <NavBar/>
                <h1 className="font-bold text-center text-blue-600">Welcome To BlogVerse</h1>
                <p className="text-center sm:text md:text-xl"> Discover amazing stories,insights and ideas from our community of <br></br> writers sign in to your own posts and save your favorites</p>

                <div className="mx-28 mt-10 flex justify-center flex-wrap gap-16 w-[90%] md:w-1/3">{
                    posts.map((post) => (<div className=" border-1 rounded-2xl w-[400px]" key={post.id}>
                        <div className="flex relative ">
                            <img  className="rounded-t-2xl h-50 w-100"src={post.Image} alt="writing" />
                            <p className="border absolute top-left rounded-2xl bg-blue-500 text-white cursor-pointer py-1 px-1">Technology</p>
                            <Bookmark className="absolute top-2 right-5 bg-white  rounded-2xl h-7 w-7" />
                        </div>
                        <div className="flex w-[90%] ">
                            <div className="flex- gap-5 mt-3 px-2">
                                <img className="rounded-full h-12 w-12" src={post.profilePic} alt="writing" />
                            </div>
                            <div className="gap-5 flex w-[90%] ">
                                <p className="font-bold">{post.author}</p>
                                <p>{post.postedOn}-{post.timeRead}</p>
                            </div>

                        </div>
                        <div className="w-[90%]">
                            <h2 className="font-bold py-4 px-4">{post.title}</h2>
                            <p className="py-4 px-4">{post.content}</p>
                        </div>
                        <div className="w-[90%]">
                            <buttton className="text-blue-500 py-1 px-10 ">Read more</buttton>
                            <p className="py-1 px-1">{post.timeRead}</p>
                        </div>




                    </div>))}



                </div>
            </div>
        </div>

    )
}
export default HomePage;