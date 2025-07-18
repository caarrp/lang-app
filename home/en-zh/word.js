//comments like so

//carmen park 
//this word class is for english speakers learning mandarin



class zh_Word {
    constructor(hanzi = "", pinyin = [], tones = [], grammar = "", definition = []) {
        //js doesnt do overloading so this is as if I had a deafult constructor
        this.hanzi = hanzi;
        this.pinyin = pinyin;
        this.tones = tones;
        this.grammar = grammar;
        this.definition = definition;
    }

    //this is a method to return the morphemes of a word
    get_hanzi() {
        return this.hanzi;
    }

    //this is a method to return the pinyin (array of strings)
    get_pinyin() {
        return this.pinyin;
    }   

    //this is a method to return the tones (array of ints)
    get_tones() {
        return this.tones;
    }

    //this is a method to return the grammar
    get_grammar() {
        return this.grammar;
    }

    //this is a method to return the definition
    get_definition() {
        return this.definition;
    }

    write_unicode(){
        let unicode = "";
        for (let i = 0; i < this.hanzi.length; i++) {
            unicode += "\\u" + this.hanzi.charCodeAt(i).toString(16).padStart(4, '0');
    }
}
}


function which_vowel(string){
    //returdns the index of the accented vowel
    let v;

    if ("a" in string){
        v = "a";
    }
    else if ("o" in string){
        v = "o";
    }
    else if ("e" in string){
        v = "e";
    }
    else if ("i" in string){
        v = "i";
    }   
    else if ("u" in string){
        v = "u";
    }   
    else if ("v" in string){
        v = "v";
    }
    else {
        return -1;//maybe theres a better way to handle this
    }
    return string.indexOf(v);
}

function uu_char(vowel, tone){
    //determines unicode char based off vowe and tone
    let tones = {
        'a': [257, 225, 462, 224],  // ā, á, ǎ, à
        'e': [275, 233, 283, 232],  // ē, é, ě, è
        'i': [299, 237, 464, 236],  // ī, í, ǐ, ì
        'o': [333, 243, 466, 242],  // ō, ó, ǒ, ò
        'u': [363, 250, 468, 249],  // ū, ú, ǔ, ù
        'v': [470, 472, 474, 476]   // ǖ, ǘ, ǚ, ǜ
    };
    if (vowel in tones && tone >= 1 && tone <= 4) {
        try{
            console.log("unicode char:", String.fromCodePoint(tones[vowel][tone - 1]))
            String.fromCodePoint(tones[vowel][tone - 1]);}
        catch (e) {
            console.error("Invalid tone or vowel:", vowel, tone);
            return null; // Return null if the tone or vowel is invalid
    }
    }
    return tone;
}
