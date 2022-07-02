// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/mail/mail_variation_alt2-win32.phpt
  it("Test mail() function : basic functionality", function () {
    expect(parser.parseCode("<?php\nini_set(\"SMTP\", \"localplace\");\nini_set(\"smtp_port\", 25);\nini_set(\"sendmail_from\", \"user@example.com\");\necho \"*** Testing mail() : basic functionality ***\\n\";\nrequire_once(__DIR__.'/mail_include.inc');\n$subject_prefix = \"!**PHPT**!\";\n$to = \"$username\";\n$subject = \"$subject_prefix: Basic PHPT test for mail() function\";\n$message = <<<HERE\nDescription\nbool mail ( string \\$to , string \\$subject , string \\$message [, string \\$additional_headers [, string \\$additional_parameters]] )\nSend an email message\nHERE;\n$res = mail($to, $subject, $message);\nif ($res !== true) {\n    exit(\"TEST COMPLETED : Unable to send test email\\n\");\n} else {\n    echo \"Msg sent OK\\n\";\n}\n// Search for email message on the mail server using imap.\n$imap_stream = imap_open($default_mailbox, $username, $password);\nif ($imap_stream === false) {\n    echo \"Cannot connect to IMAP server $server: \" . imap_last_error() . \"\\n\";\n    return false;\n}\n$found = false;\n$repeat_count = 20; // we will repeat a max of 20 times\nwhile (!$found && $repeat_count > 0) {\n    // sleep for a while to allow msg to be delivered\n    sleep(1);\n    $current_msg_count = imap_check($imap_stream)->Nmsgs;\n    // Iterate over recent msgs to find the one we sent above\n    for ($i = 1; $i <= $current_msg_count; $i++) {\n        // get hdr details\n        $hdr = imap_headerinfo($imap_stream, $i);\n        if (substr($hdr->Subject, 0 , strlen($subject_prefix)) == $subject_prefix) {\n            echo \"Id of msg just sent is $i\\n\";\n            echo \".. delete it\\n\";\n            imap_delete($imap_stream, $i);\n            $found = true;\n            break;\n        }\n    }\n    $repeat_count -= 1;\n}\nif (!$found) {\n    echo \"TEST FAILED: email not delivered\\n\";\n} else {\n    echo \"TEST PASSED: Msgs sent and deleted OK\\n\";\n}\nimap_close($imap_stream, CL_EXPUNGE);\n?>\n===DONE===")).toMatchSnapshot();
  });
});
