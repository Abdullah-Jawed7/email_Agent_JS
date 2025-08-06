import { Agent } from "@openai/agents";
import { emailSenderTool } from "./customTools.js";
import { CUSTOM_MODEL_PROVIDER } from "./config.js";

const Email_Writer = new Agent({
     name:'Email Writer Assistant',
    instructions: "Write a professional Email writer, ready-to-send compose email  based on the user's intent, Provide finalize email that can directly be sended without changing or adding single word , complete your content by only content provided by user, Instruction: Only provide content of email not other extra details such as subject etc.",
    model: await  CUSTOM_MODEL_PROVIDER.getModel()
})

const Email_Writer_and_sender = new Agent({
     name:'Email Writer and Sender',
    instructions:"First, invoke the Email_Writer to compose an email based on the users context. Then invoke the EmailSenderTool with parameters receiver_email , subject and content. Finally, respond with either “Your email has been successfully sent to receiver_email.” or “Failed to send email: error_message.”",
    tools:[Email_Writer.asTool({
        toolName:'Email_Writer_Assistant',
        toolDescription: "Write a professional Email writer, ready-to-send compose email  based on the user's intent, Provide finalize email that can directly be sended without changing or adding single word , complete your content by only content provided by user, Instruction: Only provide content of email not other extra details such as subject etc."

    }) , emailSenderTool]
})

export const Triage_Agent = new Agent({
    name:'Triage Assistant',
    instructions:'You are helpful assistant that navigates between Email_Writer_and_sender agents to provide the best response based on the query.',
    handoffs:[Email_Writer_and_sender],

})