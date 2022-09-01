import { useState } from 'react';

const Nav = () => {
  const [isToggled, setIsToggled] = useState(false);

  const isToggledfunc = () => {
    setIsToggled(!isToggled);
  };

  return (
    <nav className='z-10 flex w-full justify-between items-center fixed left-0 top-0 h-[4rem] xl:px-44 lg:px-20 px-7'>
      <p className='font-stylish font-thin text-xl text-rose-500 md:text-2xl'>RohanShrestha</p>
      <i
        className='fa-solid fa-bars-staggered fa-xl cursor-pointer md:hidden'
        onClick={isToggledfunc}
      ></i>

      <div
        className={`absolute top-10 right-7 ${
          isToggled ? 'flex' : 'hidden'
        } flex-col justify-evenly h-44 md:h-auto md:flex md:static md:flex-row md:w-72 md:justify-between text-right`}
      >
        {['About', 'Skills', 'Contact'].map((element, index) => (
          <a
            key={index}
            className='hover:text-rose-500 cursor-pointer transition-all'
            href={`#${element.toLowerCase()}`}
          >
            {element}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
