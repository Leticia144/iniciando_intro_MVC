const alunos = [

    {
    _id: 0,
    nome: "chico melato",
    notas: {
    backend_1: [1, 8.5, 9, 6.5],
    frontend_2: [2, 2, 2, 2],
    bancodados: [2, 2, 3, 3],
    ferramentas: [3, 3, 3, 3],
    },
    },
    {
    _id: 0,
    nome: "fulano da silva",
    notas: {
    backend_1: [1, 8.5, 9, 6.5],
    frontend_2: [2, 2, 2, 2],
    bancodados: [2, 2, 3, 3],
    ferramentas: [3, 3, 3, 3],
    },
    },
    {
    _id: 1,
    nome: "talita lima",
    notas: {
    backend_1: [4, 4, 4, 4],
    frontend_2: [4, 4, 5, 5],
    bancodados: [5, 5, 6, 6],
    ferramentas: [7, 7, 8, 9],
    },
    },
    ];
    
    const Alunoservice = new Alunoservice()
    
    alunos.forEach(aluno => {
        aluno.Service.add(new AlunoModel(aluno))
        })
        
        const alunoView = new alunoView(document.querySelector('[data-table-alunos'))
        const Alunocontroller = new Alunocontroller(Alunoservice, alunoView)
    
    
   