class DateHelper {
  constructor(){
    throw new Error("Esta class não pode ser instanciada");
  }

  static stringToDate(text) {
    return (new Date(...text
      .split('-')
      .map((item, index) => item - index % 2)));
  }

  static dateToString(data) {
    return (data.getDate() + "/" + (data.getMonth() + 1) + "/" + data.getFullYear());
  }

}
