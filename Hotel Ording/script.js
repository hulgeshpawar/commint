import axios from 'axios';
src="https://cdnjs.cloudflare.com/ajax/libs/axios/1.5.1/axios.min.js"
document.getElementById('myForm').onsubmit = function() {orderFood()};
function orderFood(){
        event.preventDefault();
        //onst price= document.getElementsByName ('foodPrice').value
        const price = event.target.foodPrice.value;
        //const foodname= document.getElementsByName ('foodName').value
        const foodname = event.target.foodName.value;
       // const tableno= document.getElementsByName ('tableNo').value
        const tableno = myList.options[myList.selectedIndex].text;
    
        const object = {
            price,
            foodname,
            tableno
        };
        
    axios.post('https://crudcrud.com/api/60f6f4dfc38349aebd2dbdb1732fea97/orderFood',object)
    .then((res)=>{console.log(object);})
    .catch(error=>{console.log(error);});
    Desktop

}
