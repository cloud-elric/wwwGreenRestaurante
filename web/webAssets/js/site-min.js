function step1(){$(contenedorPremio).hide(),$(contenedorTarjetas).show(),$(contenedorGlobal).addClass("container-home"),$(contenedorGlobal).removeClass("container-ribbon"),$("img.logo").hide(),$("img.logo-evento").show()}function step2(){$(contenedorTarjetas).hide(),$(contenedorRegistro).show(),$(contenedorGlobal).removeClass("container-home"),$(contenedorGlobal).addClass("container-ribbon"),$("img.logo").show(),$("img.logo-evento").hide()}function step3(){$(contenedorRegistro).hide(),$(contenedorPremio).show(),$(contenedorGlobal).removeClass("container-ribbon"),$(contenedorGlobal).addClass("container-premio")}function abrirAviso(){$(".aviso-box").show()}function cerrarAviso(){$(".aviso-box").hide()}function validarSoloNumeros(o){-1!==$.inArray(o.keyCode,[46,8,9,27,13,110])||65===o.keyCode&&(!0===o.ctrlKey||!0===o.metaKey)||o.keyCode>=35&&o.keyCode<=40||(o.shiftKey||o.keyCode<48||o.keyCode>57)&&(o.keyCode<96||o.keyCode>105)&&o.preventDefault()}var contenedorRegistro=".js-registro-contenedor",contenedorPremio=".js-premio-contenedor",contenedorGracias=".js-gracias-contenedor",contenedorTarjetas=".js-tarjetas-contenedor",contenedorGlobal=".container";$(document).ready(function(){$(".terminos-wrapper .message").on("click",function(){abrirAviso()}),$(".js-btn-aceptar-aviso").on("click",function(o){o.preventDefault(),$(".js-check-box-aviso").css("background","#D98C34"),$(".js-check-box-aviso").addClass("js-check-box-aviso-checked"),cerrarAviso()}),$(".js-check-box-aviso").on("click",function(o){o.preventDefault(),$(this).hasClass("js-check-box-aviso-checked")?($(".js-check-box-aviso").css("background","white"),$(".js-check-box-aviso").removeClass("js-check-box-aviso-checked")):abrirAviso()}),$(".js-btn-cerrar-aviso").on("click",function(o){o.preventDefault(),cerrarAviso()}),$(".js-tipo-tarjeta").on("click",function(o){o.preventDefault();var e=$(this),n=e.data("value");$("#entusuarios-id_tarjeta").val(n),step2()}),$("#entusuarios-txt_telefono_celular").keydown(function(o){validarSoloNumeros(o)}),$("#entusuarios-txt_cp").keydown(function(o){validarSoloNumeros(o)}),$("#entusuarios-num_edad").keydown(function(o){validarSoloNumeros(o)}),$("#entusuarios-num_patos").keydown(function(o){validarSoloNumeros(o)}),$(".js-boton-inicio").on("click",function(o){o.preventDefault(),step1()}),$("body").on("beforeSubmit","#form-usuario-participar",function(){var o=$(this);if(o.find(".has-error").length)return!1;var e=Ladda.create(document.getElementById("js-btn-guardar-informacion"));e.start();var n=o.serialize();return $.ajax({url:"site/guardar-informacion",type:"post",data:n,dataType:"HTML",success:function(o){$(".js-premio-ajax").html(o),step3(),document.getElementById("form-usuario-participar").reset(),e.stop(),$(".js-check-box-aviso").css("background","white"),$(".js-check-box-aviso").removeClass("js-check-box-aviso-checked")},error:function(){e.stop()},statusCode:{404:function(){}}}),!1})});