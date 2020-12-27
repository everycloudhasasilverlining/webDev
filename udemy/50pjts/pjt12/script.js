// chevron 클릭하면 faq의 클래스에 active 추가

const arrFaq = document.querySelectorAll('.faq');

// 내가 한 부분

// arrFaq.forEach((faq) => {
//   chevronDown = faq
//     .querySelector('.faq-toggle')
//     .querySelector('.fa-chevron-down');
//   chevronDown.addEventListener('click', () => {
//     faq.classList.add('active');
//   });

//   times = faq.querySelector('.faq-toggle').querySelector('.fa-times');
//   times.addEventListener('click', () => {
//     faq.classList.remove('active');
//   });
// });

// 간단한 부분

const toggles = document.querySelectorAll('.faq-toggle');

toggles.forEach((toggle) => {
  // 어차피 down이나 x 둘 중 하나만 나오기 떄문에 그냥 faq-toggle단위로 추가해도 된다.
  // 열때 닫을때 따로 지정할 필요 없이 toggle이라고 지정해주면 알아서 인식해준다.
  toggle.addEventListener('click', () => {
    toggle.parentNode.classList.toggle('active');
  });
});
