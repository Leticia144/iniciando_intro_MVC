class AlunoController {
    constructor (service, view){
        view.render(service.alunos)
        this.view = view
        this.service = service
    }

    add(alluno){
        this.service.add(new AlunoModel(aluno))
        this.view.render(this.service.alunos)
    }
}