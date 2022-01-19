var mo = document.querySelector('.d2')

mo.addEventListener('mouseover',function () {
    mo.classList.add('open')
    console.log(this);

})

var dapan=document.getElementById('asw');
document.getElementById('btn').addEventListener('click',
    function ketqua() {
        if (dapan.value == 3) {
            alert('Kết quả chính xác bằng 3.')
        } else {
            alert('Bạn nhập sai rồi.');
        }
    })

