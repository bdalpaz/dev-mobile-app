# Rota Map — entrega

Maquete executável do aplicativo: fluxo de telas e layout completos, sem comunicação
com backend. Os dados exibidos são fictícios e ficam em `rota-map/constants/denuncias.ts`.

## Arquivos

Esta pasta não é versionada: o APK, os slides e o roteiro ficam no computador
de quem apresenta e são entregues à parte. O repositório guarda o código-fonte,
que é o que muda a cada commit.

| Arquivo | Descrição |
| --- | --- |
| `RotaMap-v1.0.0.apk` | Aplicativo Android instalável (80,8 MB) |
| `RotaMap-apresentacao.pdf` | Apresentação em 10 slides, pronta para projeção |
| `RotaMap-apresentacao.pptx` | Mesma apresentação em formato editável |
| `ROTEIRO-APRESENTACAO.txt` | Divisão das falas entre as quatro pessoas |

Para gerar o APK de novo a partir do código:

```bash
cd rota-map
npx expo prebuild --platform android
cd android && ./gradlew assembleRelease
```

O arquivo sai em `android/app/build/outputs/apk/release/`.

### O build não roda na pasta do projeto

O caminho atual tem acento (`Área de Trabalho`) e o `fs.cpSync` do Node 24.6 no
Windows **não copia nada e não dá erro** quando o destino tem caractere não-ASCII.
O `prebuild` cria `android/` vazia e a falha só aparece depois, como
`AssertionError: Project file "MainApplication" does not exist in android project` —
que aponta para o lugar errado e não tem nada a ver com o Expo.

Copie o projeto para um caminho só com ASCII e rode os comandos acima de lá:

```bash
robocopy "<projeto>\rota-map" C:\rota-map-build /E /XD node_modules .expo android ios
cd C:\rota-map-build
npm ci
```

O Gradle precisa ainda de duas variáveis de ambiente:

```bash
JAVA_HOME=C:\Program Files\Java\jdk-17      # o java do PATH é o 25, que não serve
ANDROID_HOME=C:\Users\<usuário>\AppData\Local\Android\Sdk
```

Mover o projeto para fora da Área de Trabalho, ou usar outra versão do Node,
resolve na origem e dispensa a cópia.

## Instalar no celular

1. Transferir o arquivo `.apk` para o aparelho.
2. Autorizar a instalação de fontes desconhecidas quando o Android pedir.
3. Abrir o **Rota Map** e percorrer as telas.

Pacote: `com.rotamap.app` · versão 1.0.0 · Android 7.0 (API 24) ou superior.

## Rodar o código-fonte

```bash
cd rota-map
npm install
npx expo start
```

Expo SDK 54 · React Native 0.81 · TypeScript · Expo Router 6.

## As 8 telas

`login` · `cadastro` · `mapa` · `nova denúncia` · `protocolo` · `minhas denúncias`
· `detalhe da denúncia` · `perfil`

A abertura do app redireciona para o login; depois de entrar, as abas
**Mapa · Denúncias · Perfil** ficam sempre disponíveis.
