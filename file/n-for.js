const n_for = [...document.querySelectorAll("[n-for]")];
const n_rand = [...document.querySelectorAll("[n-rand]")];

function shuffleArray(array) {
  function randomSort() {
    return Math.random() - 0.5;
  }
  return array.sort(randomSort);
}

// <------- for -------> 
if (n_for) {

  fs_for()

}

// <------- rand -------> 
if (n_rand) {
  fs_rand()
}
// <------- component -------> 





function fs_for() {
  n_for.forEach((el) => {

    const for_count = el.getAttribute("n-for");
    const component = el.innerHTML;

    for (let i = 0; i < for_count - 1; i++) {
      el.innerHTML += component;
    }
  })

}


function fs_rand() {
  n_rand.forEach((el) => {
    console.log(el);
    const component = [...el.querySelectorAll(':scope > *')]
    el.innerHTMl = ''
    for (const val of shuffleArray(component)) {
      el.appendChild(val)
    }
  })
}





`

<div n-for='3'>
// 只要在div上打上n-for='3'裡面的內容就會被斷重複的產生3次

  <div class="n-for">
    <div class="n-for__item">
      <div class="n-for__item-title"></div>
      <div class="n-for__item-description"></div>
      <div class="n-for__item-price"></div>
      <div class="n-for__item-button"></div>
    </div>
  </div>

</div>
// 這只是我不想每次測東西的時候都要在重打一次,或是一直複制,複制了5次,結果要改的時候...就改了5次

`;
