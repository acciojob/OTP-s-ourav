inputs=Array.from(document.getElementsByClassName("code"))
// console.log(inputs)
inputs.forEach((inp,idx)=>{
	inp.addEventListener(("keyup"),(event)=>{
        console.log(event);
		if( event.keyCode >= 48 && event.keyCode <= 57 && idx+1<inputs.length){
			inputs[idx+1].focus()
		}
		else if (event.keyCode===8 && idx-1>=0){
			inp.value=''
			inputs[idx-1].focus()
		}
	})
	console.log(inp);
})
