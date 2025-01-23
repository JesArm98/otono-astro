# Astro Starter Kit: Basics

```sh
npm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

<!-- <style>
    /* Estilos para el menú móvil */
    #mobile-menu {
        transform: translateX(100%);
        opacity: 0;
        transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
    }

    #mobile-menu.open {
        transform: translateX(0);
        opacity: 0.95;
    }

    #close-icon {
        display: none;
    }

    #menu-button.open #menu-icon {
        display: none;
    }

    #menu-button.open #close-icon {
        display: block;
    }

    /* Estilos para el nav */
    nav {
        background-color: transparent;
        color: white;
        box-shadow: none;
        transition: background-color 0.5s ease-in-out, color 0.5s ease-in-out, box-shadow 0.5s ease-in-out;
    }

    nav.scrolled {
        background-color: white;
        color: #582114;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1)
    }

    /* Cambiar el color del ícono del menú (burger) */
    nav.scrolled #menu-icon {
        stroke: #582114; /* Cambia el color del ícono */
    }

    /* Cambiar el color de las letras en el nav de pantallas grandes */
    nav.scrolled .brick {
        color: #582114;
    }
</style> -->

<!-- <script>
    const menuButton = document.querySelector('#menu-button');
    const mobileMenu = document.querySelector('#mobile-menu');
    const menuIcon = document.querySelector('#menu-icon');
    const closeIcon = document.querySelector('#close-icon');
    const menuLinks = document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]');

    const navs = document.querySelectorAll('nav'); // Selecciona ambos nav

    const closeMenu = () => {
        // Alternar la clase 'open' en el menú móvil
        mobileMenu?.classList.toggle('open');

        // Alternar la visibilidad de los íconos
        menuIcon?.classList.toggle('hidden');
        closeIcon?.classList.toggle('hidden');

        // Alternar la clase 'open' en el botón
        menuButton?.classList.toggle('open');
    };

    menuButton?.addEventListener('click', () => {
        closeMenu();
    });

    // Cerrar el menú al hacer clic en un enlace y desplazar suavemente
    menuLinks.forEach(link => {
        link.addEventListener('click', (event: MouseEvent) => {
            event.preventDefault(); // Previene el comportamiento por defecto

            if (link.classList.contains('opcion')) {
                closeMenu(); // Cierra el menú si tiene la clase 'opcion'
            }

            const targetId = link.getAttribute('href'); // Obtiene el href
            const targetElement = document.querySelector(targetId); // Selecciona el elemento destino

            if (targetId && targetElement) {
                // Desplazamiento suave
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Opciones para el IntersectionObserver
    const observerOptions = {
        root: null, // Observa el viewport
        rootMargin: '0px',
        threshold: 0.8, // 90% de la sección debe estar visible
    };

    // Función para manejar las intersecciones
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                navs.forEach(nav => nav.classList.add('scrolled')); // Añade la clase 'scrolled' a ambos nav
            } else {
                navs.forEach(nav => nav.classList.remove('scrolled')); // Elimina la clase 'scrolled' de ambos nav
            }
        });
    };

    // Crea el IntersectionObserver
    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    // Observa todas las secciones con la clase 'landing-section'
    const sections = document.querySelectorAll('.landing-section');
    sections.forEach((section) => observer.observe(section));
</script> -->
# CasatOto-oAstro
