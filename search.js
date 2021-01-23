function search(){ 
var key = document.getElementById("searchbox").value; 
// alert(key);
for(var i=0;i<12;i++){
    document.getElementById("fig"+i).style.display = "inline-block";  
}
if(key=="")
return;

for(var i=0;i<12;i++){
var str=document.getElementById("course"+i).innerHTML;
var n = str.search(key);
if(n<=0){
    document.getElementById("fig"+i).style.display = "none";
}
else
{
    document.getElementById("fig"+i).style.display = "bloinline-blockck";  
}
//id="course"+i;
//alert(document.getElementById("course"+i).id);
}
}
function reserve(){

}