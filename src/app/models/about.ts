export interface About{
  id: String,
  titulo: String,
  descripcion: String,
  foto: String,
}

export interface CreateAboutDTO extends Omit<About, 'id'>{}
