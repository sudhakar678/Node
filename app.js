const express = require("express");
const app = express();
<script>(function(n,i,v,r,s,c,x,z){x=window.AwsRumClient={q:[],n:n,i:i,v:v,r:r,c:c};window[n]=function(c,p){x.q.push({c:c,p:p});};z=document.createElement('script');z.async=true;z.src=s;document.head.insertBefore(z,document.getElementsByTagName('script')[0]);})('cwr','b3573d49-fb6f-4135-814c-25cc7f37d88d','1.0.0','us-east-2','https://client.rum.us-east-1.amazonaws.com/1.0.2/cwr.js',{sessionSampleRate:1,guestRoleArn:"arn:aws:iam::804315155540:role/RUM-Monitor-us-east-2-804315155540-1938106223461-Unauth",identityPoolId:"us-east-2:4e7bdd42-9be2-4cb6-849a-5492666df19c",endpoint:"https://dataplane.rum.us-east-2.amazonaws.com",telemetries:["performance","errors","http"],allowCookies:true,enableXRay:false});</script>
app.get("/", function (req, res) {
  res.send("IT WORKED by me");
});
app.get("/new", function (req, res) {
  res.send("New also worked");
});

app.listen(process.env.PORT || 5000);
module.exports = app;
