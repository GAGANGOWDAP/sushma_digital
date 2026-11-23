with open("fixed_css_rule.css", "r", encoding="utf-8") as f:
    css = f.read()

html = f"""<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
{css}
body {{ margin: 0; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; }}
.hero-section {{
  min-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 80px 20px;
  border-bottom: 1px solid #E2E6EC;
}}
.content {{
  position: relative;
  z-index: 10;
  max-width: 700px;
}}
.badge {{
  color: #D92F26;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.22em;
  margin-bottom: 8px;
  display: block;
}}
h1 {{
  color: #142C45;
  font-family: Georgia, serif;
  font-size: 48px;
  margin: 8px 0 16px;
  font-weight: normal;
}}
p {{
  color: #475569;
  font-size: 15px;
  line-height: 1.6;
}}
</style>
</head>
<body>
<div class="hero-section hero-triangular-pattern">
  <div class="content">
    <span class="badge">Sushma Digital Studio</span>
    <h1>Our Services</h1>
    <p>21+ years of photography & live production excellence in Bangalore — covering weddings, live broadcasts, LED displays & aerial drone visuals.</p>
  </div>
</div>
</body>
</html>"""

with open("preview_test_hero.html", "w", encoding="utf-8") as f:
    f.write(html)

print("Saved preview_test_hero.html with fixed rule")
