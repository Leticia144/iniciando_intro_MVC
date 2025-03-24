class AlunoView{

    constructor(table){
        this.tableList = table
        this.tableHeader = this.tableList.querySelector('thead')
        this.tableBody = this.tableList.querySelector('tbody')
        this.materias = ["backend_1", "frontend_2", "bancodados", "ferramentas"]


        this.renderHeader()
    }

    renderHeader(){

        const htmlHeader = document.createElement('tr')
        htmlHeader.innerHTML = '<td>Nome</td>'
        const htmlHeaderMaterias = this.materias.map(materia => {
            return `<td>${materia}</td>`
        }).join('')

        htmlHeader.innerHTML += htmlHeaderMaterias
        this.tableHeader.appenChild(htmlHeader)


    }



render (alunos) {
    alunos.forEach(aluno => {
    let htmlRow = document.createElement('tr')
    htmlRow.innerHTML = `${aluno.nome}`
    this.materias.forEach(materia => {
    htmlRow.innerHTML += `${aluno.media[materia]}`
    })
    
    this.tableBody.Body.appendChild(htmlRow)
    })
    }

}




