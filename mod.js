var input = document.getElementById("in")
var output = document.getElementById("out")
var copyAlert = $('#copyAlert')
var test = document.getElementById("test")
fullwidth = {
    0:'\uff10',
    1:'\uff11',
    2:'\uff12',
    3:'\uff13',
    4:'\uff14',
    5:'\uff15',
    6:'\uff16',
    7:'\uff17',
    8:'\uff18',
    9:'\uff19',
    A:'\uff21',
    B:'\uff22',
    C:'\uff23',
    D:'\uff24',
    E:'\uff25',
    F:'\uff26',
    G:'\uff27',
    H:'\uff28',
    I:'\uff29',
    J:'\uff2a',
    K:'\uff2b',
    L:'\uff2c',
    M:'\uff2d',
    N:'\uff2e',
    O:'\uff2f',
    P:'\uff30',
    Q:'\uff31',
    R:'\uff32',
    S:'\uff33',
    T:'\uff34',
    U:'\uff35',
    V:'\uff36',
    W:'\uff37',
    X:'\uff38',
    Y:'\uff39',
    Z:'\uff3a',
    a:'\uff41',
    b:'\uff42',
    c:'\uff43',
    d:'\uff44',
    e:'\uff45',
    f:'\uff46',
    g:'\uff47',
    h:'\uff48',
    i:'\uff49',
    j:'\uff4a',
    k:'\uff4b',
    l:'\uff4c',
    m:'\uff4d',
    n:'\uff4e',
    o:'\uff4f',
    p:'\uff50',
    q:'\uff51',
    r:'\uff52',
    s:'\uff53',
    t:'\uff54',
    u:'\uff55',
    v:'\uff56',
    w:'\uff57',
    x:'\uff58',
    y:'\uff59',
    z:'\uff5a'
}

input.oninput = function(){
    var temp = input.value
    var temp2 = ''
    for(var i=0;i<input.value.length;i++){
        if(input.value[i]==' '){
            temp2+='\u3000'
        }
        else if(fullwidth[input.value[i]]!=undefined){
            temp2+=fullwidth[input.value[i]]+'\u3000'
        }
        else{
            temp2+=input.value[i]+'\u3000'
        }
    }
    temp2[temp2.length-1]==' '&&(temp2=temp2.substr(0,temp2.length-1))
    output.value = temp2
    try{
        output.scroll(0,output.scrollHeight)
    }catch(err){
        output.scrollTop = output.scrollHeight
    }
}

output.onclick = function(){
    output.select()
    var temp = document.execCommand('copy')
    if(temp==true){
        copyAlert.show()
        setTimeout(function(){copyAlert.fadeOut()},1500)
    }
    else{
        document.execCommand('selectAll')
        var temp2 = document.execCommand('copy')
        output.blur()
        if(temp2==true){
            copyAlert.show()
            setTimeout(function(){copyAlert.fadeOut()},1500)
        }
        else{
            output.focus()
        }
    }
}