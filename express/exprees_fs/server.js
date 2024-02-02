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

// ... (existing code)

app.get('/getData', (req, res) => {
    try {
        const folderpath = './datas';
        const fileName = 'datas.json';
        const filepath = path.join(folderpath, fileName);

        if (fs.existsSync(filepath)) {
            const fileContent = fs.readFileSync(filepath, 'utf-8');
            const existingDatas = JSON.parse(fileContent);
            res.status(200).json(existingDatas);
        } else {
            res.status(404).send("No data found");
        }
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send("Internal Server Error");
    }
});

app.put('/update/:id', (req, res) => {
    try {
        const folderpath = './datas';
        const fileName = 'datas.json';
        const filepath = path.join(folderpath, fileName);

        const idToUpdate = req.params.id;
        const newData = req.body;

        if (!idToUpdate || !newData) {
            res.status(400).send("Bad Request");
            return;
        }

        if (fs.existsSync(filepath)) {
            const fileContent = fs.readFileSync(filepath, 'utf-8');
            let existingDatas = JSON.parse(fileContent);

            const indexToUpdate = existingDatas.findIndex(data => data.id === idToUpdate);

            if (indexToUpdate !== -1) {
                existingDatas[indexToUpdate] = { id: idToUpdate, ...newData };

                fs.writeFileSync(filepath, JSON.stringify(existingDatas, null, 2));
                res.status(200).send("Update successful");
            } else {
                res.status(404).send("Data not found");
            }
        } else {
            res.status(404).send("No data found");
        }
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send("Internal Server Error");
    }
});

app.delete('/delete/:id', (req, res) => {
    try {
        const folderpath = './datas';
        const fileName = 'datas.json';
        const filepath = path.join(folderpath, fileName);

        const idToDelete = req.params.id;

        if (!idToDelete) {
            res.status(400).send("Bad Request");
            return;
        }

        if (fs.existsSync(filepath)) {
            const fileContent = fs.readFileSync(filepath, 'utf-8');
            let existingDatas = JSON.parse(fileContent);

            const updatedDatas = existingDatas.filter(data => data.id !== idToDelete);

            if (existingDatas.length !== updatedDatas.length) {
                fs.writeFileSync(filepath, JSON.stringify(updatedDatas, null, 2));
                res.status(200).send("Delete successful");
            } else {
                res.status(404).send("Data not found");
            }
        } else {
            res.status(404).send("No data found");
        }
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send("Internal Server Error");
    }
});

// ... (existing code)


app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});



