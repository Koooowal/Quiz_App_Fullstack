interface ICategory{
    id: number;
    name: string;
    description: string;
    image?: string;
    quizzes: IQuiz[];   
}

interface IQuiz{
    id: number;
    name: string;
    description?: string | null;
    image?: string | null;
    categoryId: number;
    questions: IQuestion[];
}

interface IQuestion{
    id: number;
    text: string;
    difficulty?: string | null;
    options: IOption[];
}

interface IOption{
    id: number;
    text: string;
    isCorrect: boolean;
}

export type {
    ICategory,
    IQuiz,
    IQuestion,
    IOption
};


