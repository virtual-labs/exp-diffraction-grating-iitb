let verify_count: number = 0;

let res_1: number;
let res_2: number;

function activity4() {
	pp.clearleftpannel();
	pp.clearrightpannel();

	pp.addoffcanvas(3);

	pp.showtitle('<p id="exp-title">Calculation</p>', 3);
	pp.showdescription('<div style="background-color: #f4ccccff; border-radius: 10px; border: black; padding: 5%; font-weight: 500; font-size: calc(1vw + 12px);">Calculate and Verify the required values</div>', 3);

	// calculate_data();

	let table_heading = [
		'nth order',
		'&lambda;(nm)',
		`Adj`,
		`Opp`,
		`Opp/Adj`,
		`Degree to Radian`,
		`Sin(&theta;)`,
		`Calculated &lambda; (nm) = sin(&theta;) * d / n `
	];


	let verify_row = [];

	for(let i=0; i<selected_n; i++) {
		verify_row.push(
			[
				`${i+1}`,
				selected_lambda.toFixed(1),
				selected_adj.toString(),
				opp.toFixed(1),
				`<input type='data' id='adj-opp-${i+1}' class='form-control' />`,
				`<input type='data' id='d-r-${i+1}' class='form-control' />`,
				`<input type='data' id='sin-${i+1}' class='form-control' />`,
				`<input type='data' id='lambda-inp-${i+1}' class='form-control' />`,
			],
		);
	}


	let table = new Table(table_heading, verify_row);

	pp.addtoleftpannel(table.template);

	table.draw();

	calculate_table(selected_n);

	pp.addtoleftpannel(`<input type='btn' class='btn btn-primary' style='width: 25vw;' value='Verify' onclick='verify_table();' />`);
}

function verify_table() {
	verify_count++;
	let val1: HTMLInputElement = <HTMLInputElement>(
		document.getElementById(`adj-opp-1`)
	);
	let val2: HTMLInputElement = <HTMLInputElement>(
		document.getElementById(`d-r-1`)
	);
	let val3: HTMLInputElement = <HTMLInputElement>(
		document.getElementById(`sin-1`)
	);
	let val4: HTMLInputElement = <HTMLInputElement>(
		document.getElementById(`lambda-inp-1`)
	);


	let val11: HTMLInputElement = <HTMLInputElement>(
		document.getElementById(`adj-opp-2`)
	);
	let val21: HTMLInputElement = <HTMLInputElement>(
		document.getElementById(`d-r-2`)
	);
	let val31: HTMLInputElement = <HTMLInputElement>(
		document.getElementById(`sin-2`)
	);
	let val41: HTMLInputElement = <HTMLInputElement>(
		document.getElementById(`lambda-inp-2`)
	);



	let val12: HTMLInputElement = <HTMLInputElement>(
		document.getElementById(`adj-opp-3`)
	);
	let val22: HTMLInputElement = <HTMLInputElement>(
		document.getElementById(`d-r-3`)
	);
	let val32: HTMLInputElement = <HTMLInputElement>(
		document.getElementById(`sin-3`)
	);
	let val42: HTMLInputElement = <HTMLInputElement>(
		document.getElementById(`lambda-inp-3`)
	);



	let res1 = opp_order1 / selected_adj;
	let res2 = (res1 * Math.PI) / 180;
	let res3 = Math.sin(res2);
	let res4 = res3 / selected_N;

	console.log(res1, res2, res3, res4*(10**8));

	if (verify_count <= 4) {
		if (!verify_values(parseFloat(val1.value), res1)) {
			alert(`please check adj/opp value`);
			return;
		}

		if (!verify_values(parseFloat(val2.value), res2)) {
			alert(`please check degree to radian value`);
			return;
		}

		if (!verify_values(parseFloat(val3.value), res3)) {
			alert(`please check sin(theta) value`);
			return;
		}

		if (!verify_values(parseFloat(val4.value)* (10**(-8)), res4)) {
			alert(`please check Lambda value`);
			return;
		}

		alert('All Entered Values are correct!!');
	}

	if(selected_n > 1) {

		let res1 = opp_order2 / selected_adj;
		let res2 = (res1 * Math.PI) / 180;
		let res3 = Math.sin(res2);
		let res4 = res3 / selected_N / 2;

		console.log(res1, res2, res3, res4*(10**8));

		if (verify_count <= 4) {
			if (!verify_values(parseFloat(val11.value), res1)) {
				alert(`please check adj/opp value`);
				return;
			}

			if (!verify_values(parseFloat(val21.value), res2)) {
				alert(`please check degree to radian value`);
				return;
			}

			if (!verify_values(parseFloat(val31.value), res3)) {
				alert(`please check sin(theta) value`);
				return;
			}

			if (!verify_values(parseFloat(val41.value)* (10**(-8)), res4)) {
				alert(`please check Lambda value`);
				return;
			}

			alert('All Entered Values are correct!!');
		}
	}

	if(selected_n > 2) {

		let res1 = opp_order3 / selected_adj;
		let res2 = (res1 * Math.PI) / 180;
		let res3 = Math.sin(res2);
		let res4 = res3 / selected_N / 3;

		console.log(res1, res2, res3, res4*(10**8));

		if (verify_count <= 4) {
			if (!verify_values(parseFloat(val12.value), res1)) {
				alert(`please check adj/opp value`);
				return;
			}

			if (!verify_values(parseFloat(val22.value), res2)) {
				alert(`please check degree to radian value`);
				return;
			}

			if (!verify_values(parseFloat(val32.value), res3)) {
				alert(`please check sin(theta) value`);
				return;
			}

			if (!verify_values(parseFloat(val42.value)* (10**(-8)), res4)) {
				alert(`please check Lambda value`);
				return;
			}

			alert('All Entered Values are correct!!');
		}
	}

	
	else {
		alert(
			'You have failed multiple times, to enter the correct values. The correct values are:'
		);
	}

	res_2 = parseFloat(val4.value);

	let table_string_data = [];

	for (let i = 0; i < data.length; i++) {
		table_string_data[i] = [];
		table_string_data[i][0] = i + 1;
		table_string_data[i][2] = (data[i][1] / 10 ** -8).toFixed(0);
		table_string_data[i][1] = data[i][6];
		table_string_data[i][3] = data[i][7].toFixed(1);
		table_string_data[i][4] = data[i][8];
		table_string_data[i][5] = data[i][9];
		table_string_data[i][6] = data[i][10];
		table_string_data[i][7] = (data[i][1] * 10 ** 8).toFixed(2);
	}

	let table_heading = [
		`Sr No.`,
		`&lambda;(nm)`,
		`Adj`,
		`Opp`,
		`Opp/Adj`,
		`Degree to Radian`,
		`Sin(&theta;)`,
		`Calculated &lambda;(nm) = sin(&theta;) * d / n`,
	];

	pp.clearleftpannel();

	let text = `
		<div>
			<h3 style='text-align: center; font-size: 2.5vw;'>Calculate the error</h3>
			<ul>
				<li style='font-size: 1.5vw;'>The Originally Selected Wavelength: ${selected_lambda}</li>
				<li style='font-size: 1.5vw;'>The calculated Wavelength: ${res_2}</li>
			</ul>

			<div>
				<label for='error-dd' style='text-align: center; font-size: 2vw;'>Select the error in calculation</label>
				<select class='form-select' id='error-dd' style='text-align: center; font-size: 2vw;'>
					<option value='0' >Select Error</option>
					<option value='1'>Less than 1%</option>
					<option value='5'>Less than 5%</option>
					<option value='10'>Less than 10%</option>
					<option value='100'>Greater than 10%</option>
				</select>

				<button class='btn btn-primary' onclick='verify_error();' style='font-size: 2vw;'>Verify</button>
			</div>
			
		</div>
	`;

	pp.showtitle('<p id="exp-title">Result</p>', 3);
	pp.showdescription('<div style="background-color: #f4ccccff; border-radius: 10px; border: black; padding: 5%; font-weight: 500; font-size: calc(1vw + 12px);">Calculate the error</div>', 3);

	// let table = new Table(table_heading, table_string_data);

	pp.addtoleftpannel(text);

	// table.draw();
}






function verify_error() {
	let dd = <HTMLSelectElement> document.getElementById('error-dd');

	if(dd.value == '0') {
		return;
	}

	if(dd.value == '1') {
		cal_less_than_error(1, selected_lambda, res_2);
		return;
	}
	
	if(dd.value == '5') {
		cal_less_than_error(5, selected_lambda, res_2);
		return;
	}

	if(dd.value == '10') {
		cal_less_than_error(10, selected_lambda, res_2);
		return;
	}

	if(dd.value == '100') {
		cal_less_than_error(100, selected_lambda, res_2);
		return;
	}

	let text = `
	<div>
		<p style='text-align: center; font-size: 2vw;'>Experiment Finished</p>
	</div>
	`;

	pp.addtoleftpannel(text);
}

function cal_less_than_error(num, val1, val2):boolean {
	if((Math.abs(val1-val2) / val1)*100 < num) {
		pp.clearleftpannel();
		pp.showdescription('You are Right!!, Would you like to perform experiment again to minimize the error', 3);
		pp.addButtonToRightPanel('Yes', start_again, 3);
		var bsOffcanvas = new bootstrap.Offcanvas(
			document.getElementById('offcanvasRight3')
		);
		bsOffcanvas.show();
		return true;
	} else {
		return false;
	}
}

function start_again() {
	window.location.reload();
}

//activity4();



