// Make the menu bar fixed if user scrolls down the page

window.onscroll = function() {fixed_menubar()};

function fixed_menubar() {
    if (document.body.scrollTop > 106 || document.documentElement.scrollTop > 106) {
        document.getElementById("menubar").className = "menubar_fixed";
    } else {
        document.getElementById("menubar").className = "";
    }
}

// Submit email

function submit_email() {
		// detect if valid email acdress
		var email_address = document.forms["myForm"]["fname"].value;
		var atpos = email_address.indexOf("@");
		var dotpos = email_address.lastIndexOf(".");
		if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=email_address.length) {
			alert("Please enter a valid e-mail address");
		// If so, send using google API (encode in base64 format)	
		} else {
			var form_items = document.getElementById("input_form");
			var all_text = "";
			var i;
			for (i = 0; i < form_items.length ; i++) {
				all_text += form_items.elements[i].value + "\n\n";
			}
			var xhr = new XMLHttpRequest();
			var access_token = // https://developers.google.com/oauthplayground
			xhr.open("POST","https://www.googleapis.com/gmail/v1/users/send.mail.javascript@gmail.com/messages/send?access_token=" + access_token, true);
			xhr.setRequestHeader('Content-Type', 'application/json');
			xhr.send(JSON.stringify({
				"raw":btoa("From send.mail.javascript@gmail.com\r\nTo: chris.conrad.kelly@gmail.com\r\nSubject: This person wants to be kept in the loop!\r\n\r\n" + all_text)}));
			// document.getElementById("test_div").innerHTML = "Your email has been verified";
			alert("Your name and email has been successfully submitted. Thanks!");
		}
	}