export type Difficulty='Easy'|'Medium'|'Hard';
export type AttemptStatus='draft'|'submitted'|'evaluated'|'failed';
export type Submission={requirements:string;classes:string;relationships:string;behaviour:string;tradeoffs:string;code:string};
export type FeedbackItem={category:string;severity:'pass'|'warn'|'critical';title:string;detail:string;action:string};
export type Evaluation={score:number;items:FeedbackItem[];summary:string;strengths:string[];nextSteps:string[]};
export type Problem={id:string;title:string;difficulty:Difficulty;time:number;tags:string[];prompt:string;requirements:string[];hints:string[];rubric:string[];reference:string};
export type Attempt={id:string;problemId:string;createdAt:string;updatedAt:string;status:AttemptStatus;submission:Submission;evaluation?:Evaluation};
