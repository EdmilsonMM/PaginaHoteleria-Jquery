$(function(){
    
    /*Variables*/

    const nosotros = $(".nosotros").position()
    const servi = $(".content__servicios").position()
    const pase = $(".pases").position()
    const conta = $(".contanto").position()
    const  datos = $(".content__datos").position()

    /*Agrega una clase al menu*/ 
    
    $(".ico__menu").click(function(){
        $(".menu").toggleClass("mostrar")
    })

    $(document).scroll(function(){

        const docu2 = $(this).scrollTop()+500

        
        /*Nosotros*/ 
        if(docu2 > nosotros.top){
            $(".nosotros").css({
                "animation":"mostrar 1s",
                "opacity":"1"
            })
        }else{
            $(".nosotros").css({
                'animation':'ocultar 1s',
                "opacity":"0"
            })
        }

        /*Servicios*/ 
        if(docu2 > servi.top){
            $(".content__servicios").css({
                "animation":"mostrar 1s",
                "opacity":"1"
            })
        }else{
            $(".content__servicios").css({
                'animation':'ocultar 1s',
                "opacity":"0"
            })
        }

        /*Pases*/
        if(docu2 > pase.top){
            $(".pases").css({
                "animation":"mostrar 1s",
                "opacity":"1"
            })
        }else{
            $(".pases").css({
                'animation':'ocultar 1s',
                "opacity":"0"
            })
        }

        if(docu2 > datos.top){
            $(".content__datos").css({
                "animation":"mostrar 1s",
                "opacity":"1"
            })
        }else{
            $(".content__datos").css({
                'animation':'ocultar 1s',
                "opacity":"0"
            })
        }

        /*Contacto*/
        if(docu2 > conta.top){
            $(".contanto").css({
                "animation":"mostrar 1s",
                "opacity":"1"
            })
        }else{
            $(".contanto").css({
                'animation':'ocultar 1s',
                "opacity":"0"
            })
        }

    })

    /*Navegar en la pagina mediante los enlaces del menu*/

    $(".titulo__menu").click(function(){
        $("html").animate({
            scrollTop: 0
        },600)
    })

    $(".boton__portada").click(function(){
        $("html").animate({
            scrollTop: nosotros.top
        },600)
    })

    $(".ruta__nosotros").click(function(){
        $("html").animate({
            scrollTop: nosotros.top
        },600)
    })
    $(".ruta__servicios").click(function(){
        $("html").animate({
            scrollTop: servi.top
        },600)
    })
    $(".ruta__membresia").click(function(){
        $("html").animate({
            scrollTop: pase.top
        },600)
    })
    $(".ruta__contacto").click(function(){
        $("html").animate({
            scrollTop: conta.top
        },700)
    })

    





    /*Cambiar Foto de la portada*/ 



    $(".portada").click(function(){
        $(".portada__pagina").css({
            "background":"url(../assets/img/comprimido/portada/portada1.jpg)" ,
            "background-repeat": "no-repeat",
            "background-size":"cover",
            "background-position": "center"
            }
        )
    })

    $(".portada2").click(function(){
        $(".portada__pagina").css({
            "background":"url(../assets/img/comprimido/portada/portada2.jpg)" ,
            "background-repeat": "no-repeat",
            "background-size":"cover",
            "background-position": "center"
            }
        )
    })

    $(".portada3").click(function(){
        $(".portada__pagina").css({
            "background":"url(../assets/img/comprimido/portada/portada3.jpg)" ,
            "background-repeat": "no-repeat",
            "background-size":"cover",
            "background-position": "center"
            }
        )
    })
    
    /*contador*/

    $(".contador").counterUp({
        delay:1,
        time:1000
    })

    /*PAGINA DE PASES*/ 
    /*Basico*/
    
    $(".cuartoB").click(function(){
        $(".img__content").attr('src',"../assets/img/comprimido/pase/basico/cuartoB.jpg")
    })

    $(".bañoB").click(function(){
        $(".img__content").attr('src',"../assets/img/comprimido/pase/basico/bañoB.jpg")
    })

    $(".SalaB").click(function(){
        $(".img__content").attr('src',"../assets/img/comprimido/pase/basico/salaB.jpg")
    })

    $(".TerrazaB").click(function(){
        $(".img__content").attr('src',"../assets/img/comprimido/pase/basico/terrazaB.jpg")
    })

    /*Platino*/
    
    $(".cuartoP").click(function(){
        $(".img__content").attr('src',"../assets/img/comprimido/pase/platino/cuartoP.jpg")
    })

    $(".bañoP").click(function(){
        $(".img__content").attr('src',"../assets/img/comprimido/pase/platino/bañoP.jpg")
    })

    $(".SalaP").click(function(){
        $(".img__content").attr('src',"../assets/img/comprimido/pase/platino/salaP.jpg")
    })

    $(".TerrazaP").click(function(){
        $(".img__content").attr('src',"../assets/img/comprimido/pase/platino/terrazaP.webp")
    })
     /*Diamante*/
    
     $(".cuartoD").click(function(){
        $(".img__content").attr('src',"../assets/img/comprimido/pase/diamante/cuartoD.jpg")
    })

    $(".bañoD").click(function(){
        $(".img__content").attr('src',"../assets/img/comprimido/pase/diamante/bañoD.jpg")
    })

    $(".SalaD").click(function(){
        $(".img__content").attr('src',"../assets/img/comprimido/pase/diamante/salaD.jpg")
    })

    $(".TerrazaD").click(function(){
        $(".img__content").attr('src',"../assets/img/comprimido/pase/diamante/terrazaD.webp")
    })


    /*fUNCION QUE ME PERMITE ELEGIR QUE FORMULARIO MOSTRAR*/

    $(".ir__registrar").click(function(){
        $(".registrar").css({
            display:"block"
        })

        $(".ingresar").css({
            display:"none"
        })
    })

    $(".ir__sesion").click(function(){
        $(".registrar").css({
            display:"none"
        })

        $(".ingresar").css({
            display:"block"
        })
    })
    

})