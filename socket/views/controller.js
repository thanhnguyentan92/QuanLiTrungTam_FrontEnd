
  $(document).ready(function(){
    $("#click").click(function(){

      var username=$(".username").val();
      var password=$(".password").val();
      $("#tbody").html("<td>"+username+"</td>");
    });

  });