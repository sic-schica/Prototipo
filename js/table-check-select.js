$("#fija_lista thead tr th:last input:checkbox").click(function () {
    var checkedStatus = this.checked;
    $("#fija_lista tbody tr td:last-child input:checkbox").each(function () {
        this.checked = checkedStatus;
    });
});
