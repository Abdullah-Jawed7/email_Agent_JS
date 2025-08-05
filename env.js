import dotenv from "dotenv"
dotenv.config()
const BASE_URL = process.env.BASE_URL
const API_KEY = process.env.API_KEY
const MODEL_NAME = process.env.MODEL_NAME
const nodemailer_mail = process.env.NODEMAILER_MAIL
const nodemailer_pass = process.env.NODEMAILER_PASS
export {
    BASE_URL,
    API_KEY,
    MODEL_NAME,
    nodemailer_mail,
    nodemailer_pass,
}