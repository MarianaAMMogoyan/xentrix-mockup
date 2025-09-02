// ======= Login =======
function loginUser(event) {
  event.preventDefault();
  const usuario = document.getElementById("usuario").value;
  const password = document.getElementById("password").value;

  if (usuario === "admin" && password === "1234") {
    window.location.href = "home.html";
  } else {
    alert("Usuario o contraseña incorrectos.\nPrueba con admin / 1234");
  }
}

// ======= Gráficos =======
if (document.getElementById("barChart")) {
  const barCanvas = document.getElementById("barChart");
  const barCtx = barCanvas.getContext("2d");
  const barData = [70, 50, 90];
  const barLabels = ["Seguridad", "Vehículo", "Proveedor"];

  barCtx.fillStyle = "#2980b9";
  barData.forEach((val, i) => {
    barCtx.fillRect(i * 100 + 30, 200 - val, 50, val);
    barCtx.fillText(barLabels[i], i * 100 + 20, 190);
  });
}

if (document.getElementById("pieChart")) {
  const pieCanvas = document.getElementById("pieChart");
  const pieCtx = pieCanvas.getContext("2d");
  const pieData = [40, 30, 30];
  const colors = ["#27ae60", "#e67e22", "#c0392b"];
  let total = pieData.reduce((a, b) => a + b, 0);
  let startAngle = 0;
  pieData.forEach((val, i) => {
    let sliceAngle = (val / total) * 2 * Math.PI;
    pieCtx.beginPath();
    pieCtx.moveTo(150, 100);
    pieCtx.arc(150, 100, 100, startAngle, startAngle + sliceAngle);
    pieCtx.closePath();
    pieCtx.fillStyle = colors[i];
    pieCtx.fill();
    startAngle += sliceAngle;
  });
}

// ======= Agregar visitas =======
function agregarVisita() {
  const input = document.getElementById("nuevaVisita");
  const fecha = input.value;
  if (!fecha) {
    alert("Selecciona una fecha válida");
    return;
  }
  let visitas = JSON.parse(localStorage.getItem("visitas")) || [];
  if (!visitas.includes(fecha)) {
    visitas.push(fecha);
    localStorage.setItem("visitas", JSON.stringify(visitas));
    alert(`Visita agregada: ${fecha}`);
    input.value = "";
  } else {
    alert("Esta fecha ya tiene una visita programada");
  }
}

