const fs = require('fs')
const csvSource = 'source.txt'

//Read file
var contents = fs.readFileSync(csvSource,'utf8')

//Format contents to CSV
var i = 0, replacement = ',', len = contents.length

for (i; i < len; i++){
    if(contents[i] == '\r\n' || contents[i] == '\r' || contents[i] == '\n'){
        contents = contents.replace(['\r\n'||'\r'||'\n'], replacement)
    }  
}

var x = 0, data = contents, size = data.length
for (x; x < size; x++){
    if(data[x] == ',' && data[x+1] == ',' ){
        data = data.replace(',,', '\r\n')
    }    
}

//Write file
fs.writeFile('csvExcelReady.txt', data, (err) => {
    if (err) throw err
    console.log('File written!')
})