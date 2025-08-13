import dotenv from "dotenv"
import { runner } from "./config.js";
import {Triage_Agent} from "./customAgents.js"
dotenv.config()

async function main() {
   const prompt = "I am Abdullah, want to send email to my friend Khalid at: khalid@gmail.com , Telling him about my new AI Agent that can write email according to instructions and send it to respective email that mentioned in instructions, telling benefits and uses of this AI agent , Asking him to share ideas to create more creative AI agents and use them more productive"
   const result = await runner.run(Triage_Agent,  prompt);
   console.log(result.finalOutput)
}
main()