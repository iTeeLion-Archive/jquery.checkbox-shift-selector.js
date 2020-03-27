$(document).ready(function() {

    var chkboxShiftLastChecked = [];

    $('[data-chkbox-shiftsel]').click(function(e){
        var chkboxType = $(this).data('chkbox-shiftsel');
        if(chkboxType === ''){
            chkboxType = 'default';
        }
        var $chkboxes = $('[data-chkbox-shiftsel="'+chkboxType+'"]');

        if (!chkboxShiftLastChecked[chkboxType]) {
            chkboxShiftLastChecked[chkboxType] = this;
            return;
        }

        if (e.shiftKey) {
            var start = $chkboxes.index(this);
            var end = $chkboxes.index(chkboxShiftLastChecked[chkboxType]);

            $chkboxes.slice(Math.min(start,end), Math.max(start,end)+ 1).prop('checked', chkboxShiftLastChecked[chkboxType].checked);
        }

        chkboxShiftLastChecked[chkboxType] = this;
    });

});