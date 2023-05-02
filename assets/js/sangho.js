window.onload = function() {



    const dropBox = document.querySelector('#dropBox');
    const dropZone = document.querySelector('#drop-zone');
    const inputElement = document.getElementById('myfile');
    const img = document.querySelector('img');
    const p = document.getElementById('dropMessage')
    const changeFile = document.querySelector('.fileChange');
    const fileRemove = document.querySelector('.fileRemove');

    inputElement.addEventListener('change', function(e) {
        const clickFile = this.files[0];
        if(clickFile) {
            dropBox.classList.add('on');
            img.style = "display:block;";
            p.style = "display: none;";
            const reader = new FileReader();
            reader.readAsDataURL(clickFile);
            reader.onloadend = function() {
                const result = reader.result;
                let src = this.result;
                img.src = src;
                img.alt = clickFile.name
            }
        }
    });
    dropZone.addEventListener('click', () => inputElement.click());
    changeFile.addEventListener('click', () => inputElement.click());
    dropZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropBox.classList.add('on');
        img.style = "display:block;";
        let imgTop = img.offsetTop;
        let imgLeft = img.offsetLeft;
        console.log(imgLeft);
        console.log(imgTop);
        let file = e.dataTransfer.files[0];

        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = function() {
            e.preventDefault()
            p.style = "display: none;";
            let src = this.result;
            img.src = src;
            img.alt = file.name
        }
    });

    dropZone.addEventListener('dragleave', (e) => {
        e.preventDefault();
        dropBox.classList.remove('on');
    });
    dropZone.addEventListener('drop', (e) => {
        e.p eventDefault();
        dropZone.classList.add('on');
        img.style = "display:block;";
        let imgTop = img.offsetTop;
        let imgLeft = img.offsetLeft;
        console.log(imgLeft);
        console.log(imgTop);
        let file = e.dataTransfer.files[0];

        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = function() {
            e.preventDefault()
            p.style = "display: none;";
            let src = this.result;
            img.src = src;
            img.alt = file.name
        }
    });

    fileRemove.addEventListener('click', function(e) {
            p.style = "display: block;";
            dropBox.classList.remove('on');
            img.src = '';
            img.alt = '';
            file.value = '';
    });


    const menu = document.querySelector(".burger");
    const menuItems = document.querySelectorAll(".menuItem");
    function toggleMenu() {
        if(menu.classList.contains("open")) {
            menu.classList.remove("open");
        } else {
            menu.classList.add("open");
        }
    }

    menu.addEventListener("click", toggleMenu);

    menuItems.forEach(
        function(menuItem) {
            menuItem.addEventListener("click", toggleMenu);
        }
    )


    const alignLeft = document.querySelector(".alignLeft");
    alignLeft.addEventListener('click', function(e) {
        dropZone.style = "justify-content: left;";
    });



    const alignCenter = document.querySelector(".alignCenter");
    alignCenter.addEventListener('click', function(e) {
        dropZone.style = "justify-content: center;";
    });



    const alignRight = document.querySelector(".alignRight");
    alignRight.addEventListener('click', function(e) {
        dropZone.style = "justify-content: right;";
    });





    const minprice = document.querySelector('#minprice');
    const maxprice = document.querySelector('#maxprice');

    minprice.addEventListener('change', (e) => {
        e.preventDefault();
        var minVal = minprice.value * 1;
        document.querySelectorAll("#maxprice option").forEach(opt => {

            if(opt.value <= minVal) {
                opt.disabled = true;
            } else {
                opt.disabled = false;
            }
        });
    });

    maxprice.addEventListener('change', (e) => {
        e.preventDefault();
        var maxVal = maxprice.value * 1;
        document.querySelectorAll("#minprice option").forEach(opt => {
            if(opt.value >= maxVal) {
                opt.disabled = true;
            } else {
                opt.disabled = false;
            }
        });
    });





}
