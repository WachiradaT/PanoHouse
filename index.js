var mysql = require('mysql');
var fs = require("fs");

async function gogogo() {
	var con = await mysql.createConnection({
		host: "localhost",
		user: "root",
		password: "1234",
		database: 'new_schema',
		debug: false,
	});

	await con.connect(function (err) {
		if (err) throw err;
		console.log("Connected!");
	});

	var array = ["C:\\Users\\HP\\Pictures\\New folder (3)\\work1.jpg",
		"C:\\Users\\HP\\Pictures\\New folder (3)\\work2.jpg",
		"C:\\Users\\HP\\Pictures\\New folder (3)\\work3.jpg",
		"C:\\Users\\HP\\Pictures\\New folder (3)\\work4.jpg",
		"C:\\Users\\HP\\Pictures\\New folder (3)\\work5.jpg",
		"C:\\Users\\HP\\Pictures\\New folder (3)\\work6.jpg",
		"C:\\Users\\HP\\Pictures\\New folder (3)\\work7.jpg",
		"C:\\Users\\HP\\Pictures\\New folder (3)\\work8.jpg",
		"C:\\Users\\HP\\Pictures\\New folder (3)\\work9.jpg",
		"C:\\Users\\HP\\Pictures\\New folder (3)\\work10.jpg"]

	var array2 = ["work1", "work2", "work3", "work4", "work5", "work6", "work7", "work8", "work9", "work10",]

	for (let i = 0; i < 10; i++) {
		var work1 = {
			img: await fs.readFileSync(array[i]),
			file_name: array2[i]
		};
		var query1 = await con.query('INSERT INTO new_image SET ?', work1, function (err,
			result) {
			console.log(result);
		});
	}

	con.end();
}

gogogo();


