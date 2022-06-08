// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/curl/tests/curl_multi_segfault.phpt
  it("Segfault due to libcurl connection caching", function () {
    expect(parser.parseCode("<?php\n  $host = getenv('PHP_CURL_FTP_REMOTE_SERVER');\n  $username = getenv('PHP_CURL_FTP_REMOTE_USER');\n  $password = getenv('PHP_CURL_FTP_REMOTE_PASSWD');\n  // FTP this script to a server\n  $fp  =  fopen ( __FILE__ ,  \"r\" );\n  $url  =  \"ftp://$username:$password@$host/\" ;\n  $ch  =  curl_init ();\n  curl_setopt ( $ch , CURLOPT_URL, $url );\n  curl_setopt ( $ch , CURLOPT_RETURNTRANSFER, 1 );\n  //force passive connection\n  curl_setopt ( $ch , CURLOPT_FTP_USE_EPSV, 0 );\n  curl_setopt ( $ch , CURLOPT_FTP_SKIP_PASV_IP, 1 );\n  $cmh =  curl_multi_init();\n  curl_multi_add_handle($cmh, $ch);\n  $active = null;\n  do {\n      $mrc = curl_multi_exec($cmh, $active);\n  } while ($mrc == CURLM_CALL_MULTI_PERFORM);\n  while ($active && $mrc == CURLM_OK) {\n      if (curl_multi_select($cmh) != -1) {\n          do {\n              $mrc = curl_multi_exec($cmh, $active);\n          } while ($mrc == CURLM_CALL_MULTI_PERFORM);\n      }\n  }\n  var_dump(is_string(curl_multi_getcontent($ch)));\n  curl_multi_remove_handle($cmh, $ch);\n  curl_close($ch);\n  curl_multi_close($cmh);\n?>")).toMatchSnapshot();
  });
});
