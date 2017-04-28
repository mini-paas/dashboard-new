function apiCall(method, path, params, cb) {
    $.ajax({
        url: "/" + path,
        method: method,
        cache: false,
        data: params,
        success: function(data) {
            cb(data);
        },
        error: function(xhr, status, data) {
            cb(jQuery.parseJSON(xhr.responseText));
        }
    });
}
