import 'dotenv/config'
import { createMCPClient } from '@ai-sdk/mcp'
import { google } from '@ai-sdk/google'
import { generateText, stepCountIs } from 'ai'

const client = await createMCPClient({
  transport: {
    type: 'http',
    url: process.env.SANITY_MCP_URL,
    headers: { Authorization: `Bearer ${process.env.SANITY_API_TOKEN}` },
  },
})

try {
  const tools = await client.tools()

  const result = await generateText({
    model: google('gemini-3.8-flash'),
    tools,
    stopWhen: stepCountIs(6),
    prompt: `You have tools to read a Sanity content graph. 
Find the document of type "method". List its title, and the titles of its stages in order. 
Use the tools to read the actual content, do not guess.`,
  })

  console.log('\n--- Agent output ---\n')
  console.log(result.text)
} finally {
  await client.close()
}
