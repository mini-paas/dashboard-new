// 定义全局表格对象
var oTable;

// 初始化
$(document).ready(function() {
    // 初始化表格
    oTable = initTable();

    // 全选
    $("#checkAll").on("click", function() {
        if ($(this).is(":checked")) {
            $(":checkbox").prop("checked", true);
        } else {
            $(":checkbox").prop("checked", false);
        }
    });

    $("form").validation();

    // 添加
    $("#addSupplierFunc").click(addSupplierFunc);
    // 取消
    $("#cancelFunc").click(cancelFunc);
    // 修改
    $("#editSupplierFunc").click(editSupplierFunc);
    // 查询
    $("#supplier_search").click(searchSupplierFunc);
});

//create applciation
function createdApplication() {

}

//stop applciation
function stopApplication() {

}

//start applciation
function startApplication() {

}

//delete applciation
function deleteApplication() {

}

//redeploy applciation
function redeployApplication() {

}

//scale applciation
function scaleApplication() {

}

//expensive applciation
function expensiveApplication() {

}

//rollUpdate application
function rollUpdateApplication() {

}
