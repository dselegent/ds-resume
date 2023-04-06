module.exports = {
  '*.{css,md,json}': ['prettier --write'],
  '*.ts?(x)': ['eslint', 'prettier --write'],
  'package.json': 'npx sort-package-json',
}
