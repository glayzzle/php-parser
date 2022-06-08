// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/curl/tests/curl_ftp_pasv.phpt
  it("Test curl_exec() function with basic functionality", function () {
    expect(parser.parseCode("<?php\n  $host = getenv('PHP_CURL_FTP_REMOTE_SERVER');\n  $username = getenv('PHP_CURL_FTP_REMOTE_USER');\n  $password = getenv('PHP_CURL_FTP_REMOTE_PASSWD');\n  // FTP this script to a server\n  $fp  =  fopen ( __FILE__ ,  \"r\" );\n  $url  =  \"ftp://$username:$password@$host/test.phpt\" ;\n  $ch  =  curl_init ();\n  // enable below to get the output in verbose mode.\n  // curl_setopt ( $ch , CURLOPT_VERBOSE, 1 );\n  /* Without enabling SKIP_PASV_IP flag, the following output will be seen..\n    < 227 Entering Passive Mode (10,5,80,146,100,199)\n    *   Trying 10.5.80.146... * connected\n    * Connecting to 10.5.80.146 (10.5.80.146) port 25799\n   */\n  /* After enabling SKIP_PASV_IP flag, the following output will be seen..\n    < 227 Entering Passive Mode (10,5,80,146,50,229)\n    * Skips 10.5.80.146 for data connection, uses 10.5.80.146 instead\n    *   Trying 10.5.80.146... * connected\n   */\n  curl_setopt ( $ch , CURLOPT_URL, $url );\n  curl_setopt ( $ch , CURLOPT_TRANSFERTEXT, 1 );\n  //force passive connection\n  curl_setopt ( $ch , CURLOPT_FTP_USE_EPSV, 0 );\n  curl_setopt ( $ch , CURLOPT_FTP_SKIP_PASV_IP, 1 );\n  // mark the file for upload..\n  curl_setopt ( $ch , CURLOPT_INFILE, $fp );\n  curl_setopt ( $ch , CURLOPT_INFILESIZE,  filesize(__FILE__) );\n  curl_setopt ( $ch , CURLOPT_PUT, 1 );\n  curl_setopt ( $ch , CURLOPT_UPLOAD, 1 );\n  $result  =  curl_exec ( $ch );\n  var_dump ( $result );\n  curl_close ( $ch );\n?>")).toMatchSnapshot();
  });
});
