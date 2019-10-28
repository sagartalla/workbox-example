try { 
	webengage.survey.onOpen(function (data) {
    if (data.surveyId === '7djkj30' || data.surveyId === '33l1751') {
        var timer = setInterval(function(){
            if((document.querySelector(".webklipper-publisher-survey-container-7djkj30") != null && document.querySelector(".webklipper-publisher-survey-container-7djkj30").style.height != '100%')){
                document.querySelector(".webklipper-publisher-survey-container-7djkj30").style.height = '100%';
            }
            else if (document.querySelector(".webklipper-publisher-survey-container-33l1751") != null && document.querySelector(".webklipper-publisher-survey-container-33l1751").style.height != '100%'){
                document.querySelector(".webklipper-publisher-survey-container-33l1751").style.height = '100%';
            }
            clearInterval(timer);
        },100);
    }
});
 } catch(e) { 
 	if (e instanceof Error) { 
		var data = e.stack || e.description;
		data = (data.length > 900 ? data.substring(0, 900) : data);
	 	webengage.eLog(null, 'error', data, 'cwc-error','cwc', '3k9e6gg');
	 }
 }
