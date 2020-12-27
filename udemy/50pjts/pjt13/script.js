const tagsEl = document.getElementById('tags');
const textarea = document.getElementById('textarea');

// 페이지 오픈할 때 초점 맞춰줌
textarea.focus();

textarea.addEventListener('keyup', (e) => {
  // html에 태그를 생성하고
  createTags(e.target.value);
  // 엔터를 누르면 10ms 후에 입력창 비우기
  if (e.key === 'Enter') {
    setTimeout(() => {
      e.target.value = '';
    }, 10);
    // 랜덤하게 디자인 변경되도록
    randomSelect();
  }
});

// tag span 생성하는 부분
function createTags(input) {
  const tags = input
    .split(',')
    .filter((tag) => tag.trim() !== '')
    .map((tag) => tag.trim());

  tagsEl.innerHTML = ' ';

  tags.forEach((tag) => {
    const tagEl = document.createElement('span');
    tagEl.classList.add('tag');
    tagEl.innerText = tag;
    tagsEl.appendChild(tagEl);
  });
}

// randomSelect 선택하는 부분
function randomSelect() {
  // 30번 랜덤선택
  const times = 30;

  const interval = setInterval(() => {
    // 랜덤하게 골라서
    const randomTag = pickRandomTag();
    // 랜덤하게 고른 span에 highlight주고
    highlightTag(randomTag);
    // 0.1초 후에 다시 하이라이트 삭제
    setTimeout(() => {
      unHighlightTag(randomTag);
    }, 100);
  }, 100);

  // 최종 선택되는 것 설정하는 함수
  setTimeout(() => {
    clearInterval(interval);
    setTimeout(() => {
      const randomTag = pickRandomTag();
      highlightTag(randomTag);
    }, 100);
  }, times * 100);
}

function pickRandomTag() {
  const tags = document.querySelectorAll('.tag');
  return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag) {
  tag.classList.add('highlight');
}

function unHighlightTag(tag) {
  tag.classList.remove('highlight');
}
