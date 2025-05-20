/* Aqui serao adicionados pequenos tweaks as funcoes do template*/
/*adiciona a funcao de adicionar classe ativo para todos os gaitinhas,
facilitando estilos especificos para o elemento ativo 
caso o painel inicie com uma aba espefica ja aberta, adicionar a classe ativo a essa 
aba no html.
*/

$('.panel').on('click', function(){ 
	$(this).parent().children().removeClass('ativo');
	 $(this).toggleClass('ativo')
})