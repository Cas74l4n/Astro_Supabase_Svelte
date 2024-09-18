# Astro Supabase Svelte - Proyecto Local

Este es un proyecto creado con **Astro**, **Svelte** y **Supabase**, desplegado en **Vercel**. El objetivo de este proyecto es mostrar cómo integrar estas tecnologías para construir una aplicación moderna y escalable. Aquí se describen los pasos para ejecutar el proyecto en un entorno local.

## Tecnologías Utilizadas

- **Astro**: Framework para crear sitios web rápidos y estáticos.
- **Svelte**: Un framework de JavaScript para crear interfaces de usuario reactivas.
- **Supabase**: Una alternativa de código abierto a Firebase que proporciona backend-as-a-service.
- **Vercel**: Plataforma de despliegue para sitios y APIs serverless.
- **Tailwind CSS**: Framework de utilidades CSS para un desarrollo rápido y estilizado.

## Requisitos Previos

Antes de empezar, asegúrate de tener instalados los siguientes programas en tu máquina:

- [Node.js](https://nodejs.org/) (versión 16 o superior)
- [npm](https://www.npmjs.com/) (Remando) ó [yarn](https://yarnpkg.com/) ó [pnpm](https://pnpm.io/es/)

## Instalación Local

Sigue estos pasos para ejecutar el proyecto localmente:

1. **Clona el repositorio**:

   ```bash
   git clone https://github.com/Cas74l4n/Astro_Supabase_Svelte
   cd localizacion-del-repo
   ```
   
   1.2 *Ramas del proyecto*
    - El proyecto tiene dos ramas:
     - `Main`: Esta rama se utiliza para el despliegue en **Vercel**.
     - `DevVercel`: Esta rama es para el desarrollo local.

   Asegúrate de trabajar en la rama correcta según lo que necesites. Si deseas desarrollar localmente, debes cambiar a la rama `DevVercel`.

   ```bash
   git checkout DevVercel
   ```

2. **Correr el proyecto en local**

   2.1 *Corre el comando por primera vez y una sola ves, Para instalar los modulos al proyecto*
   ```node
   npm install && run dev
   ```
   2.2 *Corre el comando cuantas veces sea nesario*
   ```node
   npm run dev
   ```
3. **Crear el archivo de  las varibles de entorno**

   Crea un archivo .env en la raíz del proyecto, copia y agrega las variables necesarias para conectar con Supabase:
   ```env
   SUPABASE_URL=
   SUPABASE_ANON_KEY=
   ```
4. **Configuracion de Supabase**

   4.1  Cómo acceder a las variables de entorno: Aquí se muestra cómo encontrar y configurar las variables de entorno necesarias para conectar tu proyecto con Supabase. Estas variables incluyen la URL y la clave pública (anon key) que Supabase proporciona para la autenticación y comunicación con la base de datos.

   [Como haceder a las varibles de entorno](/assets/Paso01_supabase.webp).
   
   4.2  Ejemplo de dónde se ubican las llaves de entorno: En este paso se explica dónde y cómo ubicar las llaves de entorno en tu proyecto, como en el archivo ```.env```, que es crucial para garantizar que las conexiones sean seguras y privadas.

   [Ejemplo de donde se ubica las llaves de entorno](/assets/Paso02_supabase.webp).
   4.3  Tablas de Supabase: Este enlace ofrece una vista de cómo se crean y gestionan las tablas en la base de datos de Supabase. Las tablas son la base donde se almacenan los datos que manejará tu aplicación.

   [Tablas de Supabase](/assets/Paso1_supabase.jpg)
   
   4.4 Políticas de Supabase: En este paso se describe la importancia de las políticas de acceso en Supabase (Row Level Security), que permiten definir quién puede leer, escribir o modificar los datos en tu base de datos.
   [Politicas de Supabase](/assets/Paso2_supabase.webp).

   4.5  Cómo crear una política en Supabase: Explica los pasos para crear una política personalizada en Supabase para controlar el acceso y modificar los permisos según las necesidades de tu aplicación.
   [Como crear una politica en supabase](/assets/Paso3_supabase.webp).
   
   4.6  Ejemplo de cómo crear una política en Supabase: Este ejemplo práctico muestra cómo implementar una política para controlar el acceso de usuarios a determinadas tablas o datos en tu proyecto de Supabase.
   [Ejemplo de como crear una politica en supabase](/assets/Paso4_supabase.webp).
   
   4.7  Redirección de confirmación del correo: En este último paso se detalla cómo configurar la redirección después de que un usuario confirme su correo electrónico, algo esencial para mejorar la experiencia de usuario en procesos de registro y autenticación.
   [Redireccion de confirmacion del correo](/assets/Paso5_supabase.webp).