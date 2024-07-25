//your JS code here. If required.
inputs=document.getElementsByClassName("code")
inputs.forEach((inp,idx)=>{
	inp.addEventListener(("keyup"),(event)=>{
		if( event.keyCode >= 48 && event.keyCode <= 57 && idx+1<inputs.length){
			inputs[idx+1].focus()
		}
		else if (event.keyCode===8 && idx-1>=0){
			inputs[idx-1].focus()
		}
	})
})
