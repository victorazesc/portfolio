export function exibirAlerta(mensagem: string, tipo?: string) {

    var alertElement = document.getElementById('custom-alert');
    if (!alertElement) return

    var classeAlerta = '';
    if (tipo === 'success') {
        classeAlerta = 'alert_sucess';
    } else if (tipo === 'error') {
        classeAlerta = 'alert_error';
    } else {
        classeAlerta = 'alert_default';
    }

    alertElement.innerHTML = mensagem;
    alertElement.className = 'alert ' + classeAlerta;

    setTimeout(function () {
        if (!alertElement) return
        alertElement.innerHTML = '';
        alertElement.className = 'alert';
    }, 5000);
}
