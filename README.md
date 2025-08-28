# Inicializando serviços para teste

## Requisitos

Para a execução do projeto, é necessário que o usuário possua acesso aos arquivos do repositório (clonando o mesmo).

Há a possibilidade de executar o presente projeto via **Docker**, ou **NodeJS**. Abaixo, estão as versões recomendadas de ambas as ferramentas:

- **NodeJS**: É recomendado que o usuário possua o `node^22.17` - embora `node^18.2` deva executar com sucesso, também
- **Docker**: É recomendado que o usuário possua o `docker^28.3.3`.

## Informações sobre serviçoes

Os serviçoes iniciam por padrão nas portas:
- 3001 (back-end)
- 3000 (front-end)

## NodeJS

1. Acessar pasta do serviço de back (a partir da raiz do projeto):

```
cd seazone-tech-serverside
```

2. Inicializar serviço em modo Dev:

```
npm start
# Ou
npm run start
```

3. Acessar pasta do serviço de front (a partir da raiz do projeto):

```
cd seazone-tech-front
```

4. Criar arquivo `.env` a partir de `.env.example`
```
cp ./.env.example ./.env
```

5. Inicializar serviço em modo Dev:

```
npm run dev
```

## Docker

1. Acessar pasta do serviço de front (a partir da raiz do projeto):

```
cd seazone-tech-front
```

2. Criar arquivo `.env` a partir de `.env.example`
```
cp ./.env.example ./.env
```

3. Retornar à raiz do projeto
```
cd ..
```

4. Inicializar serviços via docker:

```
docker compose up
```

# Decisões técnicas / Dívidas técnicas

## Utilização de Shadcn

Devido ao tempo curto, foi decidido por utilizar a biblioteca de componentes [shadcn](https://ui.shadcn.com/). Essa oferece uma vasta galeria de componentes facilmente personalizáveis; e é extremamente fácil de adicionar a um projeto NextJS.

O único ponto negativo do uso do Shadcn é que ele tende a influenciar de forma relevante no design do sistema.

Apesar da sua flexibilidade, principalmente em cenários onde existe pouco tempo (como no caso atual), não convém a realização de alterações nas estilizações padrões oferecidas pela biblioteca.

De qualquer maneira, a estética padrão dos componentes é, no mínimo, agradável. Portanto, deduziu-se que a falta de customização nos componentes não ofereceria danos que justificassem o abandono da agilidade alcançada.

## Utilização de tailwind

Devido ao tempo limitado, preferiu-se pela utilização do framework de estilização [tailwind](https://tailwindcss.com/). Esse oferece classes de estilização "pré-montadas", e um motor de estilização de fácil personalização.

O framework oferece grande agilidade, permitindo que quase toda a estilização seja realizada dentro das próprias tags de elementos e componentes.

No entanto, a utilização do tailwind em um projeto com uma fase de planejamento extremamente curta (onde não foi realizada a "componentização" adequada da interface, com estratégias como o atomic design) gera uma dívida técnica. Isso porque não existe um local de fácil acesso para manutenção das estilizações, e nem um conjunto reduzido e padronizado de componentes - reutilizados ao redor das páginas produzidas. Essa dívida técnica causa uma dificuldade na manutenção da aplicação, no entanto, na escala do presente projeto, deduziu-se que não haveriam grandes prejuízos.

## Arquitetura em camadas

Buscou-se realizar alguma separação das camadas, dentro da aplicação desenvolvida. Em `service`, buscou-se concentrar os componentes responsáveis pela comunicação com o mundo exterior (serverside). Em certo grau, buscou-se utilizar *ports* e *adapters*. No entanto, devido ao tempo limitado, e pressa em produzir o sistema de maneira a atender aos requisitos apresentados, a arquitetura não se apresenta tão robusta.

Não utilizou-se *feature functions* para medir o quanto os padrões desejados foram perdidos. No entanto, deduz-se que eles foram mantidos de forma suficiente para não afetar negativamente atividades de manutenção no sistema. Mas, com certeza, existe algum nível de degradação, que deveria ser tratado em futuras iterações.

Outro ponto é que o desenvolvedor (eu, Diogo) não trabalhou tanto com Next. Por isso, é possível que o formato da arquitetura pudesse ser alterado para outro estilo mais adequado (como um MVVM, por exemplo - ou algo similar ao VIPER, e outras "clean architectures").

# Trabalhos futuros / que seriam realizados com mais tempo

Conforme apresentado na seção anterior, algumas dívidas técnicas foram assumidas devido ao limitado tempo oferecido para a realização do sistema. Ações que deveriam ser realizadas, caso houvesse mais tempo, são:

- Realizar utilização de um system design personalizado para o sistema
- Realizar re-estilização de componentes shadcn para que fossem mais adequados ao domínio (ou realização de componentes personalizados)
- Organizar componentes de maneira a facilitar a manutenção do projeto (padronizar melhor nomenclatura de diretórios; quebrar mais ainda componentes - seguindo um padrão semelhante ao atomic design)
- Realizar descrição do estilo arquitetural atual, e alterá-lo para lidar melhor com necessidades do domínio & facilitar a manutenção
- Adicionar *fitness functions* para verificar arquitetura
- Adicionar testes unitários em unidades lógicas
- Adicionar testes end-to-end em casos de uso crítico (no caso, apenas pesquisar e realizar reserva - com variações de caminho feliz e caminho com exceções)
- Adicionar elementos visuais como mapas para seleção de localização para melhor UX.
- Melhorar icon e manifest da aplicação
- Adicionar uma identidade visual mais clara (header/footer)
- Aproveitar melhor caching e server components do Next

Vale dizer, também, que o máximo de experiência com o framework `Next` que tive foram algumas brincadeiras. Fazer algo mais "a sério" em pouco tempo foi desafiador. Com mais um ou dois dias para estudar a ferramenta, definitivamente o resultado seria mais robusto e agradável.
