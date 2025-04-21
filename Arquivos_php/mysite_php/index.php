<?php
include 'conexao.php';
?>
<!DOCTYPE html>
    <html lang="pt-BR">
        <head> <!-- Cabeçalho podemos configurar meta dados -->
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Menu</title>
            <link rel="stylesheet" type="text/css" href="index.css">
        </head>
        <body class="body"> <!--Corpo do Html-->
            <header>
                <nav class = "navigation">
                    <img clas = "logo" src="logo_ecommerce.png" alt="Logo">
                    <ul id="ul_menu">
                        <li><a href="index.php">home</a></li>
                        <li><a href="produtos.php">produtos</a></li>
                        <li><a href="produto.php">produto</a></li>
                        <li><a href="login.php">saida</a></li>                
                    </ul>
                </nav>
            </header>
            <main>
                <session>
                    <?php
                        
                        echo("<br>OLÁ MUNDO CRUEL!")
                    
                    ?> <!-- Lendo variáveis Get e Post direto da Session-->
                    <p>Bem Vindo: <?php echo($_SESSION["nome"])?></p>
                    <!--<p>Você entrou na página principal após: </*?php echo($_SESSION["tentativa"])*/?> tentativas</p>-->
                </session>
            </main>
        </body>
    </html>