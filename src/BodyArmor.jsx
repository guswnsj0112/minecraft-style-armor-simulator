import "./BodyArmor.css";
export default function BodyArmor({changeMineral, setColor}){
	const commonStyle = { backgroundColor: setColor };
 	 const commonProps = { onClick: changeMineral, style: commonStyle };
	return (
	<>
		<div className="LeftArm"  {...commonProps}></div>
		<div className="RightArm" {...commonProps}></div>
		<div className="BodyArmor"{...commonProps}></div>
			
	</>
	)
	
}