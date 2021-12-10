// 要素を取得
const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');
 
// 定数
const quizData = [
  {
      question: "1問　お酢に卵を殻ごといれると卵はどうなるでしょう？",
      a: "鏡のようにうつる卵になる",
      b: "殻が石のように固くなる",
      c: "透明な卵になる",
      d: "卵が溶けてなくなる",
      correct: "c",
  },
  {
      question: "2問　大妻女子大学の創設者は？",
      a: "津田梅子",
      b: "福沢諭吉",
      c: "樋口一葉",
      d: "大妻コタカ",
      correct: "d",
  },
  {
      question: "3問　日本で一番面積が広い県は？",
      a: "福島県",
      b: "長野県",
      c: "岩手県",
      d: "北海道",
      correct: "c",
  },
  {
      question: "4問　神奈川県の県庁所在地は？",
      a: "横浜市",
      b: "藤沢市",
      c: "横須賀市",
      d: "鎌倉市",
      correct: "a",
  },
  {
    question: "5問　おぼうさんが木魚をたたく意味はなんでしょう？",
    a: "亡くなった人が天国に行けるように祈るため",
    b: "悪い霊を寄せ付けないため",
    c: "お経にリズムをつけるため",
    d: "眠くならないようにするため",
    correct: "d",
  },
  {
    question: "6問　「アホウドリ」の名前の由来は？",
    a: "アホーと鳴くから",
    b: "あほみたいな顔をしてるから",
    c: "人間にすぐ捕まるから",
    d: "阿波踊りみたいに踊っているように飛ぶから",
    correct: "c",
  },
];
 
let currentQuiz = 0;
let score = 0;
 
loadQuiz();
 
// クイズを表示する
function loadQuiz() {
  deselectAnswers();
 
  const currentQuizData = quizData[currentQuiz];
 
  questionEl.innerText = currentQuizData.question
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}
 
// 選択を解除する
function deselectAnswers() {
  answerEls.forEach(answerEl => answerEl.checked = false);
}
 
// 回答取得
function getSelected() {
  let answer;
 
  answerEls.forEach(answerEl => {
      // ラジオボックスのchecked属性をチェック
      if(answerEl.checked) {
          // checked属性がついたinput要素のIDを取得
          answer = answerEl.id;
      }
  })
  return answer;
}
 
// Submitボタンをクリックした時に発火
submitBtn.addEventListener('click', () => {
  // 回答取得
  const answer = getSelected();
 
  // 未選択の場合は送信できないようにする
  if(answer) {
      // 正誤チェック
      if(answer === quizData[currentQuiz].correct) {
          // 正解の場合はスコアをインクリメント
          score++;
      }
 
      currentQuiz++;
 
      if(currentQuiz < quizData.length) {
          // クイズの読み込み
          loadQuiz();
      } else {
          // 結果発表
          quiz.innerHTML = `
              <h2>あなたの正解数は ${score}/${quizData.length} です</h2>
              <button onclick="location.reload()">Reload</button>
          `
      }
  }
})