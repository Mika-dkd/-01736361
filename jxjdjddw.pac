import fetch from 'node-fetch';
import createHttpsProxyAgent from 'https-proxy-agent';

const username = 'bbbb-bbbb';
const password = 'wop1112';
const country = 'US';
const proxy = `pr.oxylabs.io:7777`;

const agent = createHttpsProxyAgent(`http://${'bbbb'}-cc-${'bbbb'}:${'wop1112'}@${'pr.oxylabs.io:7777'}`);

const response = await fetch('https://ip.oxylabs.io/location', {
    method: 'get',
        agent: agent,
        });

        console.log(await response.text());