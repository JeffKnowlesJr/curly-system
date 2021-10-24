module.exports = {
  presets: [
    '@babel/preset-env',
    ['@babel/preset-react', { runtime: 'automatic' }] // runtime automatic setting allows for JSX without importing react
  ],
  plugins: ['@babel/plugin-syntax-jsx']
}
