$(".table_check thead tr th:last input:checkbox").click(function () {
    var checkedStatus = this.checked;
    $(".table_check tbody tr td:last-child input:checkbox").each(function () {
        this.checked = checkedStatus;
    });
});
