import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-red-800 rounded-full flex items-center justify-center">
                <Icon name="Wine" size={20} className="text-white" />
              </div>
              <span className="text-xl font-bold">Wine House</span>
            </div>
            <div className="flex items-center space-x-4">
              <Icon
                name="Instagram"
                size={24}
                className="text-gray-400 hover:text-yellow-400 cursor-pointer transition-colors"
              />
              <Icon
                name="Send"
                size={24}
                className="text-gray-400 hover:text-yellow-400 cursor-pointer transition-colors"
              />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Где мы находимся</h3>
            <div className="flex items-start space-x-3">
              <Icon name="MapPin" size={20} className="text-yellow-400 mt-1" />
              <div>
                <p className="text-gray-300">г. Красноярск,</p>
                <p className="text-gray-300">ул. 9 Мая, 77</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Мы на связи</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Icon name="Phone" size={20} className="text-yellow-400" />
                <span className="text-gray-300">+7 (495) 951-91-97</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Mail" size={20} className="text-yellow-400" />
                <span className="text-gray-300">WINEHOUSE@GMAIL.COM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
