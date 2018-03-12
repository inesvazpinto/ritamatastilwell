const mix = require('laravel-mix');

mix.js('src/scripts/app.js', 'public/scripts')
   .sass('src/styles/app.scss', 'public/styles');
