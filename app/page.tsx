import Image from "next/image";


async function getResumeInfo() {
  const res = await fetch(
    "https://raw.githubusercontent.com/j2hxxx/first-deploy/refs/heads/0.3/resume/service/resume_general_info_service.json",
    { cache: "no-store" }
  );
  if (!res.ok) throw new Error("Failed to fetch data");
  return res.json();
}

const palette = {
  cream: "#F6E7D8",
  peach: "#F2D1B3",
  sand: "#E7C9A9",
  honey: "#E7A74E",
  brown: "#9B7056",
};

export default async function Home() {
  const data = await getResumeInfo();
  const githubUrl = `https://github.com/${data.git_name ?? ""}`;

  return (
    <div className="min-h-screen w-full bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 selection:bg-amber-200/70 selection:text-neutral-900">
      {/* Header */}
      <header className="mx-auto max-w-3xl px-6 pt-12">
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <div className="relative">
            <div
              className="absolute -inset-3 rounded-2xl blur"
              style={{ background: `linear-gradient(135deg, ${palette.peach}, ${palette.honey})`, opacity: 0.6 }}
            />
            <img
              className="relative rounded-2xl ring-1 ring-black/5 dark:ring-white/10 shadow-lg"
              src="/hamster.png"
              alt="Hamster"
              width={160}
              height={160}
              loading="eager"
            />
          </div>

          <div className="flex-1">
            <h1 className="text-3xl font-extrabold tracking-tight">
              하지현
            </h1>
            <p className="mt-2 text-base/7 text-neutral-600 dark:text-neutral-300">
              25 years old <span className="mx-2">/</span> {data.live}
            </p>

            {/* Links */}
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium ring-1 ring-neutral-200 dark:ring-neutral-800 hover:ring-neutral-400 dark:hover:ring-neutral-600 transition"
                style={{ backgroundColor: palette.cream }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.1.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.35-1.78-1.35-1.78-1.1-.76.08-.74.08-.74 1.22.09 1.86 1.25 1.86 1.25 1.08 1.85 2.83 1.32 3.52 1.01.11-.8.42-1.32.77-1.63-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.61-2.82 5.62-5.5 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.57A12 12 0 0 0 12 .5z"/>
                </svg>
                <span className="underline-offset-4 hover:underline">{data.git_name}</span>
              </a>

              {data.email && (
                <a
                  href={`mailto:${data.email}`}
                  className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium ring-1 ring-neutral-200 dark:ring-neutral-800 hover:ring-neutral-400 dark:hover:ring-neutral-600 transition"
                  style={{ backgroundColor: palette.peach }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M12 13 2 6.76V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6.76L12 13z"/><path d="M22 6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2l10 6L22 6z"/>
                  </svg>
                  <span>{data.email}</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto max-w-3xl px-6 pb-24 pt-10">
        {/* Timeline */}
        <section className="mt-2">
          <h2 className="sr-only">Timeline</h2>

          {/* vertical guide line */}
          <div className="relative">
            <div className="absolute left-[7px] top-0 bottom-0 w-px bg-neutral-200 dark:bg-neutral-800" />

            <ul className="space-y-4 text-sm sm:text-base text-neutral-700 dark:text-neutral-300">
              <li className="relative ps-6">
                <span
                  className="absolute left-0 top-1.5 h-3 w-3 rounded-full ring-2 ring-white dark:ring-neutral-900"
                  style={{ backgroundColor: palette.honey }}
                  aria-hidden
                />
                <span className="font-semibold">2021.03</span>&nbsp; 대학 입학
              </li>

              <li className="relative ps-6">
                <span
                  className="absolute left-0 top-1.5 h-3 w-3 rounded-full ring-2 ring-white dark:ring-neutral-900"
                  style={{ backgroundColor: palette.brown }}
                  aria-hidden
                />
                <span className="font-semibold">2023.11~2025.04</span>&nbsp; 학부연구생
              </li>

              <li className="relative ps-6">
                <span
                  className="absolute left-0 top-1.5 h-3 w-3 rounded-full ring-2 ring-white dark:ring-neutral-900"
                  style={{ backgroundColor: palette.honey }}
                  aria-hidden
                />
                <span className="font-semibold">2025.08</span>&nbsp; 대학 졸업
              </li>
            </ul>
          </div>
        </section>


        {/* Cards */}
        <section className="mt-10 grid gap-6 sm:grid-cols-2">
          {/* Hobby card */}
          <div
            className="rounded-2xl p-5 ring-1 ring-black/5 dark:ring-white/10 shadow-sm"
            style={{ backgroundColor: palette.cream }}
          >
            <h2 className="text-lg font-bold tracking-tight">취미</h2>
            <p className="mt-1 text-xs text-neutral-600 dark:text-neutral-300"></p>
            <ul className="mt-3 space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full" style={{ backgroundColor: palette.honey }} />
                <span>야구관람</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full" style={{ backgroundColor: palette.brown }} />
                <span>쿠키만들기</span>
              </li>
            </ul>
          </div>

          {/* Goal card */}
          <div
            className="rounded-2xl p-5 ring-1 ring-black/5 dark:ring-white/10 shadow-sm"
            style={{ backgroundColor: palette.sand }}
          >
            <h2 className="text-lg font-bold tracking-tight">목표</h2>
            <p className="mt-1 text-xs text-neutral-600 dark:text-neutral-300"></p>
            <ul className="mt-3 space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full" style={{ backgroundColor: palette.honey }} />
                <span>열심히 잘 하자</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full" style={{ backgroundColor: palette.honey }} />
                <span>항상 정확하고 확실하게</span>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
