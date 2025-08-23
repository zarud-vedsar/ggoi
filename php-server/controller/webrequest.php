<?php

require_once("../config/proxy.php");


function contact_submit($mail)
{
    global $action;
    $name = $action->db->setPostRequiredField('name',"Name is required");
    $email = $action->db->setPostRequiredField('email',"Email is required");
    $subject = $action->db->setPostRequiredField('subject',"Subject is required");
    $message = $action->db->setPostRequiredField('message',"Message is required");
    $phone = $action->db->setPostRequiredField('phone',"Phone Number is required");
    
        
    $description = "
        <h2>New Contact Form Submission</h2>
        <table style='border-collapse:collapse; width:100%;'>
            <tr>
                <td style='padding:8px; border:1px solid #ddd;'><strong>Name:</strong></td>
                <td style='padding:8px; border:1px solid #ddd;'>$name</td>
            </tr>
            <tr>
                <td style='padding:8px; border:1px solid #ddd;'><strong>Email:</strong></td>
                <td style='padding:8px; border:1px solid #ddd;'>$email</td>
            </tr>
            <tr>
                <td style='padding:8px; border:1px solid #ddd;'><strong>Phone:</strong></td>
                <td style='padding:8px; border:1px solid #ddd;'>$phone</td>
            </tr>
            <tr>
                <td style='padding:8px; border:1px solid #ddd;'><strong>Subject:</strong></td>
                <td style='padding:8px; border:1px solid #ddd;'>$subject</td>
            </tr>
            <tr>
                <td style='padding:8px; border:1px solid #ddd;'><strong>Message:</strong></td>
                <td style='padding:8px; border:1px solid #ddd;'>".nl2br(htmlspecialchars($message))."</td>
            </tr>
        </table>
        <p style='color:#888; font-size:12px;'>This message was sent from the website contact form.</p>
    ";
    $subject = "Contact Form Submission";

    $emailConfig = $action->db->getEmailHost();
    try {
        $emailsent = $action->custom->send_mail(
            $mail,
            "sbmksh@gmail.com",
            $description,
            $subject,
            $emailConfig['email'],
            $emailConfig['password'],
            $emailConfig['host'],
            $emailConfig['port'],
            $emailConfig['senderName']
        );
        if ($emailsent) {
            
            echo $action->db->json(200, "Your message has been sent successfully.");
            return;
        }
        else{
            echo $action->db->json(500, "Internal Server Error" );
        return;
        }
        
    } catch (Exception $e) {
        echo $action->db->json(400, "Email sending failed: " . $e->getMessage());
        return;
    }
    
}

