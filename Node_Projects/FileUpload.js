import http from 'http';
import formidable from 'formidable';
import fs from 'fs';
import path from 'path';

const __dirname = path.dirname(new URL(import.meta.url).pathname);

const server = http.createServer(function (req, res) {
  if (req.url == '/fileupload' && req.method.toLowerCase() === 'post') {
    const form = new formidable.IncomingForm();

    // Specify the directory where uploaded files will be saved
    const uploadDir = path.join(__dirname, 'uploads');
    form.uploadDir = uploadDir;

    form.parse(req, function (err, fields, files) {
      if (err) {
        console.error(err);
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
        return;
      }

      const oldpath = files.filetoupload.path;
      const newpath = path.join(uploadDir, files.filetoupload.name);

      fs.rename(oldpath, newpath, function (err) {
        if (err) {
          console.error(err);
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('File upload failed');
        } else {
          res.writeHead(200, { 'Content-Type': 'text/plain' });
          res.end('File uploaded and moved!');
        }
      });
    });
  } else {
    // Serve the file upload form
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<form action="/fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit" value="Upload File">');
    res.write('</form>');
    return res.end();
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
