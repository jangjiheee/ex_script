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

    searchBtn.addEventListener("click", function() {
        searchBack.classList.add("on");
    })

    var closeBtn = document.querySelector(".closeBtn");
    closeBtn.addEventListener("click", function() {
        searchBack.classList.remove("on")
    })



    // 설문 편집 탭
    var rightTab = document.querySelectorAll(".menu")
    var rightTabcont = document.querySelectorAll(".tabBox")

    rightTab.forEach((list, idx) => {
        list.addEventListener("click", () => {
            for(i=0; i<rightTab.length; i++) {
                rightTab[i].classList.remove("on");
                rightTabcont[i].classList.remove("on");
            }

            list.classList.add("on");
            rightTabcont[idx].classList.add("on");
        })
    })

    // 다중선택

    
    var multiple = document.querySelector("#multiple");
    var changeChk = document.querySelectorAll("input[type='radio']");
    
    multiple.addEventListener("change", () => {
        if (multiple.checked) {
            changeChk.forEach((chk) => {
                chk.setAttribute("type", "checkbox");
            })
        } else {
            changeChk.forEach((chk) => {
                chk.setAttribute("type", "radio");
            })
        }
    })

    // 최대 입력 값, 항목 형식 활성화

    const maxNum = document.getElementById("maxNum");
    const textArea = document.querySelector(".text-able");

    let maxtoggle = true;

    maxNum.addEventListener("change", () => {
        if(maxtoggle) {
            textArea.removeAttribute("disabled", false);
        } else {
            textArea.setAttribute("disabled", true);
        }
        maxtoggle = !maxtoggle;
    })
    
    const numForm = document.getElementById("numForm");
    const itemForm = document.getElementById("item-form");

    numForm.addEventListener("change", () => {
        if(maxtoggle) {
            itemForm.removeAttribute("disabled", false);
        } else {
            itemForm.setAttribute("disabled", true);
        }
        maxtoggle = !maxtoggle;
    })

    // 테마 팝업
    const clickTem = document.querySelectorAll(".click-theme");

    clickTem.forEach((clickitem) => {
        clickitem.addEventListener("click", function() {
            this.nextElementSibling.classList.toggle("active");
        })
    })



    // 최소 최대

    const downNum = document.querySelector("#downNum");
    const downChild = downNum.children;
    const upNumb = document.querySelector("#upNum");
    const upChild = upNumb.children;
    
    console.log(minChild);
    console.log(upNumb);

    for (i=0; i<10; i++) {
        if (downChild[i] > upChild[i]){
            alert("범위를 올바르게 입력해주세요");
        }
        return;
    }
}
