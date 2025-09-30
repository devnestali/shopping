# 🛒 Shopping

Shopping is a simple app developed in React Native with Expo, designed for managing grocery lists. Featuring an intuitive interface, it allows users to quickly add items, organizing them into two sections: pending and purchased. Users can mark items as completed, remove them individually, or clear the entire list. Lightweight and compatible with Android and iOS, it works offline, ensuring practicality and efficiency for users of all ages.

## 🤖 PROTOTYPE

![ShoppingProto](https://github.com/user-attachments/assets/7e67121c-a19b-44a8-a2c2-cb28440bcb4e)

## 📒 Features

- **TypeScript**: Provides static typing and modern JavaScript features for safer and scalable development.
- **React**: Javascript library for building fast, component-based UIs with a virtual DOM.
- **React Native**: A framework for building mobile apps using Javascript and React, enabling cross-platform development for iOS and Android with a single codebase.
- **@react-native-async-storage/async-storage**: Asynchronous, unencrypted key-value storage for React Native apps, supporting Android, iOS, Web, macOS, and Windows with simple APIs for data persistence.
- **Expo**: A framework and platform for building React Native apps, simplifying development with tools, libraries and services for rapid prototyping and development.

## 📇 Main Features
- **Home Pagge:** The unique page for this app is located here (`src/app/Home`).
- **Components:** Components used around the app is placed here(`src/components`).
- **Assets:** All logos are located on this folder (`src/assets`)
- **Storage:** Services to handle the storage methods are placed on this folder(`src/storage`)
- **Types:** Types that facilitate use throughout the application are located here(`src/types`)
- **Main file:** The main file is located here(`index.ts`)

## 🛠️ Run the Project

- Before using this app, it's highly recommended to install the latest versions of [Node](https://nodejs.org/), [NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) and [ExpoGo](https://expo.dev/go) on your mobile device. Make sure to follow all the installation and configuration steps provided by their official documentation.

# 🛠️ Configuration

  - To install the node modules package, run the code bellow:
  ```bash
    npm install
  ```

  - To run the project in your machine, run the code bellow that will run 'npx expo start':
  ```bash
    npm run dev
  ```

  - After that, scan the QRCode in your terminal with the ExpoGo app and the app will be running ✅

## 🗂️ Key Files & Directories
- Entrypoint: `index.ts`
- Page: `src/app/Home`
- Components: `src/components`
- Assets: `src/assets`
- Types: `src/types`
- Storage: `src/storage`

## 📂 Folder Structure

```
src/
  app/
    Home/
      index.tsx
      styles.ts
  assets/
  components/
    Button/
    Filter/
    Input/
    Item/
    StatusIcon/
  storage/
    itemsStorage.ts
  types/
    FilterStatus.ts
index.ts
tsconfig.json
```

## 🚀 License

**[@devnestali]('https://github.com/devnestali') - Software Engineering and FullStack Developer**



All rights reserved by **[devnestali]('https://github.com/devnestali')**
