export {}

const BASE_URL = process.env.TEST_BASE_URL

test('smoketest', async () => {
  page.on('console', msg => {
    expect(msg.type()).not.toEqual('error')
  })

  await page.goto(`${BASE_URL}/blog`)
  await page.$('text="benjaminjohnson.me"')
  const blogLinks = await page.$$('[href^="/blog/"]')
  expect(blogLinks.length).toBeGreaterThan(0)
})
