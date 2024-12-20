# Proyecto Astro-Supabase-Svelte

Este proyecto está construido utilizando [Astro](https://astro.build/), [Supabase](https://supabase.io/) y [Svelte](https://svelte.dev/). A continuación, se explican las dos ramas disponibles en el repositorio y cómo se gestionan los despliegues.

## Ramas del Proyecto

### 1. `main`
La rama `main` es la rama principal del proyecto, destinada para el despliegue en producción. Cualquier cambio que se quiera publicar en el entorno de producción, debe ser fusionado primero en esta rama.

- **Propósito**: Desplegar la versión final en producción (ejemplo: Vercel).
- **Despliegue**: Cada vez que se realice un commit en `main`, se activará el proceso de despliegue en la plataforma de producción configurada (por ejemplo, Vercel).

### 2. `Local`
La rama `Local` es utilizada para el desarrollo y pruebas locales. Permite realizar cambios sin afectar la versión en producción.

- **Propósito**: Desarrollo local y pruebas.
- **Despliegue**: No se despliega automáticamente. Esta rama se usa para preparar cambios que luego serán fusionados en `main`.

## Despliegue

### Desplegar en Producción

Para desplegar en producción, simplemente sigue estos pasos:

1. Realiza los cambios necesarios en la rama `Local`.
2. Asegúrate de que todo funciona correctamente realizando pruebas locales.
3. Una vez que los cambios estén listos, realiza un **merge** de la rama `Local` en la rama `main`.
4. El despliegue en Vercel se activará automáticamente cuando los cambios lleguen a `main`.

### Pasos para Despliegue

1. **Instalar dependencias**:
   ```bash
   npm install 
   ```
   1.1 **Instalacion de vercel en el proyecto**
   ```bash
   npx astro add vercel
   ```
    >[!NOTE]
    > En la instalacion del proyecto asegurarse en el archivo ``` astro.config.mjs``` tenga esto en el archivo. 
 
    ```astro.config.mjs
    import { defineConfig } from 'astro/config';
    import vercel from '@astrojs/vercel/serverless';
 
    export default defineConfig({
        // ...
        output: 'server',
        adapter: vercel(),
    });
    ```


2. **Crear el archivo de variables de entorno: Crea un archivo .env en la raíz del proyecto y agrega las siguientes variables**:
    ```.env
    SUPABASE_URL=
    SUPABASE_ANON_KEY=
    ```
3. **Despliegue en Vercel**: 
    El despliegue se realiza automáticamente desde la rama `main` a través de Vercel, utilizando el adaptador `@astrojs/vercel/serverless`.

## Resumen del Proyecto
Este proyecto utiliza Supabase como backend para autenticar usuarios y almacenar datos en tiempo real. La UI está desarrollada con Svelte y TailwindCSS para un diseño moderno y rápido.

- **Frameworks:** Astro, Svelte-
- **Backend:** Supabase
- **Deploy:** Vercel

## Configurarcion de Supabase

>[!IMPORTANT]
>Puedes encontrar todos los detalles de configuración en el siguiente enlace [Guía de configuración de la base de datos del proyecto.](https://github.com/Cas74l4n/Astro_Supabase_Svelte/tree/Local/README.md)

Esta guía proporciona los pasos necesarios para conectar y configurar Supabase en el proyecto, incluyendo la integración con Astro y Svelte. Asegurarse de seguirla cuidadosamente para evitar problemas de configuración o conexión.

