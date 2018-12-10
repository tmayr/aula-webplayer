## Aula Webplayer

### Install Instructions

```
git clone git://github.com/tmayr/aula-webplayer
yarn
yarn run dev
```

### Usage

```
# listing files
curl http://127.0.0.1:3000/api/v1/storage

# uploading files
curl -F 'file=@(mp3file)' http://127.0.0.1:3000/api/v1/storage
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

#### 40 minutes, Sunday, December 9

- Upload/List are now working
- Deleted methods that were never gonna get used (download/stream)
- Added Mutter, Nodemon and Cors dependancies
- Added a stream-test.html to see if files play from S3 (copy-paste from examples on the web)
- Removed root index.js, packages scripts are now run through workspaces

### Possible improvements

- Missing tons of real functionality still
- Need to finish the signatures of now-playing (still not well thought, do we even need it in the backend?)
- Missing production scripts/deployment strategy
