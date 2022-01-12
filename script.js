/*  
    Esta função seleciona e executa o audio da tecla inserida.
*/
let escolherSom={
    receberTecla:()=>{  
        window.addEventListener('keydown', (event)  =>{
        this.element=document.getElementById(event.key); 
        escolherSom.deselect();      
        escolherSom.validarTecla(event.key);  
                  
    });
    },
     
    /* 
        Função para validar a tecla inserida.
        Compara o input com o array e executa o audio respectivo a tecla acionada.
    */
    validarTecla:(tecla)=>{ 
        let validador=["q","w","e","r","t","y","u","i","o"];
        for(i=0;i<validador.length;i++){       
            if(tecla==validador[i]){
                const audio=new Audio();
                audio.src=`./audios/audio-${tecla}.mp3`;           
                audio.play();
                escolherSom.setCor(); 
                break;

            }
        }    
    },

    // Adiciona cor ao background e um boxshadow ao botão acionado.
    setCor:()=>{
        this.element.style.backgroundColor='#fff'; 
        this.element.style.boxShadow = `0px 0px 17px 0px #fff`;
        
    },


    //Função para acionar a transição do background e boxshadow e voltar ao transparente.
    deselect:()=>{
            this.element.addEventListener('transitionend',()=>{
            escolherSom.transparente();

            })
    },


    transparente:()=>{
        this.element.style.backgroundColor="transparent";
        this.element.style.boxShadow=`none`;
   
    },



}
escolherSom.receberTecla();

