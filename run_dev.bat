set NODE_OPTIONS=--openssl-legacy-provider
npm run "docs:dev"

@REM node --max_old_space_size=102400 ./node_modules/vuepress/cli.js build docs