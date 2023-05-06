type NoobDeveloper = {
    name: string;
}
//  &=> intersection
type JuniorDeveloper =NoobDeveloper & {
    expertise: string;
    experience:number
}
// enum Level{
//     junior='junior',mid='mid level',senior='senior'
// }
type NextLevel = JuniorDeveloper & {
    leadershipExperience: number;
    level:'junior' |'mid'|'senior',
    // level: Level;  ------for enum
}

//  |=> union 
const newDeveloper: NoobDeveloper | JuniorDeveloper = {
    name: 'KItiya',
    experience: 2,
    expertise:' node ,mongo'
}
const nextDeveloper: NextLevel = {
    name: 'likita',
    expertise: 'javascript',
    experience: 3,
    leadershipExperience: 1,
    // level:Level.mid, --------for enum
    level: 'mid'
}