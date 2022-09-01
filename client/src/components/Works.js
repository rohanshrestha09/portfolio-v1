import tailwind from '../images/tailwind.png';
import express from '../images/express.png';
import mongodb from '../images/mongodb.png';
import react from '../images/react.png';
import node from '../images/node.png';
import typescript from '../images/typescript.png';

const Works = () => {
  const logos = [
    [mongodb, 'MongoDB'],
    [express, 'Express'],
    [react, 'React'],
    [node, 'Node'],
    [typescript, 'TypeScript'],
    [tailwind, 'Tailwind'],
  ];

  return (
    <div className='w-full py-6 flex flex-col justify-evenly items-center' id='skills'>
      <div className='flex items-center flex-col w-full lg:w-3/4 xl:w-2/3'>
        <p className='text-2xl lg:text-3xl font-bold py-1'>Skills</p>
        <p className='text-sm decoration-rose-500 underline underline-offset-2 decoration-2'>
          Things I am good at
        </p>

        <div className='md:py-6 py-4 w-full flex justify-between'>
          {logos.map((element, index) => (
            <div className='flex flex-col items-center' key={index}>
              <img alt='' src={element[0]} className='w-10 h-10' />
              <p className='sticky top-20 py-2 left-12 font-stylish text-sm md:text-lg lg:text-xl'>
                {element[1]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Works;
