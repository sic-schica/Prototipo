$(document).ready(function () {

    var navListItems = $('div.setup-panel div a'),
            allWells = $('.setup-content'),
            allNextBtn = $('.nextBtn');
			allPreviewBtn = $('.previewBtn');

    allWells.hide();

    navListItems.click(function (e) {
        e.preventDefault();
        var $target = $($(this).attr('href')),
                $item = $(this);

        if (!$item.hasClass('disabled')) {
            navListItems.removeClass('stepwizard-active').addClass('stepwizard-disable');
            $item.addClass('stepwizard-active');
            allWells.hide();
            $target.show();
        }
    });

    allNextBtn.click(function(){
        var curStep = $(this).closest(".setup-content"),
            curStepBtn = curStep.attr("id"),
            nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
            curInputs = curStep.find("input[type='text'],input[type='url'],select"),
            isValid = true;

        $(".form-group").removeClass("has-error");
        for(var i=0; i<curInputs.length; i++){
            if (!curInputs[i].validity.valid){
                isValid = false;
                $(curInputs[i]).closest(".form-group").addClass("has-error");
            }
        }
        if (isValid)
            nextStepWizard.removeClass('disabled').trigger('click');
    });

	allPreviewBtn.click(function(){
		var curStep = $(this).closest(".setup-content"),
            curStepBtn = curStep.attr("id"),
			previewStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().prev().children("a");
		previewStepWizard.removeClass('disabled').trigger('click');
	});

    $('div.setup-panel div a.stepwizard-active').trigger('click');

});
