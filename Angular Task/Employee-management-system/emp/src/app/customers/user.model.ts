export class userClass { 
    constructor(
        public id?: number,
        public name?: string,
        public gender?: string,
        public dob?: string,
        public salary?:number) {}
    
} 
export class Pagination{
    public pageSize!:number;
    public pageNumber!:number;
}