import './App.css';

export default function App() {
  return (
    <div>
      <nav class="fixed z-50 w-full bg-white border-b border-gray-200 sm:py-2 dark:bg-gray-800 dark:border-gray-700">
        <div class="container py-3 mx-auto">
          <div class="flex items-center justify-between">
            {/* logo */}
            <div class="flex items-center justify-start">
              <a href='/' class="flex-mr-4"/>
              <img src="/Asset/Logo.svg" class="h-8 mr-3" alt="Flowbite Logo" />
              <span class="self-center text-1xl font-bold text-primary-800 whitespace-nowrap dark:text-white">IDI Malang Raya</span>
            </div>
            {/* avatars */}
            <div class="flex items-center justify-start">
              <div class="relative mx-auto text-gray-600 lg:block hidden pr-3">
                <input
                  class="border-2 border-gray-300 bg-white h-10 pl-2 pr-5 rounded-lg text-sm focus:outline-none"
                  type="search" name="search" placeholder="Cari disini"/>
                  <button type="submit" class="absolute right-0 top-0 mt-3 mr-2">
                  </button>
              </div>
              <img src="/Asset/notification.svg" class="h-8 mr-3" alt="notif" />
              <img src="/Asset/main-avatar.svg" class="h-8 mr-3" alt="avatars" />
              {/* dropdown */}
              <img src="/Asset/Arrowdown.svg" class="h-4 mr-3" alt="dropdown" />
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}