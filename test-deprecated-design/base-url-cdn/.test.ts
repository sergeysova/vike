import { testRun } from '../../examples/base-url/.testRun'

testRun('npm run start', { baseAssets: 'http://localhost:8080/cdn/', baseServer: '/' })
