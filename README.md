## Aula Webplayer

### Install Instructions

```
git clone git://github.com/tmayr/aula-webplayer
yarn
npm run dev
curl http://127.0.0.1:3000/api/v1/storage
```

### Worklog:

#### 25 minutes, Sunday, December 2

- Basic monorepo structure
- Added a few packages
- Server directory outline
- Added vscode settings

#### 35 mins, Monday, December 3

- Storage interface defs
- Added lib/presence.js file and renamed live routes to presence
- Polished route name/definitions and imported handlers
- Playing around with making everything restful
- Configured AWS Account
- Decided to remove Flydrive due to missing methods (listing)
- Added dotenv injection and importing webplayer-server on root/index.js

#### 10 minutes, Tuesday, December 4

- Storage interface defs v2
- Renamed Presence to NowPlaying
- Updated readme

### Possible improvements

- Development experience isn't quite good, need to add server reloads at the very least
- Missing tons of real functionality still
- Could use better naming for routes/libs (specially the storage routes)
- Need to finish the signatures of now-playing (still not well thought)
- Missing middlewares to upload big files
- Missing production scripts/deployment strategy
