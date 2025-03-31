const materiaService = new MateriaService()
let materias = materiaService.getAll()
if (materias.length === 0) {
  materiaService.add(new MateriaModel({ nome: 'Back-end 1' }))
  materiaService.add(new MateriaModel({ nome: 'Front-End 2' }))
  materiaService.add(new MateriaModel({ nome: 'Banco de dados' }))
  materiaService.add(new MateriaModel({ nome: 'Ferramentas Web' }))

}





const alunoservice = new Alunoservice()


const alunoView = new AlunoView(document.querySelector('[data-table-alunos'), materiaService.getAll())


const alunoController = new AlunoController(alunoservice, alunoView)


document.querySelector('form').addEventListener('submit', function (event) {
  event.preventDefault()
  const nome = document.getElementById('first_name').value
  alunoController.add({ nome })

})
