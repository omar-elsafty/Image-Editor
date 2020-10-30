let defaultBtn = document.getElementById('default-btn');
let customBtn = document.getElementById('custom-btn');
let image = document.getElementById('image');
let wrapper = document.getElementById('wrapper')
let content = document.getElementById('content')


customBtn.addEventListener('click', function() {
    defaultBtn.click();
});

defaultBtn.addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        // const i = new Image();
        reader.onload = function() {
            const result = reader.result;
            image.src = result;
            content.style.display = "none";
            // if (i.height < .8 * window.innerHeight) {
            //     image.style.height = `${i.height}px`;
            // }
        }
        wrapper.classList.add('active')
        reader.readAsDataURL(file);
    }
});