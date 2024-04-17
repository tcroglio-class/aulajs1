let modal = document.getElementById('modal');
document.getElementById('botao').addEventListener('click', function () {
    // alert('este é um alerta!');
    modal.style.display = 'block';

    setTimeout(function () {
        modal.style.display = 'none';
    }, 3000);
});

