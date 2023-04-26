window.onload = function() {

    // list- tab
    var tabBtn = document.querySelectorAll(".listItem");
    var tabCont = document.querySelectorAll(".tabCont");

    tabBtn.forEach((item, idx) => {
        item.addEventListener("click", () => {
            for(i=0; i<tabBtn.length; i++) {
                tabBtn[i].classList.remove("on");
                tabCont[i].classList.remove("on");
            }
            item.classList.add("on");
            tabCont[idx].classList.add("on");
        })
    })


    // 설문생성

    var addS = document.querySelectorAll(".addSurvey");
    var sLine = document.querySelectorAll("tbody");
    var num = 1;


    addS.forEach((cont, index) => {
        cont.addEventListener("click", () => {


            let inputValue = document.getElementById("valueTitle").value;
            document.getElementById("valueTitle").innerHTML = inputValue;


            let row = document.createElement('tr');
            let html =
                "<tr>" +
                "<td>" + inputValue + "</td>" +
                "<td>10</td>" +
                "<td>3</td>" +
                "<td>2023.03.21 <span class='update_time'>15:40</span></td>" +
                "<td>" +
                "<div class='chart'>" +
                "<p>응답 통계</p>" +
                "</div>" +
                "<div class='setting'>" +
                "<p>관리</p>" +
                "</div>" +
                "</td>" +
                "</tr>";
            row.innerHTML = html;
            sLine[index].appendChild(row);
        })
    })

    // 목차 팝업
    // var plusBtn = document.querySelector(".plus-btn");
    // var clickList = document.querySelector(".click_list");
    // // plusBtn.forEach((plus, idx) => {
    // //     plus.addEventListener("click", () => {
    // //         clickList[idx].classList.toggle("active");
    // //     })
    // // })
    // plusBtn.addEventListener("click", () => {
    //     clickList.classList.toggle("active");
    // })
    var plusBtn = document.querySelectorAll(".plus-btn");
    var clickList = document.querySelectorAll(".click_list");
    plusBtn.forEach((plus, idx) => {
        plus.addEventListener("click", () => {
            clickList[idx].classList.toggle("active");
        })
    })






    document.addEventListener('click', function(e) {
        e = e || window.event;
        var target = e.target || e.srcElement;

        if(target.hasAttribute('data-toggle') && target.getAttribute('data-toggle') == 'modal') {
            if(target.hasAttribute('data-target')) {
                var m_ID = target.getAttribute('data-target');
                document.getElementById(m_ID).classList.add('open');
                e.preventDefault();
            }
        }

        // Close modal window with 'data-dismiss' attribute or when the backdrop is clicked
        if((target.hasAttribute('data-dismiss') && target.getAttribute('data-dismiss') == 'modal') || target.classList.contains('modal')) {
            var modal = document.querySelector('[class="modal open"]');
            modal.classList.remove('open');
            e.preventDefault();
        }
    }, false);


    // search 팝업
    var searchBtn = document.querySelector(".searchBtn");
    var searchBack = document.querySelector(".searchBack");
    console.log(searchBtn);
    searchBtn.addEventListener("click", function() {
        searchBack.classList.add("on");
    })

    var closeBtn = document.querySelector(".closeBtn");
    closeBtn.addEventListener("click", function() {
        searchBack.classList.remove("on")
    })



    const dropBox = document.querySelector('#dropBox');
    const dropZone = document.querySelector('#drop-zone');
    const inputElement = document.getElementById('myfile');
    const menu = document.getElementById('burger-wrap');
    const img = document.querySelector('img');
    const p = document.getElementById('dropMessage')

    inputElement.addEventListener('change', function(e) {
        const clickFile = this.files[0];
        if(clickFile) {
            dropBox.classList.add('on');
            img.style = "display:block;";
            p.style = "display: none;";
            let imgTop = img.offsetTop;
            let imgLeft = img.offsetLeft;
            console.log(imgLeft);
            console.log(imgTop);
            menu.style = "top:" + imgTop +"px";
            menu.style = "left:" + imgLeft + "px";
            const reader = new FileReader();
            reader.readAsDataURL(clickFile);
            reader.onloadend = function() {
                const result = reader.result;
                let src = this.result;
                img.src = src;
                img.alt = clickFile.name
            }
        }
    })
    dropZone.addEventListener('click', () => inputElement.click());
    dropZone.addEventListener('dragover', (e) => {
        e.preventDefault();
    });
    dropZone.addEventListener('drop', (e) => {
        e.preventDefault();
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


    function classToggle() {
        this.classList.toggle('open');
    }

    document.querySelector('#burger-wrap').addEventListener('click', classToggle);

}
