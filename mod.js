var input = document.getElementById("in")
var output = document.getElementById("out")
var copyAlert = $('#copyAlert')
var test = document.getElementById("test")
var fullwidth_checkbox = document.getElementById("fullwidth")
var sad_checkbox = document.getElementById("sad")

fullwidth_replace = '!"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~'.split('')
fullwidth_replace_with = '\uff01\uff02\uff03\uff04\uff05\uff06\uff07\uff08\uff09\uff0a\uff0b\uff0c\uff0d\uff0e\uff0f\uff10\uff11\uff12\uff13\uff14\uff15\uff16\uff17\uff18\uff19\uff1a\uff1b\uff1c\uff1d\uff1e\uff1f\uff20\uff21\uff22\uff23\uff24\uff25\uff26\uff27\uff28\uff29\uff2a\uff2b\uff2c\uff2d\uff2e\uff2f\uff30\uff31\uff32\uff33\uff34\uff35\uff36\uff37\uff38\uff39\uff3a\uff3b\uff3c\uff3d\uff3e\uff3f\uff40\uff41\uff42\uff43\uff44\uff45\uff46\uff47\uff48\uff49\uff4a\uff4b\uff4c\uff4d\uff4e\uff4f\uff50\uff51\uff52\uff53\uff54\uff55\uff56\uff57\uff58\uff59\uff5a\uff5b\uff5c\uff5d\uff5e'.split('')

input.oninput = function(){
    var temp = input.value
    fullwidth_checkbox.checked && (temp = to_fullwidth(temp))
    sad_checkbox.checked && (temp = to_sad(temp))
    output.value = temp
    try{
        output.scroll(0,output.scrollHeight)
    }catch(err){
        output.scrollTop = output.scrollHeight
    }
}

output.onclick = function(){
    output.select()
    document.execCommand('selectAll')
    var temp2 = document.execCommand('copy')
    window.getSelection().removeAllRanges()
    output.blur()
    if(temp2==true){
        copyAlert.show()
        setTimeout(function(){copyAlert.fadeOut()},1500)
    }
    else{
        output.focus()
    }
}

to_fullwidth = function(text_in){
    var text_out = ''
    for(var i=0;i<text_in.length;i++){
        if(text_in[i]==' '){
            text_out+='\u3000'
        }
        else if(fullwidth_replace.indexOf(text_in[i])>=0){
            text_out+=fullwidth_replace_with[fullwidth_replace.indexOf(text_in[i])]
        }
        else{
            text_out+=text_in[i]
        }
    }
    return text_out
}

to_sad = function(text_in){
    var text_out = ''
    for(var i=0;i<text_in.length;i++){
        text_out+=text_in[i]+'\u3000'
    }
    return text_out.substr(0,text_out.length-1)
}

fullwidth_checkbox.onchange = input.oninput
sad_checkbox.onchange = input.oninput