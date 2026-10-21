# Rota Map — entrega

Maquete executável do aplicativo: fluxo de telas e layout completos, sem comunicação
com backend. Os dados exibidos são fictícios e ficam em `rota-map/constants/denuncias.ts`.

## Arquivos

| Arquivo | Descrição |
| --- | --- |
| `RotaMap-v1.0.0.apk` | Aplicativo Android instalável (80,8 MB) |

A apresentação de slides e o roteiro não são versionados — ficam nesta mesma
pasta no computador de quem apresenta e são entregues à parte.

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
