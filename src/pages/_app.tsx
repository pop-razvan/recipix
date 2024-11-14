// pages/_app.tsx
import type { AppProps } from 'next/app';
import '../globals.css';  // Stiluri globale (opțional)

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* Adăugăm un header global (opțional) */}
      <header>
        <nav>
          <h1>Site de Rețete</h1>
          {/* Link-uri de navigare, dacă sunt necesare */}
        </nav>
      </header>

      {/* Conținutul paginii */}
      <main>
        <Component {...pageProps} />
      </main>

      {/* Footer global (opțional) */}
      <footer>
        <p>© 2023 Site de Rețete. Toate drepturile rezervate.</p>
      </footer>
    </>
  );
}

export default MyApp;
