export interface Email{
  id?: String,
  nombre: String,
  email: String,
  mensaje: String,
  fecha?: Date,
}
export interface CreateEmailDTO extends Omit<Email, 'id'>{}
