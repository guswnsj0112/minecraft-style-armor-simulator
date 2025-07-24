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
	const changeHead = () => {
	setArmors(prev => ({
			...prev,
			head: minerals[randIdx(minerals)],
		}))
	};
	const changeBody = () => {
	setArmors(prev => ({
			...prev,
			body: minerals[randIdx(minerals)],
		}))
	};
	const changeLeg = () => {
	setArmors(prev => ({
			...prev,
			leg: minerals[randIdx(minerals)],
		}))
	};

	return (
		<div className="Steve">
			<div className="Head">
				<HeadArmor changeMineral={changeHead} setColor={mineralToHex(armors.head)} />
			</div>
			<div className="Body">
				<div className="LeftArm"></div>
				<div className="RightArm"></div>
				<BodyArmor changeMineral={changeBody} setColor={mineralToHex(armors.body)} />
			</div>
			<div className="Leg">
				<div className="centerLine"></div>
				<LegArmor changeMineral={changeLeg} setColor={mineralToHex(armors.leg)} />
			</div>
			<button onClick={allChange} >allChange</button>
			<button onClick={reset}>Reset</button>
		</div>
	)
}