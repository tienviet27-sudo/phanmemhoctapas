export enum SubjectName {
  Math = 'Toán',
  Vietnamese = 'Tiếng Việt',
  English = 'Tiếng Anh',
  Science = 'Khoa Học',
  History = 'Lịch sử',
  IT = 'Tin học'
}

export interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
}

export interface GameQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
}

export interface Game {
  title: string;
  description: string;
  questions: GameQuestion[];
}


export interface Subject {
  name: SubjectName;
  icon: string;
  color: string;
  gradient: string;
  lesson: {
    title: string;
    content: string;
    imageUrl: string;
  };
  questions: Question[];
  game: Game;
}