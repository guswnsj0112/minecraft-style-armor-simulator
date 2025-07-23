import "./LegArmor.css"
export default function LegArmor({changeMineral, setColor}){
	console.log(setColor);
	return (
		<div className="LegArmor"
			onClick={changeMineral} 
			style= {{ backgroundColor : setColor }}
			>
		</div>
	)
	
}