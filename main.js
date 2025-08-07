$(document).ready(function(){
    let numId = 0;

    $('form').on('submit', function(e) {
        e.preventDefault();
        const nomeTarefa = $('#nome-tarefa').val();
        const novoItem = $('<li style="display:none"></li');

        $(`
            <p id="tarefa-${numId}" class="tarefas">${nomeTarefa}</p>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(300);
        $('#nome-tarefa').val('');
        numId ++;
    });

    $('ul').on('click', '.tarefas', function() {
        $(this).toggleClass('tarefa-concluida');
    });
});