export default function validateInfor(username, phoneNumber, email) {
    let errors = {}; 

    if(!username.trim()){
        errors.username = "Bạn cần nhập đủ họ tên";
    }

    if(!email){
        errors.email = "Bạn cần phải nhập email";
    } else if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)){
        errors.email = "error";



        
    } else {
        errors.email = "";
    }

    // var mobile = $('#mobile').val();
    // if(mobile !==''){
    //     if (vnf_regex.test(mobile) == false) 
    //     {
    //         alert('Số điện thoại của bạn không đúng định dạng!');
    //     }else{
    //         alert('Số điện thoại của bạn hợp lệ!');
    //     }
    // }else{
    //     alert('Bạn chưa điền số điện thoại!');
    // }

    var vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;

    if(!phoneNumber){
        errors.phoneNumber = "Bạn cần phải nhập số điện thoại";
    } else if(vnf_regex.test(phoneNumber) == false){
        errors.phoneNumber = "số điện thoại của bạn không đúng định dạng";
    } else {
        errors.phoneNumber = "";
    }

    return errors;
}