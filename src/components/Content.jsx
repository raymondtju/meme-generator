import React from 'react';
import memedata from '../memedata.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiceD20 } from '@fortawesome/free-solid-svg-icons';

export default function Content() {
  const [meme, setmeme] = React.useState({
    topText: '',
    bottomText: '',
    imageUrl: '',
  });

  const [allMemes, setAllMemes] = React.useState([]);
  React.useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  // console.log(allMemes);

  const ClickImage = (event) => {
    event.preventDefault();
    const path = allMemes;
    const random = Math.floor(Math.random() * path.length);

    setmeme((prevImage) => {
      return {
        ...prevImage,
        imageUrl: path[random].url,
      };
    });
  };

  const changeHandle = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setmeme((prevText) => {
      return {
        ...prevText,
        [name]: value,
      };
    });
  };

  return (
    <main className="px-10 pt-16">
      <form className="grid grid-cols-2 gap-x-4 gap-y-6" onSubmit={ClickImage}>
        <input
          type="text"
          className="border border-1 rounded h-12 border-red-500 placeholder:indent-2 px-4"
          placeholder="Top text"
          name="topText"
          value={meme.topText}
          onChange={changeHandle}
        />
        <input
          type="text"
          className="border border-1 rounded h-12 border-red-500 placeholder:indent-2 px-4"
          placeholder="Below text"
          name="bottomText"
          value={meme.bottomText}
          onChange={changeHandle}
        />
        <button className="col-span-2 bg-red-400 text-slate-100 h-12 rounded-lg">
          <FontAwesomeIcon
            icon={faDiceD20}
            className="mr-2"
            // onClick={ClickImage}
          />
          Generate a most trolling meme
        </button>
      </form>
      {/* <div
        className="flex bg-center bg-cover"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div> */}
      <div className="relative justify-center pt-4">
        <div className="w-full flex justify-center bg-contain">
          <img src={meme.imageUrl} alt="memeImage" />
        </div>
        <h1 className="meme--text top-0">{meme.topText}</h1>
        <h1 className="meme--text bottom-0">{meme.bottomText}</h1>
      </div>
    </main>
  );
}
