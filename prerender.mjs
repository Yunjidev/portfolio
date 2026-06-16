import { createServer } from 'vite'
import { readFileSync, writeFileSync } from 'fs'

async function prerender() {
  const vite = await createServer({
    server: { middlewareMode: true },
    appType: 'custom',
    ssr: { noExternal: ['framer-motion', 'lucide-react', 'react-icons'] },
  })

  try {
    const { render } = await vite.ssrLoadModule('/src/entry-server.jsx')
    const appHtml = render()

    const template = readFileSync('./dist/index.html', 'utf-8')
    const result = template.replace(
      '<div id="root"></div>',
      `<div id="root">${appHtml}</div>`
    )
    writeFileSync('./dist/index.html', result)
    console.log('✅ Prerender OK — contenu injecté dans dist/index.html')
  } catch (err) {
    console.error('❌ Prerender échoué :', err)
    process.exit(1)
  } finally {
    await vite.close()
  }
}

prerender()
