import healthyHub from 'assets/images/projects/healthy-hub.jpg';
import donut from 'assets/images/projects/donut.jpg';
import filmoteka from 'assets/images/projects/filmoteka.jpg';
import carGo from 'assets/images/projects/car-go.jpg';
import reactComponentLibrary from 'assets/images/projects/react-component-library.jpg';
import qrCodeGenerator from 'assets/images/projects/qr-code-generator.jpg';
import fitPhysique from 'assets/images/projects/fit-physique.jpg';

export const PROJECTS = [
  {
    id: 1,
    title: 'Donut',
    description: {
      en: 'The landing page is dedicated to a donut-making masterclass led by the renowned chef Eva Green, also known as the Donut Queen. The page provides details about the masterclass, exciting offers, and the delightful atmosphere created by the team at "Oh My Donut".',
      ua: 'Лендінг пейдж присвячений майстер-класу з приготування пончиків, який проводить відома шеф-кухарка Єва Грін, також відома як Донат Королева. На сторінці представлено деталі про майстер-клас, захоплюючі пропозиції і атмосферу, яку створює команда магазину "Oh My Donut".',
    },
    technologies: 'HTML, Sass, Vanilla JavaScript',
    url: 'https://groot921.github.io/goit-project-donut/',
    gitRepository: 'https://github.com/BogdanGrynjuk/goit-team-project-donut',
    img: donut,
  },
  {
    id: 2,
    title: 'Filmoteka',
    description: {
      en: 'This app is designed to simplify the process of searching for and saving movies. Users can search for movies by title and obtain detailed information about them. Additionally, it provides an easy way to manage watchlists of selected movies.',
      ua: 'Цей застосунок розроблено для спрощення пошуку та збереження фільмів. Користувачі можуть здійснювати пошук за назвою фільму, отримувати детальну інформацію про фільм. Крім того, він забезпечує зручне керування списками перегляду обраних фільмів.',
    },
    technologies: 'HTML, Sass, Vanilla JavaScript',
    url: 'https://groot921.github.io/team-project-filmoteka/',
    gitRepository:
      'https://github.com/BogdanGrynjuk/goit-team-project-filmoteka',
    img: filmoteka,
  },
  {
    id: 3,
    title: 'HealthyHub',
    technologies: 'HTML, Styled-components, ReactJS, Redux, Formik, Chart.js',
    description: {
      en: 'HealthyHub is a web application designed to support a healthy lifestyle, helping users track their water intake, monitor their nutrition, set goals, and track progress in achieving their healthy habits.',
      ua: 'HealthyHub — це веб-застосунок, розроблений для підтримки здорового способу життя, що допомагає користувачам відслідковувати кількість спожитої води, моніторити харчування, ставити цілі та відстежувати прогрес у досягненні своїх здорових звичок.',
    },

    url: 'https://bogdangrynjuk.github.io/app-healthy-hub/',
    gitRepository: 'https://github.com/BogdanGrynjuk/app-healthy-hub',
    img: healthyHub,
  },

  {
    id: 4,
    title: 'CarGo',
    description: {
      en: 'This web application has been developed to streamline the car rental process, enabling users to explore available vehicles, create reservations, and manage their bookings with ease.',
      ua: 'Цей вебзастосунок розроблено для спрощення процесу оренди автомобілів, що дозволяє користувачам переглядати доступні транспортні засоби, створювати бронювання та зручно керувати своїми замовленнями.',
    },
    technologies: 'HTML, Emotion, ReactJS, Redux, Formik, React-select',
    url: 'https://bogdangrynjuk.github.io/app-cars-rental/',
    gitRepository: 'https://github.com/BogdanGrynjuk/app-cars-rental',
    img: carGo,
  },
  {
    id: 5,
    title: 'React Component Library',
    description: {
      en: 'In this application, a component library for ReactJS projects has been created. It covers the creation of both simple components, such as buttons, badges, icons, etc., and combining them into more complex components like tabs, chips, and modals.',
      ua: "У цьому додатку створено бібліотеку компонентів для проектів на ReactJS. Тут розглянуто створення як простих компонентів, таких як кнопки, бейджики, іконки і т.п., так і об'єднання їх у більш складні компоненти: вкладки, чипи, модальні вікна.",
    },
    technologies: 'HTML, Css, ReactJS',
    url: 'https://bogdangrynjuk.github.io/tutorial-react-components/',
    gitRepository: 'https://github.com/BogdanGrynjuk/tutorial-react-components',
    img: reactComponentLibrary,
  },
  {
    id: 6,
    title: 'QR Code Generator',
    description: {
      en: 'This project is a QR code generator application. It allows users to input data and generate QR codes with customizable colors, sizes, and borders. The generated QR code can be downloaded in various formats, such as PNG, SVG, and JPEG.',
      ua: 'Цей проект є застосунком для генерації QR-кодів. Користувачі можуть вводити дані та генерувати QR-коди з налаштовуваними кольорами, розмірами та обводками. Згенерований QR-код можна завантажити в різних форматах, таких як PNG, SVG і JPEG.',
    },
    technologies: 'HTML, CSS Modules, ReactJS, TypeScript, Fetch API',
    url: 'https://bogdangrynjuk.github.io/app-qr-code-generator/',
    gitRepository: 'https://github.com/BogdanGrynjuk/app-qr-code-generator',
    img: qrCodeGenerator,
  },
  {
    id: 7,
    title: 'Fit Physique',
    description: {
      en: 'A modern web application for a fitness club, showcasing services, training programs, trainers, and membership plans. Includes features like BMI calculator, testimonials, and FAQs to enhance user engagement.',
      ua: 'Сучасний веб-застосунок для фітнес-клубу, що презентує послуги, тренувальні програми, тренерів та абонементи. Містить калькулятор ІМТ, відгуки клієнтів та відповіді на часті запитання для підвищення залученості користувачів.',
    },
    technologies: 'HTML, Tailwind CSS, Next.js, TypeScript',
    url: 'https://webapp-fit-physique-j3m7.vercel.app/',
    gitRepository: 'https://github.com/BogdanGrynjuk/webapp-fit-physique',
    img: fitPhysique,
  },
];
