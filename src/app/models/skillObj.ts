export interface Skill{
    id: string,
    nombre: string,
    descripcion: string,
    url: string,
    logo: string,
}

export interface CreateSkillDTO extends Omit<Skill, 'id'>{}

export interface UpdateSkillDTO extends Partial<CreateSkillDTO>{}
