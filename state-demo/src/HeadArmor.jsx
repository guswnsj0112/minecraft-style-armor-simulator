import "./HeadArmor.css"
export default function HeadArmor({changeMineral, setColor}){
	return (
		<div className="HeadArmor"
			onClick={changeMineral} 
			style= {{ backgroundColor : setColor }}
			> 
		</div>
	)
	
}