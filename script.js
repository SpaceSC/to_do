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
    <div class="noteDiv">
      <input type="checkbox" name="tick" value="tick">
      <input type="text" name="myNote" placeholder="my note">
      <button class="delete" type="button">Delete</button>
    </div> 
  `;
    // console.log(note);

  // for ciklusban létrehozzuk, minimumNote-szor duplikáljuk, hozzáadjuk a root-hoz ezeket a sorokat (insertAdjacentHTML)

  for (let index = 0; index < minimumNote; index++) {
    root.insertAdjacentHTML("beforeend", note);
  }

  // root-on kívülre új note hozzáadás gomb, amivel kattintásra egy új elemet tudunk hozzáadni (insertAdjacentHTML afterend, tehát a root-on kívül hozzuk létre)

  root.insertAdjacentHTML("afterend", `
    <button id="newNoteBtn" "type="button">New Note</button>
  `);

  // click esemény hozzáadása addEventListener az új note hozzáadás gombhoz

  function newItem() {
    root.insertAdjacentHTML("beforeend", note);

  // TODO: eseményfigyelőt rátenni az újonnan hozzáadott sorokra is a 75-ös sor beli (removeBtns[index].addEventListener("click", removeItem);)

  }

  //itt az addEventListenernél azért nincs () a newItemnél, mert eseményfigyelő saját paraméterekkel tér vissza, a () felülírná ezt
  document.getElementById("newNoteBtn").addEventListener("click", newItem); 

  //querySelectorAll-lal kijelölöm az összes törlés classú gombot, és elmentem egy változóba

  let removeBtns = root.querySelectorAll(".delete");
    // console.log(removeBtns);

  // for ciklussal mindegyik törlés classú gomra egy click eseményt adok

  function removeItem(e) {
    //console.log("megtörtént a kattintás");

    // ha paraméterként volt megadva valami, változóként létrejön, nem kell idézőjel
    // console.log(e); 

    // magát a gomb elementet logolja ki
    console.log(e.target); 

    // elkapni azt az elemet, amire kattintottunk, ennek a perentjének clicked classt adunk
    //e.target.parentElement.classList.add("clicked"); 

    // kattintáskor törlődjön
    e.target.parentElement.remove();
  }

  for (let index = 0; index < removeBtns.length; index++) {

    removeBtns[index].addEventListener("click", removeItem);
    
  }

  // hogyan tudom kijelölni a kitörlendő elemet

}

// A pageLoaded függvény meghívása a load eseménykor
window.addEventListener("load", pageLoaded);
