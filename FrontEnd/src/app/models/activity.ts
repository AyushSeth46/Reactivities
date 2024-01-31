export interface Activity {
    id : string
    title: string
    date: string //we get date as a string from the backend not dateTime so string is used here instead of datetime
    description: string
    category: string
    city: string
    venue: string    
}
//The TypeScript compiler uses interface for type-checking  whether the object has a specific structure or not. 