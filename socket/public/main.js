	

  $(document).ready(function(){
  	var lCustomer= new ListCustomer();
    $("#click").click(function(){

      var username=$(".username").val();
      var password=$(".password").val();
      var customer=new Customer(username,password);
      lCustomer.addCustomer(customer);
      var display="";
      for(var i=0;i<lCustomer.lisCustomer.length;i++){
      	var currentListCustomer=lCustomer.lisCustomer[i];
      	display+= `
      		<tr>
      			<td>${currentListCustomer.username}</td>
      			<td>${currentListCustomer.password}</td>
      		<tr>


      	`
      }
      $("#tbody").html(display);
    });

  });