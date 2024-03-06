import Image from "next/image";

const Item = ({ image, title, description }) => (
  <div className='flex flex-col md:items-center'>
    <div className='mb-4'>
      <Image src={image} width={197} height={197} alt={`Picture of ${title}`} />
    </div>
    <div>
      <h3 className='mb-2 text-xl font-bold text-yellow-400 dark:text-white'>
        {title}
      </h3>
      <p className='text-left text-gray-500 dark:text-gray-400'>
        {description}
      </p>
    </div>
  </div>
);

export default Item;
