'use scrict';
class Point {
    static get NUVEM() {

       
        return "fa fa-cloud fa-lg text-muted";
    }
    static get AEROPORTO() {

       
        return "fa fa-plane fa-lg text-primary"
    }
    static get VAZIO() {


        
        return "fa fa-sun-o mg-right-1 text-yellow";
    }

    
    constructor(x, y, tipo) {
        this.x = x;
        this.y = y;
        this.tipo= tipo;
    }
}

module.exports = Point;