export interface Estudio{
  id: String,
  estudiado: String,
  institucion: String,
  descripcion: String,
  ini: Date,
  fin: Date,
  url: String,
  logo: String
}
export interface EstudioLoading{
  id: String,
  estudiado: String,
  institucion: String,
  descripcion?: String,
  ini?: Date,
  fin?: Date,
  url?: String,
  logo: String
}
export interface CreateStudyDTO extends Omit<Estudio, 'id'>{}
export interface UpdateStudyDTO extends CreateStudyDTO{
  id?: String,
}
