# unreal-chat 

Realtime Chat application with a global realtime chat room!

### The Stack
- React with Typescript and Vite.
- React Router
- [Mantine](https://mantine.dev/) as the React UI Library.
- Tabler Icons React as the React Icon Library.
- Appwrite as Backend
- [Recoil](https://recoiljs.org/) for managing state.

### Getting Started

- Install Appwrite using docker, follow [this](https://appwrite.io/docs/installation) guide.
- Create a new project.
- Add a new collection with the following attributes:
  <img height=500 src="https://user-images.githubusercontent.com/76873719/170837044-f564f8b8-9143-45f5-a5ea-c3e54c6a21f9.png"/>
- Copy the `collection id` from collection settings.
- Copy the `project id` and `api endpoint` from project settings.
- Register a new web app and `localhost` as one of the hostname.
  <img height=500 src="https://user-images.githubusercontent.com/76873719/170837199-fe5577b3-a777-40f7-9b80-9df1af4bc50e.png" />

- Run the react app using `npm run dev` or `yarn dev` after installing the dependencies.
- Register and login with an email and password combination and you're good to go!

### What I learned?
- Authentication and Session management with appwrite.
- Appwrite Database Subscription
- State Management in react with Recoil.
- Using React context to create a single globale instance of Appwrite SDK.

### Limitations
- Managing user sessions with localstorage which isn't ideal.
- Only limited to first 100 messages and doesn't show after that.
- Limited to a single global room.
- Appwrite API Keys are at a risk of exposure.
