import {useState} from "react";
import './Steve.css';
import HeadArmor from "./HeadArmor";
import BodyArmor from "./BodyArmor";
import LegArmor from "./LegArmor";
import {mineralToHex} from "./utils";

function randIdx(arr){
	return Math.floor(Math.random() * arr.length)
}

function earlySteve(){
	return {
		head: "",
		body: "",
		leg: "",
	}
}

export default function Steve(){
	const [armors, setArmors] = useState(earlySteve);
	const minerals = ["bronze", "silver", "gold", "diamond"];
	const reset = () => setArmors(earlySteve);
	const allChange = () => {
	setArmors((prevArmor) => {
		const update = {};
		const setIdx = randIdx(minerals)
		for (const part in prevArmor) {
			update[part] = minerals[setIdx];
		}
		return update;
		});
	};
	const changeMineral = (part) => {
	setArmors(prev => ({
			...prev,
			[part]: minerals[randIdx(minerals)],
		}))
	};
	return (
		<div className="Steve">
			<div className="Head">
				<HeadArmor changeMineral={() => changeMineral('head')} setColor={mineralToHex(armors.head)} />
			</div>
			<div className="Body">
				<div className="LeftArm"></div>
				<div className="RightArm"></div>
				<BodyArmor changeMineral={() => changeMineral('body')} setColor={mineralToHex(armors.body)} />
			</div>
			<div className="Leg">
				<div className="centerLine"></div>
				<LegArmor changeMineral={() => changeMineral('leg')} setColor={mineralToHex(armors.leg)} />
			</div>
			<button onClick={allChange} >allChange</button>
			<button onClick={reset}>Reset</button>
		</div>
	)
}