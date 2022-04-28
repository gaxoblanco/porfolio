export interface Skill{
    id: string,
    title: string,
    description: string,
    image: string,
    url: string,
}

export interface CreateSkillDTO extends Omit<Skill, 'id'>{}

export interface UpdateSkillDTO extends Partial<CreateSkillDTO>{}