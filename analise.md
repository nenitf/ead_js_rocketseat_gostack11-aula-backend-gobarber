# Analise

## Funcionalidades

> Análises que o Diego fez foram com base na interface pronta!

### Recuperação de senha

**RF**

- O usuário deve poder recuperar sua senha informando o seu e-mail;
- O usupario deve receber um e-mail com instruções de recuperação de senha;
- O usuário deve poder resetar sua senha;

**RNF**

- Utilizar mailtrap para testar envios em ambiente de dev;
- Utilizar Amazon SES para envios em produção;
- O envio de e-mails deve acontecer em segundo plano (background job);

**RN**

- O link enviado por e-mail para resetar a senha deve expirar em 2h;
- O usuário precisa confirmar a nova senha ao resetar sua senha;

### Atualização do perfil

**RF**

- O usuário deve poder atualizar seu nome, e-mail, senha;

**RN**

- O usuário não pode alterar seu e-mail para um e-mail já utilizado;
- Para atualizar sua senha, o usuário deve informar a senha antiga;
- Para atualizar sua senha, o usuário precisa confirmar a nova senha;

### Painel do prestador

**RF**

- O usuário deve poder listar seus agendamentos de um dia específico;
- O prestador deve receber uma notificação sempre que houver um novo agendamento;
- O prestador deve poder visualizar as notificações não lidas;

**RNF**

- Os agendamentos do prestador no dia devem ser armazenados em cache;
- As notificações do prestador devem ser armazenadas no MongoDB;
- As notificações do prestador devem ser enviadas em tempo-real utilizando Socket.io.

**RN**

- A notificação deve ter um status de lida ou não lida para que o prestador possa controlar;

### Agendamento de serviços

**RF**

- O usuário deve poder listar todos prestadores de serviço cadastrados;
- O usuário deve poder listar os dias de um mês com pelo menos um horário disponível de um prestador;
- O usuário deve poder listar horários disponíveis em um dia específico de um prestador;
- O usuário deve poder realizar um novo agendamento com um prestador;

**RNF**

- A listagem de prestadores deve ser armazenada em cache;

**RN**

- Cada agendamento deve durar 1h exatamente;
- Os agendamentos devem estar disponíveis entre 8h às 18h (primeiro às 8h, último às 17h);
- O usuário não pode agendar em um horário já ocupado;
- O usuário não pode agendar em um horário que já passou;
- O usuário não pode agendar serviços consigo mesmo;

## Aulão

### Processo comum
1. Idealização
2. Pesquisa
3. UX (processos/experiência da aplicação)
4. UI (interface)

### Funcionalidades

- Macros (telas)
- Micros (dentro de macros)

### Glossário

- RF: Requisitos Funcionais. Funcionalidades diretamente ligadas ao Macro.
  - *Usuário vai poder recuperar a senha informando seu e-mail*
- RNF: Requisitos não funcionais. Obrigações não ligadas diretamente a regra de negócio da aplicação. Mais técnicas.
  - *O envio de e-mails precisa ser feito através da biblioteca nodemailer*
- RN: Regras de Negócio

### Dicas

- Construir sempre o MVP primeiro e incrementar com os *feedbacks*
