const express = require('express');
const app = express();
const dotenv = require('dotenv');
const path = require('path');
const fs = require('fs');
dotenv.config();

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get('/test', (req, res) => {
    res.status(200).send("success");
});

app.post('/submit', (req, res) => {
    try {
        const datas = req.body;
        console.log("Received datas:", datas);

        const folderpath = './datas';
        const fileName = 'datas.json';
        const filepath = path.join(folderpath, fileName);

        console.log("Filepath:", filepath);

        if (!fs.existsSync(folderpath)) {
            console.log("Creating directory:", folderpath);
            fs.mkdirSync(folderpath, { recursive: true });
        }

        let existingDatas = [];

        if (fs.existsSync(filepath)) {
            const fileContent = fs.readFileSync(filepath, 'utf-8');
            try {
                existingDatas = JSON.parse(fileContent);
            } catch (error) {
                console.error("Error parsing existing data:", error);
            }
        }

        if (!Array.isArray(existingDatas)) {
            existingDatas = [];
        }

        existingDatas.push(datas);

        fs.writeFileSync(filepath, JSON.stringify(existingDatas, null, 2));
        console.log("File written successfully!");

        res.status(200).send("success");
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send("Internal Server Error");
    }
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});



