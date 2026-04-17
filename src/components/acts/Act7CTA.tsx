export function Act7CTA() {
  return (
    <section
      data-palette="white"
      data-act="7"
      className="section-pad min-h-screen flex items-center justify-center text-center"
    >
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-4xl lg:text-6xl leading-tight mb-16">
          如果這份提案打到你，
          <br />
          我們就是緣分。
        </h2>

        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <a
            href="#contact"
            className="inline-block px-10 py-5 border text-base tracking-wider transition-all hover:border-2"
            style={{
              borderColor: "var(--color-text-primary)",
              borderWidth: "0.5px",
            }}
          >
            約 30 分鐘聊聊
          </a>
          <a
            href="#contact"
            className="inline-block px-10 py-5 border text-base tracking-wider transition-all hover:border-2"
            style={{
              borderColor: "var(--color-text-primary)",
              borderWidth: "0.5px",
            }}
          >
            想先了解大致預算
          </a>
        </div>

        <p className="mt-24 text-xs font-mono opacity-50 tracking-widest">
          IWARE × RIDGE STUDIO · 2026
        </p>
      </div>
    </section>
  );
}
