
class Puissance4 {

    constructor(colonne, ligne, joueur1, joueur2){
        this.COL = colonne;
        this.LGN = ligne;
        this.player = 'red';   
        this.joueur1 = joueur1;
        this.joueur2 = joueur2; 
        this.switch = 1;
        this.winner = 0;
        
        this.CreerPlateau();
        this.Interaction();
    }

    CreerPlateau(){
        for(let lgn=0; lgn < this.LGN; lgn++){
            const ligne = $('<div class="ligne"></div>')

            for(let col=0; col < this.COL; col++){

                const colonne = $(`<div class="colonne vide" data-col="${col}" data-lgn="${lgn}"></div>`);
                ligne.append(colonne)
            }
            $('#plateau').append(ligne);
        }
    }

    //CHERCHER LA CASE EN BAS
    Interaction(){
        const $puissance4 = this;

        function derniereCase(col){
            const lastCase = $(`[data-col='${col}']`);
               
                for(let i = lastCase.length-1; i>=0; i--){
                    
                    const LastCaseVide = $(lastCase[i]);

                    if(LastCaseVide.hasClass('vide')){
                        return LastCaseVide;
                    }
                }
            return null;
        }

        $('#plateau').on('mouseenter', '.colonne.vide', function(){
            const $col = $(this).data('col');
            const $last = derniereCase($col);

            if($last != null){
                $last.addClass(`prev${$puissance4.player}`);
            }
        });

        $('#plateau').on('mouseleave', '.colonne', function(){
            $('.colonne').removeClass(`prev${$puissance4.player}`);
        })

        $('#plateau').on('click', '.colonne', function(){
            const col = $(this).data('col');
            const last = derniereCase(col)
            last.addClass(`joueur${$puissance4.player}`).removeClass(`vide`).data('joueur', `${$puissance4.player}`);

            // PAIR IMPAIR POUR CHANGER DE COULEUR
            if($puissance4.switch == 1){
                $puissance4.player = "yellow";
                $puissance4.joueur1 = joueur1;
            }
            if($puissance4.switch == -1){
                $puissance4.player = "red";
                $puissance4.joueur1 = joueur2;
            }
            $puissance4.switch = $puissance4.switch * -1;

///////////////////////CHECK WINNER///////////////////////////////////////////////////////////////////////////////////////////////

            for(let z = 0; z <= $puissance4.LGN -1;z++){
                    const lastLgn = last.data('lgn');
                    const lastCol = last.data('col');

                    $puissance4.winner = 0;

                if(last.hasClass('joueurred')){

                        //CHECK DE GAUCHE A DROITE
                        if($(`[data-lgn='${lastLgn}'][data-col='${z}']`).hasClass('joueurred')){
                            if($(`[data-lgn='${lastLgn}'][data-col='${z +1}']`).hasClass('joueurred')){
                                if($(`[data-lgn='${lastLgn}'][data-col='${z +2}']`).hasClass('joueurred')){
                                    if($(`[data-lgn='${lastLgn}'][data-col='${z +3}']`).hasClass('joueurred')){
                                    $puissance4.winner = 4;
                                        if($puissance4.winner == 4){
                                            $('#vortex').show()
                                            $('#vortex').css('animation', 'delete 6s')
                                            $('#plateau').css('animation','tourner 5s linear 1 both')
                                            $('#etoile').css('animation','pop 6s')
                                            setTimeout(() => {
                                                $('#etoile').show()
                                                setTimeout(() => {
                                                    $('#etoile').hide()
                                                    $('#vortex').hide()
                                                    setTimeout(() => {
                                                        $('#null').append(`<div id="gagnant">${$puissance4.joueur1} A GAGNER !</div>`)
                                                    }, 1);
                                                }, 1000);
                                                // $('body').css('background','blue')
                                            }, 5000);
                                            break;
                                        }
                                    }
                                }
                            }
                        }

                        //CHECK VERTICALEMENT
                        if($(`[data-lgn='${z}'][data-col='${lastCol}']`).hasClass('joueurred')){
                            if($(`[data-lgn='${z +1}'][data-col='${lastCol}']`).hasClass('joueurred')){
                                if($(`[data-lgn='${z +2}'][data-col='${lastCol}']`).hasClass('joueurred')){
                                    if($(`[data-lgn='${z +3}'][data-col='${lastCol}']`).hasClass('joueurred')){
                                    $puissance4.winner = 6;
                                    if($puissance4.winner == 6){
                                        $('#vortex').show()
                                        $('#vortex').css('animation', 'delete 6s')
                                        $('#plateau').css('animation','tourner 5s linear 1 both')
                                        $('#etoile').css('animation','pop 6s')
                                        setTimeout(() => {
                                            $('#etoile').show()
                                            setTimeout(() => {
                                                $('#etoile').hide()
                                                $('#vortex').hide()
                                                setTimeout(() => {
                                                    $('#null').append(`<div id="gagnant">${$puissance4.joueur1} A GAGNER !</div>`)
                                                }, 1);
                                            }, 1000);
                                            // $('body').css('background','blue')
                                        }, 5000);
                                        break;
                                    }
                                    }
                                }
                            }
                        }

                    //CHECK EN DIAG
                        if($(`[data-lgn='${lastLgn}'][data-col='${lastCol}']`).hasClass('joueurred')){
                        $puissance4.winner++;
                            if($(`[data-lgn='${lastLgn -1}'][data-col='${lastCol +1}']`).hasClass('joueurred')){
                            $puissance4.winner++;
                                if($(`[data-lgn='${lastLgn -2}'][data-col='${lastCol +2}']`).hasClass('joueurred')){
                                $puissance4.winner++;
                                    if($(`[data-lgn='${lastLgn -3}'][data-col='${lastCol +3}']`).hasClass('joueurred')){
                                    $puissance4.winner = 7;
                                    if($puissance4.winner == 7){
                                        $('#vortex').show()
                                        $('#vortex').css('animation', 'delete 6s')
                                        $('#plateau').css('animation','tourner 5s linear 1 both')
                                        $('#etoile').css('animation','pop 6s')
                                        setTimeout(() => {
                                            $('#etoile').show()
                                            setTimeout(() => {
                                                $('#etoile').hide()
                                                $('#vortex').hide()
                                                setTimeout(() => {
                                                    $('#null').append(`<div id="gagnant">${$puissance4.joueur1} A GAGNER !</div>`)
                                                }, 1);
                                            }, 1000);
                                            // $('body').css('background','blue')
                                        }, 5000);
                                        break;
                                    }
                                    }
                                }
                            }
                        }

                        if($(`[data-lgn='${lastLgn}'][data-col='${lastCol}']`).hasClass('joueurred')){
                        $puissance4.winner++;
                            if($(`[data-lgn='${lastLgn +1}'][data-col='${lastCol -1}']`).hasClass('joueurred')){
                            $puissance4.winner++;
                                if($(`[data-lgn='${lastLgn +2}'][data-col='${lastCol -2}']`).hasClass('joueurred')){
                                $puissance4.winner++;
                                    if($(`[data-lgn='${lastLgn +3}'][data-col='${lastCol -3}']`).hasClass('joueurred')){
                                        $puissance4.winner = 8;
                                        if($puissance4.winner == 8){
                                            $('#vortex').show()
                                            $('#vortex').css('animation', 'delete 6s')
                                            $('#plateau').css('animation','tourner 5s linear 1 both')
                                            $('#etoile').css('animation','pop 6s')
                                            setTimeout(() => {
                                                $('#etoile').show()
                                                setTimeout(() => {
                                                    $('#etoile').hide()
                                                    $('#vortex').hide()
                                                    setTimeout(() => {
                                                        $('#null').append(`<div id="gagnant">${$puissance4.joueur1} A GAGNER !</div>`)
                                                    }, 1);
                                                }, 1000);
                                                // $('body').css('background','blue')
                                            }, 5000);
                                            break;
                                        }
                                    }
                                }
                            }
                        }

                        if($puissance4.winner == 5){
                            $('#vortex').show()
                            $('#vortex').css('animation', 'delete 6s')
                            $('#plateau').css('animation','tourner 5s linear 1 both')
                            $('#etoile').css('animation','pop 6s')
                            setTimeout(() => {
                                $('#etoile').show()
                                setTimeout(() => {
                                    $('#etoile').hide()
                                    $('#vortex').hide()
                                    setTimeout(() => {
                                        $('#null').append(`<div id="gagnant">${$puissance4.joueur1} A GAGNER !</div>`)
                                    }, 1);
                                }, 1000);
                                // $('body').css('background','blue')
                            }, 5000);
                            break;
                        }
                        $puissance4.winner = 0

                        //CHECK EN DIAG
                        if($(`[data-lgn='${lastLgn}'][data-col='${lastCol}']`).hasClass('joueurred')){
                        $puissance4.winner++;
                            if($(`[data-lgn='${lastLgn -1}'][data-col='${lastCol -1}']`).hasClass('joueurred')){
                            $puissance4.winner++;
                                if($(`[data-lgn='${lastLgn -2}'][data-col='${lastCol -2}']`).hasClass('joueurred')){
                                $puissance4.winner++;
                                    if($(`[data-lgn='${lastLgn -3}'][data-col='${lastCol -3}']`).hasClass('joueurred')){
                                    $puissance4.winner = 9;
                                    if($puissance4.winner == 9){
                                        $('#vortex').show()
                                        $('#vortex').css('animation', 'delete 6s')
                                        $('#plateau').css('animation','tourner 5s linear 1 both')
                                        $('#etoile').css('animation','pop 6s')
                                        setTimeout(() => {
                                            $('#etoile').show()
                                            setTimeout(() => {
                                                $('#etoile').hide()
                                                $('#vortex').hide()
                                                setTimeout(() => {
                                                    $('#null').append(`<div id="gagnant">${$puissance4.joueur1} A GAGNER !</div>`)
                                                }, 1);
                                            }, 1000);
                                            // $('body').css('background','blue')
                                        }, 5000);
                                        break;
                                    }
                                    }
                                }
                            }
                        }

                        if($(`[data-lgn='${lastLgn}'][data-col='${lastCol}']`).hasClass('joueurred')){
                        $puissance4.winner++;
                            if($(`[data-lgn='${lastLgn +1}'][data-col='${lastCol +1}']`).hasClass('joueurred')){
                            $puissance4.winner++;
                                if($(`[data-lgn='${lastLgn +2}'][data-col='${lastCol +2}']`).hasClass('joueurred')){
                                $puissance4.winner++;
                                    if($(`[data-lgn='${lastLgn +3}'][data-col='${lastCol +3}']`).hasClass('joueurred')){
                                    $puissance4.winner = 10;
                                    if($puissance4.winner == 10){
                                        $('#vortex').show()
                                        $('#vortex').css('animation', 'delete 6s')
                                        $('#plateau').css('animation','tourner 5s linear 1 both')
                                        $('#etoile').css('animation','pop 6s')
                                        setTimeout(() => {
                                            $('#etoile').show()
                                            setTimeout(() => {
                                                $('#etoile').hide()
                                                $('#vortex').hide()
                                                setTimeout(() => {
                                                    $('#null').append(`<div id="gagnant">${$puissance4.joueur1} A GAGNER !</div>`)
                                                }, 1);
                                            }, 1000);
                                            // $('body').css('background','blue')
                                        }, 5000);
                                        break;
                                    }
                                    }
                                }
                            }
                        }
                        if($puissance4.winner == 5){
                            $('#vortex').show()
                            $('#vortex').css('animation', 'delete 6s')
                            $('#plateau').css('animation','tourner 5s linear 1 both')
                            $('#etoile').css('animation','pop 6s')
                            setTimeout(() => {
                                $('#etoile').show()
                                setTimeout(() => {
                                    $('#etoile').hide()
                                    $('#vortex').hide()
                                    setTimeout(() => {
                                        $('#null').append(`<div id="gagnant">${$puissance4.joueur1} A GAGNER !</div>`)
                                    }, 1);
                                }, 1000);
                                // $('body').css('background','blue')
                            }, 5000);
                            break;
                        }
                }



                if(last.hasClass('joueuryellow')){

                   //CHECK DE GAUCHE A DROITE
                   if($(`[data-lgn='${lastLgn}'][data-col='${z}']`).hasClass('joueuryellow')){
                    if($(`[data-lgn='${lastLgn}'][data-col='${z +1}']`).hasClass('joueuryellow')){
                        if($(`[data-lgn='${lastLgn}'][data-col='${z +2}']`).hasClass('joueuryellow')){
                            if($(`[data-lgn='${lastLgn}'][data-col='${z +3}']`).hasClass('joueuryellow')){
                            $puissance4.winner = 4;
                                if($puissance4.winner == 4){
                                    $('#vortex').show()
                                    $('#vortex').css('animation', 'delete 6s')
                                    $('#plateau').css('animation','tourner 5s linear 1 both')
                                    $('#etoile').css('animation','pop 6s')
                                    setTimeout(() => {
                                        $('#etoile').show()
                                        setTimeout(() => {
                                            $('#etoile').hide()
                                            $('#vortex').hide()
                                            setTimeout(() => {
                                                $('#null').append(`<div id="gagnant">${$puissance4.joueur1} A GAGNER !</div>`)
                                            }, 1);
                                        }, 1000);
                                        // $('body').css('background','blue')
                                    }, 5000);
                                    break;
                                }
                            }
                        }
                    }
                }

                //CHECK VERTICALEMENT
                if($(`[data-lgn='${z}'][data-col='${lastCol}']`).hasClass('joueuryellow')){
                    if($(`[data-lgn='${z +1}'][data-col='${lastCol}']`).hasClass('joueuryellow')){
                        if($(`[data-lgn='${z +2}'][data-col='${lastCol}']`).hasClass('joueuryellow')){
                            if($(`[data-lgn='${z +3}'][data-col='${lastCol}']`).hasClass('joueuryellow')){
                            $puissance4.winner = 6;
                            if($puissance4.winner == 6){
                                $('#vortex').show()
                                $('#vortex').css('animation', 'delete 6s')
                                $('#plateau').css('animation','tourner 5s linear 1 both')
                                $('#etoile').css('animation','pop 6s')
                                setTimeout(() => {
                                    $('#etoile').show()
                                    setTimeout(() => {
                                        $('#etoile').hide()
                                        $('#vortex').hide()
                                        setTimeout(() => {
                                            $('#null').append(`<div id="gagnant">${$puissance4.joueur1} A GAGNER !</div>`)
                                        }, 1);
                                    }, 1000);
                                    // $('body').css('background','blue')
                                }, 5000);
                                break;
                            }
                            }
                        }
                    }
                }

            //CHECK EN DIAG
                if($(`[data-lgn='${lastLgn}'][data-col='${lastCol}']`).hasClass('joueuryellow')){
                $puissance4.winner++;
                    if($(`[data-lgn='${lastLgn -1}'][data-col='${lastCol +1}']`).hasClass('joueuryellow')){
                    $puissance4.winner++;
                        if($(`[data-lgn='${lastLgn -2}'][data-col='${lastCol +2}']`).hasClass('joueuryellow')){
                        $puissance4.winner++;
                            if($(`[data-lgn='${lastLgn -3}'][data-col='${lastCol +3}']`).hasClass('joueuryellow')){
                            $puissance4.winner = 7;
                            if($puissance4.winner == 7){
                                $('#vortex').show()
                                $('#vortex').css('animation', 'delete 6s')
                                $('#plateau').css('animation','tourner 5s linear 1 both')
                                $('#etoile').css('animation','pop 6s')
                                setTimeout(() => {
                                    $('#etoile').show()
                                    setTimeout(() => {
                                        $('#etoile').hide()
                                        $('#vortex').hide()
                                        setTimeout(() => {
                                            $('#null').append(`<div id="gagnant">${$puissance4.joueur1} A GAGNER !</div>`)
                                        }, 1);
                                    }, 1000);
                                    // $('body').css('background','blue')
                                }, 5000);
                                break;
                            }
                            }
                        }
                    }
                }

                if($(`[data-lgn='${lastLgn}'][data-col='${lastCol}']`).hasClass('joueuryellow')){
                $puissance4.winner++;
                    if($(`[data-lgn='${lastLgn +1}'][data-col='${lastCol -1}']`).hasClass('joueuryellow')){
                    $puissance4.winner++;
                        if($(`[data-lgn='${lastLgn +2}'][data-col='${lastCol -2}']`).hasClass('joueuryellow')){
                        $puissance4.winner++;
                            if($(`[data-lgn='${lastLgn +3}'][data-col='${lastCol -3}']`).hasClass('joueuryellow')){
                                $puissance4.winner = 8;
                                if($puissance4.winner == 8){
                                    $('#vortex').show()
                                    $('#vortex').css('animation', 'delete 6s')
                                    $('#plateau').css('animation','tourner 5s linear 1 both')
                                    $('#etoile').css('animation','pop 6s')
                                    setTimeout(() => {
                                        $('#etoile').show()
                                        setTimeout(() => {
                                            $('#etoile').hide()
                                            $('#vortex').hide()
                                            setTimeout(() => {
                                                $('#null').append(`<div id="gagnant">${$puissance4.joueur1} A GAGNER !</div>`)
                                            }, 1);
                                        }, 1000);
                                        // $('body').css('background','blue')
                                    }, 5000);
                                    break;
                                }
                            }
                        }
                    }
                }

                if($puissance4.winner == 5){
                    $('#vortex').show()
                    $('#vortex').css('animation', 'delete 6s')
                    $('#plateau').css('animation','tourner 5s linear 1 both')
                    $('#etoile').css('animation','pop 6s')
                    setTimeout(() => {
                        $('#etoile').show()
                        setTimeout(() => {
                            $('#etoile').hide()
                            $('#vortex').hide()
                            setTimeout(() => {
                                $('#null').append(`<div id="gagnant">${$puissance4.joueur1} A GAGNER !</div>`)
                            }, 1);
                        }, 1000);
                        // $('body').css('background','blue')
                    }, 5000);
                    break;
                }
                $puissance4.winner = 0

                //CHECK EN DIAG
                if($(`[data-lgn='${lastLgn}'][data-col='${lastCol}']`).hasClass('joueuryellow')){
                $puissance4.winner++;
                    if($(`[data-lgn='${lastLgn -1}'][data-col='${lastCol -1}']`).hasClass('joueuryellow')){
                    $puissance4.winner++;
                        if($(`[data-lgn='${lastLgn -2}'][data-col='${lastCol -2}']`).hasClass('joueuryellow')){
                        $puissance4.winner++;
                            if($(`[data-lgn='${lastLgn -3}'][data-col='${lastCol -3}']`).hasClass('joueuryellow')){
                            $puissance4.winner = 9;
                            if($puissance4.winner == 9){
                                $('#vortex').show()
                                $('#vortex').css('animation', 'delete 6s')
                                $('#plateau').css('animation','tourner 5s linear 1 both')
                                $('#etoile').css('animation','pop 6s')
                                setTimeout(() => {
                                    $('#etoile').show()
                                    setTimeout(() => {
                                        $('#etoile').hide()
                                        $('#vortex').hide()
                                        setTimeout(() => {
                                            $('#null').append(`<div id="gagnant">${$puissance4.joueur1} A GAGNER !</div>`)
                                        }, 1);
                                    }, 1000);
                                    // $('body').css('background','blue')
                                }, 5000);
                                break;
                            }
                            }
                        }
                    }
                }

                if($(`[data-lgn='${lastLgn}'][data-col='${lastCol}']`).hasClass('joueuryellow')){
                $puissance4.winner++;
                    if($(`[data-lgn='${lastLgn +1}'][data-col='${lastCol +1}']`).hasClass('joueuryellow')){
                    $puissance4.winner++;
                        if($(`[data-lgn='${lastLgn +2}'][data-col='${lastCol +2}']`).hasClass('joueuryellow')){
                        $puissance4.winner++;
                            if($(`[data-lgn='${lastLgn +3}'][data-col='${lastCol +3}']`).hasClass('joueuryellow')){
                            $puissance4.winner = 10;
                            if($puissance4.winner == 10){
                                $('#vortex').show()
                                $('#vortex').css('animation', 'delete 6s')
                                $('#plateau').css('animation','tourner 5s linear 1 both')
                                $('#etoile').css('animation','pop 6s')
                                setTimeout(() => {
                                    $('#etoile').show()
                                    setTimeout(() => {
                                        $('#etoile').hide()
                                        $('#vortex').hide()
                                        setTimeout(() => {
                                            $('#null').append(`<div id="gagnant">${$puissance4.joueur1} A GAGNER !</div>`)
                                        }, 1);
                                    }, 1000);
                                    // $('body').css('background','blue')
                                }, 5000);
                                break;
                            }
                            }
                        }
                    }
                }
                if($puissance4.winner == 5){
                    $('#vortex').show()
                    $('#vortex').css('animation', 'delete 6s')
                    $('#plateau').css('animation','tourner 5s linear 1 both')
                    $('#etoile').css('animation','pop 6s')
                    setTimeout(() => {
                        $('#etoile').show()
                        setTimeout(() => {
                            $('#etoile').hide()
                            $('#vortex').hide()
                            setTimeout(() => {
                                $('#null').append(`<div id="gagnant">${$puissance4.joueur1} A GAGNER !</div>`)
                            }, 1);
                        }, 1000);
                        // $('body').css('background','blue')
                    }, 5000);
                    break;
                }
            }
        }
        })
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//  Faire une fonction optimisée pour retirer cette foret de if qd j'aurais le temps
//  Ou trouver un moyen plus simple de checkWin
////////////////////////////////////////////////////////////////////////////////
var color1;
var color2;

let joueur1;
let joueur2;

let lignes;
let colonnes;

var color = color1;
var swap = 1;

$('#plateau').ready(function(){

    
    $('#vortex').hide()
    // var X = prompt('Combien de Colonne ?');
    // var Y = prompt('Combien de Ligne ?');
    $('#etoile').hide()
    $('#vortex').hide()

    $('#Enregistrer').on('click', function(){
        $('#info').hide();
        color1 = $('#color1').val()
        color2 = $('#color2').val()
    
        joueur1 = $('#joueur1').val()
        joueur2 = $('#joueur2').val()  
    
        lignes = $('#lignes').val()
        colonnes =  $('#colonnes').val()

        $('#vortex').append(`<style> .joueurred{ background : ${color1}; }</style>`);
        $('#vortex').append(`<style> .joueuryellow{ background : ${color2}; }</style>`);
        
        $('body').mousemove( function(){
            $('#plateau').css('box-shadow',`0 0 10vw 0vw ${color},0 0 2vw 0.4vw ${color},inset 0 0 .5vw .2vw ${color},inset 0 0 0.2vw 0.2vw ${color},inset 0 0 .25vw 0.2vw ${color}`);
        })

        $('#plateau').on('click', '.colonne', function(){
            // PAIR IMPAIR POUR CHANGER DE COULEUR
            if(swap == 1){
                color = color2;
            }
            if(swap == -1){
                color = color1;
            }
            swap = swap * -1;
        })

    const p4 = new Puissance4(colonnes, lignes, joueur1, joueur2);
})
    $('#restart').on('click', function(){
        location.reload(true);
    })
});
