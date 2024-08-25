<!-- This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details. -->

# Countries Map Application

## Overview

This project is a web application built with React and Next.js that visualizes country information on an interactive map. The data is fetched from the GraphQL API at [https://countries.trevorblades.com/](https://countries.trevorblades.com/) and is displayed using the Leaflet library for map visualization. The application allows users to search for countries by name, region, or ISO code, with the map dynamically updating the markers based on the search results.

## Functionalities

- **Interactive Map Visualization**: The application uses the Leaflet library to display a map with markers for each country. The markers are represented by the country's emoji flag.
- **Search Functionality**: Users can search for countries by name, region, or ISO code. The map dynamically updates to show the relevant countries.
- **Auto-Zoom and Centering**: When search results are displayed, the map automatically zooms in and centers on the relevant countries.
- **Navbar with Contact Information**: The application includes a navigation bar with links to GitHub and LinkedIn profiles.
- **Personalized Favicon**: A custom favicon is included to give the application a polished look.
- **Server-Side Data Fetching**: Country data is fetched server-side using Next.js's data fetching capabilities, ensuring fast and efficient loading of content.
- **Error Handling**: Proper error handling is implemented to manage and display errors in case the data fetching fails.

## Technical Requirements

### Prueba Técnica: Desarrollo Frontend con Next.js

**Descripción General**:  
Desarrolla una aplicación web utilizando React con el framework Next.js. La aplicación debe mostrar la información de países obtenida a través de la API GraphQL de [https://countries.trevorblades.com/](https://countries.trevorblades.com/) y visualizarlos en un mapa interactivo. Además de mostrar la información de los países obtenidos, añade un componente de búsqueda que permita a los usuarios buscar países por nombre, región o código ISO. La búsqueda debe actualizar dinámicamente los pines en el mapa.

Sentite libre de agregar cualquier tipo de funcionalidad que consideres necesaria para mejorar el proyecto, ayudar al usuario y/o aportar valor.

**Requerimientos Técnicos**:

- Utiliza Next.js como el framework principal para la construcción de la aplicación.
- Utiliza TypeScript para definir las interfaces necesarias.
- Implementa una visualización de mapas utilizando Leaflet o cualquier otra biblioteca de mapas que prefieras (ej., Mapbox, Google Maps).
- En el mapa, muestra un pin para cada país obtenido desde la API GraphQL, utilizando las coordenadas de latitud y longitud disponibles en el archivo `countries.json`.
- Consume la API GraphQL de [countries.trevorblades.com](https://countries.trevorblades.com/) para obtener información sobre los países, incluye todas las que creas necesarias.
- Implementa un manejo de errores.
- Puedes emplear bibliotecas como TailwindCSS o MaterialUI para agilizar el desarrollo del frontend.

**Evaluación**:

- Calidad, prolijidad y seguridad de tu código.
- Uso de funcionalidades que aporta el framework.
- Interfaz intuitiva y agradable.
- Experiencia de usuario.
- Buen manejo de la responsividad.

**Entrega**:

- Entregar el código fuente en Github/Gitlab o donde prefieras.
- URL de tu proyecto desplegado en Vercel o la plataforma de tu preferencia.

## Setup and Installation

To run this project locally, follow these steps:

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/your-username/countries-map-app.git
   cd countries-map-app
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the Development Server**:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open the Application**:
   Open your browser and navigate to `http://localhost:3000`.

### Deployment

The application can be easily deployed to Vercel or any other platform that supports Next.js applications.

## How to Use

### Main Features

- **Search Countries**: Use the search bar at the top to find countries by their name, region, or ISO code.
- **Map Navigation**: Click on the country markers to view detailed information, including the capital, continent, languages, and AWS region.
- **Responsive Design**: The application is fully responsive, ensuring a smooth experience on both desktop and mobile devices.

### Improvements and Custom Features

- **Auto-Zoom on Selected Countries**: When you search for a country, the map will automatically zoom in and center on the relevant locations.
- **Personalized Favicon**: A custom favicon has been added for a polished user experience.
- **Enhanced Navbar**: The navbar includes direct links to the developer's GitHub and LinkedIn profiles.
- **Server-Side Data Fetching**: Data fetching is handled server-side using Next.js’s API routes, ensuring fast and reliable access to country data.

## Additional Information

### Technologies Used

- **Next.js**: The core framework used for the application.
- **React**: Library for building user interfaces.
- **TypeScript**: Used for static type checking and ensuring code quality.
- **Leaflet**: Library for interactive maps.
- **TailwindCSS**: Utility-first CSS framework for styling the application.
- **GraphQL**: Used to fetch country data from the API.

### Future Improvements

- **Add More Detailed Information**: Expanding the country details to include more attributes.
- **Implement Caching**: Add caching mechanisms to improve data retrieval performance.
- **User Authentication**: Allow users to save their favorite countries for quick access.

### Credits

- **API**: The country data is provided by [countries.trevorblades.com](https://countries.trevorblades.com/).
- **Map Data**: The map tiles are provided by OpenStreetMap.
- **Icons**: The icons used in the application are from FontAwesome.

### Contact

For any questions or feedback, feel free to reach out:

- **GitHub**: [Jtendersen](https://github.com/Jtendersen)
- **LinkedIn**: [Juan Manuel Tierno](https://www.linkedin.com/in/juanmanueltierno-developer/)
- **Email**: [jtendersen@gmail.com](mailto:jtendersen@gmail.com)

---

© 2024 Juan Manuel Tierno. All rights reserved.
