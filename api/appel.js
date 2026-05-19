export default function handler(req, res) {
  const numero = process.env.NUMERO || "0751379244";
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.send(`<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Appel en cours…</title>
<script>window.location.href = "tel:${numero}";<\/script>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,600;1,9..144,500&family=Outfit:wght@300;400;500&display=swap" rel="stylesheet">
<style>
  *{box-sizing:border-box;margin:0;padding:0}
  body{
    font-family:'Outfit',sans-serif;
    min-height:100vh;display:flex;align-items:center;justify-content:center;
    background:radial-gradient(700px 500px at 50% 0%,rgba(202,160,90,.25),transparent 60%),
               linear-gradient(160deg,#3a2a1e,#241910);
    color:#f1e4cc;text-align:center;padding:30px;
  }
  .box{max-width:360px}
  .ring{
    width:88px;height:88px;margin:0 auto 26px;border-radius:50%;
    border:3px solid rgba(202,160,90,.35);border-top-color:#caa05a;
    animation:spin 1s linear infinite;
  }
  @keyframes spin{to{transform:rotate(360deg)}}
  h1{font-family:'Fraunces',serif;font-size:26px;color:#fff;margin-bottom:10px}
  p{font-weight:300;color:#d9c9af;font-size:15px;line-height:1.5}
  a.call{
    display:inline-block;margin-top:24px;padding:14px 30px;
    font-family:'Fraunces',serif;font-size:17px;font-weight:600;
    color:#3a2a1e;background:#caa05a;border-radius:12px;
    text-decoration:none;box-shadow:0 12px 24px -10px rgba(0,0,0,.6);
  }
  .num{font-variant-numeric:tabular-nums;letter-spacing:.04em;color:#fff}
</style>
</head>
<body>
  <div class="box">
    <div class="ring"></div>
    <h1>Appel en cours…</h1>
    <p>Votre téléphone va composer le numéro automatiquement.</p>
    <p style="margin-top:14px">Si rien ne se passe, appuyez ci-dessous :</p>
    <a class="call" href="tel:${numero}">Appeler le <span class="num">${numero}</span></a>
  </div>
</body>
</html>`);
}
