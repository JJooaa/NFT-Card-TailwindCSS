import React from 'react';
import './App.css';
import equi from "./images/image-equilibrium.jpg";
import clock from "./images/icon-clock.svg";
import ethereum from "./images/icon-ethereum.svg";
import profile from "./images/image-avatar.png";

function App() {
  return (
      <div className=" flex-column p-6 w-72 rounded-lg justify-center bg-cardbg mx-4">
	  	<img src={equi} className="w-64 center rounded-lg"/>
		  <div className="container flex-column space-y-4 gap-4 py-4 border-b border-slate-700">
		  	<h3 className="text-white text-lg font-semibold font-Outfit">Equilibrium #3429</h3>
			<p className="text-sm text-textColor font-light font-Outfit">Our Equilibrium collection promotes balance and calm.</p>
			<div className="flex h-5 justify-between my-2">
				<div className="flex gap-2">
					<img src={ethereum} />
					<p className="text-cyan-400 text-sm font-semibold font-Outfit">0.041 ETH</p>
				</div>
				<div className="flex gap-2 items-center">
					<img src={clock} />
					<p className="text-blue-200 text-xs font-light font-Outfit">3 days left</p>
				</div>
			</div>
		  </div>
		  <div className="flex gap-4 text-textColor mt-4 items-center">
			  <img className="w-8 h-8 border border-white rounded-full"src={profile}/>
			  <p className="text-sm">Creation of <span className="text-white font-Outfit text-sm">Jules Wyvern</span></p>
		  </div>
	  </div>
  );
}

export default App;