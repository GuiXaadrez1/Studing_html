<?php
session_start();

if (isset($_POST["nome"]) && isset($_POST["senha"])) {
    $_SESSION["username"] = $_POST["nome"];
    $_SESSION["password"] = $_POST["senha"];
}

// não esqueça de usar print_r para debugar código

// Agora só tenta consultar o banco se os dados estiverem na sessão
if (isset($_SESSION["username"]) && isset($_SESSION["password"])) {
    $conn = pg_connect("host=localhost dbname=produtos user=postgres password=123456");

    $resultado = pg_query($conn, "SELECT * FROM usuario WHERE username = '".$_SESSION["username"]."' AND password = '".$_SESSION["password"]."'");

    if ($resultado && pg_num_rows($resultado) > 0) {
        while ($linha = pg_fetch_assoc($resultado)) {
            // echo "Nome: " . $linha['nome'] . "<br>";
        }
    } else {
        header("Location: login.php?msgerro=deu ruim!");
        exit();
    }
} else {
    // Redireciona se os dados não estão na sessão
    header("Location: login.php?msgerro=campos ausentes");
    exit();
}

/*
session_start(); // Inicia a sessão

// Atualiza a sessão 'nome' se ela já estiver definida
if (isset($_SESSION["nome"])) {
    $_SESSION["nome"] = $_POST["nome"];
}

// Atualiza a sessão 'senha' se o POST['senha'] estiver definido
if (isset($_POST["senha"])) {
    $_SESSION["senha"] = $_POST["senha"];
    print_r($_SESSION["senha"] = $_POST["senha"]);
}

// Define a tentativa se ainda não estiver definida
if (!isset($_SESSION["tentativa"])) {
    $_SESSION["tentativa"] = $_GET["tentativa"];
}

# permite conexão com o banco de dados
$conn = pg_connect("host=localhost dbname=produtos user=postgres password=123456");
if (!$conn) {
    echo "Erro na conexão com o banco de dados.";
}

$resultado = pg_query($conn, "SELECT * FROM usuario WHERE username = '".$_SESSION["username"]."' AND password = '".$_SESSION["password"]."'");

if ($resultado && pg_num_rows($resultado) > 0) {
    while ($linha = pg_fetch_assoc($resultado)) {
        // echo "Nome: " . $linha['nome'] . "<br>";
    }
} else {
    //header("Location: login.php?msgerro=deu ruim!");
    exit(); // Importante: interrompe o script após o redirecionamento
}


/*
$query = "INSERT INTO usuarios (nome, email) VALUES ('Carlos', 'carlos@email.com')";
$resultado = pg_query($conn, $query);
if ($resultado) {
    echo "Registro inserido com sucesso!";
} else {
    echo "Erro ao inserir registro.";
}*/

/*
$query = "UPDATE usuarios SET email = 'novoemail@email.com' WHERE nome = 'Carlos'";
$resultado = pg_query($conn, $query);
if ($resultado) {
    echo "Registro atualizado com sucesso!";
} else {
    echo "Erro ao atualizar registro.";
}*/

/*
pg_close($conn);
*/



?>