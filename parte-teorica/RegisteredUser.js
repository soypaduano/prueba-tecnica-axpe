/*Mejoras:
    1. Para empezar creo que toda la lógica de calculo de precio no debería ir dentro de RegisteredUser, ya que forma parte del servicio. 
       Para eso, dentro de Service, crearía otro metodo que se llame getTotalOfUser(id). 
    2. El if / else no es nada escalable: tendremos que añadir uno a uno cada if si queremos escalar la aplicación con distintos tipos de
       contenido multimedia que vaya surgiendo.  
       Por eso propongo, pasar a una interfaz que se llame MultimediaContent y los demás MultimediaContent que se vayan creando,
       extiendan esa interfaz y tengan el atributo de price (entre otros). He creado otro contenido multimedia, como podcast,
       para que se entienda la escalabilidad de esto.  
*/

class RegisteredUser {
    constructor(services = []){
        this.id = "xxx"
        this.services = services;
        this.email = "sebastian.paduano.m@gmail.com"
        this.password = "1234"
        this.registration = '12-02-2022'
        this.adult = true;
    }

    
    getTotal(){
        //Movemos la lógica al servicio, ya que el calculo de precio pertenece al servicio.
        return Service.getTotalOfUser(this.id) 
    }
}

class Service {
    constructor(timestamp){
        this.timestamp = timestamp;
    }

    getMultimediaContent(userId){
        return this.getMultimediaContentInDatabaseOfUser(userId);
    }

    getTotalOfUser(userId){
        let multimediaContent = this.getMultimediaContent(userId); //Esto devuelve todos el contenido que tiene el usuario
        const total = multimediaContent.reduce((partialSum, content) => {
            /*
                Con esto evitamos el if/else -> Todos los contenidos tienen un precio, sin importar su tipo (puede ser 0)
                Además, también contemplamos que si es premium, le metemos directamente el additionalFee. 
            */
            return partialSum + content.price + (content.isPremium ? content.additionalFee : 0);
        }, 0);

        return total;
    }
}

/* 
    Pero para que esto funcione, deberíamos implementar una interfaz llamada MultimediaContent. 
    Ya que JS no tiene features de OOP como tal, haré el pseudocódigo en TS. (Mirar archivo de MultimediaContent)
*/
