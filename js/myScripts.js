	function validate()
	{
		var name = document.getElementById('firstname').value;
		
		if( name.length == 0 ) 
		  { alert('You must enter a name');
		    return false;
		  }
    
         var lname = document.getElementById('lastname').value;
		
		if( lname.length == 0 ) 
		  { alert('You must enter a name');
		    return false;
		  }

         var contry = document.getElementById('country ').value;
		
		if( contry.length == 0 ) 
		  { alert('You must enter your present country');
		    return false;
		  }
		var mail = document.getElementById('email ').value;
		
		if( mail .length == 0 ) 
		  { alert('You must enter your Email ');
		    return false;
		  }
		  
		var add = document.getElementById('address').value;
		
		if( add .length == 0 ) 
		  { 
		  alert('You must enter address');
		    return false;
		  }  
		
			  
         var mob = document.getElementById('mobileno').value;
		
		if( mob.length == 0 ) 
		  { alert('You must enter yor mobile number');
		    return false;
		  }

		  
		document.getElementById('loginForm').submit();
		return true;
	}
	
	document.getElementById('submitButton').addEventListener('click',validate);
		
