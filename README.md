# Proyecto Astro

Este proyecto está configurado para desplegarse en Vercel. La rama `DevVercel` se utiliza para gestionar y probar el despliegue en el entorno de Vercel antes de fusionar los cambios a la rama principal `main`.

## Configuración del Proyecto

1. **Instalación**: Asegúrate de tener todas las dependencias instaladas:

    ```bash
    npm install
    ```

2. **Configuración de Vercel**: Este proyecto utiliza el adaptador de Vercel para Astro. Si necesitas realizar cambios en la configuración para Vercel, modifica el archivo `astro.config.mjs`.

## Despliegue

### Desplegar en Vercel

Para desplegar la rama `DevVercel` en Vercel, sigue estos pasos:

1. **Crea y cambia a la rama `DevVercel`**:

    ```bash
    git checkout -b DevVercel
    ```

2. **Realiza los cambios necesarios en la configuración para Vercel**.

3. **Realiza un commit y empuja la nueva rama**:

    ```bash
    git add .
    git commit -m "Configurar despliegue en Vercel para la rama DevVercel"
    git push origin DevVercel
    ```

4. **Desplegar en Vercel**:

    Asegúrate de estar logueado en Vercel:

    ```bash
    vercel login
    ```

    Luego, despliega la rama `DevVercel`:

    ```bash
    vercel --prod --branch=DevVercel
    ```

5. **Verifica el despliegue**: Vercel te proporcionará una URL de previsualización para la rama `DevVercel`. Visita esa URL para asegurarte de que todo funciona como esperas.

## Notas

- **Rama Principal**: La rama `main` no se verá afectada hasta que los cambios en la rama `DevVercel` sean aprobados y fusionados.
- **Problemas**: Si encuentras problemas durante el despliegue, revisa la configuración y los registros de Vercel para solucionar los errores.

Para más detalles sobre el uso de Vercel con Astro, consulta la [documentación de Vercel](https://vercel.com/docs) y la [documentación de Astro](https://docs.astro.build).

