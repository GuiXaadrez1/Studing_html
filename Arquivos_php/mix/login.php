<!DOCTYPE html>
    <html lang="pt-BR">
        <head>
            <meta charset="UTF-8">
            <meta name = "viewport" content = "width=device-witdh, initial-scale-1.0">
            <title>login</title>
            <link rel="stylesheet" type="text/css" href="login.css">
        </head>
        <body>
            
            <h2>LOGIN</h2>
            
            <img src="logo_ecommerce.png" alt="Logo">
            
            <form method="post" action="index.php?tentativa=1">
                
                <label for="nome">Nome Completo:</label>
                <input type="text" id="nome" name="nome" placeholder = 'Digite seu nome' value="" required>

                <label for="senha">Senha:</label>
                <input type="password" id="senha" name="senha" placeholder = 'Digite seu nome' value="" required>

                <input type="hidden" name="escondido" value="valorescondido">

                <input type="submit" value="Acessar">

            </form>
        </body>
    </html>
