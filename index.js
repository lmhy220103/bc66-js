// BÀI 1
function tinhLuong(){
    // input: luong1ngay: number, soNgay:number
    var luong1ngay =  document.getElementById('luong1ngay').value * 1
    var soNgay = document.getElementById('soNgay').value * 1

    // output: tongLuong: number
    var tongLuong =0;

    // process

    tongLuong = tinhLuongLogic(luong1ngay,soNgay)

    // hiển thị ra giao diện
    document.getElementById("result").innerHTML=tongLuong
}

// BÀI 2
function tinhTB(){
    // input : so1,2,3,4,5 : float
    var soThuNhat = parseFloat(document.getElementById('so1').value)
    var soThuHai = parseFloat(document.getElementById('so2').value)
    var soThuBa = parseFloat(document.getElementById('so3').value)
    var soThuTu = parseFloat(document.getElementById('so4').value)
    var soThuNam = parseFloat(document.getElementById('so5').value)

    // output : giá trị TB\
    var giaTriTB = 0 

    // process
    giaTriTB = (soThuNhat + soThuHai + soThuBa + soThuTu + soThuNam)/5

    //  hiển thị ra giao diện
    document.getElementById("TB").innerHTML=giaTriTB
}

// BÀI 3
function tinhTien(){
    // input : tiền USD : float
    var moneyUSD = parseFloat(document.getElementById('USD').value)
    
    // output : tiền VND : float
    var tienVND = 0

    // process
    tienVND = moneyUSD * 23500

    // hiển thị ra giao diện 
    document.getElementById('ketQua').innerHTML = '<h2>số tiền sau quy đổi là :' + tienVND.toLocaleString() + 'VND</h2>'
}

// BÀI 4
function tinhHCN(){
    // input : chiều dài,rộng : number
    var chieudaiHCN = parseFloat( document.getElementById('dai').value)
    var chieurongHCN = parseFloat ( document.getElementById('rong').value)

    // output : chu vi,diện tích : number 
    var dientichHCN =0
    var chuviHCN=0

    // process
    dientichHCN = chieudaiHCN * chieurongHCN
    chuviHCN = (chieudaiHCN + chieurongHCN)*2
    document.getElementById('kq').innerHTML = '<h2> chu vi hình chữ nhật là :' +chuviHCN.toLocaleString() + '</h2>' + '<h2> diện tích hình chữ nhật là :' + dientichHCN.toLocaleString() + '</h2>'
}

// BÀI 5
function tong2KySo(){
    // input : so1,2 : number
    var so2KySoThuNhat = document.getElementById('sTN').value * 1
    var so2KySoThuHai = document.getElementById('sTH').value * 1

    // output : tổng 2 ký số của số thứ nhất và thứ hai

    // process
    var tong1 = (so2KySoThuNhat % 10) + (Math.floor(so2KySoThuNhat/10))
    var tong2 = (so2KySoThuHai % 10) + (Math.floor(so2KySoThuHai/10))

    // hiển thị ra giao diện
    document.getElementById('KQ').innerHTML= '<h2>tổng 2 ký số thứ nhất là :' + tong1.toLocaleString() + '</h2>' + '<h2>tổng 2 ký số thứ hai là :' + tong2.toLocaleString() + '</h2>'
    // document.getElementById('KQ').innerHTML=tong2



}
