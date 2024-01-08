import React, { useState } from "react";

const Header = () => {
  return (
    <header className="flex pl-3">
      <div className="leftSide py-3">
          <a href="/">
            <div className="minecraftBtnHeader mx-auto w-64 text-center text-white truncate p-1 border-2 border-b-4 hover:text-yellow-200" >O</div>
          </a>
      </div>
    </header>
  )
}

export default Header