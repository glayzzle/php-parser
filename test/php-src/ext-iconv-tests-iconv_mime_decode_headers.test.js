// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/iconv/tests/iconv_mime_decode_headers.phpt
  it("iconv_mime_decode_headers()", function () {
    expect(parser.parseCode("<?php\n$headers = <<<HERE\nReturn-Path: <internals-return-5651-***=***.example.com@lists.php.net>\nReceived: from pb1.pair.com (pb1.pair.com [16.92.131.4]) by ***.example.com\n    (8.12.10/8.12.10/1970-09-30) with SMTP id hALLmpea023899 for\n    <***@***.example.com>; Sat, 22 Jan 1970 06:48:51 +0900 (JST)\n    (envelope-from\n    internals-return-5651-***=***.example.com@lists.php.net)\nReceived: (qmail 63472 invoked by uid 1010); 1 Jan 1970 0:00:00 -0000\nMailing-List: contact internals-help@lists.php.net; run by ezmlm\nPrecedence: bulk\nList-Help: <mailto:internals-help@lists.php.net>\nList-Unsubscribe: <mailto:internals-unsubscribe@lists.php.net>\nList-Post: <mailto:internals@lists.php.net>\nDelivered-To: mailing list internals@lists.php.net\nReceived: (qmail 63459 invoked by uid 1010); 1 Jan 1970 0:00:00 -0000\nDelivered-To: ezmlm-scan-internals@lists.php.net\nDelivered-To: ezmlm-internals@lists.php.net\nDate: Thu, 1 Jan 1970 00:00:00 -0000 (GMT)\nFrom: *** *** *** <***@***.example.com>\nX-X-Sender: ***@***.example.com\nTo: internals@lists.php.net\nMessage-Id: <Pine.LNX.4.58.************@***.example.com>\nMIME-Version: 1.0\nContent-Type: TEXT/PLAIN; charset=US-ASCII\nSubject: [PHP-DEV] [ICONV] test for =?US-ASCII?Q?iconv_mime_decode_headers=28=29?=\nX-UIDL: @eH!!h2:!!EOS!!A_c\"!\nHERE;\nvar_dump(iconv_mime_decode_headers($headers));\n?>")).toMatchSnapshot();
  });
});
