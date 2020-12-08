
// Next를 클릭하면 
//  1: 가운데 bar 색이 다음 원까지 파란색으로 바뀌고
//  2: 다음 원의 색이 파란색으로 바뀜
// Prev를 클릭하면 
//  1: 현재 가장 오른쪽의 파란 원이 회색으로
//  2: 막대기 한 부분이 회색을 바뀜
// 1번원만 파란색이면 Prev 비활
// 4번 원까지 모두 파란색이면 Next 비활

const circles = document.querySelectorAll('.circle')
const btnNext = document.querySelector('#next')
const btnPrev = document.querySelector('#prev')

console.log(circles)

btnNext.addEventListener('click', () => {
    for(var i=0; i<=circles.length; i++){

        if(circles[i].classList.length==2){

            if(circles[i+1].classList.length==1){

                // 원 테두리 색상 변경하기
                circles[i+1].classList.add('active')
                // 막대 색 변경하기
                document.querySelector('.progress').style.width = (i+1)*33 + '%'
                // Prev 버튼 활성
                btnPrev.disabled=false;

                if(i==2) {
                    btnNext.disabled=true;
                }

                break;

            }
        }
    }
})


btnPrev.addEventListener('click', () => {
    for(var i=3; i<=circles.length; i--){

        if(circles[i].classList.length==2){

            // 원 테두리 색상 변경하기
            circles[i].classList.remove('active')
            // 막대 색 변경하기
            document.querySelector('.progress').style.width = (i-1)*33 + '%'
            btnNext.disabled=false;
            if(i==1){
                btnPrev.disabled=true;
             }
            break;
        }
    }
})