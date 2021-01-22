
changeResolution();
window.onresize = function () {
    changeResolution();
};
function changeResolution() {
    if (window.innerWidth < 900) {
        document.getElementById('desktop1').style.display = 'none';
        document.getElementById('desktop2').style.display = 'none';
        document.getElementById('desktop3').style.display = 'none';
        document.getElementById('mobile1').style.display = 'block';  
        document.getElementById('mobile2').style.display = 'block';  
        document.getElementById('mobile3').style.display = 'block';  

    } else {
        document.getElementById('desktop1').style.display = 'block';  
        document.getElementById('desktop2').style.display = 'block';  
        document.getElementById('desktop3').style.display = 'block';  
        document.getElementById('mobile1').style.display = 'none';
        document.getElementById('mobile2').style.display = 'none';
        document.getElementById('mobile3').style.display = 'none';
    }
    if (window.innerHeight < 600) {
        document.getElementById('mobile1').style.display = 'none';
        document.getElementById('desktop1').style.display = 'none';
        document.getElementById('mobileHorizontal1').style.display = 'block';
        document.getElementById('mobile3').style.display = 'none';
        document.getElementById('desktop3').style.display = 'none';
        document.getElementById('mobileHorizontal3').style.display = 'block';  

    } else{
        document.getElementById('mobileHorizontal3').style.display = 'none';  
        document.getElementById('mobileHorizontal1').style.display = 'none';
    }
}
 