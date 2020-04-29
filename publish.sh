#!/bin/sh

npm run export
aws s3 sync ./__sapper__/export s3://softikon.eu --acl 'public-read' --delete
aws cloudfront create-invalidation --distribution-id E21H4B8W7S2MT5 --paths '/*'