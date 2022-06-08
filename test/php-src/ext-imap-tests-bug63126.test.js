// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/imap/tests/bug63126.phpt
  it("imap_open() DISABLE_AUTHENTICATOR ignores array param", function () {
    expect(parser.parseCode("<?php\n// TODO Test Kerberos on CI\n$tests = array(\n    'Array'  => array('DISABLE_AUTHENTICATOR' => array('GSSAPI','NTLM')),\n    'String' => array('DISABLE_AUTHENTICATOR' => 'GSSAPI'),\n);\nrequire_once(__DIR__. '/setup/imap_include.inc');\nforeach ($tests as $name => $testparams) {\n    echo \"Test for $name\\n\";\n    $in = imap_open(IMAP_SERVER_DEBUG, IMAP_MAILBOX_USERNAME, IMAP_MAILBOX_PASSWORD, OP_HALFOPEN, 1, $testparams);\n    if ($in) {\n        if (is_array($errors = imap_errors())) {\n            foreach ($errors as $err) {\n                if (strstr($err, 'GSSAPI') || strstr($err, 'Kerberos')) {\n                    echo \"$err\\n\";\n                }\n            }\n        }\n    } else {\n        echo \"Can't connect\\n\";\n    }\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
