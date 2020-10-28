/*
Este exercício será um pouquinho diferente dos anteriores.

Seu desafio é desenvolver uma versão do quiz que:

- Aborda um tema diferente (não pode ser de filmes);
- Tem um tema de cores diferente do que foi apresentado na aula;
- Exibe na tela a pontuação que o usuário fez. Não há certo ou errado, apenas faça. Essa exibição de pontos é uma das implementações que faremos na próxima aula =D

Independente se você já fez o quiz dos filmes enquanto acompanhava a aula, tente fazer esse exercício sem rever partes da aula.

É importante que a sua versão do quiz seja feita apenas com o conteúdo que vimos até aqui.

Depois de fazer o que foi pedido acima, crie um repositório no GitHub para a sua aplicação e abra uma issue no repositório do curso com:

- O link da sua versão do quiz;
- Quais foram as suas maiores dúvidas ou dificuldades durante a execução desse exercício;
- Quais foram as suas menores dificuldades durante a execução desse exercício.

Link do repositório do curso: https://github.com/roger-melo-treinamentos/curso-de-js-roger-melo/issues

Ps: se você não conseguiu fazer tudo o que foi pedido acima, abra a issue mesmo assim =)
*/

let score = 0
const correctAsnwers = ['B', 'A', 'B', 'A']

const form = document.querySelector('.quiz-form')
const button = document.querySelector('button')

const paragraphFeedbackMessage = document.createElement('p')
paragraphFeedbackMessage.setAttribute('class', 'text-center my-4')

const buttonResetQuiz = document.createElement('button')
buttonResetQuiz.setAttribute('class', 'text-center my-3 bg-warning')
buttonResetQuiz.textContent = 'Tentar Novamente'

const insertButtonReset = target => {
  target.insertAdjacentElement('afterend', buttonResetQuiz)
}
const createFeedbackMessage = text => {
  paragraphFeedbackMessage.textContent = text
  button.insertAdjacentElement('afterend', paragraphFeedbackMessage)
  insertButtonReset(paragraphFeedbackMessage)
}
const setFeedbackMessage = score => {
  switch (score) {
    case 25:
      createFeedbackMessage(`Não desanime, Você fez ${score} pontos!`)
      break;

    case 50:
      createFeedbackMessage(`Bom trabalho, você fez ${score} pontos!`)
      break;

    case 75:
      createFeedbackMessage(`Quase lá, você fez ${score} pontos!`)
      break;

    case 100:
      createFeedbackMessage(`Excelente, você fez ${score} pontos! `)
      break;

    default:
      createFeedbackMessage(`Que pena, você fez ${score} pontos! `)
      break;
  }
}
const removeFeedbackMessage = () => {
  paragraphFeedbackMessage.remove()
  buttonResetQuiz.remove()
}
const answerComparator = (userAsnwer, index) => {
  if (userAsnwer === correctAsnwers[index]) {
    score += 25 
  }
}
const removeSubmitFromFrontend = () => {
  button.style.display = 'none' 
}
const resetQuiz = () => {
  form.reset()
  score = 0
  button.style.display = 'inline-block'
  removeFeedbackMessage()
}

form.addEventListener('submit', event => {
  event.preventDefault()

  const userAsnwers = [
    form.inputQuestion1.value,
    form.inputQuestion2.value,
    form.inputQuestion3.value,
    form.inputQuestion4.value,
  ]

  userAsnwers.forEach(answerComparator)
  setFeedbackMessage(score)
  removeSubmitFromFrontend()
})
buttonResetQuiz.addEventListener('click', event => {
  event.preventDefault()
  resetQuiz()
})