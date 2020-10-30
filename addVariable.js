let add = document.getElementById('add')
let addFont = document.getElementById('add-font')
let addColor = document.getElementById('add-color')
let addBtn = document.getElementById('addBtn')
let newPhoto = document.getElementsByClassName('img')[0]
let saveBtn = document.getElementById("saveBtn");
let fontSize = 0;
let variable = addFont;
var isDown = false;


addFont.addEventListener('keyup', function() {
    fontSize = parseInt(addFont.value);
})


addBtn.addEventListener('click', function() {
    if (fontSize && fontSize != 0) {
        let input = document.createElement('input');
        input.setAttribute('type', 'text');
        input.style.fontSize = `${fontSize}px`
        input.style.position = "absolute"
        input.style.background = "transparent"
        input.style.color = addColor.value;
        newPhoto.appendChild(input)
        input.addEventListener('blur', function() {
            input.style.border = "none"
        })



        fontSize = 0;
        addFont.value = "";

        /*------------------------------ */
        //mouse move
        variable = input;
        input.addEventListener('click', function() {
            console.log('click');
            variable = input;
        })

        variable.addEventListener('mousedown', function(e) {
            console.log('down');
            isDown = true;
            offset = [
                variable.offsetLeft - e.clientX,
                variable.offsetTop - e.clientY
            ];
        }, true);

        document.addEventListener('mousemove', function(event) {
            console.log('move');
            event.preventDefault();
            if (isDown) {
                mousePosition = {
                    x: event.clientX,
                    y: event.clientY
                };
                variable.style.left = (mousePosition.x + offset[0]) + 'px';
                variable.style.top = (mousePosition.y + offset[1]) + 'px';
            }
        }, true);
    }
})

var mousePosition;
var offset = [0, 0];
var isDown = false;

document.addEventListener('mouseup', function() {
    isDown = false;
}, true);



/*------------------------------------- */
//Save image
saveBtn.addEventListener('click', handleClick)

function handleClick() {
    html2canvas((newPhoto), {
        onrendered: function(canvas) {
            var a = document.createElement('a');
            a.href = canvas.toDataURL("image/png");
            a.download = "hello.png";
            a.click();
        }
    })
};

/*-------------------------------- */
//show and hide add section
let inputSect = document.getElementsByClassName('inputSect')
add.addEventListener('click', function() {
    inputSect[0].style.display = inputSect[0].style.display == "block" ? "none" : "block";
})