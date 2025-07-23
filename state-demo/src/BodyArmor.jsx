import "./BodyArmor.css";
export default function BodyArmor({changeMineral, setColor}){
	console.log(setColor);
	return (
		<div className="BodyArmor"
			onClick={changeMineral} 
			style= {{ backgroundColor : setColor }}
			>
		</div>
	)
	
}