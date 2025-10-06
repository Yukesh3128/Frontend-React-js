//Six digit OTP

function OTP() {
    let otp = Math.floor(100000 + Math.random() * 900000);
    return otp;
}
console.log("Your OTP:", OTP());

//Four digit OTP

function OTP() {
    let otp = Math.floor(1000 + Math.random() * 9000);
    return otp;
}
console.log("Your OTP:", OTP());

//Two digit OTP

function OTP() {
    let otp = Math.floor(10 + Math.random() * 90);
    return otp;
}
console.log("Your OTP:", OTP());