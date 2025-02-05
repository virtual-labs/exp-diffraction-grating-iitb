let show_opp = false;
let tri;
let left_bar;
//graph dots for all the orders
let center_dot;
let first_upper_dot;
let first_lower_dot;
let second_upper_dot;
let second_lower_dot;
let third_upper_dot;
let third_lower_dot;
// line to represent y length
let y_line;
let x_line;
let text_x;
let text_y;
//laser rays
let source_ray;
let center_ray;
let first_up_ray;
let first_down_ray;
let second_up_ray;
let second_down_ray;
let third_up_ray;
let third_down_ray;
function activity3() {
    pp.clearleftpannel();
    pp.clearrightpannel();
    pp.addoffcanvas(3);
    pp.showtitle(`<p id="exp-title">Diffraction grating: to determine the wavelength of laser</p>`, 3);
    let left_panel_text = `
    <div style="position:absolute;" id="act3-left-content">

    <div style="position:absolute; top:3vw; left:2vw; width: 25vw; font-size: 1.2vw;" >
        <label style='font-size: 1.2vw;' for="">Number of Rulings on Grating Surface</label>
        <Select style='font-size: 1.2vw; height: 3vw;' onchange='set_N();' id='N-dd' class="form-select">
            
        </Select>
    </div>

    <div style="position:absolute; top:3vw; left:35vw; width:17vw; font-size: 1.2vw;">
        <label style='font-size: 1.2vw;' for="">Select nth Order</label>
        <Select style='font-size: 1.2vw;' onchange='set_order();' disabled id='order-dd' class="form-select">
        </Select>
    </div>

    <div style="position:absolute; top:3vw; left: 60vw; width:25vw;" >
        <label style='font-size: 1.2vw;' for="">Move slider to select the adj. distance</label>
        <input style='font-size: 1.2vw;' disabled onchange='set_adj();' oninput='set_adj();' type="range" min="5" max="10" value="5" id="adj-inp">
    </div>

    <input disabled style="position:absolute; left:51.2vw; top: 30vw; width:14vw; background-color:inherit; border:none; font-size: 1.2vw;" value=""  type="text" class="form-control" id="show-adj">

    <div style="position: absolute;  top:11vw; left:8vw; width:20vw">
        <label style='font-size: 1.2vw;' for="">Set Lambda Value</label>
        <input style='font-size: 1.2vw;' disabled type="range" min='380' max='750' step='10' value="380" id='range' onchange="set_lambda();" oninput="set_lambda();">
   </div>

   <div style="position: absolute;  top:16vw; left:8vw; width:20vw">
        <label for="" style='font-size: 1.2vw;'>&lambda; Value = </label>
        <input disabled type='text' class='form-control' style="display: inline !important; width: 40%; background-color:inherit; font-size: 1.2vw; border: none;"  id='original-value'>
   </div>

   <div style="position: absolute;  top:28vw; left:8vw; width:20vw">
        <label for="" style='font-size: 1.2vw;'>Opp. Value</label>
        <input disabled type='text' class='form-control' style="display: inline !important; width: 35%; margin-left: 5%; font-size: 1.2vw;"  id='lambda-reading'>
   </div>


   <input disabled type='button' class='btn btn-primary' value="Next" style="position: absolute;top: 40vw; left:43vw; margin-left: 3%; width: 10vw; font-size: 1.2vw;" id='act3_button' onclick='activity4();'>

    `;
    pp.addtoleftpannel(left_panel_text);
    load_N_values();
    //define canvas
    pp.addcanvas('my_canvas');
    canvas = pp.canvas;
    context = canvas.getContext('2d');
    canvas.style.cursor = 'crosshair';
    rect = canvas.getBoundingClientRect();
    scene = new Scene();
    draw_rec();
    center_dot = new Chemistry.Circle(new Chemistry.Point(1500, 393), 10, canvas);
    first_upper_dot = new Chemistry.Circle(new Chemistry.Point(1500, 393), 7, canvas);
    first_lower_dot = new Chemistry.Circle(new Chemistry.Point(1500, 393), 7, canvas);
    second_upper_dot = new Chemistry.Circle(new Chemistry.Point(1500, 393), 5, canvas);
    second_lower_dot = new Chemistry.Circle(new Chemistry.Point(1500, 393), 5, canvas);
    third_upper_dot = new Chemistry.Circle(new Chemistry.Point(1500, 393), 3, canvas);
    third_lower_dot = new Chemistry.Circle(new Chemistry.Point(1500, 393), 3, canvas);
    y_line = new Chemistry.DoubleArrowLine(1600, 393, 1600, 398, 10, canvas);
    x_line = new Chemistry.DoubleArrowLine(1080, 270, 1415, 270, 10, canvas);
    text_y = new Chemistry.Geo_Text('Y = 0', new Chemistry.Point(1620, 393), canvas);
    text_x = new Chemistry.Geo_Text('X = 5', new Chemistry.Point(1100, 290), canvas);
    source_ray = new Chemistry.Line(new Chemistry.Point(158, 395), new Chemistry.Point(1080, 395), 2, 'red', canvas);
    center_ray = new Chemistry.Line(new Chemistry.Point(1080, 395), new Chemistry.Point(1500, 395), 1.5, 'red', canvas);
    first_up_ray = new Chemistry.Line(new Chemistry.Point(1080, 395), new Chemistry.Point(1500, 395), 1, 'red', canvas);
    first_down_ray = new Chemistry.Line(new Chemistry.Point(1080, 395), new Chemistry.Point(1500, 395), 1, 'red', canvas);
    second_up_ray = new Chemistry.Line(new Chemistry.Point(1080, 395), new Chemistry.Point(1500, 395), 0.7, 'red', canvas);
    second_down_ray = new Chemistry.Line(new Chemistry.Point(1080, 395), new Chemistry.Point(1500, 395), 0.7, 'red', canvas);
    third_up_ray = new Chemistry.Line(new Chemistry.Point(1080, 395), new Chemistry.Point(1500, 395), 0.5, 'red', canvas);
    third_down_ray = new Chemistry.Line(new Chemistry.Point(1080, 395), new Chemistry.Point(1500, 395), 0.5, 'red', canvas);
    scene.add(center_dot);
    scene.add(first_upper_dot);
    scene.add(first_lower_dot);
    scene.add(second_upper_dot);
    scene.add(second_lower_dot);
    scene.add(third_upper_dot);
    scene.add(third_lower_dot);
    scene.add(y_line);
    scene.add(x_line);
    scene.add(source_ray);
    scene.add(first_up_ray);
    scene.add(first_down_ray);
    scene.add(second_up_ray);
    scene.add(second_down_ray);
    scene.add(third_up_ray);
    scene.add(third_down_ray);
    scene.add(center_ray);
    scene.add(text_y);
    scene.add(text_x);
    window.onload = a2_windowresize;
    window.onresize = a2_windowresize;
    a2_windowresize();
}
function draw_rec() {
    let graph_unit = [
        new Chemistry.Geo_Text('1', new Chemistry.Point(1465, 120), canvas),
        new Chemistry.Geo_Text('2', new Chemistry.Point(1465, 150), canvas),
        new Chemistry.Geo_Text('3', new Chemistry.Point(1465, 175), canvas),
        new Chemistry.Geo_Text('4', new Chemistry.Point(1465, 202), canvas),
        new Chemistry.Geo_Text('5', new Chemistry.Point(1465, 230), canvas),
        new Chemistry.Geo_Text('6', new Chemistry.Point(1465, 255), canvas),
        new Chemistry.Geo_Text('7', new Chemistry.Point(1465, 283), canvas),
        new Chemistry.Geo_Text('8', new Chemistry.Point(1465, 310), canvas),
        new Chemistry.Geo_Text('9', new Chemistry.Point(1465, 340), canvas),
        new Chemistry.Geo_Text('10', new Chemistry.Point(1455, 365), canvas),
        new Chemistry.Geo_Text('11', new Chemistry.Point(1455, 393), canvas),
        new Chemistry.Geo_Text('12', new Chemistry.Point(1455, 420), canvas),
        new Chemistry.Geo_Text('13', new Chemistry.Point(1455, 448), canvas),
        new Chemistry.Geo_Text('14', new Chemistry.Point(1455, 474), canvas),
        new Chemistry.Geo_Text('15', new Chemistry.Point(1455, 502), canvas),
        new Chemistry.Geo_Text('16', new Chemistry.Point(1455, 528), canvas),
        new Chemistry.Geo_Text('17', new Chemistry.Point(1455, 554), canvas),
        new Chemistry.Geo_Text('18', new Chemistry.Point(1455, 582), canvas),
        new Chemistry.Geo_Text('19', new Chemistry.Point(1455, 610), canvas),
        new Chemistry.Geo_Text('20', new Chemistry.Point(1455, 638), canvas),
        new Chemistry.Geo_Text('21', new Chemistry.Point(1455, 665), canvas),
    ];
    //define left_rectangle
    let left_rec = new Chemistry.Rectangle(canvas.height * 9, canvas.width * 2, new Chemistry.Point(100, 100), canvas);
    //define right_rectangle
    let right_rec = new Chemistry.Rectangle(canvas.height * 2.5, canvas.width * 2, new Chemistry.Point(1451, 100), canvas);
    //define left bar
    left_bar = new Chemistry.Rectangle(4, left_rec.w - 80, new Chemistry.Point(1075.5, 150), canvas);
    //define right bar
    let right_bar = new Chemistry.Rectangle(30, left_rec.w - 80, new Chemistry.Point(1415, 150), canvas);
    //define pointer triangle
    tri = new Chemistry.Polygon(new Chemistry.Point(1077.5, 150), 5, 3, canvas);
    let graph_img = new Chemistry.Custome_image(graph, new Chemistry.Point(1639, 400), 327 * 1.13, 545 * 1.1, canvas);
    let left_x_scale = new Chemistry.Custome_image(x_scale_left, new Chemistry.Point(775, 125), 1822 * 0.74, 198 * 0.25, canvas);
    let laser_img = new Chemistry.Custome_image(laser, new Chemistry.Point(133.5, 403), 131 * 0.5, 90 * 0.5, canvas);
    tri.stang = 30;
    tri.color = 'red';
    left_bar.color = 'red';
    right_bar.color = 'red';
    left_rec.color = 'white';
    right_rec.color = 'white';
    scene.add(left_rec);
    scene.add(right_rec);
    scene.add(left_x_scale);
    scene.add(graph_img);
    scene.add(left_bar);
    scene.add(right_bar);
    scene.add(tri);
    scene.add(laser_img);
    for (let i = 0; i < graph_unit.length; i++) {
        graph_unit[i].color = 'red';
        graph_unit[i].font = '20px Arial';
        scene.add(graph_unit[i]);
    }
}
function a2_windowresize() {
    //canvas size
    a2_canvas_size();
    //canvas mapping
    a2_canvas_mapping();
    //draw scene
    scene.draw();
}
function a2_canvas_size() {
    canvas.width = window.innerWidth * 0.91;
    canvas.height = ((canvas.width * 1080.0) / 1920) * 0.85;
    lscale = canvas.width / 1920.0;
    document.getElementById('leftpannel').style.height =
        canvas.height + 5 + 'px';
    document.getElementById('leftpannel').style.margin = '0';
}
function a2_canvas_mapping() {
    context.translate(0, canvas.height);
    context.scale(1, -1);
}
function load_N_values() {
    let N_sel = (document.getElementById('N-dd'));
    N_sel.innerHTML = `<option value=''>--Select--</option>`;
    for (let i = 0; i < N_values.length; i++) {
        N_sel.innerHTML += `<option value='${N_values[i]}'>${N_values[i]}</option>`;
    }
}
function set_N() {
    let N_sel = (document.getElementById('N-dd'));
    let n_sel = (document.getElementById('order-dd'));
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
    let n_sel = (document.getElementById('order-dd'));
    let slider_ele = (document.getElementById('range'));
    let adj_ele = (document.getElementById('adj-inp'));
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
    let slider_ele = (document.getElementById('range'));
    let reading = (document.getElementById('lambda-reading'));
    let btn = (document.getElementById('act3_button'));
    let original_lambda = (document.getElementById('original-value'));
    selected_lambda = parseInt(slider_ele.value);
    if (!show_opp) {
        show_opp = true;
    }
    let selected_index = 0;
    for (let i = 0; i < data.length; i++) {
        if (Math.round(data[i][1] * Math.pow(10, 8)) == selected_lambda) {
            selected_index = i;
        }
    }
    calculate_table(selected_n);
    calculate_opp(selected_index);
    // add_opp_variation();
    reading.value = opp.toFixed(1);
    original_lambda.value = slider_ele.value + 'nm';
    btn.disabled = false;
    let distance_array = [];
    let arr0 = point_distance(selected_adj);
    let arr1 = [];
    if (selected_n == 1) {
        arr1 = [arr0[0][selected_index]];
    }
    else if (selected_n == 2) {
        arr1 = [arr0[0][selected_index], arr0[1][selected_index]];
    }
    else if (selected_n == 3) {
        arr1 = [
            arr0[0][selected_index],
            arr0[1][selected_index],
            arr0[2][selected_index],
        ];
    }
    draw_dots(selected_n, arr1);
}
function set_adj() {
    let adj_ele = (document.getElementById('adj-inp'));
    let show = (document.getElementById('show-adj'));
    let reading = (document.getElementById('lambda-reading'));
    if (adj_ele.value) {
        tri.stpt.x = 1077.5 - (parseInt(adj_ele.value) - 5) * 67.2;
        left_bar.stpt.x = 1075.5 - (parseInt(adj_ele.value) - 5) * 67.2;
        source_ray.x2 = left_bar.stpt.x;
        first_up_ray.x1 = left_bar.stpt.x;
        first_down_ray.x1 = left_bar.stpt.x;
        second_up_ray.x1 = left_bar.stpt.x;
        second_down_ray.x1 = left_bar.stpt.x;
        third_up_ray.x1 = left_bar.stpt.x;
        third_down_ray.x1 = left_bar.stpt.x;
        center_ray.x1 = left_bar.stpt.x;
        x_line.x1 = 1075 - (parseInt(adj_ele.value) - 5) * 67.2;
        text_x.text = `X = ${parseInt(adj_ele.value)}`;
        scene.draw();
    }
    selected_adj = parseInt(adj_ele.value);
    if (show_opp) {
        let selected_index = 0;
        for (let i = 0; i < data.length; i++) {
            if (data[i][1] * Math.pow(10, 8) == selected_lambda) {
                selected_index = i;
            }
        }
        calculate_table(selected_n);
        calculate_opp(selected_index);
        // calculate_opp(selected_index);
        reading.value = opp.toFixed(1);
    }
    // added to reflect change at adj. slider
    let selected_index = 0;
    for (let i = 0; i < data.length; i++) {
        if (Math.round(data[i][1] * Math.pow(10, 8)) == selected_lambda) {
            selected_index = i;
        }
    }
    let arr0 = point_distance(selected_adj);
    let arr1 = [];
    if (selected_n == 1) {
        arr1 = [arr0[0][selected_index]];
    }
    else if (selected_n == 2) {
        arr1 = [arr0[0][selected_index], arr0[1][selected_index]];
    }
    else if (selected_n == 3) {
        arr1 = [
            arr0[0][selected_index],
            arr0[1][selected_index],
            arr0[2][selected_index],
        ];
    }
    draw_dots(selected_n, arr1);
}
function draw_dots(order, d_array) {
    center_dot.stpt.x = 1500;
    center_dot.stpt.y = 393;
    first_upper_dot.stpt.y = 1500;
    first_lower_dot.stpt.y = 393;
    second_upper_dot.stpt.y = 1500;
    second_lower_dot.stpt.y = 393;
    third_upper_dot.stpt.y = 1500;
    third_lower_dot.stpt.y = 393;
    first_up_ray.y2 = first_upper_dot.stpt.y;
    first_down_ray.y2 = first_lower_dot.stpt.y;
    second_up_ray.y2 = second_upper_dot.stpt.y;
    second_down_ray.y2 = second_lower_dot.stpt.y;
    third_up_ray.y2 = third_upper_dot.stpt.y;
    third_down_ray.y2 = third_lower_dot.stpt.y;
    if (order == 1) {
        center_dot.stpt.x = 1500;
        center_dot.stpt.y = 393;
        first_lower_dot.stpt.y = 393 - d_array[0][7] * 5;
        first_upper_dot.stpt.y = 393 + d_array[0][7] * 5;
        first_down_ray.y2 = first_lower_dot.stpt.y;
        first_up_ray.y2 = first_upper_dot.stpt.y;
        second_up_ray.y2 = 393;
        second_down_ray.y2 = 393;
        third_up_ray.y2 = 393;
        third_down_ray.y2 = 393;
        y_line.y2 = 393 + d_array[0][7] * 5;
        text_y.text = `Y = ${d_array[0][7].toFixed(2)}`;
        scene.draw();
    }
    if (order == 2) {
        center_dot.stpt.x = 1500;
        center_dot.stpt.y = 393;
        first_lower_dot.stpt.y = 393 - d_array[0][7] * 2;
        first_upper_dot.stpt.y = 393 + d_array[0][7] * 2;
        second_lower_dot.stpt.y = 393 - d_array[1][7] * 2;
        second_upper_dot.stpt.y = 393 + d_array[1][7] * 2;
        first_down_ray.y2 = first_lower_dot.stpt.y;
        first_up_ray.y2 = first_upper_dot.stpt.y;
        second_down_ray.y2 = second_lower_dot.stpt.y;
        second_up_ray.y2 = second_upper_dot.stpt.y;
        third_up_ray.y2 = 393;
        third_down_ray.y2 = 393;
        y_line.y2 = 393 + d_array[1][7] * 2;
        text_y.text = `Y = ${d_array[1][7].toFixed(2)}`;
        scene.draw();
    }
    if (order == 3) {
        center_dot.stpt.x = 1500;
        center_dot.stpt.y = 393;
        first_lower_dot.stpt.y = 393 - d_array[0][7];
        first_upper_dot.stpt.y = 393 + d_array[0][7];
        second_lower_dot.stpt.y = 393 - d_array[1][7];
        second_upper_dot.stpt.y = 393 + d_array[1][7];
        third_lower_dot.stpt.y = 393 - d_array[2][7];
        third_upper_dot.stpt.y = 393 + d_array[2][7];
        first_down_ray.y2 = first_lower_dot.stpt.y;
        first_up_ray.y2 = first_upper_dot.stpt.y;
        second_down_ray.y2 = second_lower_dot.stpt.y;
        second_up_ray.y2 = second_upper_dot.stpt.y;
        third_down_ray.y2 = third_lower_dot.stpt.y;
        third_up_ray.y2 = third_upper_dot.stpt.y;
        y_line.y2 = 393 + d_array[2][7];
        text_y.text = `Y = ${d_array[2][7].toFixed(2)}`;
        scene.draw();
    }
}
//ctivity3();
//# sourceMappingURL=activity3.js.map