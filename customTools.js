import { tool } from "@openai/agents";
import { sendEmail } from "./utils/mailer.js"
import { z } from 'zod';

export const emailSenderTool = tool({
  name: 'Email_Sender',
  description: 'Mail the provided content on provided email address and validating is the content is fully ready to send directly to User without changing or adding a single word  ',
  parameters: z.object({
    email: z.string(),
    subject:z.string(),
    email_content:z.string()
  }),
  execute: async ({ email ,subject , email_content }) => {
      sendEmail(email ,subject ,email_content)
    return true
  },
})