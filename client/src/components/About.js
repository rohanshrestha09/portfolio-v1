const About = () => {
  const str = "I'm Rohan Shrestha".split("");

  return (
    <div
      className="w-full min-h-screen py-6 flex flex-col justify-evenly items-center lg:flex-row-reverse lg:justify-between"
      id="about"
    >
      <div className="flex justify-between w-40 mt-3 lg:mt-0 lg:flex-col lg:w-auto lg:h-40">
        {[
          ["fa-facebook", "https://www.facebook.com/srext.rons139/"],
          ["fa-github", "https://www.github.com/rohanshrestha09"],
          [
            "fa-linkedin",
            "https://www.linkedin.com/in/rohan-shrestha-9b5580232/",
          ],
        ].map((element, index) => (
          <a href={element[1]} key={index} target="_blank" rel="noreferrer">
            <i
              className={`fa-brands ${element[0]} text-3xl hover:text-rose-500 cursor-pointer transition-all`}
            ></i>
          </a>
        ))}
      </div>
      <img
        src="https://th.bing.com/th/id/R.eb38152a0240a3dc4009a2d37fd442b9?rik=KNGG%2frUWcLhgMg&pid=ImgRaw&r=0"
        alt=""
        className="h-60 w-60 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full border-2 border-rose-500 self-center"
      />
      <div className="text-center lg:text-left h-60 flex flex-col justify-between items-center lg:items-start md:w-3/4 lg:w-1/2">
        <p className="lg:text-lg">Hello!</p>
        <div className="text-3xl font-bold lg:text-5xl flex items-center">
          {str.map((element, index) => (
            <p
              key={index}
              className="hover:text-rose-500 transition-all cursor-default"
            >
              {element === " " ? "\u00a0" : element}
            </p>
          ))}
        </div>
        <p className="text-lg text-rose-500 lg:text-xl">MERN Stack Developer</p>
        <p className="text-sm lg:text-base">
          I'm a young developer currently studying at Bachelor level. I am
          available for projects and internship.
        </p>
        <a
          href="https://mega.nz/file/z4tlWACL#v8NPLrZb307j2amfxI_TpdR5w8-Ngmo2YI5rIxL9_GU"
          target="_blank"
          rel="noreferrer"
        >
          <button
            className="bg-rose-600 rounded-full w-36 lg:mt-3 py-3 hover:bg-rose-500 transition-all text-sm"
            href="https://mega.nz/file/z4tlWACL#v8NPLrZb307j2amfxI_TpdR5w8-Ngmo2YI5rIxL9_GU"
          >
            Download my CV
          </button>
        </a>
      </div>
    </div>
  );
};

export default About;
