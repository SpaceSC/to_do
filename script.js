// to do appot készítünk, alapértelmezésben 10 üres mező áll rendelkezésre, de hozzá tudunk adni újakat, minden csíkban van bepipálható checkbox, egy input mező feladat beírására, és egy törlés gomb

function pageLoaded() { 

// változóba mentem a root-ot

// változóba eltárolni a minimum note számot (most ez a 10-es szám, arra az esetre ha később változna, könnyű legyen megváltoztatni)

// elmenteni egy változóba egy note sort (többsoros, ``-kel, egy div, benne checkbox, input mező, "Törlés" button)

// for ciklusban létrehozzuk, duplikáljuk, hozzáadjuk a root-hoz ezeket a sorokat (insertAdjacentHTML)

// új note hozzáadás gomb, amivel a lista végére vagy azon kívül egy új elemet (insertAdjacentHTML afterend, tehát a root-on kívül hozzuk létre)

// click esemény hozzáadása addEventListener az új note hozzáadás gombhoz

//querySelectorAll-lal kijelölön az összes törlés classú gombot, és elmentem egy változóba

// for ciklussal mindegyik törlés classú gomra egy click eseményt adok

// hogyan tudom kijelölni a kitörlendő elemet

}

// A pageLoaded függvény meghívása a load eseménykor
window.addEventListener("load", pageLoaded);
