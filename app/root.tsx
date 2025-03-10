import {
      Links,
      Meta,
      Outlet,
      Scripts,
      ScrollRestoration,
    } from "@remix-run/react";
    import type { LinksFunction } from "@remix-run/node";

    import styles from "./tailwind.css";
    import globalStylesUrl from "~/styles/global.css";

    export const links: LinksFunction = () => [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
      },
      { rel: "stylesheet", href: styles },
      { rel: "stylesheet", href: globalStylesUrl }

    ];

    export default function App() {
      return (
        <html lang="en" className="h-full">
          <head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <Meta />
            <Links />
          </head>
          <body className="h-full">
            <Outlet />
            <ScrollRestoration />
            <Scripts />
          </body>
        </html>
      );
    }
