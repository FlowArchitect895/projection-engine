import 'dotenv/config'
import { createMCPClient } from '@ai-sdk/mcp'

const url = process.env.SANITY_MCP_URL
const token = process.env.SANITY_API_TOKEN

console.log('Connecting to:', url)

const client = await createMCPClient({
  transport: {
    type: 'http',
    url,
    headers: { Authorization: `Bearer ${token}` },
  },
})

try {
  const tools = await client.tools()
  console.log('\nConnected. Tools the endpoint exposes:')
  console.log(Object.keys(tools))
} finally {
  await client.close()
  console.log('\nDone.')
}
