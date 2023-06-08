// var first_btn = `<button id="panel1_btn" class="btn btn-primary" onclick="activity4();" style=" position: absolute; bottom: 8vh; width: 85%;">Next</button>`;
// function activity3() {
//     pp.clearleftpannel();
//     pp.clearrightpannel();
//     pp.addoffcanvas(3);
//     pp.showtitle('Determination of ultrasonic waves velocity in liquid media', 3);
//     let left_panel_text = `
//     <div id="act3-left-content">
//     <div>
//         <label for="">Select Fluid</label>
//         <Select onchange='set_fluid();' id='fluid-dd' class="form-select">
//             <option value="">--Select--</option>
//         </Select>
//     </div>
//     <div>
//         <label for="">Select Frequency</label>
//         <Select onchange='set_frequency();' disabled id='frequency-dd' class="form-select">
//             <option value="">--Select--</option>
//         </Select>
//     </div>
//     <div>
//         <label for="">Vernier Calliper</label>
//         <input disabled type="range" min='1' max='20' step='1' value="1" id='range' onchange="set_readings();" oninput="set_readings();">
//         <br>
//         <label for="">Main Scale Reading</label>
//         <input disabled type='text' class='form-control' style="display: inline !important; width: 30%; margin-left: 5%;"  id='ms-reading'>
//         <br> <br>
//         <label for="">Vernier Scale Reading</label>
//         <input disabled type="text" class='form-control'  style="display: inline !important; width: 30%; margin-left: 5%;"  id='vs-reading'>
//         </div>
//         </div>
//     `;
//     pp.addtoleftpannel(left_panel_text);
//     load_fluid();
// }
// function load_fluid() {
//     let fluid_sel: HTMLSelectElement = <HTMLSelectElement> document.getElementById('fluid-dd');
//     fluid_sel.innerHTML = `<option value=''>--Select--</option>`;
//     for(let i=0; i<data.length; i++) {
//         fluid_sel.innerHTML += `<option value='${data[i].fluid}'>${data[i].fluid}</option>`;
//     }
// }
// function set_fluid() {
//     let fluid_sel: HTMLSelectElement = <HTMLSelectElement> document.getElementById('fluid-dd');
//     let freq_sel: HTMLSelectElement = <HTMLSelectElement> document.getElementById('frequency-dd');
//     if(fluid_sel.value) {
//         freq_sel.innerHTML = `<option value=''>--Select--</option>`;
//         selected_fluid = fluid_sel.value;
//         for(let i=1; i<=5; i++) {
//             freq_sel.innerHTML += `<option value='${i}'>${i} MHz</option>`
//         }
//         freq_sel.disabled = false;
//     } else {
//         freq_sel.disabled = true;
//     }
// }
// function set_frequency() {
//     let fluid_sel: HTMLSelectElement = <HTMLSelectElement> document.getElementById('fluid-dd');
//     let freq_sel: HTMLSelectElement = <HTMLSelectElement> document.getElementById('frequency-dd');
//     let slider: HTMLInputElement = <HTMLInputElement> document.getElementById('range');
//     if(freq_sel) {
//         selected_frequency = parseInt(freq_sel.value);
//         slider.disabled = false;
//         set_table1();
//         //add std deviation
//         add_std_deviation();
//         calculate_table1();
//     } else {
//         slider.disabled = true;
//     }
// }
// function add_std_deviation() {
//     for(let i=0; i<table1.length; i++) {
//         table1[i][1] = parseFloat(std_deviation(table1[i][1]).toFixed(1));
//     }
// }
// function set_readings() {
//     let slider: HTMLInputElement = <HTMLInputElement> document.getElementById('range');
//     let label1_val: HTMLInputElement = <HTMLInputElement>  document.getElementById('ms-reading');
//     let label2_val: HTMLInputElement = <HTMLInputElement>  document.getElementById('vs-reading');
//     label1_val.value = table1[parseInt(slider.value)][0];
//     label2_val.value = table1[parseInt(slider.value)][1];
//     pp.showdescription('Click on the Next button', 3);
//     pp.addtorightpannel(first_btn, 3);
// }
// activity3();
let show_opp = false;
function activity3() {
    pp.clearleftpannel();
    pp.clearrightpannel();
    pp.addoffcanvas(3);
    pp.showtitle('Determination of ultrasonic waves velocity in liquid media', 3);
    let left_panel_text = `
    <div id="act3-left-content">

    <div>
        <label for="">Number of Rulings on Grating Surface</label>
        <Select onchange='set_N();' id='N-dd' class="form-select">
            
        </Select>
    </div>

    <div>
        <label for="">Select nth Order</label>
        <Select onchange='set_order();' disabled id='order-dd' class="form-select">
        </Select>
    </div>

    <div>
        <label for="">Move slider to select the adj. distance</label>
        <input disabled onchange='set_adj();' oninput='set_adj();' type="range" min="5" max="10" value="5" id="adj-inp">
        <input disabled type="text" class="form-control" id="show-adj">
    </div>

    <div>
        <label for="">Set Lambda Value</label>
        <input disabled type="range" min='380' max='750' step='10' value="380" id='range' onchange="set_lambda();" oninput="set_lambda();">


        <br>

        <label for="">&lambda; Value</label>
        <input disabled type='text' class='form-control' style="display: inline !important; width: 30%; margin-left: 5%;"  id='original-value'>

        <br>

        <label for="">Opp. Value</label>
        <input disabled type='text' class='form-control' style="display: inline !important; width: 30%; margin-left: 5%;"  id='lambda-reading'>

        


        </div>


        <input disabled type='button' class='btn btn-primary' value="Set" style="margin-left: 3%; width: 20%;" id='act3_button' onclick='activity4();'>

    `;
    pp.addtoleftpannel(left_panel_text);
    load_N_values();
}
function load_N_values() {
    let N_sel = document.getElementById('N-dd');
    N_sel.innerHTML = `<option value=''>--Select--</option>`;
    for (let i = 0; i < N_values.length; i++) {
        N_sel.innerHTML += `<option value='${N_values[i]}'>${N_values[i]}</option>`;
    }
}
function set_N() {
    let N_sel = document.getElementById('N-dd');
    let n_sel = document.getElementById('order-dd');
    if (N_sel.value) {
        selected_N = parseInt(N_sel.value);
        n_sel.disabled = false;
        n_sel.innerHTML = `<option value=''>--Select--</option>`;
        for (let i = 0; i < n_values.length; i++) {
            n_sel.innerHTML += `<option value='${n_values[i]}'>${n_values[i]}</option>`;
        }
    }
    else {
        n_sel.disabled = true;
    }
}
function set_order() {
    let n_sel = document.getElementById('order-dd');
    let slider_ele = document.getElementById('range');
    let adj_ele = document.getElementById('adj-inp');
    if (n_sel.value) {
        selected_n = parseInt(n_sel.value);
        slider_ele.disabled = false;
        adj_ele.disabled = false;
    }
    else {
        slider_ele.disabled = true;
        adj_ele.disabled = true;
    }
}
function set_lambda() {
    let slider_ele = document.getElementById('range');
    let reading = document.getElementById('lambda-reading');
    let btn = document.getElementById('act3_button');
    let original_lambda = document.getElementById('original-value');
    selected_lambda = parseInt(slider_ele.value);
    if (!show_opp) {
        show_opp = true;
    }
    let selected_index = 0;
    for (let i = 0; i < data.length; i++) {
        if (Math.round(data[i][1] * Math.pow(10, (8))) == selected_lambda) {
            selected_index = i;
        }
    }
    calculate_opp(selected_index);
    // add_opp_variation();
    reading.value = opp.toFixed(1);
    original_lambda.value = slider_ele.value;
    btn.disabled = false;
}
function set_adj() {
    let adj_ele = document.getElementById('adj-inp');
    let show = document.getElementById('show-adj');
    let reading = document.getElementById('lambda-reading');
    show.value = "adj value => " + adj_ele.value;
    selected_adj = parseInt(adj_ele.value);
    if (show_opp) {
        let selected_index = 0;
        for (let i = 0; i < data.length; i++) {
            if ((data[i][1] * Math.pow(10, (8))) == selected_lambda) {
                selected_index = i;
            }
        }
        calculate_opp(selected_index);
        reading.value = opp.toString();
    }
}
activity3();
//# sourceMappingURL=activity3.js.map