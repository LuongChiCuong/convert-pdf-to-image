# convert-pdf-to-image
Using this tool to convert cover page PDF to PNG image.

Base on **pdf-image** <https://www.npmjs.com/package/pdf-image>.

## guide:

Store your pdf in **public/file**.
Open terminal then turn on the server.
```javascript
node app
```
Using curl or PostMan to convert your PDF file.
```
http://localhost:9090/pdf/{{your_file_name}}.pdf/{{page_number}}.png
http://localhost:9090/pdf/mobile-first.pdf/0.png
```
