var calculadora = {
  init:function(){
    parametros = {res: "0",acum: 0,op: " "}
    var display = document.getElementById('display')
    var teclado = document.getElementsByClassName("teclado")[0]

    teclado.addEventListener('mousedown',function(e){
    var t = e.target.id.toString()
    document.getElementById(t).style.transform = "scale(0.95)";
    })

    teclado.addEventListener('mouseup',function(e){
    var t = e.target.id.toString()
    document.getElementById(t).style.transform = "scale(1)";
    e.preventDefault()
    if ((parametros.res.length < 8) || (t =='on') || (t =='mas') || (t =='menos') || (t =='por') || (t =='dividido') || (t =='igual')  ) {
      switch (t) {
        case "0":
          if (parametros.res != "0") {parametros.res += t }
          break;
        case "1":
          if (parametros.res != "0") {parametros.res += t } else {parametros.res = t}
          break
        case "2":
          if (parametros.res != "0") {parametros.res += t } else {parametros.res = t }
          break
        case "3":
          if (parametros.res != "0") {parametros.res += t } else {(parametros.res = t)}
          break;
        case "4":
          if (parametros.res != "0") {parametros.res += t } else {(parametros.res = t)}
          break;
        case "5":
          if (parametros.res != "0") {parametros.res += t } else {(parametros.res = t)}
          break;
        case "6":
          if (parametros.res != "0") {parametros.res += t } else {(parametros.res = t)}
          break;
        case "7":
          if (parametros.res != "0") {parametros.res += t } else {(parametros.res = t)}
          break;
        case "8":
          if (parametros.res != "0") {parametros.res += t } else {(parametros.res = t)}
          break;
        case "9":
          if (parametros.res != "0") {parametros.res += t } else {(parametros.res = t)}
          break;
        case "punto":
          if (parametros.res.indexOf(".") == -1) {parametros.res += "."}
          break;
        case "mas":
          operar(parametros,'+')
          break;
        case "menos":
          operar(parametros,'-')
          break;
        case "por":
          operar(parametros,'x')
          break;
        case "dividido":
          operar(parametros,'/')
          break;
        case "igual":
          operar(parametros,'=')
          break;
        case "sign":
          if (parametros.res != "0") {if (parametros.res[0]=="-"){
            parametros.res=parametros.res.slice(1,parametros.res.length)
      }else{
            parametros.res = "-" + parametros.res
          }
        }
          break;
        case "on":
          parametros.acum= 0
          parametros.res= "0"
          parametros.op=" "
          break;
    default:
        console.log('qlt')
      }
      console.log('antes de monstrar en display: '+parametros.acum+'  '+parametros.res+' '+parametros.op)
      display.innerHTML = parametros.res
    } else {console.log('max 8 caracteres')}
    })

  }, // fin de la init()

}

function operar(parametros,sig){
  if (sig =="="){
    operando(parametros,parametros.op)
    if (parametros.acum.toString().length>8)  {
      parametros.acum = parametros.acum.toExponential(3)
    }
    parametros.op= ' '
    parametros.res =parametros.acum.toString()
    parametros.acum=0
  } else
  {
    operando(parametros,sig)
  }
}

function operando(parametros,sig){
  switch (parametros.op) {
    case ' ':
      parametros.acum = Number(parametros.res)
      parametros.op = sig
      parametros.res=""
      break;
    case "x":
      parametros.acum = parametros.acum * Number(parametros.res)
      parametros.op= sig
      parametros.res=""
      break;
    case "/":
      parametros.acum = parametros.acum / Number(parametros.res)
      parametros.op = sig
      parametros.res=""
      break;
    case '+':
      parametros.acum = parametros.acum + Number(parametros.res)
      parametros.op = sig
      parametros.res=""
      break;
    case '-':
      parametros.acum = parametros.acum - Number(parametros.res)
      parametros.op = sig
      parametros.res=""
      break;
  }
}


/*

alert(acum+"  "+parametros.res+"  "+op+"  "+sig)
ac(acum)
re(parametros.res)
op(op)

//  if (e.which === 13) {
  //  var Documento = inputDocumento.value
    //consultarUsuario(Documento)

inputDocumento.addEventListener('keypparametros.ress', function(e) {
  if (e.which === 13) {
    var Documento = inputDocumento.value
    consultarUsuario(Documento)
  }

--------------


(function(num1, num2) {
  var parametros.resultado = 0

  function actualizaparametros.resultado(nuevoparametros.resultado) {
    parametros.resultado = nuevoparametros.resultado;
  }

  return {
    sumar: function(num1,num2) {
      let suma = num1 + num2;
      actualizaparametros.resultado(suma);
      return suma;
    },
    parametros.restar: function(num1,num2) {
      let parametros.resta = num1 - num2;
      actualizaparametros.resultado(parametros.resta);
      return parametros.resta;

    },
    multiplicar: function(num1,num2) {
      let multiplicacion = num1 * num2;
      actualizaparametros.resultado(multiplicacion);
                  return multiplicacion;

    },
    dividir: function(num1,num2) {
      let division = num1 / num2;
      actualizaparametros.resultado(division);
      return division;

    },
    parametros.resultado: function() {
      return parametros.resultado;
    }
  }
});

function Si((true ? 'Hola':'')){};

devuelveS(function(e){
  alert('devuelve valor')
},function(){
  alert('sin devolución')
});
*/

calculadora.init()
