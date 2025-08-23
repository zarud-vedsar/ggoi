<?php

require_once("../config/proxy.php");


function contact_submit($mail)
{
    global $action;
    $email = $action->db->setPostRequiredField('email',"Email is required");
    
    $user = $action->adminGet->get_table_data(1, ['email' => $email], null, " `email`, `id` ");
    if ($user) {
        $otp = mt_rand(100000, 999999);
        $description = "OTP To varify your Mail is  " . $otp;
        $subject = "OTP For Reset Your Password";

        $emailConfig = $action->db->getEmailHost();
        try {
            $emailsent = $action->custom->send_mail(
                $mail,
                $email,
                $description,
                $subject,
                $emailConfig['email'],
                $emailConfig['password'],
                $emailConfig['host'],
                $emailConfig['port'],
                $emailConfig['senderName']
            );
            if ($emailsent) {
                $log = [
                    'userid' => $user[0]['id'],
                    'user_type' => "Admin",
                    'table_name' => $action->db->getTable(1),
                    'row_id' => $user[0]['id'],
                    'log_type' => "Update",
                    'log_details' => "Password reset initiated",
                ];
                $logset = $action->db->insert($action->db->getTable(11), $log);
                $currentTime = new DateTime();
                $currentTime->modify('+5 minutes');
                $timeFiveMinutesAhead = $currentTime->format('Y-m-d H:i:s');
                $setotp = $action->db->update($action->db->getTable(1), " id= " . $user[0]['id'], ['otp' => $otp, 'otp_expiry' => $timeFiveMinutesAhead]);
            }
            if (($emailsent || $logset) && $setotp) {
                echo $action->db->json(201, "OTP Sent to Your Email");
                http_response_code(201);
                return;
            }
        } catch (Exception $e) {
            echo $action->db->json(400, "Email sending failed: " . $e->getMessage());
            return;
        }
    } else {
        echo $action->db->json(400, "Invalid Email is Provided");
        http_response_code(400);
        return;
    }
}

