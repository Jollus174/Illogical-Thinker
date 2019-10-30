<?php
$field_name = $_POST['cf_name'];
$field_email = $_POST['cf_email'];
$field_message = $_POST['cf_message'];

foreach($_POST['check'] as $value) {
	$check_boxes .= $value." ";
}

$radio_button = $_POST['cf_radio_button'];
$drop_down_item = $_POST['cf_drop_down'];

//	Composing Message
$mail_to = 'joelsweetman174@msn.com';
$subject = 'Email received via personal website '.$field_name;

$body_message = 'From: '.$field_name."\n";
$body_message .= 'E-mail: '.$field_email."\n";
$body_message .= 'Message: '.$field_message;"\n";
$body_message .= "Additional options checked: ".$check_boxes."\n";
$body_message .= "Did the customer agree: ".$radio_button."\n";
$body_message .= "Selected item from the dropdown list: ".$drop_down_item;

// Creating message headers

$headers = 'From: '.$cf_email."\r\n";
$headers .= 'Reply-To: '.$cf_email."\r\n";

$mail_status = mail($mail_to, $subject, $body_message, $headers);

if ($mail_status) { ?>
	<script language="javascript" type="text/javascript">
		alert('Thank you for the message. We will contact you shortly.');
		window.location = 'contact.html';
		 history.back(1);
	</script>
<?php
}
else { ?>
	<script language="javascript" type="text/javascript">
		alert('Message failed. Please, send an email to joelsweetman174@msn.com');
		window.location = 'contact.html';
		 history.back(1);
	</script>
<?php
}
?>