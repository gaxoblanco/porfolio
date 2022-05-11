export interface Experience{
    id: String,
    trabajo: String,
    puesto: String,
    description: String,
    ini: String,
    fin: String,
    logo: String,
    url: String,
}
export interface CreateExpDTO extends Omit<Experience, 'id'>{}
export interface upExpDTO extends CreateExpDTO{
  id?: String,
}
