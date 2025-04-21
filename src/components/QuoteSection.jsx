import GoldSpark from '../assets/gold-star.png';
import BlueSpark from '../assets/blue-star.png';
import PinkSpark from '../assets/pink-star.png';


const QuoteSection = () => {
  return (
    <div className="relative bg-white border-b-[6px] border-pink-100 py-12 text-center overflow-hidden">
      
      <img
        src={PinkSpark}
        alt="pink sparkle"
        className="absolute top-10 left-1/4 md:w-16 w-8"
      />
      <img
        src={GoldSpark}
        alt="yellow sparkle"
        className="absolute md:bottom-0 bottom-2 left-[60%] transform -translate-x-1/2 md:w-16 w-8"
      />
      <img
        src={BlueSpark}
        alt="blue sparkle"
        className="absolute md:top-4 top-1  right-1/4 md:w-16 w-8"
      />
      {/* Text */}
      <h2 className="text-2xl md:text-3xl font-medium text-gray-800">
        Here we learn to love <br/>
        ourselves FIERCELY
      </h2>
    </div>
  );
};

export default QuoteSection;
