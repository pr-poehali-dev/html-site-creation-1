interface MasterClassCardProps {
  image: string;
  date: string;
  title: string;
  description: string;
  price: number;
}

const MasterClassCard = ({
  image,
  date,
  title,
  description,
  price,
}: MasterClassCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
      </div>

      <div className="p-6">
        <div className="text-sm text-gray-600 mb-2 font-medium">{date}</div>

        <h3 className="text-lg font-bold text-red-800 mb-3 font-montserrat">
          {title}
        </h3>

        <p className="text-gray-700 text-sm leading-relaxed mb-4">
          {description}
        </p>

        <div className="flex items-center justify-between">
          <div className="text-lg font-bold text-zinc-900">ЦЕНА: {price}₽</div>
        </div>

        <button className="w-full bg-red-800 hover:bg-red-900 text-white font-bold py-3 px-6 rounded-lg transition-colors mt-4">
          ЗАПИСАТЬСЯ
        </button>
      </div>
    </div>
  );
};

export default MasterClassCard;
