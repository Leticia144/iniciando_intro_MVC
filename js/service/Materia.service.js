 import { MateriaModel } from "../models/Materia.model.js"
 
 
 
 export   class MateriaService {
    constructor() {
    this.materias = []
    this.updateListMateriasFromLocalStorage()
}

add(materia) {
    if(!materia instanceof MateriaModel) {
        throw new error('A materia deve ser uma instancia de MateriaModel')
    }


    this.materias.push(materia)
    this.updateLocalStorage()
}
update(materia) {
    return materia
}

searchById(id) {
    return this.materias.find(mater => materia._Id === id)
}

getAll() {
    return this.materias
}

updateLocalStorage() {
    let materias = JSON.stringify(this.materias)
    localStorage.setItem('materias', materias)
}


updateListMateriasFromLocalStorage() {
    let local = localStorage.getItem('materias')
    let materias = []
    if (local) {
        materias = JSON.parse(local)
    }

    materias.forEach(materia => {
        this.add(new MateriaModel(materia))
    })










}













}
