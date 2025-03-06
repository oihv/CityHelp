# CityHelp
CityHelp is a React Native project aimed at providing assistance and resources for city dwellers. This application helps users find nearby services, report issues, and stay informed about city events.

## Getting Started

### Prerequisites

- Node.js
- npm or yarn
- React Native CLI
- Android Studio or Xcode (for Android/iOS development)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/CityHelp.git
   ```
2. Navigate to the project directory:
   ```sh
   cd CityHelp
   ```
3. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```
4. Run the project:
   ```sh
   npx react-native run-android
   # or
   npx react-native run-ios
   ```

## Git Cheatsheet

### Cloning the repository
```sh
git clone https://github.com/yourusername/CityHelp.git
```

### Creating a new branch
```sh
git checkout -b new-branch-name
```

### Checking out an existing branch
```sh
git checkout branch-name
```

### Adding changes to staging
```sh
git add .
# "." means add all untracked, modified changes to be staged
```

### Committing changes
```sh
git commit -m "Your commit message"
```

### Pushing changes to remote
```sh
git push origin branch-name
```

### Pulling changes from remote
```sh
git pull origin branch-name
```

### Merging branches
```sh
git checkout target-branch
git merge source-branch
```

### Viewing commit history
```sh
git log
```

### Checking the status of your working directory
```sh
git status
# git status shows the status of changes as untracked, modified, or staged
```

### Stashing changes
```sh
git stash
# Temporarily saves your changes without comitting them, so we can savely
# check out other branch without being forced to commit unfinished work
```

### Restoring stashed changes
```sh
git stash apply
# Restore the stash, and remove it from the stash list
```

## Contributing

1. Create your feature branch (`git checkout -b feature/feature-name`).
2. Commit your changes (`git commit -m 'Add some feature'`).
3. Push to the branch (`git push origin feature/feature-name`).
4. Open a pull request.

