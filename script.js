// to do appot készítünk, alapértelmezésben 10 üres mező áll rendelkezésre, de hozzá tudunk adni újakat, minden csíkban van bepipálható checkbox, egy input mező feladat beírására, és egy törlés gomb

function pageLoaded() { 

// változóba mentem a root-ot

const root = document.querySelector("#root");
  // console.log(root);

// változóba eltárolni a minimum note számot (most ez a 10-es szám, arra az esetre ha később változna, könnyű legyen megváltoztatni)

let minimumNote = 10;
  // console.log(minimumNote);

// elmenteni egy változóba egy note sort (többsoros, ``-kel, egy div, benne checkbox, input mező, "Törlés" button)

let note = `
  <div class="fruit">
    <input type="checkbox" name="tick" value="tick">
    <input type="text" name="myNote" placeholder="my note">
    <button class="delete" type="button">Delete</button>
  </div> 
`;
  // console.log(note);

// for ciklusban létrehozzuk, duplikáljuk, hozzáadjuk a root-hoz ezeket a sorokat (insertAdjacentHTML)

for (let index = 0; index < minimumNote; index++) {
  root.insertAdjacentHTML("beforeend", note);
}

// root-on kívülre új note hozzáadás gomb, amivel kattintásra egy új elemet tudunk hozzáadni (insertAdjacentHTML afterend, tehát a root-on kívül hozzuk létre)

const addNoteBtn = `<button type="button">New Note</button>`;

root.insertAdjacentHTML("afterend", addNoteBtn);

// click esemény hozzáadása addEventListener az új note hozzáadás gombhoz

//querySelectorAll-lal kijelölön az összes törlés classú gombot, és elmentem egy változóba

// for ciklussal mindegyik törlés classú gomra egy click eseményt adok

// hogyan tudom kijelölni a kitörlendő elemet

}

// A pageLoaded függvény meghívása a load eseménykor
window.addEventListener("load", pageLoaded);
