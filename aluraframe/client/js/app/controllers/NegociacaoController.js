class NegociacaoController {
  constructor() {
    let $ = document.querySelector.bind(document);
    this._inputData = $("#data");
    this._inputQuantidade = $("#quantidade");
    this._inputValor = $("#valor");
    this._listaNegociacoes = new ListaNegociacoes();
  }

  adiciona(event) {
    event.preventDefault();

    // Se Date() receber um string em formato válido para ISO-8601 sem especificar
    // o fuso horário, ele partirá de que a TZ utilizada é UTC.
    let negociacao = this._criaNegociacao();
    this._listaNegociacoes.adiciona(negociacao);
    console.log(this._listaNegociacoes);
    this._limpaForumlario();

  }

  _criaNegociacao() {
    return (new Negociacao(DateHelper.stringToDate(this._inputData.value), this._inputQuantidade.value, this._inputValor.value));
  }

  _limpaForumlario() {
    this._inputData.value = '';
    this._inputQuantidade.value = 1;
    this._inputValor.value = 0.0;
    this._inputData.focus();
  }
}
