const hoursHand = document.querySelector(".hand.hours");
const minutesHand = document.querySelector(".hand.minutes");
const secondsHand = document.querySelector(".hand.seconds");

const setRotation = (element, rotationPercentage) => {
  // Transforma a porcentagem da hora em graus
  element.style.setProperty("--rotation", rotationPercentage * 360);
};

const setClock = () => {
  const currentDate = new Date();
  // Descobre o valor da hora em porcentagem
  const secondsPercentage = currentDate.getSeconds() / 60;
    // essa adição é para os minutos irem atualizando de acordo com os segundos
    const minutesPercentage = (secondsPercentage + currentDate.getMinutes()) / 60;
    // essa adição é para as horas irem atualizando de acordo com os minutos
  const hoursPercentage = (minutesPercentage + currentDate.getHours()) / 12;

  setRotation(secondsHand, secondsPercentage);
  setRotation(minutesHand, minutesPercentage);
  setRotation(hoursHand, hoursPercentage);
};
// inicia o relógio
setClock();
// Intervalo que a função setClock será chamada para ser executada
setInterval(setClock, 1000);
