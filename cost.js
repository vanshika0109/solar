const poly=100;
const mono=70;
const year8=60;
const year10=100;
const cab1=80;
const cab2=150;
const struct1=120;
const struct2=140;
const struct3=160;
const struct4=180;
const amc1=100;
const amc2=200;
const amc5=400;
const mod1=1000;
const mod2=750;
const mod3=500;
const mod4=650;
const gti1=100;
const gti2=150;
const gti3=200;
const la=250;
const earth=300;
const dcdb=150;
const snm=500;

function submitform(){
    var solar;
    var grid;
    var cab;
    var str;
    var amc;
    var modu;
    var gti;
    var billamt;

    if (document.getElementById("Poly").checked) {
        solar = poly;
        
      }
        else{
        solar = mono;
      }
      

      if (document.getElementById("gridTie1").checked) {
        grid = year8;
      }
        else{
        grid = year10;
      }
     

      if (document.getElementById("cable1").checked) {
        cab = cab1;
      }
        else{
        cab = cab2;
      }

      if (document.getElementById("struct1").checked) {
        str = struct1;
      }
      else if (document.getElementById("struct2").checked) {
        str = struct2;
      }
      else if (document.getElementById("struct3").checked) {
        str = struct3;
      }
      else{
        str=struct4;
      }

      if (document.getElementById("amc1").checked) {
        amc = amc1;
      }
      else if (document.getElementById("amc2").checked) {
        amc = amc2;
      }
      else{
        amc=amc5;
      }

      if (document.getElementById("mod1").checked) {
        modu = mod1;
      }
      else if (document.getElementById("mod2").checked) {
        modu = mod2;
      }
      else if (document.getElementById("mod3").checked) {
        modu = mod3;
      }
      else{
        modu=mod4;
      }

      if (document.getElementById("gti1").checked) {
        gti = gti1;
      }
      else if (document.getElementById("gti2").checked) {
        gti = gti2;
      }
      else{
        gti=gti3;
      }

      billamt= document.getElementById("bill").value;

      var total = solar + grid + cab + str + amc + modu + gti + la + earth + dcdb + snm;
      var panels = Math.ceil(billamt/total);

      document.getElementById("output").innerHTML = alert("Number of panels you require: " + panels);

}
