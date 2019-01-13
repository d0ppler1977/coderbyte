function HTMLElements(str) {
    function exctractElementName(str) {
        return str.replace("<", "").replace("/", "").replace(">", "");
    }
    
    const pattern = /<[a-z\/ "]+>/g;
    let hit = "";
    const startElement = [];
    const endElement = [];
    while ((hit = pattern.exec(str)) !== null) {
        const e = hit.toString();
        if (e.substring(0, 2) == "</") endElement.push(exctractElementName(e));
        else startElement.push(exctractElementName(e));
    }


    const l = startElement.length;
    for (let i = 0; i < l; i ++) {
        const e = startElement[i];
        const idx = endElement.indexOf(e);
        if (idx > -1) {
            endElement.splice(idx, 1);
        } else {
            return e;
        }
    }

    return true;
}

console.log(HTMLElements(process.argv[2]));