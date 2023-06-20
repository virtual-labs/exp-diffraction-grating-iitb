// let mean_d = 0;
// let velocity;
// function activity4() {
//     pp.clearleftpannel();
//     pp.clearrightpannel();
//     pp.addoffcanvas(3);
//     pp.showtitle('Determination of ultrasonic waves velocity in liquid media', 3);
//     let table1_col_headings = ['Sr No.', 'Main Scale', 'Vernier Scale', 'Actual MSR (no of lines * value of one line)', 'Total reading MSR + (VSR*LC)', "Differnce between Consecutive maxima 'd (cm)'", "Check"];
//     let act4_verify_row = [['1', `${table1[0][0]}`, `${table1[0][1]}`, `<input type='text' id='inp1' class='form-control'/>`, `<input type='text' id='inp2' class='form-control'/>`, `<input type='text' id='inp3' class='form-control'/>`, `<input type='button' value='verify' class='btn btn-primary' onclick='verify_act4();' />`]];
//     let table_element = new Table(table1_col_headings, act4_verify_row);
//     pp.addtoleftpannel(table_element.template);
//     table_element.draw();
//     calculate_mean();
//     let right_panel_text = `
//     <div>
//     <p>Value of one line => <span style='font-weight: bold; color: blue;'>${val_1_line}</span></p>
//     <br>
//     <p>Least Count => <span style='font-weight: bold; color: blue;'>${least_count}</span></p>
//     </div>
//     `;
//     pp.showdescription(right_panel_text, 3);
//     var bsOffcanvas = new bootstrap.Offcanvas(document.getElementById("offcanvasRight3"));
//     bsOffcanvas.show();
// }
// function calculate_mean() {
//     mean_d = 0;
//     for(let i=0; i<19; i++) {
//         mean_d += table1[i][4];
//         // console.log(table1[][i]);
//     }
//     mean_d = mean_d / 19;
//     velocity = 2 * mean_d * selected_frequency * 10000;
// }
// function verify_act4() {
//     let val1: HTMLInputElement = <HTMLInputElement> document.getElementById(`inp1`);
//     let val2: HTMLInputElement = <HTMLInputElement> document.getElementById(`inp2`);
//     let val3: HTMLInputElement = <HTMLInputElement> document.getElementById(`inp3`);
//     if(!verify_values(parseFloat(val1.value), table1[0][2])) {
//         alert(`please check actual MSR value`);
//         return;
//     }
//     if(!verify_values(parseFloat(val2.value), table1[0][3])) {
//         alert(`please check Total reading MSR + (VSR*LC) value`);
//         return;
//     }
//     if(!verify_values(parseFloat(val3.value), table1[0][4])) {
//         alert(`please check Differnce between Consecutive maxima 'd' value`);
//         return;
//     }
//     alert('All Entered Values are correct!!');
//     let right_panel_text = `
//         <h4>Calculate and Verify the below values</h4>
//         <br>
//         <p>Mean d</p>
//         <input type="text" id="mean-d">
//         <br><br>
//         <p>Velocity of Ultrasonic Waves, V = &lambda; * F</p>
//         <input type="text" id='velocity-inp'>
//         <br><br>
//         <button id='act4_last_btn' class='btn btn-primary' onclick='act4_verify2();'>Verify</button>
//     `
//     pp.showdescription(right_panel_text, 3);
//     var bsOffcanvas = new bootstrap.Offcanvas(document.getElementById("offcanvasRight3"));
//     bsOffcanvas.show();
// }
// function act4_verify2() {
//     let val1: HTMLInputElement = <HTMLInputElement> document.getElementById(`mean-d`);
//     let val2: HTMLInputElement = <HTMLInputElement> document.getElementById(`velocity-inp`);
//     if(!verify_values(parseFloat(val1.value), mean_d)) {
//         alert(`please check actual MSR value`);
//         return;
//     }
//     if(!verify_values(parseFloat(val2.value), velocity)) {
//         alert(`please check Total reading MSR + (VSR*LC) value`);
//         return;
//     }
//     alert('Successfully Verified!!');
//     pp.clearleftpannel();
//     val1.value = mean_d.toFixed(4);
//     val1.disabled = true;
//     val2.value = velocity.toFixed(2);
//     val2.disabled = true;
//     document.getElementById('act4_last_btn').remove();
// }
function activity4() {
    pp.clearleftpannel();
    pp.clearrightpannel();
    pp.addoffcanvas(3);
    // calculate_data();
    let table_heading = [`Adj`, '&lambda;', `Opp`, `Opp/Adj`, `Degree to Radian`, `Sin(&theta;)`, `Calculated &lambda; = sin(&theta;) * d / n`, `Check`];
    let verify_row = [[selected_adj.toString(), selected_lambda.toFixed(1), opp.toString(), `<input type='data' id='adj-opp' class='form-control' />`, `<input type='data' id='d-r' class='form-control' />`, `<input type='data' id='sin' class='form-control' />`, `<input type='data' id='lambda-inp' class='form-control' />`, `<input type='btn' class='btn btn-primary' value='Verify' onclick='verify_table();' />`]];
    let table = new Table(table_heading, verify_row);
    pp.addtoleftpannel(table.template);
    table.draw();
    calculate_table();
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