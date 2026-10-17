const napit = document.querySelectorAll(".vastaus-nappi");

napit.forEach(function (nappi) {
    nappi.addEventListener("click", function () {
        const vastauksenId = nappi.dataset.vastaus;
        const vastaus = document.getElementById(vastauksenId);

        const numerot = vastauksenId.replace("vastaus", "");
        const kuva = document.getElementById("kuva" + numerot);

        vastaus.hidden = false;
        kuva.hidden = false;

        nappi.hidden = true;
    });
});