const works = [
  { name: "蒙藏文化館《生生不息》", year: "2026", platform: "Behance" },
  { name: "臺中國家歌劇院《LOVE STORY》", year: "2025", platform: "Behance" },
  { name: "妖山祭《妖光乍現》", year: "2025", platform: "Instagram" },
  { name: "城西生活節《印一個所在》", year: "2025", platform: "Behance" },
  { name: "中華文化總會《新活水樂園》", year: "2024", platform: "Facebook" },
  { name: "第一銀行《第一數位超市》", year: "2024", platform: "Behance" },
  { name: "臺北眷村文化節《開箱吧，眷村！》", year: "2025", platform: "Instagram" },
  { name: "酉鬼啤酒六週年派對", year: "2024", platform: "Facebook" },
  { name: "春浪音樂節 20th", year: "2024", platform: "Behance" },
  { name: "北投中心新村《心窗》", year: "2024", platform: "Portaly" },
  { name: "臺北時裝週《臺灣色感》", year: "2024", platform: "Behance" },
  { name: "北投老爺酒店《天亮前的那卡西》", year: "2025", platform: "Instagram" },
];

export function Act4Scattered() {
  return (
    <section
      data-palette="dark"
      data-act="4"
      className="section-pad min-h-screen flex flex-col items-center justify-center"
    >
      <div className="container mx-auto px-6 max-w-6xl text-center">
        <h2 className="text-4xl lg:text-6xl mb-16" style={{ color: "var(--color-accent)" }}>
          我們發現一件事
        </h2>

        <p className="text-base opacity-70 mb-12 font-mono tracking-wider">
          它們現在在這四個地方。
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-16">
          {works.map((w) => (
            <div
              key={w.name}
              className="border p-4 text-left aspect-[4/3] flex flex-col justify-between"
              style={{ borderColor: "var(--color-accent)", borderWidth: "0.5px" }}
            >
              <p className="text-xs font-mono opacity-60">{w.platform}</p>
              <div>
                <p className="text-sm leading-tight">{w.name}</p>
                <p className="text-xs font-mono opacity-50 mt-2">{w.year}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-2xl lg:text-3xl opacity-90">
          如果在同一個地方呢？
        </p>
      </div>
    </section>
  );
}
