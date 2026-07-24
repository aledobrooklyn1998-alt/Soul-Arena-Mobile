# Soul Arena Mobile

Jogo de batalhas multiplayer em tempo real featuring personagens de Bleach, otimizado para mobile com React Native e Expo.

## 🚀 Features

- ⚡ Multiplayer em tempo real (WebSocket)
- 📱 iOS e Android (React Native)
- 🎮 Batalhas turn-based
- 🏆 Leaderboard global
- 🔐 Autenticação segura
- 📊 Sistema de ELO ranking
- 🎨 Design visual idêntico ao web

## 📋 Requisitos

- Node.js 18+
- Expo CLI: `npm install -g expo-cli`

## 🛠️ Instalação

```bash
git clone https://github.com/aledobrooklyn1998-alt/Soul-Arena-Mobile.git
cd Soul-Arena-Mobile
npm install
cp .env.example .env
npm start
```

## 📱 Rodar

```bash
npm run android      # Android
npm run ios          # iOS
npm run web          # Web
```

## 🏗️ Estrutura

```
src/
├── components/     # Componentes reutilizáveis
├── screens/        # Telas principais
├── services/       # API e WebSocket
├── store/          # Redux
├── types/          # TypeScript
└── constants/      # Tema e cores
```

## 🔌 Configuração Backend

Edite `.env`:

```env
REACT_APP_API_URL=https://seu-backend
REACT_APP_WS_URL=wss://seu-websocket
```

## 📄 Licença

ISC
