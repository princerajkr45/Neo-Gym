import dotenv from "dotenv";
dotenv.config({
    path: "./.env"
})

const congif = {
    PORT: process.env.PORT
}

export default congif