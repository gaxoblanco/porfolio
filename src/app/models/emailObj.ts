export interface Email{
  id?: String,
  Estudio: String,
  descripcion: String,
  ini: String,
  fin: String,
  url: String,
  logo: String
}
export interface CreateEmailDTO extends Omit<Email, 'id'>{}
