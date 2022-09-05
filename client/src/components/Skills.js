import tailwind from '../images/tailwind.png';
import express from '../images/express.png';
import mongodb from '../images/mongodb.png';
import react from '../images/react.png';
import node from '../images/node.png';
import typescript from '../images/typescript.png';
import next from '../images/nextjs.png';
import nest from '../images/nestjs.png';

const Works = () => {
  const logos = [
    [tailwind, 'Tailwind'],
    [react, 'React'],
    [next, 'Next'],
    [node, 'Node'],
    [express, 'Express'],
    [nest, 'Nest'],
    [mongodb, 'MongoDB'],
    [typescript, 'TypeScript'],
  ];

  return (
    <div className='w-full py-6 flex flex-col justify-evenly items-center' id='skills'>
      <div className='flex items-center flex-col w-full lg:w-[90%]'>
        <p className='text-2xl lg:text-3xl font-bold py-1'>Skills</p>
        <p className='text-sm decoration-rose-500 underline underline-offset-2 decoration-2'>
          Things I am good at
        </p>

        <div className='md:py-8 pt-8 w-full grid md:grid-cols-8 grid-cols-4 gap-6 justify-items-center'>
          {logos.map((element, index) => (
            <div className='flex flex-col items-center' key={index}>
              <img alt='' src={element[0]} className='w-10 h-10' />
              <p className='py-2 font-stylish md:text-lg lg:text-xl'>{element[1]}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Works;
