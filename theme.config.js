const YEAR = new Date().getFullYear();

export default {
  titleSuffix: " — Atlantic Journal",
  readMore: "Read article →",
  navs: [{ name: "Portfolio ↗", url: "https://www.jameshurley.ie/" }],
  dateFormatter: (date) =>
    new Intl.DateTimeFormat("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(date),
  footer: (
    <footer className="journal-footer">
      <span>
        <time>{YEAR}</time> © James Hurley
      </span>
      <span>
        <a href="https://www.jameshurley.ie/">Portfolio</a>
        <a href="/feed.xml">RSS</a>
      </span>
    </footer>
  ),
  darkMode: true,
};
