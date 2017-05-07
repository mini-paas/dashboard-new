/**
 * Created by Maureen.Daelo on 4/28/2017.
 */
function serializeArrayToJSON(arry) {
    var data = {}
    for(a in arry){
        data[arry[a]['name']] = arry[a]['value']
    }

    return data
}

