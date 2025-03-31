
  const alunoservice = new Alunoservice()
  

const alunoView = new AlunoView(document.querySelector('[data-table-alunos'))
const alunoController = new AlunoController(alunoservice, alunoView)


document.querySelector('form').addEventListener('submit', function (event){
  event.preventDefault()
  const nome = document.getElementById('first_name').value
  alunoController.add({ nome })

})
