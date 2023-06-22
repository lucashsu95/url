const for_count = document.querySelector("[for-count]");
const count = for_count.getAttribute("for-count");
const component = for_count.innerHTML;
console.log(for_count, count, component);

for (let i = 0; i < count - 1; i++) {
  for_count.innerHTML += component;
}

`
<div for-count='3'>
// 只要在div上打上for-count='3'裡面的內容就會被斷重複的產生3次


  <div class="for-count">
    <div class="for-count__item">
      <div class="for-count__item-title"></div>
      <div class="for-count__item-description"></div>
      <div class="for-count__item-price"></div>
      <div class="for-count__item-button"></div>
    </div>
  </div>

</div>
// 這只是我不想每次測東西的時候都要在重打一次,或是一直複制,複制了5次,結果要改的時候...就改了5次

`;
