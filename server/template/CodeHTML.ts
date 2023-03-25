const CodeHTML = (code: number) => `
<body style="font-family: Arial, sans-serif; font-size: 16px; line-height: 1.5; color: #333;">
<table style="width: 100%; max-width: 600px; margin: 0 auto; padding: 20px;">
<tr>
<td style="background-color: #f8f8f8; padding: 20px;">
<h2>Gracias por Registrarte en libreria vilma!!</h2>
        <h3 style="font-size: 24px; margin: 0;">Su codigo es: </h3>
        <p style="margin: 20px 0;">${code}</p>
      </td>
    </tr>
  </table>
</body>

`

export default CodeHTML
