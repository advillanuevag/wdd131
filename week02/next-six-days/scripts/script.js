// Obtener referencias a los elementos HTML
const pElement = document.getElementById("today");
const daysList = document.getElementById("future-days-of-the-week");

// Obtener el nombre del día de la semana actual
const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const today = new Date();
const todayWeekDay = weekDays[today.getDay()];

// Insertar el nombre del día de hoy en el elemento <p>
pElement.textContent = `Today is ${todayWeekDay}`;


// Crear elementos <li> para los próximos 6 días
for (let i = 1; i <= 6; i++) {
    // Calcular el índice del próximo día
    const nexDay = (today.getDay() + i) % 7;
    const nextDay = weekDays[indiceProximoDia];

    // Crear un nuevo elemento <li>
    const newItem = document.createElement("li");
    newItem.textContent = nextDay;

    // Agregar el nuevo elemento a la lista
    daysList.appendChild(newItem);
}