'use client';

export default function GlobalError({ error, reset }) {
  return (
    <html lang="en">
      <body>
        <main style={{ minHeight: '70vh', display: 'grid', placeItems: 'center', padding: '2rem' }}>
          <section className="section" style={{ maxWidth: '720px', width: '100%' }}>
            <div className="section-item">Error</div>
            <h1 style={{ marginBottom: '0.4rem' }}>Something went wrong</h1>
            <p className="description">{error?.message || 'An unexpected error occurred.'}</p>
            <div className="cta-row" style={{ marginTop: '1rem' }}>
              <button className="btn btn-primary" type="button" onClick={() => reset()}>
                Try again
              </button>
              <a className="btn" href="/">
                Go home
              </a>
            </div>
          </section>
        </main>
      </body>
    </html>
  );
}
