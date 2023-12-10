const htmlContent =(uuid)=> `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
<html lang="en">

  <head></head>

  <body style="background-color:#ffffff;font-family:-apple-system,BlinkMacSystemFont,&quot;Segoe UI&quot;,Roboto,Oxygen-Sans,Ubuntu,Cantarell,&quot;Helvetica Neue&quot;,sans-serif">
    <table style="background-color:#ffffff;font-family:-apple-system,BlinkMacSystemFont,&quot;Segoe UI&quot;,Roboto,Oxygen-Sans,Ubuntu,Cantarell,&quot;Helvetica Neue&quot;,sans-serif" align="center" border="0" cellPadding="0" cellSpacing="0" role="presentation" width="100%">
      <tbody>
        <tr>
          <td>
            <table align="center" role="presentation" cellSpacing="0" cellPadding="0" border="0" width="100%" style="max-width:37.5em;margin:0 auto;padding:20px 0 48px;width:580px">
              <tr style="width:100%">
                <td>
                  <table align="center" border="0" cellPadding="0" cellSpacing="0" role="presentation" width="100%">
                    <tbody>
                      <tr>
                        <td>
                         <h1 style="text-align:center">Track Wise</h1>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table align="center" border="0" cellPadding="0" cellSpacing="0" role="presentation" width="100%">
                    <tbody>
                      
                    </tbody>
                  </table>
                  <table style="padding-bottom:20px" align="center" border="0" cellPadding="0" cellSpacing="0" role="presentation" width="100%">
                    <tbody>
                      <tr>
                        <td>
                          <table width="100%" align="center" role="presentation" cellSpacing="0" cellPadding="0" border="0">
                            <tbody style="width:100%">
                              <tr style="width:100%">
                                
                                <h2 style="font-size:18px;line-height:1.4;margin:16px 0;color:#fff;padding:24px;background-color:#161a39;border-radius:4px;text-align:center">
                                   <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0,0,256,256">
<g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(5.12,5.12)"><path d="M25,3c-6.63672,0 -12,5.36328 -12,12v5h-4c-1.64453,0 -3,1.35547 -3,3v24c0,1.64453 1.35547,3 3,3h32c1.64453,0 3,-1.35547 3,-3v-24c0,-1.64453 -1.35547,-3 -3,-3h-4v-5c0,-6.63672 -5.36328,-12 -12,-12zM25,5c5.56641,0 10,4.43359 10,10v5h-20v-5c0,-5.56641 4.43359,-10 10,-10zM9,22h32c0.55469,0 1,0.44531 1,1v24c0,0.55469 -0.44531,1 -1,1h-32c-0.55469,0 -1,-0.44531 -1,-1v-24c0,-0.55469 0.44531,-1 1,-1zM25,30c-1.69922,0 -3,1.30078 -3,3c0,0.89844 0.39844,1.6875 1,2.1875v2.8125c0,1.10156 0.89844,2 2,2c1.10156,0 2,-0.89844 2,-2v-2.8125c0.60156,-0.5 1,-1.28906 1,-2.1875c0,-1.69922 -1.30078,-3 -3,-3z"></path></g></g>
</svg>
                                  <br/>
                                  Please reset your password</h2>
                                <p style="font-size:18px;line-height:1.4;margin:16px 0;color:#484848">
                                  Hello,
                                  <br/>
                                  <br/>

 

We have sent you this email in response to your request to reset your password on company name.
 <br/>
                                  <br/>

 

To reset your password, please follow the link below:
                                </p>
                                
                                
                                
                                <a href="https://trackwise-app.vercel.app/password/resetpassword/${uuid}" target="_blank" style="background-color:#161a39;border-radius:3px;color:#fff;font-size:18px;text-decoration:none;text-align:center;display:inline-block;p-y:19px;line-height:100%;max-width:100%;padding:19px 30px">Reset Password</a>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <hr style="width:100%;border:none;border-top:1px solid #eaeaea;border-color:#cccccc;margin:20px 0" />
                  <table align="center" border="0" cellPadding="0" cellSpacing="0" role="presentation" width="100%">
                    <tbody>
                      <tr>
                        <td>
                        <p style="color:grey;font-style:italic">Please ignore this email if you did not request a password change.</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  </body>

</html>`


module.exports = htmlContent;