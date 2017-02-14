
/*可复用的filters*/
export default {
    lineFeed(text){
        if(text){
            return text.replace(/\n/g, '<br>');
        }else{
            return '';
        }

    }
}
