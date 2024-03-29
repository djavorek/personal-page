const getEmailTemplate = (from, contact, msg) => {
  return `
  <!doctype html>
  <html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
    <head>
      <title>
      </title>
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <style type="text/css">
        #outlook a{padding: 0;}
              .ReadMsgBody{width: 100%;}
              .ExternalClass{width: 100%;}
              .ExternalClass *{line-height: 100%;}
              body{margin: 0; padding: 0; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;}
              table, td{border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt;}
              img{border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic;}
              p{display: block; margin: 13px 0;}
      </style>
      <!--[if !mso]><!-->
      <style type="text/css">
        @media only screen and (max-width:480px) {
                    @-ms-viewport {width: 320px;}
                    @viewport {	width: 320px; }
                }
      </style>
      <!--<![endif]-->
      <!--[if mso]> 
      <xml> 
        <o:OfficeDocumentSettings> 
          <o:AllowPNG/> 
          <o:PixelsPerInch>96</o:PixelsPerInch> 
        </o:OfficeDocumentSettings> 
      </xml>
      <![endif]-->
      <!--[if lte mso 11]> 
      <style type="text/css"> 
        .outlook-group-fix{width:100% !important;}
      </style>
      <![endif]-->
      <style type="text/css">
        @media only screen and (min-width:480px) {
        .dys-column-per-100 {
          width: 100.000000% !important;
          max-width: 100.000000%;
        }
        }
        @media only screen and (min-width:480px) {
        .dys-column-per-100 {
          width: 100.000000% !important;
          max-width: 100.000000%;
        }
        }
        @media only screen and (min-width:480px) {
        .dys-column-per-100 {
          width: 100.000000% !important;
          max-width: 100.000000%;
        }
        }
        @media only screen and (max-width:480px) {
        
                table.full-width-mobile { width: 100% !important; }
                td.full-width-mobile { width: auto !important; }
        
        }
        @media only screen and (min-width:480px) {
        .dys-column-per-100 {
          width: 100.000000% !important;
          max-width: 100.000000%;
        }
        }
        @media only screen and (max-width:480px) {
        
                table.full-width-mobile { width: 100% !important; }
                td.full-width-mobile { width: auto !important; }
        
        }
        @media only screen and (min-width:480px) {
        .dys-column-per-100 {
          width: 100.000000% !important;
          max-width: 100.000000%;
        }
        }
      </style>
    </head>
    <body>
      <div>
        <!--[if mso | IE]>
  <table align="center" border="0" cellpadding="0" cellspacing="0" style="width:600px;" width="600"><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
  <![endif]-->
        <div style='margin:0px auto;max-width:600px;'>
          <table align='center' border='0' cellpadding='0' cellspacing='0' role='presentation' style='width:100%;'>
            <tbody>
              <tr>
                <td style='direction:ltr;font-size:0px;padding:10px 20px;text-align:center;vertical-align:top;'>
                  <!--[if mso | IE]>
  <table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td style="vertical-align:top;width:600px;">
  <![endif]-->
                  <div class='dys-column-per-100 outlook-group-fix' style='direction:ltr;display:inline-block;font-size:13px;text-align:left;vertical-align:top;width:100%;'>
                    <table border='0' cellpadding='0' cellspacing='0' role='presentation' style='vertical-align:top;' width='100%'>
                      <tr>
                        <td align='left' style='font-size:0px;padding:10px 25px;word-break:break-word;'>
                          <div style='color:#000000;font-family:Helvetica, Arial, sans-serif;font-size:24px;font-weight:Bolder;line-height:32px;text-align:left;'>
                            Közvetlen üzenet: ${from}
                          </div>
                        </td>
                      </tr>
                    </table>
                  </div>
                  <!--[if mso | IE]>
  </td></tr></table>
  <![endif]-->
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!--[if mso | IE]>
  </td></tr></table>
  <![endif]-->
        <!--[if mso | IE]>
  <table align="center" border="0" cellpadding="0" cellspacing="0" style="width:600px;" width="600"><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
  <![endif]-->
        <div style='margin:0px auto;max-width:600px;'>
          <table align='center' border='0' cellpadding='0' cellspacing='0' role='presentation' style='width:100%;'>
            <tbody>
              <tr>
                <td style='direction:ltr;font-size:0px;padding:10px 20px;text-align:center;vertical-align:top;'>
                  <!--[if mso | IE]>
  <table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td style="vertical-align:top;width:600px;">
  <![endif]-->
                  <div class='dys-column-per-100 outlook-group-fix' style='direction:ltr;display:inline-block;font-size:13px;text-align:left;vertical-align:top;width:100%;'>
                    <table border='0' cellpadding='0' cellspacing='0' role='presentation' style='vertical-align:top;' width='100%'>
                      <tr>
                        <td align='left' style='font-size:0px;padding:10px 25px;word-break:break-word;'>
                          <div style='color:#000000;font-family:Helvetica, Arial, sans-serif;font-size:18px;font-weight:light;line-height:28px;text-align:left;'>
                            ${msg}
                          </div>
                        </td>
                      </tr>
                    </table>
                  </div>
                  <!--[if mso | IE]>
  </td></tr></table>
  <![endif]-->
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!--[if mso | IE]>
  </td></tr></table>
  <![endif]-->
        <!--[if mso | IE]>
  <table align="center" border="0" cellpadding="0" cellspacing="0" style="width:600px;" width="600"><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
  <![endif]-->
        <div style='margin:0px auto;max-width:600px;'>
          <table align='center' border='0' cellpadding='0' cellspacing='0' role='presentation' style='width:100%;'>
            <tbody>
              <tr>
                <td style='direction:ltr;font-size:0px;padding:10px 20px;text-align:center;vertical-align:top;'>
                  <!--[if mso | IE]>
  <table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td style="vertical-align:top;width:600px;">
  <![endif]-->
                  <div class='dys-column-per-100 outlook-group-fix' style='direction:ltr;display:inline-block;font-size:13px;text-align:left;vertical-align:top;width:100%;'>
                    <table border='0' cellpadding='0' cellspacing='0' role='presentation' style='vertical-align:top;' width='100%'>
                      <tr>
                        <td align='left' style='font-size:0px;padding:10px 25px;word-break:break-word;'>
                          <div style='color:#000000;font-family:Helvetica, Arial, sans-serif;font-size:24px;font-weight:Bolder;line-height:32px;text-align:left;'>
                            Itt válaszolhatsz: ${contact}
                          </div>
                        </td>
                      </tr>
                    </table>
                  </div>
                  <!--[if mso | IE]>
  </td></tr></table>
  <![endif]-->
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!--[if mso | IE]>
  </td></tr></table>
  <![endif]-->
        <!--[if mso | IE]>
  <table align="center" border="0" cellpadding="0" cellspacing="0" style="width:600px;" width="600"><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
  <![endif]-->
        <div style='margin:0px auto;max-width:600px;'>
          <table align='center' border='0' cellpadding='0' cellspacing='0' role='presentation' style='width:100%;'>
            <tbody>
              <tr>
                <td style='direction:ltr;font-size:0px;padding:20px 0;text-align:center;vertical-align:top;'>
                  <!--[if mso | IE]>
  <table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td style="vertical-align:top;width:600px;">
  <![endif]-->
                  <div class='dys-column-per-100 outlook-group-fix' style='direction:ltr;display:inline-block;font-size:13px;text-align:left;vertical-align:top;width:100%;'>
                    <table border='0' cellpadding='0' cellspacing='0' role='presentation' style='vertical-align:top;' width='100%'>
                      <tr>
                        <td align='center' style='font-size:0px;padding:10px 25px;word-break:break-word;'>
                          <table border='0' cellpadding='0' cellspacing='0' role='presentation' style='border-collapse:collapse;border-spacing:0px;'>
                            <tbody>
                              <tr>
                                <td style='width:300px;'>
                                  <img height='auto' src='https://assets.opensourceemails.com/imgs/lifestyle/rQdM7LSiRUqNh29a8Mo8_divider%20product%20lifestyle.png' style='border:none;display:block;font-size:13px;height:auto;outline:none;text-decoration:none;width:100%;' width='300' />
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </div>
                  <!--[if mso | IE]>
  </td></tr></table>
  <![endif]-->
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!--[if mso | IE]>
  </td></tr></table>
  <![endif]-->
        <table align='center' border='0' cellpadding='0' cellspacing='0' role='presentation' style='background:black;background-color:black;width:100%;'>
          <tbody>
            <tr>
              <td>
                <div style='margin:0px auto;max-width:600px;'>
                  <table align='center' border='0' cellpadding='0' cellspacing='0' role='presentation' style='width:100%;'>
                    <tbody>
                      <tr>
                        <td style='direction:ltr;font-size:0px;padding:50px;text-align:center;vertical-align:top;'>
                          <!--[if mso | IE]>
  <table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td style="vertical-align:top;width:600px;">
  <![endif]-->
                          <div class='dys-column-per-100 outlook-group-fix' style='direction:ltr;display:inline-block;font-size:13px;text-align:left;vertical-align:top;width:100%;'>
                            <table border='0' cellpadding='0' cellspacing='0' role='presentation' style='vertical-align:top;' width='100%'>
                              <tr>
                                <td align='left' style='font-size:0px;padding:0px;word-break:break-word;'>
                                  <table border='0' cellpadding='0' cellspacing='0' style='cellpadding:0;cellspacing:0;color:#000000;font-family:Helvetica, Arial, sans-serif;font-size:13px;line-height:22px;table-layout:auto;width:100%;' width='100%'>
                                    <tr>
                                      <td align='left'>
                                        <div style='color:#666666;font-family:Helvetica, Arial, sans-serif;font-size:12px;line-height:28px;text-align:left;'>
                                          <p>
                                            Közvetlen üzenet
                                            <br />
                                            <a href='#' style='color: #666;'>
                                              Weboldal
                                            </a>
                                            <br />
                                            <a href='javorekdenes.hu' style='color: #666;'>
                                            </a>
                                            <br />
                                            <a href style='color: #666;'>
                                            </a>
                                          </p>
                                        </div>
                                      </td>
                                      <td align='right' style='vertical-align:top; opacity: 0.35;' width='34px'>
                                        <table border='0' cellpadding='0' cellspacing='0' role='presentation' style='border-collapse:collapse;border-spacing:0px;'>
                                          <tbody>
                                            <tr>
                                              <td style='width:30px;'>
                                                <a href="https://www.facebook.com/javidenes/">
                                                  <img alt='Facebook' height='auto' src='https://assets.opensourceemails.com/imgs/lifestyle/Fct0c2xMRUKPHBdMCcnf_icon-facebook.png' style='border:none;display:block;font-size:13px;height:auto;outline:none;text-decoration:none;width:100%;' width='30' />
                                                </a>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </td>
                                      <td align='right' style='vertical-align:top; opacity: 0.35;' width='34px'>
                                        <table border='0' cellpadding='0' cellspacing='0' role='presentation' style='border-collapse:collapse;border-spacing:0px;'>
                                          <tbody>
                                            <tr>
                                              <td style='width:30px;'>
                                                <a href="https://www.linkedin.com/in/denes-javorek/">
                                                <img alt='Linked In' height='auto' src='https://assets.opensourceemails.com/imgs/lifestyle/BHraIlyShi7koHdeMEbD_icon-linkedin.png' style='border:none;display:block;font-size:13px;height:auto;outline:none;text-decoration:none;width:100%;' width='30' />
                                                </a>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </td>
                                      <td align='right' style='vertical-align:top; opacity: 0.35;' width='34px'>
                                        <table border='0' cellpadding='0' cellspacing='0' role='presentation' style='border-collapse:collapse;border-spacing:0px;'>
                                          <tbody>
                                            <tr>
                                              <td style='width:30px;'>
                                                <img alt='' height='auto' src='' style='border:none;display:block;font-size:13px;height:auto;outline:none;text-decoration:none;width:100%;' width='30' />
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </table>
                          </div>
                          <!--[if mso | IE]>
  </td></tr></table>
  <![endif]-->
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </body>
  </html>
  `;
};

exports.getEmailTemplate = getEmailTemplate;
