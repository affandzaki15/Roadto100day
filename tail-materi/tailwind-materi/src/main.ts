
import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <main class="min-h-screen bg-gray-100 p-8">

    <!-- Navbar -->
    <nav class="flex items-center justify-between">
      <h1 class="text-xl font-bold text-gray-900">
        TaskFlow
      </h1>

      <button class="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
        Profile
      </button>
    </nav>

    <!-- Dashboard heading -->
    <header class="mt-8">
      <h2 class="text-2xl font-bold text-gray-900">
        Dashboard
      </h2>

      <p class="mt-1 text-sm text-gray-600">
        Ringkasan aktivitas tugasmu.
      </p>
    </header>

    <!-- Summary cards -->
    <section class="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-3">

      <div class="rounded-xl border border-gray-200 bg-white p-5">
        <p class="text-sm font-medium text-gray-600">
          Total Tasks
        </p>
        <p class="mt-2 text-3xl font-bold text-gray-900">
          4
        </p>
      </div>

      <div class="rounded-xl border border-gray-200 bg-white p-5">
        <p class="text-sm font-medium text-gray-600">
          Completed
        </p>
        <p class="mt-2 text-3xl font-bold text-green-600">
          1
        </p>
      </div>

      <div class="rounded-xl border border-gray-200 bg-white p-5">
        <p class="text-sm font-medium text-gray-600">
          Pending
        </p>
        <p class="mt-2 text-3xl font-bold text-amber-600">
          3
        </p>
      </div>

    </section>

    <!-- Task list -->
    <section class="mt-8">
      <h2 class="text-xl font-bold text-gray-900">
        Task List
      </h2>

      <div class="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">

        <article class="rounded-xl border border-gray-200 bg-white p-5">
          <h3 class="font-semibold text-gray-900">
            Node.js Challenge
          </h3>
          <p class="mt-2 text-sm text-gray-600">
            Status: Belum selesai
          </p>
        </article>

        <article class="rounded-xl border border-gray-200 bg-white p-5">
          <h3 class="font-semibold text-gray-900">
            Belajar TypeScript
          </h3>
          <p class="mt-2 text-sm text-green-700">
            Status: Selesai
          </p>
        </article>

        <article class="rounded-xl border border-gray-200 bg-white p-5">
          <h3 class="font-semibold text-gray-900">
            Latihan Tailwind CSS
          </h3>
          <p class="mt-2 text-sm text-gray-600">
            Status: Belum selesai
          </p>
        </article>

        <article class="rounded-xl border border-gray-200 bg-white p-5">
          <h3 class="font-semibold text-gray-900">
            Membuat Mini Project
          </h3>
          <p class="mt-2 text-sm text-gray-600">
            Status: Belum selesai
          </p>
        </article>

      </div>
    </section>

  </main>
`;
