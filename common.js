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
    var sLine = document.querySelectorAll("tbody")

    addS.forEach((cont, index) => {
        cont.addEventListener("click", () =>{

            let row = document.createElement("tr");
            let html = 
            "<tr>" +
                "<td>설문F</td>" +
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
            "</tr>"
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
}