const marker = document.querySelector('#marker');
const items = document.querySelectorAll('a');
console.log(items);
function fs_offset(e) {
    marker.style.top = e.offsetTop + 'px';
    marker.style.left = e.offsetLeft + 'px';
    marker.style.width = e.offsetWidth + 'px';
};

items.forEach(item => {
    item.addEventListener('mousemove', function () {
        fs_offset(this);
    })
})
