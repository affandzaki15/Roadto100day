import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <main class="min-h-screen bg-gray-100 p-4 lg:p-8">

    <!-- Navbar -->
    <nav class="flex flex-col items-center justify-between lg:flex-row">
      <h1 class="text-lg font-bold text-gray-900 lg:text-2xl">
        TaskFlow
      </h1>

      <button disabled class="rounded-lg disabled:cursor-not-allowed border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors duration-200 hover:bg-gray-400">
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
    <section class="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">

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

      <div class="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">

        
<article
  tabindex="0"
  class="rounded-xl border border-gray-200 bg-white p-5
         transition-colors duration-200
         hover:border-gray-400
         focus:outline-none
         focus-visible:ring-2
         focus-visible:ring-blue-500
         focus-visible:ring-offset-2"
>
  <h3 class="font-semibold text-gray-900">
    Node.js Challenge
  </h3>

  <p class="mt-2 text-sm text-gray-600">
    Status: Belum selesai
  </p>
  
</article>


        <article class="rounded-xl border border-gray-200 bg-white p-5 hover:scale-95 focus:ring-2 focus:ring-gray-700">
          <h3 class="font-semibold text-gray-900">
            Belajar TypeScript
          </h3>
          <p class="mt-2 text-sm text-green-700">
            Status: Selesai
          </p>
        </article>

        <article class="rounded-xl border border-gray-200 bg-white p-5 hover:scale-95 focus:ring-2 focus:ring-gray-700">
          <h3 class="font-semibold text-gray-900">
            Latihan Tailwind CSS
          </h3>
          <p class="mt-2 text-sm text-gray-600">
            Status: Belum selesai
          </p>
        </article>

        <article class="rounded-xl border border-gray-200 bg-white p-5 hover:scale-95 focus:ring-2 focus:ring-gray-700">
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
