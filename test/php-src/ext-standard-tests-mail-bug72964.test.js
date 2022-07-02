// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/mail/bug72964.phpt
  it("Bug #72964 (White space not unfolded for CC/Bcc headers)", function () {
    expect(parser.parseCode("<?php\nrequire_once __DIR__ . '/mail_include.inc';\nfunction find_and_delete_message($username, $subject) {\n    global $default_mailbox, $password;\n    $imap_stream = imap_open($default_mailbox, $username, $password);\n    if ($imap_stream === false) {\n        die(\"Cannot connect to IMAP server $server: \" . imap_last_error() . \"\\n\");\n    }\n    $found = false;\n    $repeat_count = 20; // we will repeat a max of 20 times\n    while (!$found && $repeat_count > 0) {\n        // sleep for a while to allow msg to be delivered\n        sleep(1);\n    \n        $num_messages = imap_check($imap_stream)->Nmsgs;\n        for ($i = $num_messages; $i > 0; $i--) {\n            $info = imap_headerinfo($imap_stream, $i);\n            if ($info->subject === $subject) {\n                imap_delete($imap_stream, $i);\n                $found = true;\n                break;\n            }\n        }\n        $repeat_count--;\n    }\n    imap_close($imap_stream, CL_EXPUNGE);\n    return $found;\n}\n$to = \"{$users[2]}@$domain\";\n$subject = bin2hex(random_bytes(16));\n$message = 'hello';\n$headers = \"From: webmaster@example.com\\r\\n\"\n    . \"Cc: {$users[0]}@$domain,\\r\\n\\t{$users[1]}@$domain\\r\\n\"\n    . \"Bcc: {$users[2]}@$domain,\\r\\n {$users[3]}@$domain\\r\\n\";\n$res = mail($to, $subject, $message, $headers);\nif ($res !== true) {\n\tdie(\"TEST FAILED : Unable to send test email\\n\");\n} else {\n\techo \"Message sent OK\\n\";\n}\nforeach ($users as $user) {\n    if (!find_and_delete_message(\"$user@$domain\", $subject)) {\n        echo \"TEST FAILED: email not delivered\\n\";\n    } else {\n        echo \"TEST PASSED: Message sent and deleted OK\\n\";\n    }\n}\n?>")).toMatchSnapshot();
  });
});
