export interface Estudio{
  id: String,
  Estudio: String,
  descripcion: String,
  ini: String,
  fin: String,
  url: String,
  logo: String
}
export interface CreateStudyDTO extends Omit<Estudio, 'id'>{}
