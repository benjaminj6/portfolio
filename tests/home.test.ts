export {}

test('smoketest', async () => {
  await page.goto('https://www.benjaminjohnson.me')

  await page.waitForSelector('text="Benjamin Johnson"')
  await page.$('text="benjaminjohnson.me"')

  const navigationLinks = [
    ['github', 'https://github.com/benjamminj'],
    ['blog', '/blog'],
    ['linkedin', 'https://www.linkedin.com/in/benjamin-d-johnson/'],
    ['contact', 'mailto:benjamin.d.johnson@icloud.com']
  ]

  for (const [linkText, linkHref] of navigationLinks) {
    const $link = await page.$(`text="${linkText}"`)
    const href = await $link.getAttribute('href')
    expect(href).toEqual(linkHref)
  }
})
