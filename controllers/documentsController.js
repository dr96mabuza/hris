const connection = require("../database");
const fs = require('fs').promises;

async function readFileToBuffer(filePath) {
  try {
    const bufferData = await fs.readFile(filePath);
    return bufferData;
  } catch (err) {
    return err;
  }
}

exports.getDocuments = (req, res) => {
    connection.query("select * from documents", (error, rows, fields) => {
        if (error) {
            res.send(error);
        };
        return res.json({status: "ok", result: rows});
    });
};

const fetchFileAndCreateBlob = async (pdfUrl) => {
    try {
      const response = await fetch(pdfUrl);
      if (!response.ok) {
        return new Error(`Failed to fetch PDF: ${response.status} ${response.statusText}`);
      }
  
      const blob = await response.blob();
      console.log(blob)
      return blob;

    } catch (error) {
      return error
    }
  }
  
  const fileFromBlob = (blob, name) => {
    const file = new File([blob], name, { type: blob.type });
    return file;
  }
  

exports.createDocument = async (req, res, next) => {
    const getDocumentName = req.body.document.split("\\").pop();
    const converted = new Uint8Array(req.body.document)
    const query = "insert into documents " +
        "(documentName, document, employeeId, type) " +
        `values( '${getDocumentName}', ${converted},  ${req.body.employeeId}, '${req.body.documentName}')`;
    connection.query(query, (error, results) => {
        if (error) return res.json({status: "error", result: error});
        return res.json({status: "ok", result: results});
    });
};

exports.getDocument = (req, res, next) => {
    connection.query(`select * from documents where id = ${req.params.id}`, (error, results) => {
        if (error) return res.json({status: "error", result: error});
        if (results.length > 0) {
            for (key in results[0]) {
                if (key === "document") {(results[0])[key] = new Uint8Array(new ArrayBuffer(results[0][key].length))}
            }
        }
        return res.json({status: "ok", result: results});
    });
};

exports.updateDocument = async (req, res, next) => {
    const blob = await fetchFileAndCreateBlob(req.body.document);
    const queryString = "update documents " +
        `set documentName='${req.body.documentName}', ` + 
        `document=${blob}, ` + 
        `where id = ${req.params.id}`;
    
    connection.query(queryString, (error, results) => {
        if (error) return res.json({status: "error", result: error});
        return res.json({status: "ok", result: results});
    });
};

exports.deleteDocument = (req, res, next) => {
    connection.query(`delete from documents where id = ${req.params.id}`, (error, results) => {
        if (error) return res.json({status: "error", result: error});
        return res.json({status: "ok", result: results});
    });
}