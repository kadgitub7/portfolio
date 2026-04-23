export default function NotFound() {
  return (
    <main style={{ minHeight: '70vh', display: 'grid', placeItems: 'center', padding: '2rem' }}>
      <section className="section" style={{ maxWidth: '720px', width: '100%' }}>
        <div className="section-item">404</div>
        <h1 style={{ marginBottom: '0.4rem' }}>Page not found</h1>
        <p className="description">
          The page you are looking for does not exist. You can return to the portfolio home page and continue exploring projects and experience.
        </p>
        <div className="cta-row" style={{ marginTop: '1rem' }}>
          <a className="btn btn-primary" href="/">
            Return home
          </a>
        </div>
      </section>
    </main>
  );
}
