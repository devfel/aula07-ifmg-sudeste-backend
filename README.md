<p align="center">
  <a href="https://devfel.com/" rel="noopener">
 <img  src="https://devfel.com/imgs/devfel-logo-01.JPG" alt="DevFel"></a>
</p>

# 🖧 Gerenciador de Inventário de Rede 🖥️

Esta aplicação backend foi desenvolvida como parte da Aula 7 da disciplina de Protocolos de Redes de Computadores, com o intuito de proporcionar uma experiência prática sobre o funcionamento e a aplicação dos protocolos HTTP no desenvolvimento de aplicações web. O projeto simula um sistema de gerenciamento de inventário de componentes de rede, onde os alunos podem aplicar conceitos aprendidos em sala de aula para adicionar, visualizar, atualizar e deletar dispositivos de rede, como switches, roteadores e firewalls, através de requisições HTTP.

Nesta aula específica, o foco é explorar os métodos HTTP — GET, POST, PUT e DELETE — e entender como eles são usados na comunicação entre o cliente (navegador) e o servidor. Além disso, discutimos o papel dos cabeçalhos HTTP e dos códigos de status, fundamentais para o desenvolvimento de APIs RESTful eficientes. Este projeto serve como um exemplo concreto de como esses protocolos são implementados na prática, oferecendo aos alunos uma oportunidade de aprimorar suas habilidades de programação e compreensão dos fundamentos da internet.

## 🌟 Funcionalidades

- Adicionar novos dispositivos ao inventário.
- Listar todos os dispositivos cadastrados, com opção de filtro por modelo.
- Atualizar informações de um dispositivo específico.
- Deletar um dispositivo do inventário.

## ⚙️ Instalação e Configuração

1. **Clone o Repositório**:
   Primeiro, clone este repositório para a sua máquina local:

   ```bash
   git clone https://seu-repositorio-aqui.git
   ```

2. **Navegue até o Diretório**:

   ```bash
   cd aula07-ifmg-sudeste-backend
   ```

3. **Instale as Dependências**:
   Você precisará ter o Node.js instalado em sua máquina. Após isso, instale as dependências do projeto:
   ```bash
   npm install
   ```

## 🚀 Iniciando o Projeto

Para iniciar o servidor backend, execute o seguinte comando no terminal dentro do diretório do projeto:

```bash
npm run dev
```

O servidor estará rodando em `http://localhost:3333`.

## 📖 Exemplos de Uso

- **Listando Dispositivos**:
  Para ver a lista de todos os dispositivos, faça uma requisição GET para `http://localhost:3333/devices`.
- **Listando Dispositivos Usando Filtros**:
  Você pode filtrar os dispositivos por modelo incluindo um parâmetro de query `model`. Por exemplo, para listar todos os dispositivos que tenham no modelo o nome Cisco, a URL seria: `http://localhost:3333/devices?model=Cisco`. Você pode procurar outras partes no meio do nome do modelo.

- **Listando Dispositivo por ID**:
  Para buscar um dispositivo específico pelo seu ID, utilize o parâmetro de rota (route params) :id na URL da sua requisição GET. Por exemplo, para buscar um dispositivo com o ID "d925ee66-667d-41d2-ab82-6d0c2b045ecf", a URL seria: `http://localhost:3333/devices/d925ee66-667d-41d2-ab82-6d0c2b045ec`.

- **Adicionando um Novo Dispositivo**:
  Para adicionar um novo dispositivo ao inventário, faça uma requisição POST para `/devices` com os dados do dispositivo no corpo (body) da requisição em formato JSON. O ID é gerado automaticamente devido nossa implementação.
  Exemplo:  
  {
  "type": "firewall",
  "model": "Fortinet FortiGate 100E",
  "serial_number": "FGT123456789",
  "mac_address": "08:5B:0E:7E:8A:99",
  "firmware_version": "v6.2.3 build1066",
  "purchase_date": "2019-09-10",
  "location": "Filial - Sala Segura"
  }

  **ATENÇÃO: as rotas GET podem ser visualizadas pelo navegador, mas para realizar requisições POST, PUT e DELETE, é necessário utilizar um cliente HTTP, como o Insomnia ou Postman.**

## 🔧 Tecnologias Utilizadas

- **Node.js**: Uma plataforma de desenvolvimento JavaScript para o lado do servidor.
- **Express**: Um framework para aplicativos web para Node.js, desenhado para construir APIs RESTful de maneira rápida e fácil.
- **UUIDv4**: Uma biblioteca para gerar IDs únicos para os dispositivos no inventário.

## 📂 Estrutura de Diretórios

- `src/`: Contém o código-fonte do projeto.
  - `index.js`: Script principal do servidor backend.
- `package.json`: Arquivo de configuração do projeto, incluindo dependências e scripts.

## 🚀 Exercício

Este projeto é uma excelente oportunidade para praticar e aprimorar suas habilidades de desenvolvimento backend e conhecimento sobre o protocolo HTTP. Para levar este projeto ao próximo nível, convidamos você a realizar o seguinte exercício:

### Objetivos:

1. **Busca Insensível a Maiúsculas e Minúsculas**:

   - Modifique a rota de listagem de dispositivos para permitir a busca por modelo de dispositivo independentemente de maiúsculas ou minúsculas, tornando a filtragem mais flexível.

2. **Filtragem Avançada**:

   - Expandir a funcionalidade de filtragem para permitir o uso de outros campos além de modelo, como tipo, número de série, endereço MAC, versão do firmware, data de compra e localização. Isso permitirá consultas mais detalhadas e personalizadas ao inventário.

3. **Atualização de Dispositivos**:

   - Implemente uma rota que permita atualizar todas as informações de um dispositivo específico, identificado por seu ID. Isso inclui ser capaz de modificar o tipo, modelo, número de série, endereço MAC, versão do firmware, data de compra e localização de um dispositivo.

4. **Deletar Dispositivo**:
   - Adicione uma rota que permita a remoção de um dispositivo específico do inventário, identificado por seu ID. Essa funcionalidade é crucial para manter o inventário atualizado com as informações corretas.

### Orientações:

- Faça uma cópia do projeto e trabalhe em sua própria versão.
- Teste suas alterações cuidadosamente para garantir que as novas funcionalidades estejam funcionando conforme o esperado.
- Preste atenção especial à organização do código e à legibilidade, pois isso facilitará a manutenção e futuras atualizações.

Este exercício reforçará seu conhecimento em Javascript, Node.js e Express, além de é claro, reforçar também conceitos importantes de protocolos de rede, o uso de APIs, rotas, métodos HTTP, e manipulação de dados. Boa sorte!

## 📜 Licença

Este projeto está licenciado sob a Licença MIT.
