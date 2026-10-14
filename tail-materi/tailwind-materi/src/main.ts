
import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <main class="min-h-screen bg-gray-100 p-4 lg:p-8">

    <!-- Navbar sticky -->
    <nav class="sticky top-0 z-20 -mx-4 -mt-4 flex items-center justify-between border-b border-gray-200 bg-white/95 px-4 py-4 backdrop-blur lg:-mx-8 lg:-mt-8 lg:px-8">
      <h1 class="text-xl font-bold text-gray-900">
        TaskFlow
      </h1>

      <button class="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100">
        Profile
      </button>
    </nav>

    <!-- Dashboard heading -->
    <header class="mx-auto mt-8 max-w-6xl">
      <h2 class="text-2xl font-bold text-gray-900 lg:text-3xl">
        Dashboard
      </h2>
      <p class="mt-2 text-sm text-gray-600">
        Ringkasan aktivitas tugasmu.
      </p>
    </header>

    <!-- Summary cards -->
    <section class="mx-auto mt-6 grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-3">

      <article class="rounded-xl border border-gray-200 bg-white p-5">
        <p class="text-sm font-medium text-gray-600">Total Tasks</p>
        <p class="mt-2 text-3xl font-bold text-gray-900">8</p>
      </article>

      <article class="rounded-xl border border-gray-200 bg-white p-5">
        <p class="text-sm font-medium text-gray-600">Completed</p>
        <p class="mt-2 text-3xl font-bold text-green-600">5</p>
      </article>

      <article class="rounded-xl border border-gray-200 bg-white p-5">
        <p class="text-sm font-medium text-gray-600">Pending</p>
        <p class="mt-2 text-3xl font-bold text-amber-600">3</p>
      </article>

    </section>

    <!-- Task list -->
    <section class="mx-auto mt-8 max-w-6xl">
      <div class="flex items-center justify-between gap-4">
        <h2 class="text-xl font-bold text-gray-900">Task List</h2>
        <span class="text-sm text-gray-500">8 tasks</span>
      </div>

      <!-- Scrollable task area -->
      <div class="mt-4 max-h-96 overflow-y-auto overflow-x-hidden rounded-xl">

        <div class="grid grid-cols-1 gap-4 md:grid-cols-2">

          <!-- Task card with absolute badge -->
          <article class="relative rounded-xl border border-gray-200 bg-white p-5 transition-shadow hover:shadow-md">
            <span class="absolute right-4 top-4 rounded-full bg-amber-100 px-2 py-1 text-xs font-medium text-amber-800">
              Pending
            </span>

            <h3 class="pr-20 font-semibold text-gray-900">
              Node.js Challenge
            </h3>

            <p class="mt-3 text-sm leading-relaxed text-gray-600">
              Selesaikan latihan asynchronous JavaScript dan pelajari cara menangani Promise.
            </p>
          </article>

          <article class="relative rounded-xl border border-gray-200 bg-white p-5 transition-shadow hover:shadow-md">
            <span class="absolute right-4 top-4 rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
              Completed
            </span>

            <h3 class="pr-24 font-semibold text-gray-900">
              Belajar TypeScript
            </h3>

            <p class="mt-3 text-sm leading-relaxed text-gray-600">
              Memahami type annotation, interface, union, narrowing, dan generic dasar.
            </p>
          </article>

          <article class="relative rounded-xl border border-gray-200 bg-white p-5 transition-shadow hover:shadow-md">
            <span class="absolute right-4 top-4 rounded-full bg-amber-100 px-2 py-1 text-xs font-medium text-amber-800">
              Pending
            </span>

            <h3 class="pr-20 font-semibold text-gray-900">
              Latihan Tailwind CSS
            </h3>

            <p class="mt-3 text-sm leading-relaxed text-gray-600">
              Pelajari positioning, display, overflow, dan responsive design untuk membangun UI yang rapi.
            </p>
          </article>

          <article class="relative rounded-xl border border-gray-200 bg-white p-5 transition-shadow hover:shadow-md">
            <span class="absolute right-4 top-4 rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
              Completed
            </span>

            <h3 class="pr-24 font-semibold text-gray-900">
              Git & GitHub
            </h3>

            <p class="mt-3 text-sm leading-relaxed text-gray-600">
              Praktik branch, merge, rebase, stash, dan pengelolaan riwayat commit.
            </p>
          </article>

          <article class="relative rounded-xl border border-gray-200 bg-white p-5 transition-shadow hover:shadow-md">
            <span class="absolute right-4 top-4 rounded-full bg-amber-100 px-2 py-1 text-xs font-medium text-amber-800">
              Pending
            </span>

            <h3 class="pr-20 font-semibold text-gray-900">
              React Fundamentals
            </h3>

            <p class="mt-3 text-sm leading-relaxed text-gray-600">
              Pelajari component, props, state, event handling, dan rendering data.
            </p>
          </article>

          <article class="relative rounded-xl border border-gray-200 bg-white p-5 transition-shadow hover:shadow-md">
            <span class="absolute right-4 top-4 rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
              Completed
            </span>

            <h3 class="pr-24 font-semibold text-gray-900">
              JavaScript Core
            </h3>

            <p class="mt-3 text-sm leading-relaxed text-gray-600">
              Memahami function, array methods, object, async/await, dan manipulasi DOM.
            </p>
          </article>

        </div>
      </div>
    </section>

    <!-- Fixed action button -->
    <button class="fixed bottom-6 right-6 z-30 rounded-full bg-blue-600 px-5 py-3 font-semibold text-white shadow-lg transition-colors hover:bg-blue-700">
      + New Task
    </button>

  </main>
`;
