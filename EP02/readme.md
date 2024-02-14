# Namaste React Episode 2

# npm

-- It is not stands for node package manager. It manages packages.

# Bundler 

-- It is basically bundle our app package properly so it can be shift to production. Example:- Parcel, webpack etc.

# command which is need to install package and react in our app are :-

1. npm init
2. npm install -D parcel
3. npx parcel index.html
4. npm install react
5. npm install react-dom

- when we run this command few files is added.

1. Package.json => Package.json is a configration for npm. It keeps track of approx version of dependency.

- There are two type of dependency:- 1. Dev Dependency => It menas it generakky required for development face.

                                     2. Normal Dependency => It is normally used for production use.

2. Package.lock.json => It trackes exact version of the dependency.

3. Node-modules => This contains all code that we fetch from npm. It is a kind of database where all packages are exist.

# Parcel is a Beast 

- Dev build
- Local server
- HMR => Hot Module Replacement (Automatic refersing)
- Using file watching algorithm which is written in C++.
- Caching for faster builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent hashing
- Code splitting
- Differential Bundling => To support older browser
- Diagnostic => To present error in better way
- Error Handking
- Https 
- Tree shaking => remove unused code

# Q. We installed parcel only then why there are so many files aong with parcel ?

- Ans:- We installed parcel beacuse we need it, its our apps dependency and parcel has its own dependency and they had there own thats why there is so many files and this is known as  transitive dependency.

# Q. We don't put node_modules,  .parcel-cache, dist in github. Why?

- Ans:- If we have package.json and package.lock.json then we can re-generate this files again thats why we dont put this file in github. If we delete this files then we can generate this file by simple commmand which is npm install.

- ~ (Tilde) it will use in dependency version if we want to automatically update the major version of dependency.
- ^ (Carate) it will use in dependency version if we want to automatically update the minor version of dependency.