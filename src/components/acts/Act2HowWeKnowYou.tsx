const platforms = [
  { name: "Behance", value: "29,260 瀏覽 · 414 讚 · 371 追蹤", url: "https://behance.net/ridgestudio" },
  { name: "Instagram", value: "@ridge.studio", url: "https://instagram.com/ridge.studio" },
  { name: "Facebook", value: "ridgestudio.production.design", url: "https://facebook.com/ridgestudio.production.design" },
  { name: "Portaly", value: "portaly.cc/ridgestudio", url: "https://portaly.cc/ridgestudio" },
  { name: "深度報導", value: "《樹冠 Canopi》袁浩程專訪", url: "https://canopi.tw/culture-and-lifestyle/ridgestudio-production-design/" },
];

export function Act2HowWeKnowYou() {
  return (
    <section
      data-palette="white"
      data-act="2"
      className="section-pad min-h-screen flex items-center"
    >
      <div className="container mx-auto px-6 grid lg:grid-cols-5 gap-12 lg:gap-20">
        <div className="lg:col-span-2">
          <p className="text-sm tracking-widest uppercase opacity-60 mb-8 font-mono">
            CHAPTER 02
          </p>
          <h2 className="text-4xl lg:text-6xl leading-tight">
            我們花了一週，
            <br />
            讀完你們的所有東西。
          </h2>
          <p className="mt-12 text-base opacity-70 measure-body">
            最近你們來信詢問 3D 環景。這是契機，但我們想聊更深的事。
          </p>
        </div>

        <div className="lg:col-span-3">
          <ul className="space-y-8">
            {platforms.map((p) => (
              <li key={p.name} className="grid grid-cols-[auto_1fr] gap-6 items-baseline">
                <span className="text-xs tracking-widest uppercase opacity-50 font-mono w-24">
                  {p.name}
                </span>
                <span className="text-base opacity-90">{p.value}</span>
              </li>
            ))}
          </ul>
          <hr className="hairline mt-12" />
        </div>
      </div>
    </section>
  );
}
