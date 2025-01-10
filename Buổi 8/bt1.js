// Bài 1: kiểm tra số nguyên tố
function isPrimeNumber(value){
    if(value <2){
        console.log(value, "không phải là số nguyên tố")
        return false
    }
    for (let i=2; i*i<=value; i++){
        if(value %i ==0){
            return false
        }
    } return true
}

let a=2
if(isPrimeNumber(a)){
    console.log(a, "là số nguyên tố")
}
else {
    console.log(a, "không phải là số nguyên tố")
}

//Bài 2: truyền vào 2 số, sau đó in ra 
// các số nguyên tố giữa 2 số truyền vào
function between2PrimeNumber(b,c){
    for(let i=b; i<=c; i++){
        if(isPrimeNumber(i)){
            console.log(i, "là số nguyên tố")
      }
    }
}
let b=7; c=15
between2PrimeNumber(b,c)

//Bài 3: lấy tên 1 tháng từ 1 số cụ thể, 12->tháng 12
function addMonth(d){
for (let i=1; i<=12; i++ ){
    console.log("Tháng",i)
    return false
}
    console.log("Tháng không hợp lệ, vui lòng nhập lại")
}

let d=15
addMonth(d)
// switch case, mảng
//1 mảng string lưu tên và tháng

//Bài 4: tìm từ dài nhất và xuất hiện sớm nhất trong chuỗi
const chuoi='Tao la Linh xe om, dan em tai cho dien'
const arr=chuoi.split('')
console.log(arr)
for(let i=0; i<arr.length; i++)
    console.log(arr[i].length)
// Bài 5: customTrimFn xóa khoảng trống ở 2 đầu chuỗi kí tự
// xài trim
