import { Client } from 'pg';

export async function getClient() {
    const client = new Client("postgres://pnfesmtg:XR36e3ujVEsfI1IxlmaQgEKbr94091Oh@bubble.db.elephantsql.com/pnfesmtg");
    await client.connect();
    return client;
}