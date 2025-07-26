import "./LegArmor.css"
export default function LegArmor({changeMineral, setColor}){
	const commonStyle = { backgroundColor: setColor };
 	 const commonProps = { onClick: changeMineral, style: commonStyle };
	return (
		<>
			<div className="LeftLeg" {...commonProps}></div>
			<div className="RightLeg" {...commonProps}></div>
		</>
	)
	
}