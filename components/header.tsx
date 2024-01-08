import React from 'react';

type HeaderProps = {
  handleQuantityButtonClick: (value: string) => void;
};

const Header: React.FC<HeaderProps> = ({ handleQuantityButtonClick }) => {
  return (
    <header className="flex items-center justify-between py-2 px-2">
      <div className="left">
          <a href="/Inventory">
            <button className="minecraftBtnHeader mx-auto w-64 text-center text-white truncate p-1 border-2 border-b-4 hover:text-yellow-200" >E</button>
          </a>
      </div>
      <div className="middle pl-14">
        <h1 className="text-white">Ethoslab Nexus Clone</h1>
      </div>
      <div className="right">
        <button onClick={() => handleQuantityButtonClick("16")} className="minecraftBtnHeader mx-auto w-64 text-center text-white truncate p-1 border-2 border-b-4 hover:text-yellow-200">16</button>
        <button onClick={() => handleQuantityButtonClick("32")} className="minecraftBtnHeader mx-auto w-64 text-center text-white truncate p-1 border-2 border-b-4 hover:text-yellow-200">32</button>
        <button onClick={() => handleQuantityButtonClick("64")} className="minecraftBtnHeader mx-auto w-64 text-center text-white truncate p-1 border-2 border-b-4 hover:text-yellow-200">64</button>
      </div>
    </header> 
  );
};

export default Header;
