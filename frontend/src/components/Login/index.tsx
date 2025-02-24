import { useState } from "react";
import { Container, Form, Title, Input, Button, ErrorMessage, Link } from "./styles";
import { useNavigate } from "react-router-dom"; // Hook para navegação

type LoginProps = {
  onLoginSuccess: () => void; // Função que será chamada ao fazer login
};

const Login = ({ onLoginSuccess }: LoginProps) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isRegistering, setIsRegistering] = useState(false); // Estado para alternar entre login e registro
  const [name, setName] = useState(""); // Campo nome para o registro
  const [confirmPassword, setConfirmPassword] = useState(""); // Confirmar senha
  const navigate = useNavigate(); // Hook para navegação

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (isRegistering) {
      // Verifica se os campos do registro estão preenchidos corretamente
      if (!name || !username || !password || password !== confirmPassword) {
        setError("Por favor, preencha todos os campos corretamente.");
        return;
      }
      console.log("Cadastro realizado:", { name, username, password });
      setError("");

      // Após o cadastro, chama a função onLoginSuccess para redirecionar para a página principal
      onLoginSuccess();
      navigate("/home");
    } else {
      // Verifica se os campos de login estão preenchidos
      if (!username || !password) {
        setError("Por favor, preencha todos os campos.");
        return;
      }
      console.log("Dados de Login:", { username, password });
      setError("");

      // Após o login, chama a função onLoginSuccess para redirecionar para a página principal
      onLoginSuccess();
      navigate("/home");
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Title>{isRegistering ? "Registrar-se" : "Acesse o sistema"}</Title>

        {/* Exibe o campo de Nome somente no formulário de Registro */}
        {isRegistering && (
          <Input
            type="text"
            placeholder="Nome"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        )}

        <Input
          type="email"
          placeholder="E-mail"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Senha"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Exibe o campo de Confirmar Senha somente no formulário de Registro */}
        {isRegistering && (
          <Input
            type="password"
            placeholder="Confirmar Senha"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        )}

        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Button type="submit">{isRegistering ? "Registrar" : "Login"}</Button>

        <Link href="#" onClick={() => setIsRegistering(!isRegistering)}>
          {isRegistering ? "Já tem uma conta? Faça login" : "Não tem uma conta? Registre-se"}
        </Link>
      </Form>
    </Container>
  );
};

export default Login;
