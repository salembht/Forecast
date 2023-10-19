function makeCard(id, template, data ,hid ,htam){
    let rand=Math.floor(Math.random() * 7 );
    console.log(rand) 
    let d=data[rand];
    document.getElementById(hid).innerHTML += templateEngin(htam,d);
    for (let i =rand+1 ; i < data.length; i++) {
        let whther = data[i];
        document.getElementById(id).innerHTML += templateEngin(template,whther);
    }
    for (let i =0 ; i < rand; i++) {
        let whther = data[i];
        document.getElementById(id).innerHTML += templateEngin(template,whther);
    }
}
function templateEngin(source, obj) {
    const regex = /{{(.*?)}}/g;
    return source.replace(regex, (match, key) => obj[key.trim()] || match);
}
