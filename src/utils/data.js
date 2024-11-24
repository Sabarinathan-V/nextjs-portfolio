export const ROUTES = Object.freeze([
    {
        id: 1,
        name: "Home",
        path: "/"
    },
    {
        id: 2,
        name: "Resume",
        path: "/resume"
    },
    // {
    //     id: 3,
    //     name: "Services",
    //     path: "/services"
    // },
    {
        id: 4,
        name: "Projects",
        path: "/projects"
    },
    {
        id: 5,
        name: "Contact",
        path: "/contact"
    },

]);

// social media details with icon

export const SOCIAL_MEDIA = Object.freeze([
    {
        id: 1,
        name: "GitHub",
        icon: '/github.png',
        href: 'https://github.com/Sabarinathan-V'
    },
    {
        id: 2,
        name: "LinkedIn",
        icon: '/linkedin.png',
        href: 'https://www.linkedin.com/in/sabarinathan-v-4866351aa/'
    },
    {
        id: 3,
        name: "Instagram",
        icon: '/insta.png',
        href: 'https://www.instagram.com/sabarinathan_v/profilecard/?igsh=czFjdGJvcHY3d2hy'
    }
]);

// services offered

export const SERVICES = Object.freeze([
    {
        id: 1,
        name: "Web Development",
        icon: "/web.png",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores vero harum consectetur officia? Obcaecati dolor sit nostrum! Esse veniam pariatur iusto, eum quis at eligendi deserunt, maiores sunt voluptatem quam?'
    },
    {
        id: 2,
        name: "App Development",
        icon: "/app.png",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores vero harum consectetur officia? Obcaecati dolor sit nostrum! Esse veniam pariatur iusto, eum quis at eligendi deserunt, maiores sunt voluptatem quam?'
    }
])

// projects details

export const PROJECTS = Object.freeze([
    {
        id: 1,
        title: "WearIt - Clothing Store eCommerce App",
        description: "WearIt is an intuitive and user-friendly eCommerce app designed for a seamless online shopping experience at a clothing store. With WearIt, users can easily browse and select from a wide range of stylish clothing options for all ages and genders. The app allows for quick ordering, real-time inventory updates, and smooth checkout processes. Whether you're looking for casual wear or formal attire, WearIt makes fashion shopping accessible and convenient right at your fingertips.",
        category: "FullStack Development",
        image: "/wearit-client.png",
        stack: ["React", "Express Js", "MongoDB"],
        githubLink: 'https://github.com/Sabarinathan-V/wearit-ecommerce-frontend',
        websiteLink: 'https://wearit-ecommerce.netlify.app'
    },
    {
        id: 2,
        title: "WearIt Admin - Product and Order Management Dashboard",
        description: "WearIt Admin Panel is a robust and efficient web-based platform designed to manage the backend of the WearIt eCommerce app. This admin site allows store owners to easily add, list, and edit product details, ensuring that the inventory is always up-to-date. The admin panel also provides seamless order management, enabling administrators to view, process, and track customer orders in real-time.",
        category: "FullStack Development",
        image: "/wearit-admin.png",
        stack: ["React", "Express Js", "MongoDB"],
        githubLink: 'https://github.com/Sabarinathan-V/wearit-ecommerce-admin',
        websiteLink: 'https://wearit-admin.netlify.app'
    },

])

// skills

export const frontEndSkills = Object.freeze([
    {
        id: 1,
        name: "HTML",
        image: '/html.png'
    },
    {
        id: 2,
        name: "CSS",
        image: '/css.png'
    },
    {
        id: 3,
        name: "JAVASCRIPT",
        image: '/javascript.png'
    },
    {
        id: 4,
        name: "REACT",
        image: '/react.png'
    },
    {
        id: 5,
        name: "MATERIAL UI",
        image: '/material-ui.png'
    },
    {
        id: 6,
        name: "TAILWIND CSS",
        image: '/tailwindcss.png'
    }
])

export const backEndSkills = Object.freeze([
    {
        id: 1,
        name: "NODE JS",
        image: '/node-js.png'
    },
    {
        id: 2,
        name: "EXPRESS JS",
        image: '/express.png'
    },
])

export const database = Object.freeze([
    {
        id: 1,
        name: "MYSQL",
        image: '/mysql.png'
    },
    {
        id: 2,
        name: "PRISMA ORM",
        image: '/prisma-orm.png'
    },
    {
        id: 3,
        name: "MONGO DB",
        image: '/mongo-db.png'
    },
    {
        id: 4,
        name: "MONGOOSE",
        image: '/mongoose.png'
    },
])

export const versionControl = Object.freeze([
    {
        id: 1,
        name: "GIT",
        image: '/git.png'
    },
    {
        id: 2,
        name: "GITHUB",
        image: '/github.png'
    },
])

