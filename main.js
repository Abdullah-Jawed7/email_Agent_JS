import dotenv from "dotenv"
import { runner } from "./config.js";
import {Triage_Agent} from "./customAgents.js"
dotenv.config()

async function main() {
   const result = await runner.run(Triage_Agent, "I am Abdullah ,want to send email to my friend Mahmood at:mahmoodfazlani@gmail.com , asking him is about hows his preparation are oing for upcoming Saylani Hackathon , and asking him to provide some tips and help me so i can prepare also and asking him is he want to become partner for this hackathon  .");
   console.log(result.finalOutput)
}
main()