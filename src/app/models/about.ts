export interface About{
  id: String,
  titulo: String,
  descripcion: String,
  descripcion2: String,
  foto: String,
}

export interface CreateAboutDTO extends Omit<About, 'id'>{}

export interface UpAbout extends CreateAboutDTO{
  id?: String;
}
