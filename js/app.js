import { MateriaModel } from "./models/Materia.model.js"
import { Alunoservice } from "./service/Aluno.service.js"
import { MateriaService } from "./service/Materia.service.js"
import { AlunoView } from "./views/Aluno.view.js"
import { AlunoController } from "./controllers/Aluno.controller.js"
















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






document.querySelector('#search_name').addEventListener('input', function (e) {
  let nome = this.value
  sessionStorage.setItem('search', nome)
  if(nome.length > 2 || nome.length === 0) {
    alunoController.search(nome)
  }


})



if(sessionStorage.getItem('search')) {
  let nome = sessionStorage.getItem('search')
  document.querySelector('search_name').value = nome
  alunoController.search(nome)
}





