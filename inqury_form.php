<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize input
    $name = htmlspecialchars(trim($_POST["name"]));
    $email = htmlspecialchars(trim($_POST["email"]));
    $phone = htmlspecialchars(trim($_POST["phone"]));
    $message = htmlspecialchars(trim($_POST["message"]));

    // Email to user (confirmation)
    $user_subject = "Thank You for Reaching Out!";
    $user_message = "
    Dear $name,\n\n
    Thank you for contacting us! We have received your message and will get back to you shortly.\n
    If your inquiry is urgent, feel free to call us at +91-XXXXXXXXXX.\n
    We look forward to assisting you.\n\n
    Warm Regards,\n
    Extra Mile Automotive\n
    www.exproautomotive.com/extramileautomotive
    ";
    $user_headers = "From: no-reply@exproautomotive.com\r\n";

    // Email to admin/team (notification)
    $admin_email = "info@exproautomotive.com";
    $admin_subject = "New Car Service Booking Received";
    $admin_message = "
    Dear Team,\n\n
    A new car service booking has been received. Please find the details below:\n\n
    Customer Details:\n
    Name: $name\n
    Phone: $phone (OTP Verified)\n
    Email ID: $email\n
    Message:\n
    $message\n\n
    Please review the message/query and coordinate accordingly. Ensure timely connect and reply to the sender.\n\n
    Warm Regards,\n
    Customer Experience Team\n
    EXPRO Automotive Solutions
    ";
    $admin_headers = "From: website@exproautomotive.com\r\n";

    // Send emails
    $user_sent = mail($email, $user_subject, $user_message, $user_headers);
    $admin_sent = mail($admin_email, $admin_subject, $admin_message, $admin_headers);

    if ($user_sent && $admin_sent) {
        echo "<script>alert('Thank you for your message. We will be in touch soon.'); window.location.href='index.html';</script>";
    } else {
        echo "<script>alert('There was an error sending your message. Please try again later.'); history.back();</script>";
    }
}
?>
