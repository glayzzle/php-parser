// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/snmp/tests/snmp-object-setSecurity_error.phpt
  it("OO API: SNMP::setSecurity (errors)", function () {
    expect(parser.parseCode("<?php\nrequire_once(__DIR__.'/snmp_include.inc');\n//EXPECTF format is quickprint OFF\nsnmp_set_quick_print(false);\nsnmp_set_valueretrieval(SNMP_VALUE_PLAIN);\n$session = new SNMP(SNMP::VERSION_3, $hostname, $user_noauth, $timeout, $retries);\n$session->setSecurity('noAuthNoPriv');\n#echo \"Checking error handling\\n\";\ntry {\nvar_dump($session->setSecurity(''));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\ntry {\nvar_dump($session->setSecurity('bugusPriv'));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\ntry {\nvar_dump($session->setSecurity('authNoPriv', 'TTT'));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\nvar_dump($session->setSecurity('authNoPriv', 'MD5', ''));\nvar_dump($session->setSecurity('authNoPriv', 'MD5', 'te'));\ntry {\n    var_dump(snmp3_get($hostname, $community, 'authPriv', 'MD5', $auth_pass, 'BBB', '', '.1.3.6.1.2.1.1.1.0'));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\ntry {\n    var_dump($session->setSecurity('authPriv', 'MD5', $auth_pass, 'BBB'));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\nvar_dump($session->setSecurity('authPriv', 'MD5', $auth_pass, 'AES', ''));\nvar_dump($session->setSecurity('authPriv', 'MD5', $auth_pass, 'AES', 'ty'));\nvar_dump($session->setSecurity('authPriv', 'MD5', $auth_pass, 'AES', 'test12345', 'context', 'dsa'));\nvar_dump($session->close());\n?>")).toMatchSnapshot();
  });
});
