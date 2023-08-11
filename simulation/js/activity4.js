function activity4() {
    pp.clearleftpannel();
    pp.clearrightpannel();
    pp.addoffcanvas(3);
    // calculate_data();
    let table_heading = [`Adj`, '&lambda;', `Opp`, `Opp/Adj`, `Degree to Radian`, `Sin(&theta;)`, `Calculated &lambda; = sin(&theta;) * d / n`, `Check`];
    let verify_row = [[selected_adj.toString(), selected_lambda.toFixed(1), opp.toFixed(1), `<input type='data' id='adj-opp' class='form-control' />`, `<input type='data' id='d-r' class='form-control' />`, `<input type='data' id='sin' class='form-control' />`, `<input type='data' id='lambda-inp' class='form-control' />`, `<input type='btn' class='btn btn-primary' value='Verify' onclick='verify_table();' />`]];
    let table = new Table(table_heading, verify_row);
    pp.addtoleftpannel(table.template);
    table.draw();
    calculate_table(selected_n);
}
function verify_table() {
    let val1 = document.getElementById(`adj-opp`);
    let val2 = document.getElementById(`d-r`);
    let val3 = document.getElementById(`sin`);
    let val4 = document.getElementById(`lambda-inp`);
    let res1 = opp / selected_adj;
    let res2 = res1 * Math.PI / 180;
    let res3 = Math.sin(res2);
    let res4 = (res3 / selected_N) / selected_n;
    console.log(res1, res2, res3, res4);
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
    if (!verify_values(parseFloat(val4.value), res4)) {
        alert(`please check Lambda value`);
        return;
    }
    alert('All Entered Values are correct!!');
    let table_string_data = [];
    for (let i = 0; i < data.length; i++) {
        table_string_data[i] = [];
        table_string_data[i][0] = i + 1;
        table_string_data[i][1] = data[i][6];
        table_string_data[i][2] = (data[i][1] / Math.pow(10, (-8))).toFixed(0);
        table_string_data[i][3] = data[i][7].toFixed(1);
        table_string_data[i][4] = data[i][8];
        table_string_data[i][5] = data[i][9];
        table_string_data[i][6] = data[i][10];
        table_string_data[i][7] = (data[i][1] * Math.pow(10, (8))).toFixed(2);
    }
    let table_heading = [`Sr No.`, `Adj`, `&lambda;`, `Opp`, `Opp/Adj`, `Degree to Radian`, `Sin(&theta;)`, `Calculated &lambda; = sin(&theta;) * d / n`];
    pp.clearleftpannel();
    let table = new Table(table_heading, table_string_data);
    pp.addtoleftpannel(table.template);
    table.draw();
}
//# sourceMappingURL=activity4.js.map