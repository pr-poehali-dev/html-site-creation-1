import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-zinc-900 text-white px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-red-800 rounded-full flex items-center justify-center">
            <Icon name="Wine" size={20} className="text-white" />
          </div>
          <span className="text-xl font-bold">Wine House</span>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="hover:text-yellow-400 transition-colors">
            КАТАЛОГ
          </a>
          <a href="#" className="hover:text-yellow-400 transition-colors">
            МАСТЕР-КЛАССЫ
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <Icon
            name="User"
            size={24}
            className="text-white hover:text-yellow-400 cursor-pointer transition-colors"
          />
          <Icon
            name="ShoppingCart"
            size={24}
            className="text-white hover:text-yellow-400 cursor-pointer transition-colors"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
