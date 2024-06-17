const body = document.querySelector("body"),
    sidebar = body.querySelector(".sidebar"),
    toggle = body.querySelector(".toggle");


toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
})
const preferedColorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
const slider = document.getElementById('slider');

const setTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}

slider.addEventListener('click', () => {
    let switchToTheme = localStorage.getItem('theme') === 'dark' ? 'light' : 'dark';
    setTheme(switchToTheme);
});

setTheme(localStorage.getItem('theme') || preferedColorScheme);

exit.addEventListener("click", () => {
    Swal.fire({
        title: "¿Quieres cerrar sesión?",
        icon: "question",
        iconColor:"var(--background)",
        showCancelButton: true,
        cancelButtonText: "Cancelar",
        confirmButtonColor: "var(--background)",
        cancelButtonColor: "var(--background)",
        confirmButtonText: "Confirmar"
      }).then((result) => {
        if (result.isConfirmed) {
            alert("Ubicacion")
        }
      });
})

menu.addEventListener('click',()=>{
    location.href="/views/menu/menu.html"
})


pay.addEventListener('click',()=>{
    location.href="/views/pay/pay.html"
})
pqr.addEventListener('click',()=>{
    location.href="/Views/pqr/pqr.html"
})