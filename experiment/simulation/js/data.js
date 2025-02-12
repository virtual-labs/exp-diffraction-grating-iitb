var selected_N = 2500;
var selected_n = 3;
var selected_lambda = 380;
var selected_adj = 5;
var opp;
var opp_order1;
var opp_order2;
var opp_order3;
var N_values = [2500, 5929, 10000, 15000];
var n_values = [1, 2, 3];
// table for data from col f to j
//lambda value, sin(q), q, tan(q), radian to degree
var data = [];
var data_order2 = [];
var data_order1 = [];
var data_order3 = [];
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
    let degree_theta = (tan_theta * 180) / Math.PI;
    // opp = selected_adj * degree_theta;
    console.log(selected_index);
    opp = data[selected_index][7];
    opp_order1 = data_order1[selected_index][7];
    if (selected_n > 1) {
        opp_order2 = data_order2[selected_index][7];
    }
    if (selected_n > 2) {
        opp_order3 = data_order3[selected_index][7];
    }
}
function calculate_table(order) {
    data = [];
    //for max selected order
    for (let i = 0, lamda = 380; i <= (750 - 380) / 10; i++, lamda += 10) {
        data[i] = [];
        data[i][0] = i + 1;
        data[i][1] = lamda * Math.pow(10, -8);
        data[i][2] = order * data[i][1] * selected_N;
        data[i][3] = Math.asin(data[i][2]);
        data[i][4] = Math.tan(Math.asin(data[i][2]));
        data[i][5] = data[i][3] * (180 / Math.PI);
        // calculation for nth order
        data[i][6] = selected_adj;
        data[i][7] =
            data[i][6] * data[i][5] +
                Math.round(Math.floor(Math.random() * 11) * 0.2 - 1) / 10;
        data[i][8] = data[i][7] / data[i][6];
        data[i][9] = (data[i][8] * Math.PI) / 180;
        data[i][10] = Math.sin(data[i][9]);
        data[i][11] = data[i][10] / selected_N / selected_n;
    }
    //for order 1
    for (let i = 0, lamda = 380; i <= (750 - 380) / 10; i++, lamda += 10) {
        data_order1[i] = [];
        data_order1[i][0] = i + 1;
        data_order1[i][1] = lamda * Math.pow(10, -8);
        data_order1[i][2] = 1 * data_order1[i][1] * selected_N;
        data_order1[i][3] = Math.asin(data_order1[i][2]);
        data_order1[i][4] = Math.tan(Math.asin(data_order1[i][2]));
        data_order1[i][5] = data_order1[i][3] * (180 / Math.PI);
        // calculation for nth order
        data_order1[i][6] = selected_adj;
        data_order1[i][7] =
            data_order1[i][6] * data_order1[i][5] +
                Math.round(Math.floor(Math.random() * 11) * 0.2 - 1) / 10;
        data_order1[i][8] = data_order1[i][7] / data_order1[i][6];
        data_order1[i][9] = (data_order1[i][8] * Math.PI) / 180;
        data_order1[i][10] = Math.sin(data_order1[i][9]);
        data_order1[i][11] = data_order1[i][10] / selected_N;
    }
    //for order 2
    for (let i = 0, lamda = 380; i <= (750 - 380) / 10; i++, lamda += 10) {
        data_order2[i] = [];
        data_order2[i][0] = i + 1;
        data_order2[i][1] = lamda * Math.pow(10, -8);
        data_order2[i][2] = 2 * data_order2[i][1] * selected_N;
        data_order2[i][3] = Math.asin(data_order2[i][2]);
        data_order2[i][4] = Math.tan(Math.asin(data_order2[i][2]));
        data_order2[i][5] = data_order2[i][3] * (180 / Math.PI);
        // calculation for nth order
        data_order2[i][6] = selected_adj;
        data_order2[i][7] =
            data_order2[i][6] * data_order2[i][5] +
                Math.round(Math.floor(Math.random() * 11) * 0.2 - 1) / 10;
        data_order2[i][8] = data_order2[i][7] / data_order2[i][6];
        data_order2[i][9] = (data_order2[i][8] * Math.PI) / 180;
        data_order2[i][10] = Math.sin(data_order2[i][9]);
        data_order2[i][11] = data_order2[i][10] / selected_N / 2;
    }
    //for order 3
    for (let i = 0, lamda = 380; i <= (750 - 380) / 10; i++, lamda += 10) {
        data_order3[i] = [];
        data_order3[i][0] = i + 1;
        data_order3[i][1] = lamda * Math.pow(10, -8);
        data_order3[i][2] = 3 * data_order3[i][1] * selected_N;
        data_order3[i][3] = Math.asin(data_order3[i][2]);
        data_order3[i][4] = Math.tan(Math.asin(data_order3[i][2]));
        data_order3[i][5] = data_order3[i][3] * (180 / Math.PI);
        // calculation for nth order
        data_order3[i][6] = selected_adj;
        data_order3[i][7] =
            data_order3[i][6] * data_order3[i][5] +
                Math.round(Math.floor(Math.random() * 11) * 0.2 - 1) / 10;
        data_order3[i][8] = data_order3[i][7] / data_order3[i][6];
        data_order3[i][9] = (data_order3[i][8] * Math.PI) / 180;
        data_order3[i][10] = Math.sin(data_order3[i][9]);
        data_order3[i][11] = data_order3[i][10] / selected_N / 3;
    }
}
// function add_opp_variation() {
//    for(let i=0; i<data.length; i++) {
//       data[i][7] +=  (Math.random() * 0.2) - 0.1;
//    }
// }
calculate_table(selected_n);
calculate_opp(0);
function point_distance(selected_adj) {
    let point_data = [];
    let data1 = [];
    let data2 = [];
    let data3 = [];
    calculate_table(1);
    data1 = data;
    calculate_table(2);
    data2 = data;
    calculate_table(3);
    data3 = data;
    calculate_table(selected_n);
    point_data = [data1, data2, data3];
    return point_data;
}
//# sourceMappingURL=data.js.map