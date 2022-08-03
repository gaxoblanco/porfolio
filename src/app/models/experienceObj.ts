export interface Experience{
    id: String,
    trabajo: String,
    puesto: String,
    descripcion: String,
    ini: Date,
    fin: Date,
    logo: String,
    url: String,
}
export interface ExperienceLoading{
  trabajo: String,
  puesto: String,
  logo: String,
}
export interface CreateExpDTO extends Omit<Experience, 'id'>{}
export interface upExpDTO extends CreateExpDTO{
  id?: String,
}
