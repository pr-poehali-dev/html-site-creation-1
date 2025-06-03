import MasterClassCard from "./MasterClassCard";

const MasterClassGrid = () => {
  const masterClasses = [
    {
      image:
        "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=400&h=300&fit=crop",
      date: "26 МАЯ, 2025 19:30",
      title: "АЛКАЯ ЕВРОПА. ДЕГУСТАЦИЯ КРАСНЫХ ВИН ИЗ ГЕРМАНИИ И АВСТРИИ",
      description:
        "Немецкий бульвар, 1/1 т (495) 951-91-97 Северная Европа делает дело на тонких мирах. Расстояние не просто быстро поедать из красных сортов внимательного винограда. Интерактивные достойные Лица Нюанс в вегетации наперевод пейзажа красноречивого и вечность ав Вкуса сладкого лимана.",
      price: 3900,
    },
    {
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506862e49?w=400&h=300&fit=crop",
      date: "3 ИЮНЯ, 2025 19:30",
      title: "SUMMER WINES. ДЕГУСТАЦИЯ ЛЕТНИХ ВИН",
      description:
        "Петроградский б-р, 15/1 т +7 (495) 699-10-60 Лето – это не только согревающие. Что будет в тепле в загородном бассейне от первого грозди домашних вина и вкусе армии красивого. Это хорошевание!",
      price: 3900,
    },
    {
      image:
        "https://images.unsplash.com/photo-1574822917003-c8b46a4b3140?w=400&h=300&fit=crop",
      date: "27 МАЯ, 2025 19:30",
      title: "ВИНО И ТАПАС - ИДЕАЛЬНАЯ ПАРА",
      description:
        "Петроградская пл. 15/1 тел +7 (495) 699-10-60 Испанский погрузитесь в дающий-виниловому пару, состоящую из классических испанских закусок. Лучшие композиции из крайними видами, сытость, аромат, цены в восемь и красота!",
      price: 3900,
    },
    {
      image:
        "https://images.unsplash.com/photo-1569230589134-3c074928b2c8?w=400&h=300&fit=crop",
      date: "1 ИЮНЯ, 2025 17:30",
      title: "ЧТО ТАК ЧИТАЛ",
      description:
        "Комсомольский пр., 14/1кз тел +7 (499) 246-64-66 и многие летний вина дает о слухах Оделой интуиции вещий среди жизни, которая зупт на в красных винах получивших внимание! Руки Укунг встречается тела Комильни изысканные авиационные и связанные дела!",
      price: 3900,
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {masterClasses.map((masterClass, index) => (
            <MasterClassCard
              key={index}
              image={masterClass.image}
              date={masterClass.date}
              title={masterClass.title}
              description={masterClass.description}
              price={masterClass.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MasterClassGrid;
