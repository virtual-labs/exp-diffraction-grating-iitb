var selected_N = 2500;
var selected_n = 1;
var selected_lambda = 380;
var selected_adj = 5;
var opp;
var N_values = [2500, 5929, 10000, 15000];
var n_values = [1, 2, 3];
// table for data from col f to j
//lambda value, sin(q), q, tan(q), radian to degree  
var data = [];
function calculate_opp(selected_index) {
    // data[0] = i-379;
    // data[1] = (i * 10**(-8));
    // data[2] = selected_n * data[1] * selected_N;
    // data[3] = Math.asin(data[2]);
    // data[4] = Math.tan(Math.asin(data[2]));
    // data[5] = data[i-380][3] * (180/Math.PI);
    let lamda_converted = selected_lambda * 1e-8;
    let sin_theta = selected_n * lamda_converted * selected_N;
    let theta = Math.asin(sin_theta);
    let tan_theta = Math.tan(theta);
    let degree_theta = tan_theta * 180 / Math.PI;
    // opp = selected_adj * degree_theta;
    console.log(selected_index);
    opp = data[selected_index][7];
}
function calculate_table() {
    for (let i = 0, lamda = 380; i <= (750 - 380) / 10; i++, lamda += 10) {
        data[i] = [];
        data[i][0] = i + 1;
        data[i][1] = (lamda * Math.pow(10, (-8)));
        data[i][2] = selected_n * data[i][1] * selected_N;
        data[i][3] = Math.asin(data[i][2]);
        data[i][4] = Math.tan(Math.asin(data[i][2]));
        data[i][5] = data[i][3] * (180 / Math.PI);
        // calculation for nth order
        data[i][6] = selected_adj;
        data[i][7] = data[i][6] * data[i][5] + (Math.round(Math.floor(Math.random() * 11) * 0.2 - 1) / 10);
        data[i][8] = data[i][7] / data[i][6];
        data[i][9] = data[i][8] * Math.PI / 180;
        data[i][10] = Math.sin(data[i][9]);
        data[i][11] = (data[i][10] / selected_N) / selected_n;
    }
    console.log(data);
}
// function add_opp_variation() {
//    for(let i=0; i<data.length; i++) {
//       data[i][7] +=  (Math.random() * 0.2) - 0.1;
//    }
// }
calculate_table();
calculate_opp(0);
//# sourceMappingURL=data.js.map