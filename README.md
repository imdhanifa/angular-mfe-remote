# angular-mfe-remote

**An Angular Micro Frontend Remote application using Module Federation.**

This project serves as a **remote micro frontend** that can be dynamically loaded into an Angular host application using **Module Federation**, enabling **independent deployment, scalability, and modular feature delivery**.

---

## 🚀 Features

✅ Angular 19/20 compatible  
✅ Webpack Module Federation  
✅ Exposes standalone modules/components to host  
✅ Supports independent deployments  
✅ Ideal for feature-based team development  
✅ Ready for production pipelines

---

## 🛠️ Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/imdhanifa/angular-mfe-remote.git
cd angular-mfe-remote
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Run the remote locally

```bash
ng serve --port 4201
```

The remote will be available at:

[http://localhost:4201](http://localhost:4201)

---

## 🌐 Configuring the Remote

### 1️⃣ Exposing Modules

In your `webpack.config.js`:
```js
exposes: {
    './Module': './src/app/remote/remote.module.ts',
},
```

### 2️⃣ Ensure Remote Entry

Your `ModuleFederationPlugin` configuration will generate `remoteEntry.js` at:
```
http://localhost:4201/remoteEntry.js
```

This URL should be used in your host application's configuration:
```js
remotes: {
    mfe1: 'mfe1@http://localhost:4201/remoteEntry.js'
}
```

### 3️⃣ Build Exposed Modules

In your `remote.module.ts`, export the desired components or modules:
```ts
@NgModule({
  declarations: [YourComponent],
  imports: [CommonModule, RouterModule.forChild([{ path: '', component: YourComponent }])]
})
export class RemoteModule {}
```

---

## 🚦 Building for Production

To build for deployment:
```bash
ng build --configuration production
```
Deploy the `dist/` folder contents to your hosting server.

---

## 🪲 Troubleshooting

- Ensure **host and remote use compatible Angular versions**.
- Validate the `remoteEntry.js` URL is accessible from your host.
- Use browser developer tools to ensure `remoteEntry.js` loads correctly.
- Verify **CORS** configurations on your server.
- Use `ng serve --port 4201` to run locally with the correct port configuration.

---

## 🤝 Contributing

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature`.
3. Commit your changes: `git commit -m "Add your feature"`.
4. Push to your fork: `git push origin feature/your-feature`.
5. Submit a Pull Request for review.

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---

## 📞 Contact

For issues or enhancements, please open an issue on [GitHub Issues](https://github.com/imdhanifa/angular-mfe-remote/issues).
