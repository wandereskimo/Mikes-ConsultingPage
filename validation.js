	function validateforminput()
	{
		if ((document.form2.name.value==""))
		{
			alert("Name can't be left blank");
			document.form2.name.focus();
			return(false);  
		}
		else if ((document.form2.name.value=="Name"))
		{
			alert("Name can't be left blank");
			document.form2.name.focus();
			return(false);  
		}  
		else {
        	var str = document.form2.name.value;
        	var  length = str.length;
        	var last = length - 1;
        	for (var i=0; i<length; i++) {
            	if (str.charAt(i) != " " ) break;                                            
                if  ( i != last)  continue;
                alert("Name can't be left blank");
                document.form2.name.focus();
                return false;                    
			}
		}
		
		// Email
		
		if ((document.form2.email.value==""))
		{
			alert("Email Address can't be left blank");
			document.form2.email.focus();
			return(false);
		}
		else if ((document.form2.email.value=="Email"))
		{
			alert("Email Address can't be left blank");
			document.form2.email.focus();
			return(false);
		}
		else {
        	var str = document.form2.email.value;
        	var  length = str.length;
        	var last = length - 1;
        	for (var  i=0; i<length; i++) {
            	if (str.charAt(i) != " " ) break;
				if  ( i != last)  continue;
				alert("Email Address can't be left blank");
                document.form2.email.focus();
                return false;
			}
		}
		
		//validation for E-mail 
		if (document.form2.email.value!="")
		{ 
			var email,ln;
			email=document.form2.email.value;
			ln=email.indexOf('@',1);
			if ( ln > 0)
			{
				if (email.indexOf(".",ln+1) <3 )
				{
					alert ("Enter valid Email");
					document.form2.email.focus();
					return false;
				}
			}
			else
			{
				alert ("Wrong Email Id");
				document.form2.email.focus();
				return false;
			}
		}
		else
		{
			alert("Enter the Email Id");
			document.form2.email.focus();
			return false;
		}		
		
				// Phone		
		if ((document.form2.phone.value==""))
		{
			alert("Phone can't be left blank");
			document.form2.phone.focus();
			return(false);  
		}
		else if ((document.form2.phone.value=="Phone"))
		{
			alert("Phone can't be left blank");
			document.form2.phone.focus();
			return(false);  
		}  
		else {
        	var str = document.form2.phone.value;
        	var  length = str.length;
        	var last = length - 1;
        	for (var i=0; i<length; i++) {
            	if (str.charAt(i) != " " ) break;                                            
                if  ( i != last)  continue;
                alert("Phone can't be left blank");
                document.form2.phone.focus();
                return false;                    
			}
		}
		
		
		// Comment 
		if ((document.form2.message.value==""))
		{
			alert("Comment can't be left blank");
			document.form2.message.focus();
			return(false);  
		}
		else if ((document.form2.message.value=="Comment"))
		{
			alert("Comment can't be left blank");
			document.form2.message.focus();
			return(false);  
		}  
		else {
        	var str = document.form2.message.value;
        	var  length = str.length;
        	var last = length - 1;
        	for (var i=0; i<length; i++) {
            	if (str.charAt(i) != " " ) break;                                            
                if  ( i != last)  continue;
                alert("Comment can't be left blank");
                document.form2.message.focus();
                return false;                    
			}
		}
		// Captcha Validation
		if ((document.form2.sCAPTCHA.value==""))
		{
			alert("Security Code can't be left blank");
			document.form2.sCAPTCHA.focus();
			return(false);  
		}
		else if ((document.form2.sCAPTCHA.value=="Security Code"))
		{
			alert("Security Code can't be left blank");
			document.form2.sCAPTCHA.focus();
			return(false);  
		} 
		else {
        	var str = document.form2.sCAPTCHA.value;
        	var  length = str.length;
        	var last = length - 1;
        	for (var  i=0; i<length; i++) {
            	if (str.charAt(i) != " " ) break;                                            
                if  ( i != last)  continue;
                alert("Security Code can't be left blank");
                document.form2.sCAPTCHA.focus();
                return false;                    
			}
		}
		
		
	}