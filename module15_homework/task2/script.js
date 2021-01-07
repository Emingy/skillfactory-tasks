function changeSvg(path){
    var paths = path.dataset.d.split(';')
    var flag = path.dataset.flag
    if(flag==0){
        path.setAttribute('d', paths[flag]);
        path.setAttribute('data-flag', 1);
    }else{
        path.setAttribute('d', paths[flag]);
        path.setAttribute('data-flag', 0);
    }
}