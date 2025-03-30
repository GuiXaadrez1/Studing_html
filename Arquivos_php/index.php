<?php
// Aqui você pode processar o formulário se ele for enviado
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // Recuperar dados enviados pelo formulário (caso haja)
    $nome = isset($_GET['nome']) ? $_GET['nome'] : '';
    $senha = isset($_GET['senha']) ? $_GET['senha'] : '';
    $escondido = isset($_GET['escondido']) ? $_GET['escondido'] : '';

    // Aqui você pode adicionar qualquer lógica PHP que queira
    // Por exemplo, validar ou salvar os dados em um banco de dados
    // Vamos apenas imprimir os dados para fins de exemplo
    if ($nome && $senha) {
        echo "<h3>Dados recebidos:</h3>";
        echo "<p>Nome: $nome</p>";
        echo "<p>Senha: $senha</p>";
        echo "<p>Valor escondido: $escondido</p>";
    }
}
?>

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Matricula de Aluno - Formulario</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
            padding: 30px;
        }

        h2 {
            text-align: center;
        }

        form {
            background-color: #ffffff;
            padding: 25px;
            border-radius: 10px;
            max-width: 400px;
            margin: auto;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        label {
            display: block;
            margin-top: 15px;
            font-weight: bold;
        }

        input[type="text"],
        input[type="password"] {
            width: 100%;
            padding: 8px;
            margin-top: 5px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }

        input[type="submit"] {
            margin-top: 20px;
            width: 100%;
            padding: 10px;
            background-color: #007bff;
            color: white;
            font-size: 16px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }

        input[type="submit"]:hover {
            background-color: #0056b3;
        }
    </style>
</head>
<body>
    <h2>login</h2>
    <form method="get" action="">
        <label for="nome">Nome Completo:</label>
        <input type="text" id="nome" name="nome" value="<?= isset($nome) ? $nome : '' ?>" required>

        <label for="senha">Senha:</label>
        <input type="password" id="senha" name="senha" value="<?= isset($senha) ? $senha : '' ?>" required>

        <input type="hidden" name="escondido" value="valorescondido">

        <input type="submit" value="Enviar Matricula">
    </form>
</body>
</html>
