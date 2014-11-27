
function onWindowLoad(e){

	function appendChatWindow(){
		document.body.innerHTML += '\
			<div class="a_chatWindow_horizon"><div class="a_chatWindow_point">\
					<div class="a_chatWindow_mainWindow" id="a_chatWindow">\
						<div class="a_chatWindow_title"></div>\
						<div class="a_chatWindow_history a_chatWindow_field"></div>\
						<div class="a_chatWindow_inputWrapper a_chatWindow_field">\
							<div class="a_chatWindow_input" contenteditable="true"></div>\
						</div>\
					</div>\
				</div>\
			</div>';
	}

	
	function onInputKeyUp(e){	
		var msg;
		if (e.keyCode == 13){
			msg = e.currentTarget.innerHTML;
			e.currentTarget.innerHTML = '';
		}			
		
		var m = (e.currentTarget.offsetHeight/initalInputHeight) - 1;
		var h = initalInputWrapperHeight + initalInputHeight*m;
		if (h != inputWrapper.offsetHeight){
			inputWrapper.style.height =  h + 'px';
			mainWindow.style.height = initalMainWindowHeight + initalInputHeight*m + 'px';
			history.style.bottom = h + historyBottomDiff + 'px';
		}
		
		if (msg){
			alert('Отправляем сообщение: ' + msg);
		}
	}

	appendChatWindow();
	
	var input = document.getElementsByClassName('a_chatWindow_input')[0];
	var inputWrapper = document.getElementsByClassName('a_chatWindow_inputWrapper')[0];
	var mainWindow = document.getElementsByClassName('a_chatWindow_mainWindow')[0];
	var history = document.getElementsByClassName('a_chatWindow_history')[0];

	var initalInputHeight = input.offsetHeight;
	var initalInputWrapperHeight = inputWrapper.offsetHeight;
	var initalMainWindowHeight = mainWindow.offsetHeight;
	var historyBottomDiff = 4;
	
	input.addEventListener('keyup', onInputKeyUp);
	
}
// ------------------------------------------------------------
window.onload = onWindowLoad;