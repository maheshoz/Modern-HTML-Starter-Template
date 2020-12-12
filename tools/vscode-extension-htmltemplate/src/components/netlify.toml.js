export default `
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "sameorigin"
    X-Content-Type-Options = "nosniff"
    Content-Security-Policy = "frame-ancestors 'self'"
    X-XSS-Protection = "1; mode=block"
    Referrer-Policy = "strict-origin"
    Permissions-Policy = "camera=(), geolocation=(), microphone=()"
    Cache-Control = "max-age=31536000"
    Link = '''
    </public/css/style.css>; rel=preload; as=style, \
    </public/css/modules/footer.css>; rel=preload; as=style, \
    </public/css/modules/header.css>; rel=preload; as=style, \
    </public/css/modules/loader.css>; rel=preload; as=style, \
    </public/css/modules/main.css>; rel=preload; as=style, \
    </public/script.js>; rel=preload; as=script, \
    </public/js/modules/create-timer.js>; rel=preload; as=script, \
    </public/js/modules/loader.js>; rel=preload; as=script, \
    </public/js/assets/assets.js>; rel=preload; as=script'''
`
