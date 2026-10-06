# Arena das Camisas — configuração do Supabase

A URL e a chave publicável já estão configuradas em `supabase-config.js`.

## 1. Banco
No Supabase, abra **SQL Editor → New query**, cole todo o conteúdo de `supabase-schema.sql` e clique em **Run**.

## 2. Auth por e-mail
Em **Authentication → Providers → Email**, deixe Email habilitado.

## 3. URLs
Em **Authentication → URL Configuration**, defina a URL do seu site publicado como **Site URL** e adicione a mesma origem nas **Redirect URLs**.

Exemplo de desenvolvimento com servidor local:
`http://localhost:5500/**`

Exemplo de produção:
`https://SEU-DOMINIO.com/**`

## 4. Teste
- Abra `register.html`.
- Cadastre nome, e-mail e senha.
- Se a confirmação de e-mail estiver ativa, confirme o e-mail recebido.
- Entre em `login.html`.
- No site, Favoritos e Comprar passam a exigir uma sessão autenticada.

## Segurança
A chave `sb_publishable_...` é apropriada para uso no navegador. Nunca coloque `service_role` ou qualquer chave secreta no frontend.
